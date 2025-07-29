// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Params = Namespace.Params;

/**
 * @classdesc
 * This codelet updates the Whole-activations based on their gestalt scores.
 * 
 */
 Namespace.Codelets.Gestalt = class extends Namespace.Codelets.CodeletBase
 {
    /**
     * @constructor
     * 
     * @param {Number} urgency - The urgency of the codelet.
     * @param {Number} generation - The generation that the codelet belongs to.
     */
    constructor(urgency, generation) 
    { 
        super('gestalt', urgency, generation);
    }


    /**
     * Runs the codelet.
     * 
     */
    run(app)
    {
        // Display codelet info
        const wksp = app.workspace;
        wksp.infoBarText = 'Recognizing...';
        wksp.codeletTitleText = 'Gestalt codelet from generation ' + this.gen;  
        wksp.codeletMessage1 = 'Spinning activation-spreader';
        wksp.codeletMessage2 = '';

        // Update whole-activations
        Object.values(Namespace.Wholes).forEach(whole => { 
            const oldActivation = wksp.wholeActivations[whole.name];
            const categoryScore = wksp.inputLetterGestalts[whole.name[0]];
            const newActivation = Math.max(-100, Math.min(100, oldActivation + categoryScore));
            wksp.wholeActivations[whole.name] = newActivation; 
        }); 

        // Post an activation-spreader codelet
        app.coderack.post(1, 'spreader', Params.HighUrgency, this.gen+1);
    }
};

})( window.LetterSpirit = window.LetterSpirit || {} );