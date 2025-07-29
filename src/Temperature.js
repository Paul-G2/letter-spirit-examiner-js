// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Params = Namespace.Params;


/**
 * @classdesc
 * The Temperature class keeps track of the current temperature.
 * 
 */
 Namespace.Temperature = class {

    /**
     * @constructor
     * 
     */
    constructor(app) 
    { 
        this.app = app;
        this.value = 100;
    }

    
    /**
     * Resets the temperature to its initial value.
     * 
     */
    reset()
    {
        this.value = 100;
    }


    /**
     * Computes the current temperature, which takes into account
     * the goodness of parts and the whole activations in the workspace.
     * 
     */
    update()
    {
        const wksp = this.app.workspace;

        const wkspGoodness = wksp.calcGoodness(); 
        const memCount = Object.values(wksp.wholeActivations).filter(val => val >= Params.WholeThreshold).length;
        const memGoodness = (memCount === 0) ? 0 : 100/memCount; 
         
        const currentTemp = this.value;
        const targetTemp = Math.abs(100 - (wkspGoodness + memGoodness)/2); 
        const diff = Math.abs(currentTemp - targetTemp);
        const newTemp = (targetTemp > currentTemp) ? (currentTemp + diff) : (currentTemp - diff);
        
        this.value = newTemp;
    }
};

})( window.LetterSpirit = window.LetterSpirit || {} );