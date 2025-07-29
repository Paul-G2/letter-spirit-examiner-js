// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Params = Namespace.Params;
    const Utils = Namespace.Utils;
    const Label = Namespace.Label;
    

/**
 * @classdesc
 * This codelet activates roles that its part matches and then posts an activation-spreading codelet.
 * If no roles are activated, then the part is slated for breaking unless it has too few labels, 
 * in which case labeler codelets are spun.
 * 
 */
Namespace.Codelets.Sparker = class extends Namespace.Codelets.CodeletBase
{
    /**
     * @constructor
     * 
     * @param {Number} urgency - The urgency of the codelet.
     * @param {Number} generation - The generation that the codelet belongs to.
     * @param {Array} args - Arguments to pass to the codelet.
     */
    constructor(urgency, generation, args) 
    { 
        super('sparker', urgency, generation);
        this.part = args[0];
    }


    /**
     * Runs the codelet.
     */
    run(app)
    {
        const [wksp, rack, randGen, gen] = [app.workspace, app.coderack, app.randGen, this.gen];
        const Sparker = Namespace.Codelets.Sparker;

        // Display codelet info
        wksp.infoBarText = 'Recognizing...';
        wksp.codeletTitleText = 'Sparker codelet from generation ' + gen; 
        wksp.codeletMessage1 = wksp.codeletMessage2 = '';  

        // Check whether the part is still around
        const part = wksp.getUpdatedPart(this.part);
        if (!part) {
            wksp.codeletMessage1 = "Part is no longer around ... >>>fizzle<<<";
            return; 
        }
        else {
            wksp.codeletMessage1 = `Activating roles using part ${part.qidString()}`;
            if (!Sparker.ActivateRolesWithPart(part, wksp)) 
            {
                let enoughLabels = Params.LabelTotal;
                if (part.numTips() == 0) { enoughLabels -= 2; }
                if (rack.numCodeletsRun >= Params.NumExamPhaseCodelets) { enoughLabels -= 1; }

                if (part.labels.length < enoughLabels) {
                    wksp.codeletMessage2 = "No roles activated (too few labels), adding labelers.";
                    if (part.hasLabel('**whine')) {
                        part.removeLabel('**whine');
                        part.addLabel(new Label('quanta', Utils.Linearize(part.getQuantaIds(), randGen)) );
                    }
                    rack.post(3, 'labeler', Params.MediumUrgency, gen+1, [part]);
                } 
                else {
                    Sparker.DoSomething(part, gen, app);
                }
            } 
            else 
            {                
                if ((rack.numCodeletsRun > 25000) && (randGen.nSidedDie(100) <= 30)) {
                    app.smartParser.run();
                } 
                else {
                    // Decide to break/glom or do nothing
                    const partRoleActivations = wksp.bindings.filter(b => b.part.hasSameJointsAs(part)).map(b => wksp.roleActivations[b.role.name]);
                    const prob = 55 - Math.max(0, ...partRoleActivations);
                    const roll = randGen.nSidedDie(100);
                    if ((prob >= 0) && (roll <= prob)) {
                        if (part.numQuanta() <= (randGen.nSidedDie(5) + 1)) {
                            wksp.codeletMessage1 = "Spinning top-down glommer";
                            rack.post(1, 'top-down-glommer', Params.HighUrgency + prob, gen+1, [part]);
                        } 
                        else {
                            wksp.codeletMessage1 = "Spinning top-down breaker";
                            rack.post(1, 'top-down-breaker', Params.HighUrgency + prob, gen+1, [part]);
                        }
                    } 
                    else {
                        wksp.codeletMessage1 = "Spinning activation-spreader";
                        rack.post(1, 'spreader', Params.HighUrgency, gen+1);
                    }
                }
            }
        }
    }

    
    /**
     * Updates the activations of the roles that the part potentially fills.
     * 
     */
    static ActivateRolesWithPart(part, wksp) 
    {
        const activatedRoles = Object.values(Namespace.Roles).filter(role => wksp.roleActivations[role.name] > 0);
        const allRolesInfo = activatedRoles.map(role => Utils.CalcRoleScoreForPart(part, role, wksp));
        const sparkInfos = allRolesInfo.filter(item => item.score >= wksp.sparkerData.sparkThreshold);

        wksp.unbindPart(part);
        sparkInfos.forEach(sparkInfo => {
            wksp.bindings.push( {role:sparkInfo.role, part:part, flip:sparkInfo.flip} );
            wksp.roleActivations[sparkInfo.role.name] = sparkInfo.score;
        });

        return (sparkInfos.length > 0);
    }


    /**
     * This function is called when we seem to be at a dead end. 
     * It randomly decides to break, glom or re-parse
     *
     */
    static DoSomething(part, gen, app) 
    {
        let choice = app.randGen.choice(['break', 'glom', 'smartparse']);
        switch (choice) {
            case 'break':
                app.workspace.codeletMessage2 = "No roles activated, Breaker spun.";
                app.coderack.post(1, 'breaker', Params.HighUrgency, gen+1, [part]);
                break;
                
            case 'glom':
                app.workspace.codeletMessage2 = "No roles activated, Glommer spun.";
                app.coderack.post(1, 'top-down-glommer', Params.HighUrgency, gen+1, [part]);
                break;
                
            default: 
                app.workspace.codeletMessage2 = "No roles activated, Reparsing.";
                app.smartParser.run();
                break;
        }
    }


};

})( window.LetterSpirit = window.LetterSpirit || {} );