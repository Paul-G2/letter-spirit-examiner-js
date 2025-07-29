// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Params = Namespace.Params;
    const Utils = Namespace.Utils;

/**
 * @classdesc
 * This codelet "shakes" the current grid letter, breaking it randomly into smaller parts.
 * 
 */
 Namespace.Codelets.Shaker = class extends Namespace.Codelets.CodeletBase
 {
    /**
     * @constructor
     * 
     * @param {Number} urgency - The urgency of the codelet.
     * @param {Number} generation - The generation that the codelet belongs to.
     */
    constructor(urgency, generation) 
    { 
        super('shaker', urgency, generation);
    }


    /**
     * Runs the codelet.
     */
    async run(app)
    {
        const [wksp, antData] = [app.workspace, app.workspace.glueAntData];

        // Display codelet info
        wksp.infoBarText = 'Shaking...';
        wksp.codeletTitleText = 'Shaker codelet from generation ' + this.gen;  
        wksp.codeletMessage1 = wksp.codeletMessage2 = '';
        app.ui?.workspaceUi.redrawHeader();

        // Initialize
        const targetNumParts = 1 + Math.round(wksp.inputGridLetter.numQuanta / Params.ShakePartSize);
        const targetNumJoints = Math.max(0, wksp.joints.length - targetNumParts);
        let dissolvedGlue = 0;
        
        // Maybe draw a shaking animation
        if (Params.AnimateShaker) { 
            app.ui?.workspaceUi.shakeGridLetter(); 
            await new Promise(r => setTimeout(function() { app.ui?.workspaceUi.stopShaking(); r(); }, 1000));
        }

        // Probabilistically dissolve glue in the joints
        while (wksp.joints.length > targetNumJoints) {
            wksp.joints.forEach(joint => { 
                if (app.randGen.coinFlip(Params.SolventStrength)) {
                    const deltaGlue = Math.min(joint.glue, 1); 
                    joint.glue -= deltaGlue; 
                    dissolvedGlue += deltaGlue;
                }     
            });
            wksp.joints = wksp.joints.filter(joint => joint.glue > 0);
        }
        wksp.codeletMessage1 = `Glue: ${antData.totalGluePlaced - dissolvedGlue}`;

        // Make parts from the connected sets of quanta
        const joints = wksp.joints.toSorted((j1, j2) => j2.qidA - j1.qidA || j2.qidB - j1.qidB);
        wksp.parts = Utils.MakePartsFromJoints(joints);
        
        // Add unbonded single quanta as "singlet" parts
        const orphans = wksp.inputGridLetter.quantaIds.filter(qid => !wksp.parts.some(part => part.hasQid(qid)));
        orphans.forEach( orphan => wksp.parts.push(new Namespace.Part( [new Namespace.Joint(orphan)] )) );

        // Set initial whine values on the parts
        wksp.parts.forEach(part => { part.addLabel(new Namespace.Label('**whine', 20)); });
        
        // Begin recognizing
        app.coderack.post(Params.GestaltBatchSize, 'gestalt', Params.InitialGestaltCodeletUrgency, 1);
        app.coderack.post(2*wksp.parts.length, 'looker', Params.MediumUrgency, 3);
    }
   
};

})( window.LetterSpirit = window.LetterSpirit || {} );