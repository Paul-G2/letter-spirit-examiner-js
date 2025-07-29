// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";


/**
 * @classdesc
 * This codelet breaks a part into smaller parts.
 * 
 */
 Namespace.Codelets.TopDownBreaker = class extends Namespace.Codelets.CodeletBase
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
        super('top-down-breaker', urgency, generation);
        this.part = args[0];
    }


    /**
     * Runs the codelet.
     */
    run(app)
    {
        // Just run a breaker codelet
        (new Namespace.Codelets.Breaker(this.urgency, this.gen, [this.part])).run(app);
        app.workspace.codeletTitleText = 'Top-down-breaker codelet from generation ' + this.gen;    
    }

};

})( window.LetterSpirit = window.LetterSpirit || {} );