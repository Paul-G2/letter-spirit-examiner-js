// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    
    
/**
 * @classdesc
 * This class implements a UI for displaying the state of the Coderack.
 * 
 */
Namespace.CoderackUi = class {

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
        this.title = "Coderack";
        this.drawParams = {};

        this.bkgndColor = '#ffe5e0';
        this.titleColor = '#606060';
        this.colNameColor ='#404040';

        this.canvas =  Namespace.UiUtils.CreateElement('canvas', 
            'coderack-canvas', parentDiv, {position:'absolute', 
            margin:'0', padding:'0', top:'0%', left:'0%', width:'100%', 
            height:'100%', border: '1px solid', background:this.bkgndColor}
        );  

        this.codeletList = this._buildCodeletList();
        this.codeletDict = Object.fromEntries( this.codeletList.map((x,i) => [x.id, i]) );
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
        const dp = this.drawParams;

        // Only if necessary, resize the canvas and clear it
        if ( !UiUtils.RightsizeCanvas(canvas) ) { return; } 
        const rescale = UiUtils.NeedToRescale(this.drawParams, ctx);
        if (rescale) {
            if (!this._updateDrawParams(ctx)) { return; }
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw the title 
            ctx.font = dp.titleFont;
            ctx.textAlign = "center";
            ctx.fillStyle = this.titleColor;
            ctx.fillText(this.title, dp.titleX, dp.titleY);

            // Draw the column headers
            ctx.font = dp.colHeaderFont;
            ctx.fillStyle = this.colNameColor;
            ctx.fillText("#", dp.col0hdr.x, dp.col0hdr.y);
            ctx.fillText("Codelet",  dp.col1hdr.x, dp.col1hdr.y);
            ctx.fillText("Prob.",  dp.col2hdr.x, dp.col2hdr.y);

            // Draw the codelet names
            ctx.font = dp.codeletFont;
            ctx.textAlign = "left";  
            dp.textLines.forEach(line => ctx.fillText(...line) );
        }
        else{
            ctx.clearRect(...dp.countRect);
            ctx.clearRect(...dp.barGraphsRect);
            ctx.clearRect(...dp.numRunRect);
        }

        // Draw the grid
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1;
        for (let line of dp.gridLines) {
            UiUtils.DrawLine(ctx, line.xa, line.ya, line.xb, line.yb);
        }

        // Draw the codelet counts
        const coderack = this.app.coderack;
        let counts = new Array(this.codeletList.length).fill(0);
        coderack.codelets.forEach(codelet => counts[this.codeletDict[codelet.name]]++ );
        ctx.fillStyle = 'black';
        ctx.textAlign = "center";
        for (let r=0; r<dp.countCoords.length; r++) {        
            ctx.fillText(counts[r].toString(), ...dp.countCoords[r]);
        }
        // ctx.textAlign = "left";
        ctx.fillText('Codelets Run: ' + coderack.numCodeletsRun, ...dp.numRunCoords);

        // Draw the running-codelet indicator
        if (coderack.currentCodelet) {
            const row = this.codeletDict[coderack.currentCodelet.name];
            const verts = dp.lastRunIndicatorCoords[row];
            ctx.fillStyle = 'black';
            ctx.beginPath();   
            ctx.moveTo(...verts[0]);  
            ctx.lineTo(...verts[1]); 
            ctx.lineTo(...verts[2]); 
            ctx.closePath(); 
            ctx.fill();            
        }

        // Draw the bar graphs
        let probs = coderack.getCodeletRunProbabilities();
        const groupedProbs = Object.fromEntries(
            this.codeletList.map(x => [x.id, 0]));
        for (let i=0; i<probs.length; i++) {
            groupedProbs[coderack.codelets[i].name] += probs[i];
        }
        ctx.fillStyle = 'black';
        for (let r=0; r<dp.nRows-1; r++) {    
            let prob = groupedProbs[this.codeletList[r].id];
            let bar = dp.bars[r];
            ctx.beginPath();
            ctx.fillRect(bar.l, bar.t, Math.min(1, 1.2*prob)*bar.w, bar.h);
            ctx.stroke();
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
    
        // Title params
        let titleFontSize = Math.max(8, Math.round(Math.min(w/9, h/40)));
        dp.titleFont = 'italic bold ' + titleFontSize.toString() + 'px Arial';
        ctx.font = dp.titleFont;
        let titleHeight = ctx.measureText(this.title).actualBoundingBoxAscent;
        dp.titleX = w/2;
        dp.titleY = 1.4*titleHeight;

        // Column header paramss
        const column0Width = Math.round(0.14*w);
        const column1Width = Math.round(0.46*w);
        const column2Width = Math.round(w - column0Width - column1Width);
        const hdrFontSize = Math.round(0.8*titleFontSize);
        dp.colHeaderFont = 'italic bold ' + hdrFontSize.toString() + 'px serif';
        dp.col0hdr = {}; dp.col1hdr = {}; dp.col2hdr = {};
        dp.col0hdr.y = dp.col1hdr.y = dp.col2hdr.y = 3.4 * titleHeight;
        dp.col0hdr.x = column0Width/2;
        dp.col1hdr.x = column0Width + column1Width/2;
        dp.col2hdr.x = column0Width + column1Width + column2Width/2;

        // Grid params
        dp.tblTopOffset = 3.7 * titleHeight;
        dp.nRows = this.codeletList.length + 1;
        dp.cellHeight = (h - dp.tblTopOffset)/dp.nRows;
        dp.gridLines = [];
        for (let r=0; r<dp.nRows; r++) {
            let y = Math.round(dp.tblTopOffset + r*dp.cellHeight) + 0.5;
            let x = ((r == 0) || (r == dp.nRows-1)) ? w : 0.6*w;
            dp.gridLines.push({xa:0, ya:y, xb:x, yb:y});
        }
        let x = Math.round(column0Width) + 0.5;
        dp.gridLines.push({xa:x, ya:dp.tblTopOffset, xb:x, yb:h-dp.cellHeight});
        x = Math.round(column0Width + column1Width) + 0.5;
        dp.gridLines.push({xa:x, ya:dp.tblTopOffset, xb:x, yb:h-dp.cellHeight});        

        // Bar graph region
        dp.barGraphsRect = [x+1, dp.tblTopOffset+1, w-x-1, h - dp.tblTopOffset-1];

        // Codelet-counts region
        dp.countRect = [1, dp.tblTopOffset+1, column0Width-1, h - dp.tblTopOffset-1];
        dp.numRunRect = [1, dp.tblTopOffset + (dp.nRows-1)*dp.cellHeight+1, w-2, dp.cellHeight-2];

        // Codelet font size
        let cFontSize = Math.round(Math.max(16, 0.75*hdrFontSize));
        ctx.font = cFontSize.toString() + 'px Verdana';
        const measureString = "Activation"; // longest codelet word
        let meas = ctx.measureText(measureString);
        while ((meas.width > 0.95*column1Width) || (meas.actualBoundingBoxAscent > dp.cellHeight/4)) {
            cFontSize--;
            ctx.font = cFontSize.toString() + 'px Verdana';
            meas = ctx.measureText(measureString);
            if (cFontSize <= 6) { break; }
        }
        dp.codeletFont = ctx.font;

        // Codelet names
        const dh = (dp.cellHeight - 2.4*meas.actualBoundingBoxAscent)/2;
        x = column0Width + 4;
        dp.textLines = [];
        for (let r=0; r<dp.nRows-1; r++) 
        { 
            let codeletLines = this.codeletList[r].text.split('/');
            let cellTop = dp.tblTopOffset + r*dp.cellHeight;
            if (codeletLines.length == 1) {
                let y = cellTop + 0.5*dp.cellHeight + 0.5*meas.actualBoundingBoxAscent;
                dp.textLines.push([codeletLines[0], x, y]);
            }
            else {
                let y = cellTop + dh + meas.actualBoundingBoxAscent;
                dp.textLines.push([codeletLines[0], x, y]);
                y += 1.4*meas.actualBoundingBoxAscent;
                dp.textLines.push([codeletLines[1], x, y]);
            }
        } 

        // Codelet-count coordinates
        dp.countCoords = [];
        for (let r=0; r<dp.nRows-1; r++) {
            let y = dp.tblTopOffset + (r + 0.5)*dp.cellHeight + 0.5*meas.actualBoundingBoxAscent;
            dp.countCoords.push([column0Width/2, y]);
        }
        dp.numRunCoords = [dp.canvasWidth/2, dp.tblTopOffset + (dp.nRows-1 + 0.5)*dp.cellHeight + 0.5*meas.actualBoundingBoxAscent];

        // Last-run indicator coordinates
        dp.lastRunIndicatorCoords = [];
        for (let r=0; r<dp.nRows-1; r++) {
            const y0 = dp.tblTopOffset + r*dp.cellHeight + 1;
            const y1 = y0 + dp.cellHeight/3;
            const x0 = (2/3)*column0Width;
            const x1 = column0Width;
            dp.lastRunIndicatorCoords.push([[x0,y0], [x1,y0], [x1,y1]]);
        }

        // Bar graph coordinates
        const barLeft = column0Width + column1Width + 1;
        const barHeight = 0.8 * dp.cellHeight;
        dp.bars = [];
        for (let r=0; r<dp.nRows-1; r++) {    
            let cellTop = dp.tblTopOffset + r*dp.cellHeight;
            dp.bars.push({l:barLeft, t:cellTop + 0.1*dp.cellHeight, w:0.4*w, h:barHeight});
        }
        return true;
    }


    /**
     * Builds the list of known codelets.
     * @private
     */
    _buildCodeletList()
    {
        const codeletList = [
            {id:'glue-ant', text: 'Glue ant'},
            {id:'shaker', text: 'Shaker'},
            {id:'looker', text: 'Looker'},
            {id:'gestalt', text: 'Gestalt/checker'},

            {id:'labeler', text: 'Labeler'},
            {id:'breaker', text: 'Breaker'},
            {id:'pacifier', text: 'Pacifier'},
            {id:'label-checker', text: 'Label/checker'},
            
            {id:'sparker', text: 'Activation/sparker'},
            {id:'top-down-breaker', text: 'Top-down/breaker'},
            {id:'top-down-glommer', text: 'Top-down/glommer'},
            {id:'spreader', text: 'Activation/spreader'},
        ];
        return codeletList;
    }
};


})( window.LetterSpirit = window.LetterSpirit || {} );