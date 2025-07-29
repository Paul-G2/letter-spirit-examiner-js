// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Params = Namespace.Params;

/**
 * @classdesc
 * This codelet creates joints by probabilistically
 * adding glue between neighboring quanta.
 * 
 */
 Namespace.Codelets.GlueAnt = class extends Namespace.Codelets.CodeletBase
 {
    /**
     * @constructor
     * 
     * @param {Number} urgency - The urgency of the codelet.
     * @param {Number} generation - The generation that the codelet belongs to.
     * @param {Array} args - Arguments to pass to the codelet.
     */
    constructor(urgency, generation) 
    { 
        super('glue-ant', urgency, generation);
    }


    /**
     * Runs the codelet.
     */
    async run(app)
    {
        const [wksp, data] = [app.workspace, app.workspace.glueAntData];

        // Display codelet info
        wksp.infoBarText = 'Bond ants running...';
        wksp.codeletTitleText = 'Glue-ant codelet from generation ' + this.gen;
        wksp.codeletMessage1 = wksp.codeletMessage2 = '';      
        
        // Build bonds, repeatedly
        let iter = 1;
        while (data.numRedundAnts <= Params.RedundantC) {
            const bondedQuantum = Namespace.Codelets.GlueAnt.BondQuanta(wksp.inputGridLetter, app);
            if (!bondedQuantum) { return false; } 

            // Update ui
            if (Params.AnimateAnts) { 
                if ((iter%10) === 0) { 
                    wksp.codeletMessage1 = `Ants: ${data.numBondAnts}     Globs: ${data.numGlobsPlaced}     Glue: ${data.totalGluePlaced}`;
                    app.ui?.workspaceUi.redraw();
                    await new Promise(r => setTimeout(r, 50)); 
                }
                iter++;
            }
        } 

        // Post a shaker codelet and return
        app.coderack.post(1, 'shaker', Params.VeryHighUrgency, 0);
        return true;
    }


    /**
     * Bonds neighboring quanta into joints, with random amounts of glue.
     * 
     * @param {GridLetter} gridLetter - The GridLetter to work on.
     * @param {App} app - The LetterSpirit App instance.
     */
    static BondQuanta(gridLetter, app) 
    {
        const [wksp, data, randGen] = [app.workspace, app.workspace.glueAntData, app.randGen];

        // Select a quantum at random from the letter 
        if ( !gridLetter.hasAdjacentQuanta() ) { return null; }
        const quantum = randGen.choice(gridLetter.quanta);
        wksp.glueAntData.antGraphicQuantum = quantum.id;

        // Get a random selection of its on-neighbors
        let onNbrs = [];
        quantum.neighbors.forEach((nbrId, i) => {
            if (gridLetter.quantaIds.includes(nbrId)) { onNbrs.push( {id:nbrId, glue:Params.GlueByNeighborIdx[i]} ); } 
        });
        onNbrs = randGen.choice(onNbrs, onNbrs.length);

        // For each (quantum, neighbor) pair, either add it to our glued-joints list, 
        // or update its glue value if it's already there.
        onNbrs.forEach(nbr => { 
            const qids = (quantum.id < nbr.id) ? [quantum.id, nbr.id] : [nbr.id, quantum.id];
            const existingJoint = wksp.joints.find(jt => (jt.qidA === qids[0]) && (jt.qidB === qids[1]));

            if (existingJoint) {
                existingJoint.glue += nbr.glue;
                data.numRedundAnts++;
            } else {
                wksp.joints.push( new Namespace.Joint(qids[0], qids[1], nbr.glue) );
            }

            data.numGlobsPlaced++;
            data.totalGluePlaced += nbr.glue;
        });
        data.numBondAnts++;            
       
        return quantum;
    }
};

})( window.LetterSpirit = window.LetterSpirit || {} );