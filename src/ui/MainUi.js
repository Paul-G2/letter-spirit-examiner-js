// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    
    
/**
 * @classdesc
 * This is the top level container for the LetterSpirit UI elements.
 * 
 */
Namespace.MainUi = class {

    /**
     * @constructor
     * 
     * @param {App} app - The LetterSpirit App instance.
     */
    constructor(app) 
    { 
        this.app = app;
        this.rafId = null;

        // Create the UI elements
        this.topbarUi      = new Namespace.TopbarUi(this, document.getElementById('topbar_area'));
        this.inputUi       = new Namespace.InputUi(this, document.getElementById('input_area'));
        this.workspaceUi   = new Namespace.WorkspaceUi(this, document.getElementById('workspace_area'));
        this.activationsUi = new Namespace.ActivationsUi(this, document.getElementById('activations_area'));
        this.coderackUi    = new Namespace.CoderackUi(this, document.getElementById('coderack_area')); 

        this.uiList = [this.topbarUi, this.inputUi, this.workspaceUi, this.activationsUi, this.coderackUi];

        // Listen for resize events
        const resizeFunc = this._onResize.bind(this);
        window.addEventListener('resize', resizeFunc);
        window.addEventListener('orientationchange', resizeFunc);

        // Do an initial rendering, after the DOM settles.
        setTimeout( resizeFunc, 250 );
        setTimeout( resizeFunc, 1500 );    
    }


    /**
     * Handler for resize events.
     * @private
     *
     */
    _onResize()
    { 
        if ( this.rafId ) { window.cancelAnimationFrame(this.rafId); }

        this.rafId = window.requestAnimationFrame( () => {          
            this.uiList.forEach( ui => ui._onResize() );
            this.rafId = null;
        });
    }

    /**
     * Re-renders all the UI elements.
     * @private
     * 
     */
    redraw()
    {
        this.uiList.forEach( ui => ui.redraw() );
    }

};


})( window.LetterSpirit = window.LetterSpirit || {} );