// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    
    
/**
 * @classdesc
 * This class draws the input widgets.
 * 
 */
Namespace.InputUi = class {

    /**
     * @constructor
     * 
     * @param {MainUi} mainUi - The parent Ui.
     * @param {HTMLElement} parentDiv - The html div that hosts this ui.
     */
    constructor(mainUi, parentDiv) 
    { 
        this.mainUi = mainUi;
        this.parentDiv = parentDiv;
        this.letterGrid = null;
        this.app = mainUi.app;
        
        this.title = "Input";
        this.drawParams = {};
        this.bkgndColor = '#b3ddcc';
        
        this._buildUi();
    }


    /**
     * Creates the ui elements.
     * @private
     * 
     */
    _buildUi()
    {
        const UiUtils = Namespace.UiUtils;
        
        // Create the main div
        this.mainDiv = UiUtils.CreateElement('div', 
            'input-div', this.parentDiv, {top:'0%', left:'0%', width:'100%', height:'100%',
            border:'1px solid black', borderLeft:'none', background:this.bkgndColor}); 

        this.titleSpan = UiUtils.CreateElement('span', 'input-title-span', this.mainDiv, 
            {top:'0%', height:'3%', left:'0%', width:'100%', display:'flex', alignItems:'center', justifyContent:'center',
            color:'#606060', fontFamily:'Arial', fontWeight:'bold', fontStyle:'italic', fontSize:'1.9vh'}); 
        this.titleSpan.innerHTML = 'Input';
        this.titleSpan.className += " noselect";
    
        this.letterDiv = UiUtils.CreateElement('div', 'input-letter-div', this.mainDiv, 
            {top:'6%', left:'15%', right:'15%', height: '49%', background:this.bkgndColor}); 
    
        this.letterGrid = new Namespace.LetterGrid(
            this.letterDiv, {borderCode:'none', bkgndColor:(this.bkgndColor || '#ffdead')});

        this.ctrlsDiv = UiUtils.CreateElement('div', 'ctrls-div', this.mainDiv, 
            {top:'74%', left:'2%', right:'2%', height: '16%', background:this.bkgndColor, border:'4px solid #98d1ba'}); 

        this.randoBtn = UiUtils.CreateElement('button', 'rando_btn', this.mainDiv, 
            {width:'50%', height:'4%', top:'55%', left:'25%', border:'3px solid #98d1ba', borderRadius:'12px', 
                fontSize:'1.1vw', color:'#707070',  background:this.bkgndColor});
        this.randoBtn.innerHTML = 'random';
        this.randoBtn.onclick = this._onRandoBtnClick.bind(this);
        this.randoBtn.className += " noselect";

        this.goPauseBtn = UiUtils.CreateElement('button', 'go_btn', this.ctrlsDiv, 
            {width:'30%', height:'30%', top:'10%', left:'4%', border:0, background:this.bkgndColor});
        this.goPauseBtn.innerHTML = '<img class="button-img" src="./btn_play.png" border="0" width="100% height="auto">';
        this.goPauseBtn.onclick = this._onGoPauseBtnClick.bind(this);
        this.goPauseBtn.className += " noselect";

        this.stepBtn = UiUtils.CreateElement('button', 'step_btn', this.ctrlsDiv, 
            {width:'30%', height:'30%', top:'10%', left:'35%', border:0, background:this.bkgndColor});
        this.stepBtn.innerHTML = '<img class="button-img" src="./btn_step.png" border="0" width="100% height="auto">';
        this.stepBtn.onclick = this._onStepBtnClick.bind(this);
        this.stepBtn.className += " noselect";

        this.resetBtn = UiUtils.CreateElement('button', 'reset_btn', this.ctrlsDiv, 
            {width:'30%', height:'30%', top:'10%', left:'66%', border:0, background:this.bkgndColor});
        this.resetBtn.innerHTML = '<img class="button-img" src="./btn_reset.png" border="0" width="100% height="auto">';
        this.resetBtn.onclick = this._onResetBtnClick.bind(this);
        this.resetBtn.className += " noselect";

        this.speedSlider = UiUtils.CreateElement('input', 'speed_slider', this.ctrlsDiv, 
            {width:'86%', height:'24%', top:'55%', left:'7%',accentColor:'black'}, {type:'range', min:1, max:100, value:44});
        this.speedSlider.draggable = true;
        this.speedSlider.ondragstart = function(e) { e.preventDefault(); e.stopImmediatePropagation(); };
        this.speedSlider.oninput = this._onSpeedSliderChange.bind(this);
        this.speedSlider.className += " noselect";

        this.speedSliderLabel = UiUtils.CreateElement('span', 'speed-slider-label', this.ctrlsDiv, 
            {width:'100%', height:'24%', top:'75%', left:'0%', display:'flex', alignItems:'center', justifyContent:'center', 
            fontStyle:'italic', fontWeight:'bold', fontFamily:'Arial', fontSize:'2vh', color:'black'});

        this.speedSliderLabel.innerHTML = 'Speed';
        this.speedSliderLabel.className += " noselect";
        this.mainDiv.className += " noselect";

        // Message area
        this.messageDiv = UiUtils.CreateElement('div','message-div', this.mainDiv,
            {top:'92%', left:'0%', width:'100%', height:'8%', display:'flex', alignItems:'center', justifyContent:'center', 
            fontFamily:'serif', fontWeight:'bold', fontStyle: 'italic', fontSize: '3vmin', color:'#d20000'}); 
        this.messageDiv.className += " noselect";   
    }


    /**
     * Displays a temporary message beneath the input widgets.
     * 
     */ 
    displayMessage(msg)
    {
        this.messageDiv.innerHTML = msg;
        setTimeout(() => {this.messageDiv.innerHTML = '';}, 1800);
    }


    /**
     * Returns the currently displayed GridLetter.
     * 
     */
    getInputGridLetter()
    {
        return new Namespace.GridLetter(this.letterGrid.onQuanta);
    }


    /**
     * Updates the UI.
     * 
     */
    redraw()
    {
        // Enable/disable buttons
        const setEnabled = function(ctrl, enabled) { ctrl.disabled = !enabled;  ctrl.style.opacity = enabled ? '1.0' : '0.4'; };
        [this.stepBtn, this.goPauseBtn, this.resetBtn].forEach( ctrl => setEnabled(ctrl, true) );
        switch (this.app.state) {
            case 'ready':
                setEnabled(this.randoBtn, true);
                this.letterGrid.setEditable(true);
                this.goPauseBtn.children[0].src = './btn_play.png'; 
                break;
            case 'paused':
                setEnabled(this.randoBtn, true);
                this.letterGrid.setEditable(true);
                this.goPauseBtn.children[0].src = './btn_play.png'; 
                break;
            case 'running':
                setEnabled(this.stepBtn, false);
                setEnabled(this.resetBtn, false);
                setEnabled(this.randoBtn, false);
                this.letterGrid.setEditable(false);
                this.goPauseBtn.children[0].src = './btn_pause.png'; 
                break;
            default:
                break;
        }

        this.letterGrid.redraw();
        const dp = this.letterGrid.drawParams;
        this.randoBtn.style.top = 6 + 49*(0.5 + 3*dp.ygap/dp.canvHeight) + 1 + '%';
        this.randoBtn.style.fontSize = 0.27*dp.ygap/window.devicePixelRatio + 'px';

        const buttonImgs = this.mainDiv.getElementsByClassName("button-img");
        const landscapey = (buttonImgs[0].parentNode.clientHeight < buttonImgs[0].parentNode.clientWidth);
        for (let img of buttonImgs) {               
            img.style.width  = landscapey ? 'auto' : '100%';
            img.style.height = landscapey ? '100%' : 'auto';
        }
    }


    /**
     * Handler for resize events.
     * @private
     * 
     */
    _onResize()
    {    
        this.redraw();
    }


    /**
     * Handler for clicks on the random button.
     * @private
     * 
     */
    _onRandoBtnClick()
    {
        const fonts = [Namespace.Fonts.BenzeneLeft, Namespace.Fonts.BenzeneRight, Namespace.Fonts.Boat, 
            Namespace.Fonts.Close, Namespace.Fonts.HintFour, Namespace.Fonts.House, Namespace.Fonts.HuntFour, 
            Namespace.Fonts.SabreTooth, Namespace.Fonts.Shorts, Namespace.Fonts.Slant, Namespace.Fonts.Slash, 
            Namespace.Fonts.Snout, Namespace.Fonts.StandardSquare];
        const font = this.app.randGen.choice(fonts);
        this.letterGrid.setOnQuanta( this.app.randGen.choice(Object.values(font)) );
        this.redraw();
    }


    /**
     * Handler for go button clicks.
     * @private
     * 
     */
    _onGoPauseBtnClick()
    {
        const app = this.app;
        if (app.state == 'running') {
            app.pause();
        }
        else {
            if (app.setInputGridLetter( this.getInputGridLetter() )) {
                if (app.state == 'ready') {
                    app.start();
                }
                else if (app.state == 'paused') {
                    app.resume();
                }
            }     
        }   
    }


    /**
     * Handler for single-step button clicks.
     * @private
     * 
     */
    _onStepBtnClick()
    {
        if ( this.app.setInputGridLetter(this.getInputGridLetter()) ) {
            this.app.singleStep();
        }
    }


    /**
     * Handler for reset button clicks.
     * @private
     * 
     */
    _onResetBtnClick()
    {
        if ( (this.app.state != 'running') && this.app.setInputGridLetter(this.getInputGridLetter()) ) {
            this.app.reset();
        }
    }


    /**
     * Handler for speed-slider changes.
     * @private
     */
    _onSpeedSliderChange()
    {
        const sv = this.speedSlider.value;
        const delay = (sv == this.speedSlider.max) ? 0 : 1000/(1 + sv*sv/100);
        this.app.setStepDelay(delay);
    }
};


})( window.LetterSpirit = window.LetterSpirit || {} );
