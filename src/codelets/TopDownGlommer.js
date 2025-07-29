// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Knowledge = Namespace.Knowledge;
    const Params = Namespace.Params;
    const Utils = Namespace.Utils;


/**
 * @classdesc
 * This codelet attempts to combine a part with one of its neighboring parts.
 * 
 */
 Namespace.Codelets.TopDownGlommer = class extends Namespace.Codelets.CodeletBase
 {
    /**
     * @constructor
     * 
     * @param {Number} urgency - The urgency of the codelet.
     * @param {Number} generation - The generation that the codelet belongs to.
     * @param {Array} args - Arguments to pass to the codelet.
     */
    constructor(urgency, generation, args) 
    { 
        super('top-down-glommer', urgency, generation);
        this.part = args[0];
    }


    /**
     * Runs the codelet.
     */
    run(app)
    {
        // Display codelet info
        const wksp = app.workspace;
        wksp.infoBarText = 'Recognizing...';
        wksp.codeletTitleText = 'Top-down-glommer codelet from generation ' + this.gen; 
        wksp.codeletMessage1 = wksp.codeletMessage2 = '';    
        
        // Bail if the part is no longer around
        const part = wksp.getUpdatedPart(this.part);
        if (!part) {
            wksp.codeletMessage1 = "Part is no longer around ... >>>fizzle<<<";
            return; 
        }
        else {
            const partQids = part.getQuantaIds();
            const nbrQids = [ ...new Set(partQids.flatMap(qid => Knowledge.QuantaNeighbors[qid])) ].filter(qid => !partQids.includes(qid));  
            const nbrs = wksp.parts.filter(p => (p != part) && p.getQuantaIds().some(q => nbrQids.includes(q))); 
            const randNbr = app.randGen.choice(nbrs);
            const worst = app.randGen.weightedChoice(nbrs, nbrs.map(p => 100 - wksp.calcPartGoodness(p)));
            const nbr = app.randGen.choice([randNbr, worst]);
            
            if ((nbr !== null) && Namespace.Codelets.Pacifier.CombinePartsAndTest(part, nbr, [], wksp)) {
                wksp.codeletMessage1 = "Glomming " + part.qidString() + " to neighbor " + nbr.qidString();
                wksp.codeletMessage2 = "Adding looker codelets";
                app.coderack.post(2, 'looker', Params.MediumUrgency, this.gen+1);                
                Utils.Dampen(wksp);
            } 
            else {
                wksp.codeletMessage1 = "Nobody to glom to ... >>>fizzle<<<";
            }
        }
    }

};

})( window.LetterSpirit = window.LetterSpirit || {} );