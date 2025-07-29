// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Params = Namespace.Params;


/**
 * @classdesc
 * This codelet checks a part chosen at random from the workspace to see if it 
 * has enough labels to justify sparking some activations.
 * 
 */
 Namespace.Codelets.LabelChecker = class extends Namespace.Codelets.CodeletBase
 {
    /**
     * @constructor
     * 
     * @param {Number} urgency - The urgency of the codelet.
     * @param {Number} generation - The generation that the codelet belongs to.
     * @param {Array} args - Arguments to pass to the codelet.
     */
    constructor(urgency, generation) 
    { 
        super('label-checker', urgency, generation);
    }


    /**
     * Runs the codelet.
     */
    run(app)
    {
        const [wksp, rack] = [app.workspace, app.coderack];

        // Display codelet info
        wksp.infoBarText = 'Recognizing...';
        wksp.codeletTitleText = 'Label-checker codelet from generation ' + this.gen; 
        wksp.codeletMessage1 = wksp.codeletMessage2 = '';    
        
        const part = app.randGen.choice(wksp.parts);

        let enoughLabels = Params.LabelTotal;
        if (part.numTips() == 0) { enoughLabels -= 2; }
        if (rack.numCodeletsRun >= Params.NumExamPhaseCodelets) { enoughLabels -= 1; }

        const urgency = 20 + (5 * (part.numLabels() - enoughLabels + 4));

        wksp.codeletMessage1 = `Checking part ${part.qidString()}`; 
        if (part.numLabels() >= enoughLabels) {
            wksp.codeletMessage2 = `Part passed inspection ... adding sparker.`;
            rack.post(1, 'sparker', urgency, this.gen+1, [part]);
        } else {
            wksp.codeletMessage2 = `Not enough labels ... >>>fizzle<<<`;
        }
    }
};

})( window.LetterSpirit = window.LetterSpirit || {} );