// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    Namespace.Codelets = Namespace.Codelets || {};


/**
 * @classdesc
 * This class provides a factory method for creating codelets.
 * 
 */
 Namespace.Codelets.CodeletFactory = class
 {
    /**
     * @constructor
     * 
     * @param {App} app - The LetterSpirit App instance.
     */
    constructor(app) 
    { 
        this.app = app;
    }


    /**
     * Creates a codelet given its name and constructor arguments.
     * 
     * @param {string} name - The name of the codelet.
     * @param {Number} urgency - The urgency of the codelet.
     * @param {Number} generation - The generation that the codelet belongs to. 
     * @param {Array} codeletArgs - Arguments to pass to the codelet.
     * 
     */
    create(name, urgency, generation, codeletArgs)
    {
        const ctorArgs = [urgency, generation, codeletArgs];

        let result = null;
        switch (name) 
        {
            case 'breaker':
                result = new Namespace.Codelets.Breaker(...ctorArgs);
                break;

            case 'gestalt':
                result = new Namespace.Codelets.Gestalt(...ctorArgs);
                break;

            case 'glue-ant':
                result = new Namespace.Codelets.GlueAnt(...ctorArgs);
                break;

            case 'label-checker':
                result = new Namespace.Codelets.LabelChecker(...ctorArgs);
                break;

            case 'labeler':
                result = new Namespace.Codelets.Labeler(...ctorArgs);
                break;

            case 'looker':
                result = new Namespace.Codelets.Looker(...ctorArgs);
                break;

            case 'pacifier':
                result = new Namespace.Codelets.Pacifier(...ctorArgs);
                break;
                    
            case 'shaker':
                result = new Namespace.Codelets.Shaker(...ctorArgs);
                break;    

            case 'sparker':
                result = new Namespace.Codelets.Sparker(...ctorArgs);
                break;    
        
            case 'spreader':
                result = new Namespace.Codelets.Spreader(...ctorArgs);
                break;    
            
            case 'top-down-breaker':
                result = new Namespace.Codelets.TopDownBreaker(...ctorArgs);
                break;    
                    
            case 'top-down-glommer':
                result = new Namespace.Codelets.TopDownGlommer(...ctorArgs);
                break;

            default:
                    throw new Error('Unknown codelet name: ' + name);
        }
        return result;
    }
};

})( window.LetterSpirit = window.LetterSpirit || {} );