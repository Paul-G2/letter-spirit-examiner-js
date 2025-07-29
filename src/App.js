// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Knowledge = Namespace.Knowledge;
    const Params = Namespace.Params;
    const Utils = Namespace.Utils;



/**
 * @classdesc
 * This is the main class for the Letter Spirit Examiner app. 
 * 
 */
 Namespace.App = class 
 {
    /**
     * @constructor
     * 
     * @param {Number} [randSeed=42] - A seed value for the random number generator.
     * @param {Boolean} [omitGui=false] - Whether to omit the GUI. (For disabling the ui during unit tests.)
     */
    constructor(args = {randSeed:42, omitGui:false}) 
    { 
        this.randGen     = new Namespace.RandGen(args.randSeed);
        this.reporter    = new Namespace.Reporter();
        this.temperature = new Namespace.Temperature(this);
        this.workspace   = new Namespace.Workspace(this);
        this.coderack    = new Namespace.Coderack(this);
        this.smartParser = new Namespace.SmartParser(this);
        this.ui          = args.omitGui ? null : new Namespace.MainUi(this); 
        this.stepTimerId = undefined;
        this.stepDelay   = Params.InitialStepDelay;
        this.state       = 'ready'; // ready, running, or paused
        this.pendingPauseRequest = false;
        this.antsEnabled = Params.AntsEnabled;

        // Set an initial input letter
        if (this.ui) { this.ui.inputUi.letterGrid.setOnQuanta(Namespace.Fonts.StandardSquare['b']); }

        // Enable/disable trace messages
        this.reporter.traceEnabled = Params.PrintTraceMessages;
        this.reporter.traceDetailsEnabled = Params.PrintTraceDetailMessages;

        // Set initial state
        this.reset();
    }


    /**
     * Resets the Examiner to its initial state
     * 
     */
    reset()
    {
        // Kill the step timer
        this.stepTimerId = window.clearTimeout(this.stepTimerId);

        // Reset everything 
        this.temperature.reset(); 
        this.workspace.reset();
        this.coderack.reset();

        this._setState('ready');
    }
    
    
    /**
     * Sets the input GridLetter, if it is valid.
     * 
     * @param {GridLetter} gridLetter - The GridLetter to set as input.
     * 
     */
    setInputGridLetter(gridLetter)
    {
        if (this.state == 'running') { 
            this.reporter.warn(`setInputGridLetter request ignored - App is in running state`);
            return false; 
        }

        // Check that the input letter is valid
        if ( !gridLetter || gridLetter.isEmpty() ) {
            this.ui?.inputUi.displayMessage('Invalid input!');
            return false;
        }
        else {
            if ( !gridLetter.valueEquals(this.workspace.inputGridLetter) ) { 
                this.workspace.setInputLetter(gridLetter);
                this.reset(); 
            } 
            return true;
        }
    }
    
    
    /**
     * Sets our state updates the UI accordingly.
     * @private
     * 
     */
    _setState(state)
    {
        this.state = state;
        this.pendingPauseRequest = false;
        this.ui?.redraw(); 
    }


    /**
     * Sets the time delay between codelets.
     * 
     * @param {Number} value - The time delay in milliseconds.
     */
    setStepDelay(value)
    {
        this.stepDelay = Math.max(0, value);
    }


    /**
     * Starts running the Examiner with the current input grid letter.
     * 
     */
    start()
    {
        if (this.state != 'ready') { 
            this.reporter.warn(`start request ignored - App is in ${this.state} state`);
        } else {
            this.reset();
            this._prepareForNewRun();
            this._setState('running');
            this._codeletLoop();
        } 
    }


    /**
     * Prepares the Examiner for a new run.
     * @private
     */
    _prepareForNewRun()
    {
        if (this.antsEnabled) {
            this.coderack.post(1, 'glue-ant', Params.VeryHighUrgency, 0); 
        } else {
            this.smartParser.run();
            this.coderack.post(Params.GestaltBatchSize, 'gestalt', Params.InitialGestaltCodeletUrgency, 1);
            this.coderack.post(2*this.workspace.parts.length, 'looker', Params.MediumUrgency, 3);
        }
    }


    /**
     * Pauses the Examiner.
     * 
     */
    pause()
    {
        if (this.state != 'running') {
            this.reporter.warn(`pause request ignored - App is in ${this.state} state`);
        }
        else {
            this.pendingPauseRequest = true;
        }
    }


    /**
     * Resumes the Examiner if it is paused.
     * 
     */
    resume()
    {
        if (this.state == 'paused') {
            this._setState('running');
            this._codeletLoop(); 
        }
        else if ((this.state == 'running') && this.pendingPauseRequest) { 
            this.pendingPauseRequest = false; 
        }
        else {
            this.reporter.warn(`resume request ignored - App is in ${this.state} state`);
        }
    }


    /**
     * Executes a single codelet.
     * 
     */
    singleStep()
    { 
        if ((this.state != 'ready') && (this.state != 'paused')) {
            this.reporter.warn(`singleStep request ignored - App is in ${this.state} state`);
        }
        else {
            if (this.state == 'ready') { 
                this.reset(); 
                this._prepareForNewRun();               
            }
            this._setState('running');
            this.pendingPauseRequest = true;
            this._codeletLoop();
        }
    }


    /**
     * Runs the next codelet and schedules a subsequent one, in Examiner mode
     * @private
     */
    async _codeletLoop()
    {
        const [wksp, rack, rptr, tmprObj] = [this.workspace, this.coderack, this.reporter, this.temperature];
        
        try {
            // Run a codelet
            await rack.chooseAndRunCodelet();
            
            // Display progress
            tmprObj.update();
            this.ui?.redraw();

            // Check whether we are done
            if ( this._checkForSolution() ) {
                rptr.info(`Solution found after ${rack.numCodeletsRun} codelets: ${wksp.solution.wholeName} (${wksp.solution.score})`);
                this._setState('ready');
                return;
            }

            // Maybe relax some parameters
            if ((rack.numCodeletsRun % Params.NumExamPhaseCodelets) === 0) {
                wksp.easeSparkerParams();
            }
            
            // Keep looping?
            if (this.state == 'running') 
            {
                // Check for pause request
                if (this.pendingPauseRequest) {
                    this._setState('paused');
                    return;
                }
                
                // Handle empty coderack situation
                this._checkForEmptyCodeRack();

                // Schedule next codelet
                this.stepTimerId = window.setTimeout( () => 
                    { this.stepTimerId = undefined; this._codeletLoop(); }, this.stepDelay );
            }   
        }
        catch (e) {
            this.reporter.error(e);
            alert("Oops, an error occurred.\n\nPlease try reloading the page.");
        }       
    }


    /** 
     * Checks whether a good solution has been found.
     * @private
     */
    _checkForSolution()
    {
        const [wksp, rptr, tmprObj] = [this.workspace, this.reporter, this.temperature];

        let bestWhole = wksp.getBestWhole();
        if (bestWhole.score > 99) {
            wksp.solution = bestWhole;
            wksp.makePartRoleMap();
        }
        else {
            if (this.coderack.numCodeletsRun >= Params.MaxCodelets) {
                // Get the prototype that best matches the input letter. This will be our guess.
                rptr.info("Max codelets reached, forcing a guess.");
                const protoDists = Object.values(Namespace.Knowledge.BlurredPrototypes).map(prot => wksp.inputGridLetter.distanceTo(prot));
                const indexOfBest = protoDists.reduce((iMin, val, i, arr) => (val < arr[iMin]) ? i : iMin, 0);
                wksp.solution = {wholeName: Knowledge.LetterCategories[indexOfBest]+'1', score: Utils.Round1(protoDists[indexOfBest]), guess: true}; 
                wksp.makePartRoleMap();
            }
            else if (tmprObj.value < 30) {
                // Try to solve things when the temperature is low
                wksp.rRoleCheckWholes();
                tmprObj.update();
                if (tmprObj.value < 20) {
                    rptr.info("Temperature very low, picking winner.");
                    wksp.solution = wksp.getBestWhole();
                    wksp.makePartRoleMap();
                }
            }
        }
        return !!wksp.solution;
    }


    /**
     * Checks whether the coderack is empty and takes appropriate action.
     * @private
     * 
     */
    _checkForEmptyCodeRack()
    {
        const [wksp, rack, rptr, tmprObj] = [this.workspace, this.coderack, this.reporter, this.temperature];

        if (rack.codelets.length === 0) {
            rptr.trace("Coderack is empty...");
            if ( (tmprObj.value > 90) || wksp.parts.some(p => p.hasLabel('**whine')) ) {
                rack.post(2*wksp.parts.length, 'looker', Params.MediumUrgency, 1);
            } 
            else {
                rptr.info("PANIC. Breaking up all existing parts and reglomming quanta.");
                if (this.antsEnabled && wksp.inputGridLetter.hasAdjacentQuanta()) {
                    wksp.reset();
                    tmprObj.reset(); 
                    rack.post(1, 'glue-ant', Params.VeryHighUrgency, 0);
                }
                else {
                    this.smartParser.run();
                }
            }
        }        
    }


    /**
     * Runs the Examiner on a list of input letters, without any UI.
     * 
     */
    async batchRun(inputLetters, iters, allowGuessing=true)
    {
        const [wksp, rack, tmprObj, rptr] = [this.workspace, this.coderack, this.temperature, this.reporter];

        // Disable UI and repoting
        const cachedVals = {ui: this.ui, animateAnts: Params.AnimateAnts, animateShaker: Params.AnimateShaker};
        this.ui = null;
        Params.AnimateAnts = Params.AnimateShaker = false;
        rptr.warningsEnabled = rptr.infoEnabled = rptr.traceEnabled = rptr.traceDetailsEnabled = false;

        const results = {};
        let totalNumCodeletsRun = 0;

        // Loop over input letters
        for (let inputChar of Object.keys(inputLetters))
        {
            results[inputChar] = {};
            for (let iter = 0; iter < iters; iter++) 
            {
                wksp.setInputLetter( new Namespace.GridLetter(inputLetters[inputChar]) );
                this.reset();
                this._prepareForNewRun();
                this._setState('running');

                // eslint-disable-next-line no-constant-condition
                while (true) 
                {    
                    await rack.chooseAndRunCodelet();
                    tmprObj.update();

                    // Check whether we are done
                    if (this._checkForSolution()) {
                        const detectedChar = (wksp.solution.guess && !allowGuessing) ? 'fail' :  wksp.solution.wholeName[0];
                        if (!results[inputChar][detectedChar])  { results[inputChar][detectedChar] = 0; }
                        results[inputChar][detectedChar]++;
                        totalNumCodeletsRun += rack.numCodeletsRun;
                        break; 
                    }
                        
                    // Maybe update parameters
                    if ((rack.numCodeletsRun % Params.NumExamPhaseCodelets) === 0) {
                        wksp.easeSparkerParams();
                    }
                    
                    // Handle empty coderack situation
                    this._checkForEmptyCodeRack();
                }
            }
        }

        // Restore state
        this._setState('ready');
        this.ui = cachedVals.ui;
        Params.AnimateAnts = cachedVals.animateAnts;
        Params.AnimateShaker = cachedVals.animateShaker;
        
        return [results, totalNumCodeletsRun];             
    }

};

})( window.LetterSpirit = window.LetterSpirit || {} );