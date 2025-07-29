// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    
    
/**
 * @classdesc
 * This is a ui for a single letter grid.
 * 
 */
Namespace.LetterGrid = class {

    /**
     * @constructor
     * 
     * @param {HTMLElement} site - The html div that will host the grid.
     * @param {boolean} [editable=true] - Whether the grid quanta can be added/removed with the mouse.
     * @param {boolean} [squareCells=true] - Whether the grid cells should be square.
     * @param {string} [borderCode='ltrb'] - Which borders to draw.
     * @param {string} [bkgndColor='#b3ddcc'] - The grid's background color.
     * @param {string} [gridLineColor='#98d1ba'] - The grid's line color.
     */
    constructor(site, opts={editable:true}) 
    { 
        this.site = site;
        this.bkgndColor  = opts.bkgndColor || '#b3ddcc';
        this.gridLineColor  = opts.gridLineColor || '#98d1ba';
        this.borderCode  = opts.borderCode || 'ltrb';
        this.squareCells = (opts.editable || opts.editable === undefined);
        this.drawParams = {};

        this.canvas = Namespace.UiUtils.CreateElement('canvas',
            'lettergrid-canvas', site, {position:'absolute', margin:'0', padding:'0', 
            top:'0%', left:'0%', width:'100%', height:'100%', background:this.bkgndColor}
        ); 

        this.clickHandler = null;
        this.setEditable(opts.editable || opts.editable === undefined);

        this.onQuanta = []; 
    }


    /**
     * Sets the grid editable or not editable.
     * @param {boolean} editable - The value to set.
     * 
     */
    setEditable(editable) 
    {
        if (editable && !this.clickHandler) {
            this.clickHandler = this._onClick.bind(this);
            this.canvas.addEventListener('click', this.clickHandler);
        } 
        else if (!editable && this.clickHandler) {
            this.canvas.removeEventListener('click', this.clickHandler);
            this.clickHandler = null;
        }
    }


    /**
     * Sets the grid's on-quanta.
     * 
     */
    setOnQuanta(qids) 
    { 
        this.onQuanta = (qids || []).slice(); 
    }

    
    /**
     * Redraws the grid and its quanta.
     * 
     */
    redraw()
    {
        const UiUtils = Namespace.UiUtils;
        const canv = this.canvas;
        const ctx = canv.getContext("2d");
        const dp = this.drawParams;

        if ( !UiUtils.RightsizeCanvas(this.canvas) ) { return; }

        // Do we need to update the drawParams?
        const rescale = UiUtils.NeedToRescale(this.drawParams, ctx);
        if (rescale) { if (!this._updateDrawParams(ctx)) { return; } }

        // Fill the canvas with the background color
        const [w, h] = [dp.canvWidth, dp.canvHeight];
        ctx.fillStyle = this.bkgndColor; 
        ctx.fillRect(0, 0, w, h);

        // Draw the grid lines
        ctx.lineWidth = dp.gridLineWidth;
        ctx.strokeStyle = this.gridLineColor; 
        Array.from({length: 56}, (e, i)=> i).forEach( iq => {
            const q = Namespace.Quanta[iq];
            const [xs, ys] = [dp.xi + dp.xgap*q.startPoint.x, dp.yi + dp.ygap*q.startPoint.y];
            const [xe, ye] = [dp.xi + dp.xgap*q.endPoint.x,   dp.yi + dp.ygap*q.endPoint.y];
            ctx.lineWidth = (iq == 8) || (iq == 9) ? 7 : 3;
            Namespace.UiUtils.DrawLine(ctx, xs, ys, xe, ye);
        });

        // Draw the quanta
        const prevLineCap = ctx.lineCap;
        ctx.lineCap = 'round';
        ctx.lineWidth = dp.quantaLineWidth;
        ctx.strokeStyle  = 'black'; 
        this.onQuanta.forEach( iq => {
            const q = Namespace.Quanta[iq];
            const [xs, ys] = [dp.xi + dp.xgap*q.startPoint.x, dp.yi + dp.ygap*q.startPoint.y];
            const [xe, ye] = [dp.xi + dp.xgap*q.endPoint.x,   dp.yi + dp.ygap*q.endPoint.y];
            Namespace.UiUtils.DrawLine(ctx, xs, ys, xe, ye);
        });
        ctx.lineCap = prevLineCap;

        // Draw the border
        ctx.strokeStyle  = 'black'; 
        ctx.lineWidth = 1;
        if (this.borderCode.includes('l')) { Namespace.UiUtils.DrawLine(ctx, 0,0, 0,h); }
        if (this.borderCode.includes('r')) { Namespace.UiUtils.DrawLine(ctx, w,0, w,h); }
        if (this.borderCode.includes('t')) { Namespace.UiUtils.DrawLine(ctx, 0,0, w,0); }
        if (this.borderCode.includes('b')) { Namespace.UiUtils.DrawLine(ctx, 0,h, w,h); }
    
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
        [dp.canvWidth, dp.canvHeight] = [w, h];
        
        dp.gridLineWidth = Math.max(1, 0.030*Math.min(w, h));
        dp.quantaLineWidth = 1.6*dp.gridLineWidth;

        [dp.xi, dp.yi] = [1+dp.quantaLineWidth/2, 1+dp.quantaLineWidth/2];
        [dp.xgap, dp.ygap] = [(w - 2 - dp.quantaLineWidth)/2, (h - 2 - dp.quantaLineWidth)/6]; 
        if (this.squareCells) { 
            dp.xgap = dp.ygap = Math.min(dp.xgap, dp.ygap); 
            dp.xi = (w/2 - dp.xgap);
            dp.yi = (h/2 - 3*dp.ygap);
        }

        return true;
    }



    /**
     * Click handler.
     * @private
     *  
     */
    _onClick(e)
    {
        const clickPt = Namespace.UiUtils.GetRelativeEventCoordinates(e);
        if (!clickPt) { return; }

        const dp = this.drawParams;

        let dists = Namespace.Quanta.map( q => {
            const pa = [dp.xi + dp.xgap*q.startPoint.x, dp.yi + dp.ygap*q.startPoint.y];
            const pb = [dp.xi + dp.xgap*q.endPoint.x,   dp.yi + dp.ygap*q.endPoint.y];
            return Namespace.UiUtils.SquaredDistanceToLineSegment(clickPt, pa, pb);
        });

        var indexOfMinDist = dists.reduce((iMin, x, i, dists) => x < dists[iMin] ? i : iMin, 0);
        if (dists[indexOfMinDist] < 0.4*Math.min(dp.xgap, dp.ygap)**2) { 
            if (this.onQuanta.includes(indexOfMinDist)) {
                this.onQuanta.splice(this.onQuanta.indexOf(indexOfMinDist), 1);
            } else {
                this.onQuanta.push(indexOfMinDist);
            }
            this.redraw();
        }
    }
};


})( window.LetterSpirit = window.LetterSpirit || {} );