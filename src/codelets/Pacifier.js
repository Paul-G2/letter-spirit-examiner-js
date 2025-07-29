// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Knowledge = Namespace.Knowledge;
    const Params = Namespace.Params;
    const Utils = Namespace.Utils;


/**
 * @classdesc
 * This codelet probabilistically picks a whining part and tries to either combine it
 * with a neighboring part or add labels to it.
 * 
 */
 Namespace.Codelets.Pacifier = class extends Namespace.Codelets.CodeletBase
 {
    /**
     * @constructor
     * 
     * @param {Number} urgency - The urgency of the codelet.
     * @param {Number} generation - The generation that the codelet belongs to.
     */
    constructor(urgency, generation) 
    { 
        super('pacifier', urgency, generation);
    }


    /**
     * Runs the codelet.
     */
    run(app)
    {
        const [wksp, rack, randGen, gen] = [app.workspace, app.coderack, app.randGen, this.gen];
        const [Looker, Pacifier] = [Namespace.Codelets.Looker, Namespace.Codelets.Pacifier];

        // Display codelet info
        wksp.infoBarText = 'Recognizing...';
        wksp.codeletTitleText = 'Pacifier codelet from generation ' + gen; 
        wksp.codeletMessage1 = wksp.codeletMessage2 = '';    
        
        // Get whiners
        const whiners = wksp.parts.filter(p => p.hasLabel('**whine')); 
        if (whiners.length === 0) { 
            wksp.codeletMessage1 = 'There are no whiners ... >>>fizzle<<<';
            return;
        }

        // Pick a random whiner, weighted by whininess
        const crybaby = app.randGen.weightedChoice(whiners, whiners.map(p => p.getWhine()));
        if (crybaby && Looker.IsWeird(crybaby)) {
            rack.post(1, 'breaker', Params.HighUrgency, this.gen+1, [crybaby]); 
            wksp.codeletMessage1 = 'Whiny part is weird ... >>>fizzle<<<';
            return;
        } 

        // Get a neighbor of the crybaby, preferring small ones
        const [smallNeighbor, allNeighbors] = Pacifier.GetSmallNeighbor(crybaby, wksp);
        const neighbor = smallNeighbor ? randGen.choice([smallNeighbor, randGen.choice(allNeighbors)]) : null;
        const others = allNeighbors.filter(p => p != neighbor);
        
        // Decide whether to accept (and hence silence) the crybaby, or glom it with a neighboring part
        const crybabyPasses = crybaby ? Looker.InspectPart(crybaby, wksp.inputGridLetter, app.randGen) : false;
        if (crybabyPasses || !neighbor || !Pacifier.CombinePartsAndTest(crybaby, neighbor, others, wksp)) {
            // Add labeler codelets
            wksp.codeletMessage1 = (`${crybaby.qidString()} passed, adding labelers`);
            crybaby.removeLabel('**whine');
            crybaby.addLabel( new Namespace.Label('quanta', Utils.Linearize(crybaby.getQuantaIds(), app.randGen)) );
            rack.post(Params.LabelerBatchSize, 'labeler', Params.MediumUrgency, gen+1, [crybaby]);
        } else {            
            // Successfully glommed
            wksp.codeletMessage1 = `Glomming ${crybaby.qidString()} to neighbor ${neighbor.qidString()}`; 
            wksp.codeletMessage2 = 'Adding looker codelets';
            rack.post(2, 'looker', Params.MediumUrgency, gen+1);
            Utils.Dampen(wksp);
        }
    }


    /**
     * Finds a part's smallest neighbor, with some heuristic tie-breaking.
     * Returns a list of the form [smallest, [allNeighbors]] so that procesing can 
     * continue if smallest neighbor doesn't pan out.
     */
    static GetSmallNeighbor(crybaby, wksp)
    {
        if (!crybaby) { return [null, []]; }
        
        // Get all parts that are neighbors of crybaby
        const cbQids = crybaby.getQuantaIds();
        const neighboringQids = [ ...new Set(cbQids.flatMap(qid => Knowledge.QuantaNeighbors[qid])) ].filter(qid => !cbQids.includes(qid));  
        const allNeighbors = wksp.parts.filter(p => (p != crybaby) && p.getQuantaIds().some(q => neighboringQids.includes(q)));
        if (allNeighbors.length === 0) { return [null, []]; }

        // Find a smallest neighbor
        let smallestNbr = null;
        const minPartSize = allNeighbors.reduce((a,b) => Math.min(a, b.getQuantaIds().length), Number.MAX_SAFE_INTEGER);
        const smallestNbrs = allNeighbors.filter(p => p.getQuantaIds().length === minPartSize);
        if (smallestNbrs.length === 1) {
            smallestNbr = smallestNbrs[0];
        } 
        else { // Break ties by first looking at whininess    
            smallestNbr = wksp.app.randGen.choice( smallestNbrs.filter(p => p.hasLabel('**whine')) );
            if (!smallestNbr) { // If there are no whiners, look at goodness
                const minGoodness = smallestNbrs.reduce((a,b) => Math.min(a, wksp.calcPartGoodness(b)), Number.MAX_SAFE_INTEGER);
                smallestNbr = wksp.app.randGen.choice( smallestNbrs.filter(p => wksp.calcPartGoodness(p) === minGoodness) ); 
            }
        }
        return [smallestNbr, allNeighbors];
    }


    /**
     * Tries to combine two parts into a new, non-weird one.
     * 
     */
    static CombinePartsAndTest(partA, partB, fallbacks, wksp) 
    {
        const Joint = Namespace.Joint;
        const randGen = wksp.app.randGen;

        const qidsA = partA.getQuantaIds();
        let success = false;
        let fallbackIndex = -1;

        while (fallbackIndex < fallbacks.length) {
            const toGlom = (fallbackIndex < 0) ? partB : fallbacks[fallbackIndex];
            const qidsG = toGlom.getQuantaIds();
            const newJointCandidates = [];
            qidsA.forEach(qidA => {
                qidsG.forEach(qidG => {
                    if (Knowledge.QuantaNeighbors[qidA].includes(qidG)) { newJointCandidates.push(new Joint(qidA, qidG)); }
                });
            });
            if (newJointCandidates.length > 0) {
                const newJoint = randGen.choice(newJointCandidates);
                let newJointList = [...partA.jointList, ...toGlom.jointList, newJoint];
                if (newJointList.length > 1) { // Remove former singlets
                    const newJointQids = newJointList.flatMap(jt => [jt.qidA, jt.qidB]);
                    newJointList = newJointList.filter(jt => !jt.isSinglet() ||
                        newJointQids.indexOf(jt.qidA) === newJointQids.lastIndexOf(jt.qidA) ); 
                }
                const newPart = new Namespace.Part( newJointList, [new Namespace.Label('**whine',15)] );
                
                // Accept the new part only if it is not too weird
                if (newPart.numTips() <= 2) {
                    wksp.removePart(partA);
                    wksp.removePart(toGlom);
                    wksp.parts.push(newPart);
                    success = true; 
                    break; 
                }
            }
            fallbackIndex++;
        }
        return success;
    }

};

})( window.LetterSpirit = window.LetterSpirit || {} );