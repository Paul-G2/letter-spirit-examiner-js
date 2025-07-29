// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";


/**
 * @classdesc
 * This class is used to report information to the console.
 * 
 */
 Namespace.Reporter = class {

    /**
     * @constructor
     * 
     */
    constructor() 
    { 
        this.errorsEnabled = true;
        this.warningsEnabled = true;
        this.infoEnabled = true;
        this.traceEnabled = false; 
        this.traceDetailsEnabled = false;
    }
  
       
    /**
     * Reports a trace message.
     *   
     * @param {String} msg - The message to be reported.
     */
    trace(msg)
    {
        if (this.traceEnabled) {
            console.info('Trace: ' + msg);
        }
    }       
    

    /**
     * Reports a trace-details message.
     *   
     * @param {String} msg - The message to be reported.
     */
    traceDetail(msg)
    {
        if (this.traceDetailsEnabled) {
            console.info('Trace*: ' + msg);
        }
    }       
    

    /**
     * Reports an informational message.
     * 
     * @param {String} msg - The message to be reported.
     */
    info(msg)
    {
        if (this.infoEnabled) {
            console.info('Info: ' + msg);
        }
    }       
    

    /**
     * Reports a warning message.
     *   
     * @param {String} msg - The message to be reported.
     */
    warn(msg)
    {
        if (this.warningsEnabled) {
            console.warn('Warning: ' + msg);
        }
    }    
    
       
    /**
     * Reports an error message.
     *   
     * @param {String} msg - The message to be reported.
     */
    error(msg)
    {
        if (this.errorsEnabled) {
            console.error('Error: ' + msg);
        }
    }    
    
 };


})( window.LetterSpirit = window.LetterSpirit || {} );