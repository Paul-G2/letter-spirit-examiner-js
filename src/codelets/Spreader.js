// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Params = Namespace.Params;
    

/**
 * @classdesc
 * This codelet spreads activation among wholes and roles. 
 * 
 */
 Namespace.Codelets.Spreader = class extends Namespace.Codelets.CodeletBase
 {
    /**
     * @constructor
     * 
     * @param {Number} urgency - The urgency of the codelet.
     * @param {Number} generation - The generation that the codelet belongs to.
     */
    constructor(urgency, generation) 
    { 
        super('spreader', urgency, generation);
    }


    /**
     * Runs the codelet.
     */
    run(app)
    {
        const [wksp, randGen]  =[app.workspace, app.randGen];

        // Display codelet info
        wksp.infoBarText = 'Recognizing...';
        wksp.codeletTitleText = 'Activation-spreader codelet from generation ' + this.gen; 
        wksp.codeletMessage1 = wksp.codeletMessage2 = '';  

        // Check whether all parts are sparked
        const allPartsSparked = wksp.parts.every(p => wksp.bindings.some(b => b.part.hasSameJointsAs(p)));
        if (allPartsSparked && (randGen.rand() <= 1/3)) {
            Namespace.Codelets.Sparker.DoSomething(randGen.choice(wksp.parts), this.gen, app);
        }

        // Calc updated role activations from their associated whole activations
        const roleActsBuffer = {};
        Object.values(Namespace.Roles).forEach(role => {
            const oldAct = wksp.roleActivations[role.name];
            const associatedWholes = Object.keys(role.norms.contact); 
            const newAct = Params.LinkWeight * Math.max(-1, ...associatedWholes.map(w => wksp.wholeActivations[w])); 
            roleActsBuffer[role.name] = Math.min(100, Math.max(-100, newAct + Math.min(40, oldAct)));
        });

        // Calc updated whole activations from their associated role activations
        const wholeActsBuffer = {};
        Object.values(Namespace.Wholes).forEach(whole => {
            const oldAct = wksp.wholeActivations[whole.name]; 
            const newAct = Params.LinkWeight * whole.roleSet.reduce((sum, r) => sum + wksp.roleActivations[r.name], 0) / whole.roleSet.length; 
            wholeActsBuffer[whole.name] = Math.min(100, Math.max(-100, newAct + Math.min(20, oldAct)));
        });

        // Transfer the buffered values to the workspace
        Object.keys(roleActsBuffer).forEach( r => wksp.roleActivations[r] = roleActsBuffer[r] ); 
        Object.keys(wholeActsBuffer).forEach( w => wksp.wholeActivations[w] = wholeActsBuffer[w] );
        
        wksp.rRoleCheckWholes();

    }
};

})( window.LetterSpirit = window.LetterSpirit || {} );