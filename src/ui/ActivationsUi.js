// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    
    
/**
 * @classdesc
 * This class draws the role and whole activations.
 * 
 */
Namespace.ActivationsUi = class {

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
        this.app = mainUi.app;
        this.title = "Activations";
        this.nRows = 5;
        this.nCols = 16;
        this.drawParams = {};
        this.roleBkgndColor = '#fffbcc';
        this.wholeBkgndColor = '#fff9a8';
        this.posBlobColor = '#000070';
        this.negBlobColor = '#ff0000';
        this.titleColor = '#707070';
        
        this.mainDiv = Namespace.UiUtils.CreateElement('div', 
            'activations-div', this.parentDiv, {top:'0%', left:'0%', width:'100%', height:'100%',
            border:'1px solid black', background:this.roleBkgndColor}); 

        this.canvas = Namespace.UiUtils.CreateElement('canvas',
            'acts-canvas', this.parentDiv, {position:'absolute', margin:'0', 
            padding:'0', top:'0%', left:'0%', width:'100%', height:'100%', 
            border: '1px solid', background:this.roleBkgndColor}
        ); 

        this.nodeInfoList = 
            Object.values(Namespace.Roles).map(role => {return {id:role.name, shortName:role.shortName};} ).concat(
            Object.values(Namespace.Wholes).map(whole => {return {id:whole.name, shortName:whole.name};} ));
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
     * Updates the UI.
     * 
     */
    redraw()
    {
        const UiUtils = Namespace.UiUtils;
        const canvas = this.canvas;
        const ctx = canvas.getContext("2d");
        const drawLine = Namespace.UiUtils.DrawLine;
        const dp = this.drawParams;
        const roleActs = this.app.workspace.roleActivations;
        const wholeActs = this.app.workspace.wholeActivations;

        // Only if necessary, update the draw parameters
        if ( !UiUtils.RightsizeCanvas(canvas) ) { return; } 
        if ( UiUtils.NeedToRescale(this.drawParams, ctx) ) {
            if (!this._updateDrawParams(ctx)) { return; }
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the title 
        ctx.font = dp.titleFont;
        ctx.textAlign = "center";
        ctx.fillStyle = this.titleColor;
        ctx.fillText(this.title, dp.titleX, dp.titleY);
        
        // Draw the blobs and their labels
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'black'; 
        ctx.textAlign = "center";
        
        for (let r=0; r<this.nRows; r++) {
            for (let c=(r==0 ? dp.initialSkip : 0); c<this.nCols; c++) {
                const n = r*this.nCols + c - dp.initialSkip;
                const node = this.nodeInfoList[n];     
                if (!node) { continue; }      

                // Erase the previous blob and draw the new one
                const cc = dp.circleCoords[c][r];
                const sq = dp.squareCoords[c][r];
                const act = (node.id.length === 2) ? wholeActs[node.id] : roleActs[node.id];
                const radius = Math.max(2, dp.maxRadius * Math.abs(act)/100);    
                ctx.fillStyle = (node.id.length === 2) ? this.wholeBkgndColor : this.roleBkgndColor;           
                ctx.fillRect(sq.x, sq.y, sq.w, sq.h);
                ctx.fillStyle = (act >= 0) ? this.posBlobColor : this.negBlobColor; 
                ctx.beginPath();
                ctx.arc(cc.x, cc.y, radius, 0, 2*Math.PI);
                ctx.fill();

                // Draw the label
                ctx.font = 'italic ' + dp.labelFontSize.toString() + 'px serif';
                ctx.fillStyle = '#101010';
                const tc = dp.textCoords[c][r];
                ctx.fillText(node.shortName, tc.x, tc.y);
            }
            
        }

        // Draw the grid
        for (let r=0; r<this.nRows; r++) {
            const y = Math.round(dp.cellHeight*(r+1)) + 0.5;
            drawLine(ctx, 0, y, dp.canvasWidth, y);
            for (let c=(r==0 ? dp.initialSkip : 0); c<this.nCols; c++) {
                const x = Math.round(dp.cellWidth*(c+1)) + 0.5;
                drawLine(ctx, x, (c < dp.initialSkip-1) ? dp.cellHeight : 0, x, dp.canvasHeight);
            }
        }
    }


    /** 
     * Recalculates the drawing parameters for this object.
     * 
     * @private
     */
    _updateDrawParams(ctx)
    {
        const [w, h] = [ctx.canvas.width, ctx.canvas.height];
        if ((w < 1) || (h < 1)) { return false; }

        const dp = this.drawParams;
        dp.canvasWidth = w;  dp.canvasHeight = h;
    
        // Grid params
        const nRows = this.nRows;
        const nCols = this.nCols;
        dp.cellHeight = h/nRows;
        dp.cellWidth = w/nCols;
        const mr = dp.maxRadius = 0.5*Math.min(dp.cellWidth, 0.7*dp.cellHeight) - 1;
        dp.initialSkip = this.nRows * this.nCols - this.nodeInfoList.length;

        // Title params
        dp.titleFontSize = Math.min(0.9*dp.cellHeight, 1.7*(dp.initialSkip*dp.cellWidth/this.title.length));
        dp.labelFontSize = Math.min(0.7*(dp.cellHeight - 2*mr), 0.21*dp.cellWidth);
        dp.titleFont = 'italic bold ' + dp.titleFontSize.toString() + 'px Arial';
        ctx.font = dp.titleFont;
        let titleHeight = ctx.measureText(this.title).actualBoundingBoxAscent;
        dp.titleX = (dp.initialSkip/2) * dp.cellWidth;
        dp.titleY = dp.cellHeight/2 + 0.5*titleHeight;

        dp.circleCoords = new Array(nCols);
        dp.squareCoords = new Array(nCols);
        dp.textCoords = new Array(nCols);
        for (let c=0; c<nCols; c++) { 
            dp.circleCoords[c] = new Array(nRows); 
            dp.squareCoords[c] = new Array(nRows);
            dp.textCoords[c] = new Array(nRows);
        }

        for (let r=0; r<nRows; r++) {
            for (let c=0; c<nCols; c++) {
                const tx = c*dp.cellWidth;
                const ty = r*dp.cellHeight;
                const cx = (c + 0.5) * dp.cellWidth;
                const cy = r*dp.cellHeight + dp.maxRadius + 2;
                dp.circleCoords[c][r] = {x:cx, y:cy};
                dp.squareCoords[c][r] = {x:tx, y:ty, w:dp.cellWidth, h:dp.cellHeight};
                dp.textCoords[c][r] = {x:cx, y:(r+1)*dp.cellHeight - dp.labelFontSize/2}; 
            }
        }
        return true;
    }

};


})( window.LetterSpirit = window.LetterSpirit || {} );
