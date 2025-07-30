// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Params = Namespace.Params;
    const UiUtils = Namespace.UiUtils;
    const Utils = Namespace.Utils;

    
    
/**
 * @classdesc
 * This class is responsible for displaying the state of the Workspace.
 * 
 */
Namespace.WorkspaceUi = class 
{
    /**
     * @constructor
     * 
     * @param {MainUi} mainUi - The parent Ui.
     * @param {HTMLElement} parentDiv - The html div that hosts this ui.
     */
    constructor(mainUi, parentDiv) 
    { 
        this.mainUi = mainUi;
        this.app = mainUi.app;
        this.workspace = this.app.workspace;
        this.parentDiv = parentDiv;
        this.headerDrawParams = {};
        this.labelDrawParams = {};
        this.gridDrawParams = {};
        this.bkgndColor  = '#f6f6f6';
        this.partColors = ['#2538dd', '#e7298a', '#1b9e77', '#d95f02', '#7570b3', '#e6ab02', '#ff0000', '#404040'];
        this.animId = null;
        this.shakeOffset = 0;

        // Create my canvases
        this.headerCanvas = UiUtils.CreateElement('canvas', 'wksp-header-canvas', 
            parentDiv, {position:'absolute', top:'0%', left:'0%', width:'81.25%', height:'20%', 
            border: '1px solid', borderBottom:'none', borderRight:'none', background:this.bkgndColor, zIndex:1}
        );
        
        this.labelsDiv = UiUtils.CreateElement('div', 'wksp-labels-div', parentDiv, 
            {position:'absolute', top:'20%', left:'0%', width:'81.25%', height:'80%',
            border: '1px solid', borderTop:'none', borderRight:'none', zIndex:1, overflowX:'scroll', overflowY:'auto'});
        this.labelsCanvas = UiUtils.CreateElement('canvas', 'wksp-labels-canvas', 
            this.labelsDiv, {position:'absolute', top:'0%', left:'0%', width:'200%', height:'100%', 
            background:this.bkgndColor}
        );

        this.gridCanvas = UiUtils.CreateElement('canvas', 'wksp-grid-canvas', 
            parentDiv, {position:'absolute', top:'0%', left:'81.25%', width:'18.75%', height:'100%', 
            border: '1px solid', background:this.bkgndColor, zIndex:1}
        );
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
        const sortedParts = Utils.SortPartsByGridPosition(this.app.workspace.parts);
        for (let i = 0; i < sortedParts.length; i++) { sortedParts[i].color = this.partColors[i%this.partColors.length]; }

        this.redrawHeader();
        this.redrawLabelArea(sortedParts);
        this.redrawGridArea(sortedParts);
    }


    /**
     * Updates the header.
     * 
     */
    redrawHeader()
    {
        const canvas = this.headerCanvas;
        const ctx = canvas.getContext("2d");
        const wksp = this.app.workspace;
        const dp = this.headerDrawParams;

        // Resize the canvas if necessary
        if ( !UiUtils.RightsizeCanvas(canvas)) { return; } 

        // Do we need to update the drawParams?
        const rescale = UiUtils.NeedToRescale(dp, ctx);
        if (rescale) {
            if (!this._updateHeaderDrawParams(ctx)) { return; }
        }

        // Re-draw all the graphics
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.drawThermometer(ctx, dp);

        // Info bar
        ctx.font = dp.infoBarFont;
        ctx.textAlign = "center";
        ctx.fillStyle = '#000000';
        ctx.fillText(wksp.infoBarText, ...dp.infoBarTextLoc);

        // Codelet title
        ctx.font = dp.codeletTitleFont;
        ctx.fillStyle = '#000000';
        ctx.fillText(wksp.codeletTitleText, ...dp.codeletTitleTextLoc);

        // Codelet message 1
        ctx.font = dp.codeletMsg1Font;
        ctx.fillStyle = '#000000';
        ctx.fillText(wksp.codeletMessage1, ...dp.codeletMsg1TextLoc);

        // Codelet message 2;
        ctx.font = dp.codeletMsg2Font;
        ctx.fillStyle = '#000000';
        ctx.fillText(wksp.codeletMessage2, ...dp.codeletMsg2TextLoc);

        const [cw, ch] = [canvas.width, canvas.height];
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1;
        UiUtils.DrawLine(ctx, cw/7, ch-1, 6*cw/7, ch-1);
    }


    /**
     * Updates the label area.
     * 
     */
    redrawLabelArea(parts)
    {
        const canvas = this.labelsCanvas;
        const ctx = canvas.getContext("2d");
        const wksp = this.app.workspace;
        const dp = this.labelDrawParams;
        
        // Resize the canvas if necessary
        if ( !UiUtils.RightsizeCanvas(canvas)) { return; } 

        // Do we need to update the drawParams?
        const rescale = UiUtils.NeedToRescale(dp, ctx);
        if (rescale) {
            if (!this._updateLabelDrawParams(ctx)) { return; }
        }

        // Re-draw all the graphics
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = this.bkgndColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.textAlign = "left";
        parts = parts.toSorted((a,b) => b.numLabels() - a.numLabels());
        for (let i = 0; i < parts.length; i++) { 
            let j;
            const part = parts[i];
            ctx.font = dp.labelFont;
            ctx.fillStyle = part.color;
            const labels = part.labels.toSorted((a,b) => a.text.localeCompare(b.text));
            for (j=0; j<labels.length; j++) {
                ctx.fillText(labels[j].toString(), dp.textStart[0] + dp.columnSkip*i, dp.textStart[1] + dp.lineSkip*j);
            }
            if (wksp.solution) {
                const partRole = wksp.solution.guess ? '?' : (wksp.solution.partRoleMap.get(part)?.name || '?');
                ctx.font = dp.partRoleFont;
                ctx.fillText(partRole.replaceAll('_', '-'), dp.textStart[0] + dp.columnSkip*i, dp.textStart[1] + dp.lineSkip*(j+1.5)); 
            }
            else {
                const activatedRoles = Object.values(Namespace.Roles).filter(role => wksp.roleActivations[role.name] > 0);
                let roleScores = activatedRoles.map(role => Utils.CalcRoleScoreForPart(part, role, wksp));
                roleScores = roleScores.filter(item => item.score > 0).toSorted((a,b) => b.score - a.score);
                ctx.font = dp.tentativePartRoleFont;
                for (let k=0; k<Math.min(roleScores.length, 3); k++) {
                    ctx.fillStyle = UiUtils.ChangeColor(part.color, 40*(k+1));
                    const roleStr = roleScores[k].role.name.replaceAll('_', '-') + '?';
                    ctx.fillText(roleStr, dp.textStart[0] + dp.columnSkip*i, dp.textStart[1] + dp.lineSkip*(j+k+1));
                }
            }
        }
    }


    /**
     * Draws the thermometer.   
     * 
     */
    drawThermometer(ctx, dp, temperatureVal)
    {
        temperatureVal = Math.max(0, Math.min(100, this.app.temperature.value.toFixed(0)));

        // Bulb
        ctx.lineWidth = 1;
        ctx.fillStyle = "red";
        ctx.strokeStyle = 'black';
        ctx.beginPath();
        ctx.arc(dp.bulbCtr.x, dp.bulbCtr.y, dp.bulbRadius, 0, 2*Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(dp.bulbCtr.x, dp.bulbCtr.y, dp.bulbRadius, 4.249, 5.176, true);
        ctx.stroke();

        // Stem
        ctx.fillStyle = 'red';
        ctx.strokeStyle = 'black';
        ctx.clearRect(...dp.hgRect);
        const ht = (dp.hgRect[3]-1)*(temperatureVal/100);
        ctx.fillRect(dp.hgRect[0], dp.hgRect[1]+dp.hgRect[3]-ht, dp.hgRect[2], ht);
        UiUtils.DrawLine(ctx, ...dp.hgLeftLine);
        UiUtils.DrawLine(ctx, ...dp.hgRightLine);
               
        // Value
        ctx.font = dp.tempFont;
        ctx.textAlign = 'center';
        ctx.fillStyle = 'black';
        ctx.fillText(temperatureVal.toString(), ...dp.tempTextLoc);         
        
        // Endcap
        ctx.beginPath();
        ctx.arc(dp.bulbCtr.x, dp.bulbCtr.y-dp.stemLength, dp.stemRadius, 0, Math.PI, true);
        ctx.stroke();

        // Tick marks
        dp.tickMarks.forEach(t => UiUtils.DrawLine(ctx, ...t));
    }
    
    
    /**
     * Updates the grid.
     * 
     */
    redrawGridArea(parts)
    {
        const canvas = this.gridCanvas;
        const ctx = canvas.getContext("2d");
        const wksp = this.app.workspace;
        const dp = this.gridDrawParams;
        const currentCodelet = this.app.coderack.currentCodelet;

        // Resize the canvas if necessary
        if ( !UiUtils.RightsizeCanvas(canvas)) { return; } 

        // Do we need to update the drawParams?
        const rescale = UiUtils.NeedToRescale(dp, ctx);
        if (rescale) {
            if (!this._updateGridDrawParams(ctx)) { return; }
        }

        // Clear the canvas
        ctx.fillStyle = this.bkgndColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const yOffset = wksp.solution ? dp.solutionRect[3]/2 : 0; 
        this.drawGridLetter(parts, yOffset);
        
        if (Params.AnimateAnts && (currentCodelet?.name === 'glue-ant')) { 
            this.drawAnt(wksp.glueAntData.antGraphicQuantum, ctx); 
        }

        // Solution area
        if (wksp.solution) {
            ctx.fillStyle = '#aaffaa';
            ctx.fillRect(...dp.solutionRect);
            ctx.textAlign = "center";
            ctx.fillStyle = '#000000';
            ctx.font = dp.solutionFont1;
            ctx.fillText('I think its:', ...dp.solutionTextLoc1);
            ctx.font = dp.solutionFont2;
            ctx.fillText('" ' + wksp.solution.wholeName[0] + ' "', ...dp.solutionTextLoc2);
        }

    }


    /**
     * 
     * @param {*} shiftPct
     * @private 
     */
    drawGridLetter(parts=[], yOffset=0)
    {
        const canvas = this.gridCanvas;
        const ctx = canvas.getContext("2d");
        const wksp = this.app.workspace;
        const dp = this.gridDrawParams;   
        const currentCodelet = this.app.coderack.currentCodelet;
        if (Object.keys(dp).length == 0) { return; }  

        // Grid background
        ctx.fillStyle = this.bkgndColor; 
        ctx.fillRect(0, 0, canvas.width, canvas.height); 

        // Grid lines
        ctx.lineWidth = "3";
        ctx.strokeStyle = "#d8d8d8"; 
        const gap = dp.gridSpacing;
        Array.from({length: 56}, (e, i)=> i).forEach( iq => {
            const q = Namespace.Quanta[iq];
            const [xs, ys] = [dp.gridStartX + gap*q.startPoint.x, dp.gridStartY + gap*q.startPoint.y];
            const [xe, ye] = [dp.gridStartX + gap*q.endPoint.x,   dp.gridStartY + gap*q.endPoint.y];
            UiUtils.DrawLine(ctx, xs, ys+yOffset, xe, ye+yOffset);
        });

        const prevLineCap = ctx.lineCap;
        if ( (currentCodelet?.name === 'glue-ant') || (currentCodelet?.name === 'shaker') ) 
        {
            // Quanta of the input letter
            const shift = dp.gridSpacing * (this.shakeOffset*0.1);
            ctx.strokeStyle = '#000080'; // Navy-blue
            ctx.lineWidth = Math.max(1, Math.round(3*dp.gridDotRadius));
            ctx.lineCap = 'round';
            wksp.inputGridLetter.quanta.forEach( q => {
                let pa = [dp.gridStartX + gap*q.startPointSh.x + shift, dp.gridStartY + gap*q.startPointSh.y - shift];
                let pb = [dp.gridStartX + gap*q.endPointSh.x + shift,   dp.gridStartY + gap*q.endPointSh.y - shift];
                UiUtils.DrawLine(ctx, pa[0], pa[1]+yOffset, pb[0], pb[1]+yOffset);
            });

            // Glued joints ("subgloms")
            ctx.strokeStyle = '#ffa500'; // Orange
            wksp.joints.forEach( jt => {
                if (jt.glue === 0) { return; } 
                const qa = Namespace.Quanta[jt.qidA];
                const qb = Namespace.Quanta[jt.qidB];
                let p0, p1, p2, p3;
                if (qa.startPointId === qb.startPointId) {
                    [p0, p1, p2, p3] = [qa.startPoint, qa.startPointSh, qb.startPoint, qb.startPointSh];
                }
                else if (qa.startPointId === qb.endPointId) {
                    [p0, p1, p2, p3] = [qa.startPoint, qa.startPointSh, qb.endPoint, qb.endPointSh];
                }
                else if (qa.endPointId === qb.startPointId) {
                    [p0, p1, p2, p3] = [qa.endPoint, qa.endPointSh, qb.startPoint, qb.startPointSh];
                }
                else if (qa.endPointId === qb.endPointId) {
                    [p0, p1, p2, p3] = [qa.endPoint, qa.endPointSh, qb.endPoint, qb.endPointSh];
                }
                p0 = [dp.gridStartX + gap*p0.x + shift,  dp.gridStartY + gap*p0.y - shift];
                p1 = [dp.gridStartX + gap*p1.x + shift,  dp.gridStartY + gap*p1.y - shift];
                p2 = [dp.gridStartX + gap*p2.x + shift,  dp.gridStartY + gap*p2.y - shift];
                p3 = [dp.gridStartX + gap*p3.x + shift,  dp.gridStartY + gap*p3.y - shift];

                UiUtils.DrawLine(ctx, p0[0], p0[1]+yOffset, p1[0], p1[1]+yOffset);
                UiUtils.DrawLine(ctx, p2[0], p2[1]+yOffset, p3[0], p3[1]+yOffset);
            });
        }
        else
        {
            ctx.lineWidth = Math.max(1, Math.round(4*dp.gridDotRadius));
            ctx.lineCap = 'round';
            parts.forEach( part => {
                ctx.strokeStyle = part.color;
                part.getQuanta().forEach( q => {
                    let pa = [dp.gridStartX + gap*q.startPoint.x, dp.gridStartY + gap*q.startPoint.y];
                    let pb = [dp.gridStartX + gap*q.endPoint.x,   dp.gridStartY + gap*q.endPoint.y];
                    UiUtils.DrawLine(ctx, pa[0], pa[1]+yOffset, pb[0], pb[1]+yOffset);
                });
            });
        }
        ctx.lineCap = prevLineCap;
    }


    /** 
     * Recalculates the drawing parameters for this object.
     * 
     * @private
     */
    _updateHeaderDrawParams(ctx)
    {
        const [cw, ch] = [ctx.canvas.width, ctx.canvas.height];
        if ((cw < 1) || (ch < 1)) { return false; }

        const dp = this.headerDrawParams;
        [dp.canvWidth, dp.canvHeight] = [cw, ch];

        // Thermometer text
        const tempFontSize = Math.round(Math.min(0.028*cw, 0.14*ch));
        dp.tempFont = 'italic ' + tempFontSize.toString() + 'px Arial';
        dp.tempTextLoc = [cw - 1.5*tempFontSize, ch/2 + 0.5*tempFontSize]; 
  
        // Bulb
        dp.bulbCtr = {x:dp.tempTextLoc[0]-1.5*tempFontSize, y:0.91*ch};
        dp.bulbRadius = 0.07*ch;
        dp.stemLength = 0.82*ch;
        dp.stemRadius = dp.bulbRadius/2;

        // Thermometer tickmarks
        let y = dp.bulbCtr.y - 1.5*dp.bulbRadius;
        let dy = (dp.stemLength - 1.5*dp.bulbRadius)/8;
        let xa = dp.bulbCtr.x + dp.stemRadius;
        let xb1 = xa + dp.stemRadius;
        let xb2 = xa + 1.7*dp.stemRadius;
        dp.tickMarks = [];
        for (let i=0; i<9; i++) {
            dp.tickMarks.push([xa, y, ((i%4 == 0) ? xb2 : xb1), y]);
            y -= dy;
        }

        // Thermometer stem
        y = dp.bulbCtr.y;
        let x = dp.bulbCtr.x - dp.stemRadius;
        dp.hgRect = [x, y-dp.stemLength, 2*dp.stemRadius, dp.stemLength];
        dp.hgLeftLine = [x, y-0.866*dp.bulbRadius, x, y-dp.stemLength];
        x += 2*dp.stemRadius;
        dp.hgRightLine = [x, y-0.866*dp.bulbRadius, x, y-dp.stemLength];  

        // Info bar
        let fontSize = Math.round(Math.min(0.036*cw, 0.20*ch));
        dp.infoBarTextLoc = [dp.bulbCtr.x/2, 0.20*ch];        
        dp.infoBarFont ='bold ' + fontSize.toString() + 'px Courier New';
        
        // Codelet title
        fontSize = Math.round(0.85 * fontSize);
        dp.codeletTitleTextLoc = [dp.bulbCtr.x/2, 0.43*ch];        
        dp.codeletTitleFont ='normal ' + fontSize.toString() + 'px Courier New';

        // Codelet message1
        fontSize = Math.round(0.85 * fontSize);
        dp.codeletMsg1TextLoc = [dp.bulbCtr.x/2, 0.66*ch];        
        dp.codeletMsg1Font ='normal ' + fontSize.toString() + 'px Courier New';

        // Codelet message2
        dp.codeletMsg2TextLoc = [dp.bulbCtr.x/2, 0.89*ch];        
        dp.codeletMsg2Font ='normal ' + fontSize.toString() + 'px Courier New';      

        return true;
    }

    /** 
     * Recalculates the drawing parameters for this object.
     * 
     * @private
     */
    _updateLabelDrawParams(ctx)
    {
        const [cw, ch] = [ctx.canvas.width, ctx.canvas.height];
        if ((cw < 1) || (ch < 1)) { return false; }

        const dp = this.labelDrawParams;
        [dp.canvWidth, dp.canvHeight] = [cw, ch];        
        
        let fontSize = Math.round(Math.min(0.009*cw, 0.036*ch));
        dp.textStart = [0.0125*cw, 0.065*ch];    
        dp.lineSkip = fontSize*1.3;    
        dp.columnSkip = fontSize*17;   
        dp.labelFont ='normal ' + fontSize.toString() + 'px Courier New';
        dp.partRoleFont ='italic bold ' + Math.round(1.5*fontSize).toString() + 'px Arial';
        dp.tentativePartRoleFont ='italic bold ' + Math.round(1.25*fontSize).toString() + 'px Arial';

        return true;
    }

    /** 
     * Recalculates the drawing parameters for this object.
     * 
     * @private
     */
    _updateGridDrawParams(ctx)
    {
        const [cw, ch] = [ctx.canvas.width, ctx.canvas.height];
        if ((cw < 1) || (ch < 1)) { return false; }

        const dp = this.gridDrawParams;
        [dp.canvWidth, dp.canvHeight] = [cw, ch];

        // Solution area
        dp.solutionRect = [0, 0, cw, 0.20*ch];
        const solutionFontSize1 = Math.round(Math.min(0.092*dp.solutionRect[2], 0.2*dp.solutionRect[3]));
        const solutionFontSize2 = Math.round(Math.min(0.23*dp.solutionRect[2], 0.5*dp.solutionRect[3]));
        dp.solutionFont1 = 'italic ' + solutionFontSize1 + 'px Arial';
        dp.solutionTextLoc1 = [dp.solutionRect[2]/2, dp.solutionRect[1] + 0.4*dp.solutionRect[3] - 0.5*solutionFontSize1];
        dp.solutionFont2 = 'bold ' + solutionFontSize2 + 'px Times New Roman';
        dp.solutionTextLoc2 = [dp.solutionRect[2]/2, dp.solutionRect[1] + 0.4*dp.solutionRect[3] + 0.85*solutionFontSize2];

        // Grid 
        dp.gridLetterRect = [0, dp.solutionRect[3], cw, ch-dp.solutionRect[3]];
        dp.gridSpacing = Math.round( Math.min(dp.gridLetterRect[2]/2.5, dp.gridLetterRect[3]/6.5) );
        dp.gridStartX = Math.round(dp.gridLetterRect[0] + dp.gridLetterRect[2]/2 - dp.gridSpacing);
        dp.gridStartY = Math.round(dp.gridLetterRect[1] + dp.gridLetterRect[3]/2 - 3*dp.gridSpacing - dp.solutionRect[3]/2);
        dp.gridDotRadius = Math.max(1, Math.round(dp.gridSpacing/25));

        return true;
    }


    drawAnt(quantumId, ctx) 
    {
        if (!quantumId && (quantumId !== 0)) { return; }

        const dp = this.gridDrawParams;
        const q = Namespace.Quanta[quantumId];
        
        ctx.translate(dp.gridStartX + dp.gridSpacing*q.center.x, dp.gridStartY + dp.gridSpacing*q.center.y);
        ctx.rotate(Math.atan2(q.endPoint.y - q.startPoint.y, q.endPoint.x - q.startPoint.x) + Math.PI/6);
        ctx.scale(0.22*dp.gridSpacing, 0.25*dp.gridSpacing);

        ctx.fillStyle = '#b22222'; // firebrick
        ctx.strokeStyle = '#b22222';
        ctx.beginPath();
        ctx.ellipse(0.7, 0,  0.5, 0.3,  0,  0, Math.PI*2);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.ellipse(0, 0,  0.3, 0.3,  0,  0, Math.PI*2);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.ellipse(-0.56, 0,  0.3, 0.3,  0,  0, Math.PI*2);
        ctx.fill();
        ctx.closePath();

        ctx.lineWidth = 0.1;
        UiUtils.DrawLines(ctx, [{x: 0.8, y:-0.7}, {x: 0.3, y:-0.4}, {x: 0.7, y:0.0}, {x: 0.3, y:0.4}, {x: 0.8, y:0.7}]);
        UiUtils.DrawLines(ctx, [{x: 0.4, y:-0.7}, {x:-0.1, y:-0.4}, {x: 0.3, y:0.0}, {x:-0.1, y:0.4}, {x: 0.4, y:0.7}]);
        UiUtils.DrawLines(ctx, [{x:-0.1, y:-0.7}, {x:-0.4, y:-0.4}, {x:-0.1, y:0.0}, {x:-0.4, y:0.4}, {x:-0.1, y:0.7}]);
        UiUtils.DrawLines(ctx, [{x:-0.9, y:-0.1}, {x:-1.1, y:-0.2}, {x:-1.3, y:-0.1}]);
        UiUtils.DrawLines(ctx, [{x:-0.9, y: 0.1}, {x:-1.1, y: 0.2}, {x:-1.3, y: 0.1}]);

        ctx.resetTransform();
    }

  
    /**
     * Starts the shaking animation.
     * 
     */
    shakeGridLetter()
    { 
        // Bounce out if we are already animating
        if ( this.animId !== null ) { return; }

        // Create the animation loop
        this.shakeOffset = 1;
        let then = performance.now();
        const animLoop = () => {
            const now = performance.now();
            if ((now - then > 83) && (this.app.state == 'running')) { 
                then = now; 
                this.shakeOffset *= -1; 
                this.drawGridLetter();
            }
            this.animId = window.requestAnimationFrame(animLoop); 
        };
    
        // Start the animation
        this.animId = requestAnimationFrame(animLoop);
    }


    /**
     * Stops the shaking animation.
     * 
     */
    stopShaking()
    { 
        window.cancelAnimationFrame(this.animId);
        this.shakeOffset = 0;
        this.drawGridLetter();
        this.animId = null;
    }

};


})( window.LetterSpirit = window.LetterSpirit || {} );
