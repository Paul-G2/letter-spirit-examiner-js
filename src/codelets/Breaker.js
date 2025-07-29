// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Params = Namespace.Params;
    const Utils = Namespace.Utils;
    const Part = Namespace.Part;
    const Joint = Namespace.Joint;

/**
 * @classdesc
 * This codelet gets bound to a part with too many tips (more than two),
 * or to a part that does not activate any roles. It breaks the part 
 * into smaller parts.
 * 
 */
 Namespace.Codelets.Breaker = class extends Namespace.Codelets.CodeletBase
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
        super('breaker', urgency, generation);
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
        wksp.codeletTitleText = 'Breaker codelet from generation ' + this.gen; 
        wksp.codeletMessage1 = wksp.codeletMessage2 = '';    
        
        // Check whether the part is still around
        const part = this.part;
        const otherParts = wksp.parts.filter(p => !p.hasSameJointsAs(part));
        if (!wksp.containsPart(part)) { 
            wksp.codeletMessage1 = "Part is no longer around ... >>>fizzle<<<";
            return;
        }

        // Break the part
        wksp.codeletMessage1 = "Breaking part " + part.qidString(); 
        let newParts = Namespace.Codelets.Breaker.ReglueSortAndCrack(part.jointList, wksp);
        newParts.forEach(p => p.addLabel(new Namespace.Label('**whine', 25)));

        Utils.Dampen(wksp);
        wksp.parts = [...newParts, ...otherParts];
        wksp.app.coderack.post(newParts.length, 'looker', Params.MediumUrgency, this.gen+1);        
        wksp.codeletMessage2 = "Workspace re-set and lookers spun";
    }


    /**
     * Performs the actual breaking.
     * @private
     */
    static ReglueSortAndCrack(inputJointList, wksp)
    {
        const inputQids = [... new Set(inputJointList.flatMap(jt => jt.getQids()) )];

        // Helper function
        const breakFunc = function(jointList) {
            let parts = Utils.MakePartsFromJoints( jointList.map(jtg => jtg.joint) );
            inputQids.forEach(qid => { // Make any leftover quanta into singlet parts
                if (!parts.some(p => p.hasQid(qid))) { parts.push(new Part([new Joint(qid)])); } 
            });

            if (jointList.length == 0) { return parts; }
 
            // Lose joints that have no glue, and keep going until we have at least two parts
            if ((jointList[0].glue == 0) || (parts.length < 2))  { 
                return breakFunc(jointList.slice(1));
            } else { 
                return parts; 
            } 
        };

        
        // Get the non-singlet joints, sorted by glue
        let modJointList = inputJointList.filter(jt => !jt.isSinglet()).map(jt => { 
            const wkspJoint = wksp.getUpdatedJoint(jt);
            const glue = wkspJoint ? wkspJoint.glue : wksp.app.randGen.nSidedDie(100);
            return {joint:(wkspJoint || jt), glue:glue};
        });
        modJointList.sort((a,b) => a.glue - b.glue);

        if (modJointList.length == 0) {
            return [new Part(inputJointList)];
        } else {
            return breakFunc(modJointList.slice(1));
        }
    }
};

})( window.LetterSpirit = window.LetterSpirit || {} );