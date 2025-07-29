// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Params = Namespace.Params;
    const Knowledge = Namespace.Knowledge;
    const Utils = Namespace.Utils;


/**
 * @classdesc
 * The Workspace stores the state of an Examiner run in progress.
 * 
 */
 Namespace.Workspace = class {

    /**
     * @constructor
     * 
     * @param {App} app - The LetterSpirit App instance.
     */
    constructor(app) 
    { 
        this.app = app;

        // "Conceptual memory" state:
        this.parts = [];  
        this.joints = [];
        this.bindings = [];  // [{role, part, flip}, ...] 
        this.roleActivations = Object.fromEntries( Object.values(Namespace.Roles).map(r => [r.name, 0]) );
        this.wholeActivations = Object.fromEntries( Object.values(Namespace.Wholes).map(w => [w.name, 0]) );

        // Other state:
        this.inputGridLetter = null;
        this.solution = null;
        this.inputLetterGestalts = {};
        this.glueAntData = {};
        this.sparkerData = {};
        this.infoBarText = '';
        this.codeletTitleText = '';
        this.codeletMessage1 = '';
        this.codeletMessage2 = '';

        this.setInputLetter( new Namespace.GridLetter([]) );  // Calls reset
    }


    /**
     * Resets the workspace to its initial state.
     * 
     */
    reset()
    {
        // Clear the workspace
        this.solution = null;
        this.parts = [];  
        this.joints = [];
        this.bindings = [];  
        this.inputLetterGestalts = Namespace.GestaltScorer.CalcGestalts(this.inputGridLetter);
        Object.keys(this.roleActivations).forEach( r => this.roleActivations[r] = 0 );
        Object.keys(this.wholeActivations).forEach( w => this.wholeActivations[w] = 0 );
        
        this.resetMessages();
        this.infoBarText = 'Ready.';

        this.glueAntData = {
            numRedundAnts     : 0,
            numBondAnts       : 0,    
            numGlobsPlaced    : 0,
            totalGluePlaced   : 0,
            antGraphicQuantum : null
        };

        this.sparkerData = {
            sparkThreshold : Params.InitialSparkThreshold,
            punish         : Params.InitialPunish,
            punishHard     : Params.InitialPunishHard
        };
    }


    /**
     * Sets the input GridLetter (and calculates its Gestalts).
     * 
     * @param {GridLetter} gridLetter - The GridLetter to set as input.
     *  
     */
    setInputLetter(gridLetter)
    {
        this.inputGridLetter = gridLetter;
        this.reset();
    }


    /**
     * Resets all text messages.
     *
     */
    resetMessages()
    {
        this.infoBarText = '';
        this.codeletTitleText = '';
        this.codeletMessage1 = '';
        this.codeletMessage2 = '';
    }

    /**
     * Gets a joint contained in the workspace that has the same quanta as the given joint.
     * 
     */
    getUpdatedJoint(joint)
    {
        return this.joints.find(jt => jt.valueEquals(joint));
    }


    /**
     * Gets a part contained in the workspace that has the same joints as the given part.
     * 
     */
    getUpdatedPart(part)
    {
        return this.parts.find(p => p.hasSameJointsAs(part));
    }


    /**
     * Indicates whether the workspace contains a specified part.
     * The check is based only on matching part joints, not labels.
     *  
     */
    containsPart(part)
    {
        const matchingPart = this.parts.find(p => p.hasSameJointsAs(part));
        return !!matchingPart;
    }


    /**
     * Removes a specified part from the workspace.
     *
     */
    removePart(part)
    {
        this.parts = this.parts.filter(p => !p.hasSameJointsAs(part));
    }


    /**
     * Removes a specified part from the list of bindings.
     *  
     */
    unbindPart(part)
    {
        this.bindings = this.bindings.filter(b => !b.part.hasSameJointsAs(part));
    }

    
    /**
     * Calculates the current goodness of a given part.
     * 
     */
    calcPartGoodness(part)
    {
        // Check if the part is still in the workspace
        if (!this.containsPart(part)) { return 0; }

        const labelCount = part.hasLabel('**whine') ? 0 : part.numLabels();
        const partRoles = this.bindings.filter(b => b.part.hasSameJointsAs(part)).map(b => b.role);
        const partActs = partRoles.map(role => this.roleActivations[role.name]);
        const topAct = Math.max(...partActs, 0);
        return Math.min(100, (Params.LabelValue*labelCount + topAct)/2);
    }


    /**
     * Scales the sparker parameters.
     * 
     */
    easeSparkerParams()
    {
        const factor = 0.9;

        this.sparkerData.sparkThreshold *= factor;
        this.sparkerData.punish *= factor;
        this.sparkerData.punishHard *= factor;
    }


    /**
     * Calculates the current goodness of the workspace.
     * 
     */
    calcGoodness()
    {
        const parts = this.parts;
        if (parts.length === 0) { return 0; }

        const partGoodnesses = parts.map(p => this.calcPartGoodness(p));
        const rawScore = partGoodnesses.reduce((sum, rating) => sum + rating, 0) / parts.length;
        const anyWhining = parts.some(p => p.hasLabel('**whine'));
        
        let score = Math.min(100.0, rawScore);  
        if (anyWhining && (score > 20)) { score -= 20; }   // Lower the score if there are whiners
        return score;
    }


    /**
     * Finds the Whole that has the highest activation.
     * 
     */
    getBestWhole()
    {
        const wholeActivations = Object.entries(this.wholeActivations);
        let [bestWhole, bestScore] = wholeActivations.reduce(function(prev, current) {
            return (prev[1] > current[1]) ? prev : current;}); 

        if (bestScore > 99) {
            // Break ties and near-ties by looking at the sum of role activations
            const candidates = wholeActivations.filter(entry => entry[1] > 99);
            const roleActs = candidates.map(c => 
                Namespace.Wholes[c[0]].roleSet.reduce((sum, role) => sum + this.roleActivations[role.name], 0)
            );
            const indexOfMax = roleActs.reduce((iMax, val, i, arr) => (val > arr[iMax]) ? i : iMax, 0);
            bestWhole = candidates[indexOfMax][0];
        }
        
        return {wholeName: bestWhole, score: Utils.Round3(bestScore)};
    }


    /**
     * Gets the best mapping of roles to parts in the current solution. 
     *
     */
    makePartRoleMap()
    {
        if (!this.solution) { return; }
        
        const bestWhole = Namespace.Wholes[this.solution.wholeName];
        const unmappedParts = [...this.parts];
        const partRoleMap = new Map();

        if (unmappedParts.length > 0) { 
            for (let role of bestWhole.roleSet) {
                let bestRoleFiller = unmappedParts.reduce((prev, curr) => { 
                    return (Utils.CalcRoleScoreForPart(curr, role, this).score > Utils.CalcRoleScoreForPart(prev, role, this).score) ? curr : prev; });
                partRoleMap.set(bestRoleFiller, role);
                unmappedParts.splice(unmappedParts.indexOf(bestRoleFiller), 1);
                if (unmappedParts.length === 0) { break; }
            }
        }
        this.solution.partRoleMap = partRoleMap;
    }


    /**
     * Updates the activtion of currently-active wholes, based on
     * how well their roles are filled by the current parts.
     * 
     */
    rRoleCheckWholes()
    {
        // Loop over wholes
        Object.values(Namespace.Wholes).forEach(whole => 
        {
            const wRoleSet = whole.roleSet;     
            const currAct = this.wholeActivations[whole.name];
            if (currAct > 40) {
                // Compute a score based on how well the whole's roles are filled by the current parts and their bindings
                let rRolesScore = 0;
                
                // Penalize if any of the whole's roles are not filled by some part
                const boundRoles = this.bindings.map(b => b.role);
                if (!wRoleSet.every(role => boundRoles.includes(role))) {
                    rRolesScore -= Params.FilledPenalty; 
                }
                
                // Penalize if the current parts can't be mapped 1:1 to the whole's roles 
                if (this.parts.length !== wRoleSet.length) {
                    rRolesScore -= Params.CoveredPenalty;
                } 
                else {
                    const partBindings = this.parts.map(p => this.bindings.filter(b => b.part.hasSameJointsAs(p))); 
                    const partRoleNames = partBindings.map(blist => blist.map(b => b.role.name)); 
                    const cartProd = partRoleNames.reduce((acc, curr) => { return acc.flatMap(x => curr.map(y => [...x, y])); }, [[]]);
                    const wRoleNames = wRoleSet.map(r => r.name).toSorted().toString();
                    if (!cartProd.some(cp => cp.toSorted().toString() == wRoleNames)) { rRolesScore -= Params.CoveredPenalty; }
                }
                
                // Reward/penalize if the parts do/don't touch in the right way
                const roleTouchScores = wRoleSet.map(role => {
                    const roleBindings = this.bindings.filter(b => b.role === role);
                    const roleTouchTypes = roleBindings.map(b => b.part.labels).flat().filter(lbl => lbl.text == 'contact').map(lbl => lbl.data);
                    const isNormal = roleBindings.map(b => b.flip).some(f => f == 'normal');
                    const isBoth = isNormal && roleBindings.map(b => b.flip).some(f => f == 'flipped');
            
                    const contactScores = role.norms.contact[whole.name] || {};
                    const roleTouchScores2 = roleTouchTypes.map(touchType => {
                        const normalScore = contactScores[touchType] || 0;
                        const flippedScore = contactScores[ Knowledge.TipFlipMap[touchType] || touchType] || 0; 
                        return isBoth ? Math.max(normalScore, flippedScore) : isNormal ? normalScore : flippedScore;
                    });
                    return Math.max(0, ...roleTouchScores2);
                });
                const wholeTouchScore = Math.min(...roleTouchScores);
                rRolesScore += (wholeTouchScore < 1) ? -Params.TouchPenalty : wholeTouchScore;

                // Update the whole's activation
                const newAct = Math.min(100, Math.max(1, currAct + rRolesScore));
                this.wholeActivations[whole.name] = newAct;
            }
        });
        
    }

    
 };


})( window.LetterSpirit = window.LetterSpirit || {} );