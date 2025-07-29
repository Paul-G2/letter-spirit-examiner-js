// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    
    
/**
 * @classdesc
 * This class draws the title bar at the top of the screen.
 * 
 */
Namespace.TopbarUi = class {

    /**
     * @constructor
     * 
     * @param {MainUi} parentUi - The parent Ui.
     * @param {HTMLElement} parentDiv - The html div that hosts
     *  this ui.
     */
    constructor(parentUi, parentDiv) 
    { 
        this.parentUi = parentUi;
        this.parentDiv = parentDiv;

        this._buildUi(parentDiv);  
    }


    /**
     * Creates the ui elements.
     * @private
     * 
     */
    _buildUi()
    {
        const UiUtils = Namespace.UiUtils;

        this.mainDiv = UiUtils.CreateElement('div', 
            'topbar-div', this.parentDiv, 
            {position:'absolute', top:'0%', left:'0%', width:'100%', 
            height:'100%', background:'#bfcbdf'}
        );     
             
        // this.logoImg = UiUtils.CreateElement('img', 'logo', this.mainDiv, 
        //     {width:'auto', top:'12%', height:'76%', left:'1vh'}, {src:'./app_logo.png'}
        // );
        // this.logoImg.className += " noselect";

        this.titleSpan = UiUtils.CreateElement('span', 'title-span', 
            this.mainDiv, {top:'0%', height:'100%', left:'0%', width:'93%', 
            display:'flex', alignItems:'center', justifyContent:'center',
            color:'#404040', fontFamily:'Arial', fontWeight:'bold', 
            fontStyle:'italic', fontSize: '3.2vh'}
        ); 
        this.titleSpan.innerHTML = 'Letter Spirit Examiner';
        this.titleSpan.className += " noselect";

        this.helpBtn = UiUtils.CreateElement('button', 'help-btn',
            this.mainDiv, {top:'15%', height:'70%', right:'2%', width:'7vh',
            display:'flex', alignItems:'center', justifyContent:'center',
            color:'#404040', fontFamily:'Arial', fontWeight:'normal',
            fontSize: '2.5vh', background:'#dfdfdf', border:'1px solid #404040' }
        );
        this.helpBtn.innerHTML = '&nbsp;&nbsp;Help&nbsp;&nbsp;';
        this.helpBtn.className += " noselect";
        this.helpBtn.onclick = this._onHelpBtnClick.bind(this);

        this.helpDialog = new Namespace.HelpDialog(document.getElementById('app_area'));
    }


    /**
     * Redraws the ui.
     * @private
     * 
     */
    redraw()
    {
        // Nothing to do here
    }


    /**
     * Handler for resize events.
     * @private
     * 
     */
    _onResize()
    {    
        // Nothing to do here
    }


    /**
     * Handler for help-button clicks.
     * @private
     * 
     */
    _onHelpBtnClick()
    {    
        if (this.helpDialog.isShown()) {
            this.helpDialog.hide();
        }
        else {
            this.helpDialog.show();
        }
    }


};


})( window.LetterSpirit = window.LetterSpirit || {} );
