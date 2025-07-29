// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Params = Namespace.Params;
    const Knowledge = Namespace.Knowledge;
    const Utils = Namespace.Utils;


/**
 * @classdesc
 * This codelet picks a part at random and decides whether it's worth
 * labeling. If so, it posts some labeler codelets, otherwise it increases 
 * thw part's whine and posts a pacifier codelet.
 * 
 */
 Namespace.Codelets.Looker = class extends Namespace.Codelets.CodeletBase
 {
    /**
     * @constructor
     * 
     * @param {Number} urgency - The urgency of the codelet.
     * @param {Number} generation - The generation that the codelet belongs to.
     */
    constructor(urgency, generation) 
    { 
        super('looker', urgency, generation);
    }


    /**
     * Runs the codelet.
     */
    run(app)
    {
        const [wksp, rack] = [app.workspace, app.coderack];

        // Display codelet info
        wksp.infoBarText = 'Recognizing...';
        wksp.codeletTitleText = 'Looker codelet from generation ' + this.gen; 
        wksp.codeletMessage1 = wksp.codeletMessage2 = '';
        
        // Get a part at random, and check it's "linearizability"
        const part = app.randGen.choice(wksp.parts);
        const partIsWeird = Namespace.Codelets.Looker.IsWeird(part);
        const passes = Namespace.Codelets.Looker.InspectPart(part, wksp.inputGridLetter, app.randGen);
        
        if (partIsWeird) { 
            rack.post(1, 'breaker', Params.HighUrgency, this.gen+1, [part]); 
        }        
        if ((passes && !partIsWeird) || part.hasLabel('quanta')) 
        {
            // Mollify the whiny part, and add some labeler codelets (bound to the part) to the coderack
            if (part.hasLabel('**whine')) {
                wksp.codeletMessage1 = 'Part ' + part.qidString() + ' passed inspection. Adding labelers';
                part.removeLabel('**whine');
                part.addLabel( new Namespace.Label('quanta', Utils.Linearize(part.getQuantaIds(), app.randGen)) );
                rack.post(Params.LabelerBatchSize, 'labeler', Params.MediumUrgency, this.gen+1, [part]);
            } else {
                wksp.codeletMessage1 = 'Part ' + part.qidString() + ' is already labeled ... >>>fizzle<<<';
            }
        } 
        else {
            // Make an overlooked part more whiny
            wksp.codeletMessage1 = ('Bad part ' + part.qidString() + '... increasing whine and posting pacifier');
            const newWhine = part.getWhine() + Params.WhineIncrement;
            part.addLabel( new Namespace.Label('**whine', newWhine) );
            rack.post(1, 'pacifier', newWhine, this.gen+1);
        }    
    }

    
    /**
     * Checks whether a shape (a set of quanta) has forks, or more than 2 tips.
     *
     */
    static IsWeird(part) 
    {
        // Utility function, used below
        const neighborSortable = function(qids1, qids2) { 
            const tail1 = qids1[qids1.length - 1];
            const branches = qids2.filter(qid => Knowledge.QuantaNeighbors[tail1].includes(qid)); 
            const forkInRoad = (branches.length > 2) || ((branches.length === 2) && (qids1.length + qids2.length > 3) && 
                Knowledge.QuantaNeighbors[branches[1]].includes(branches[0]));
            if (forkInRoad) {
                return false;
            } else if (qids2.length === 0) {
                return true;
            } else {
                const head2 = branches[0];
                return neighborSortable([...qids1, head2], qids2.filter(qid => qid !== head2));
            }
        };

        const qids = part.getQuantaIds();
        const tips = Namespace.Utils.GetTips(qids);
        const startQid = (tips.length === 0) ? qids[0] : qids.find(qid => Namespace.Quanta[qid].pointIds.includes(tips[0]));
        return (tips.length > 2) ? true : !neighborSortable([startQid], qids.filter(qid => qid !== startQid));
    }


    /**
     * Decides whether a part is acceptable.
     *
     */
    static InspectPart(part, inputGridLetter, randGen) 
    {       
        return (part.numQuanta() > 2) || (part.numLabels() > 1) || 
            (4.5*(part.numLabels() + 1)/inputGridLetter.numQuanta > randGen.rand());
    }
};

})( window.LetterSpirit = window.LetterSpirit || {} );