// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";

/**
 * @namespace Namespace.Params 
 * @description
 * This namespace contains Letter Spirit's configuration parameters.
 */

Namespace.Params = Namespace.Params || {};

/* Diagnostics flags */
Namespace.Params.PrintTraceMessages = false;
Namespace.Params.PrintTraceDetailMessages = false;

/* Animated graphics */
Namespace.Params.AnimateAnts = true;
Namespace.Params.AnimateShaker = true;
Namespace.Params.InitialStepDelay = 50; // The pause between codelet runs, in msec

/* Codelet urgencies */
Namespace.Params.VeryHighUrgency = 100;
Namespace.Params.HighUrgency = 50;
Namespace.Params.MediumUrgency = 25;
Namespace.Params.LowUrgency = 10;

/* Whether to guess a solution once MaxCodelets is exceeded */ 
Namespace.Params.AllowGuessing = false;

/* Factor for suppressing later-generation codelets (1 means no suppression) */
Namespace.Params.GenerationGapConstant = 1;

/* Number of codelets to run in the Examiner phase */
Namespace.Params.NumExamPhaseCodelets = 800;

/* Maximum number of codelets to run overall */
Namespace.Params.MaxCodelets = 10 * Namespace.Params.NumExamPhaseCodelets;

/* Reduction factor for sparking, applied after phase */
Namespace.Params.SparkerReductionFactor = 0.9;

/* Amount of glue to put down for given angle-values (GlueAnt) */
Namespace.Params.GlueByAngle = {0:6, 45:4, 90:3, 135:1};

/* Amount of glue to put down for a given neighbor index (GlueAnt) */
Namespace.Params.GlueByNeighborIdx = Namespace.Knowledge.NeighborAngles.map(x => Namespace.Params.GlueByAngle[x]);

/* The number of glue-placing iterations (GlueAnt) */
Namespace.Params.RedundantC = 500; 

/* Avg number of quanta in a part (Shaker) */
Namespace.Params.ShakePartSize = 2.7;

/* Probability of dissolving one unit of glue (Shaker) */
Namespace.Params.SolventStrength = 0.90;

/* Number of labels attached to "finished" part */
Namespace.Params.LabelTotal = 16;

/* Value of each label */
Namespace.Params.LabelValue = 100 / Namespace.Params.LabelTotal;

/* Number of labeler codelets add at a time */
Namespace.Params.LabelerBatchSize = 10;

/* Number of gestalt codelets to add at a time */
Namespace.Params.GestaltBatchSize = 1;

/* Urgency of the initial gestalt codelets */
Namespace.Params.InitialGestaltCodeletUrgency = Namespace.Params.VeryHighUrgency;

/* Delta-whine for overlooked parts */
Namespace.Params.WhineIncrement = 10;

/* Activations above this value count towards temperature adjustments */
Namespace.Params.WholeThreshold = 51;

/* rRoleScore penalty incurred if not all roles in the whole are filled */
Namespace.Params.FilledPenalty = 50;

/* rRoleScore penalty incurred if some parts don't fill a role */
Namespace.Params.CoveredPenalty = 50;

/* rRoleScore penalty incurred if the parts don't touch in the right way */
Namespace.Params.TouchPenalty = 50;

/* Penalty for feature mis-match */
Namespace.Params.InitialPunish = -25;

/* Harsh penalty for feature mis-match */
Namespace.Params.InitialPunishHard = -40;

/* Score threshold for assigning a role to a part */
Namespace.Params.InitialSparkThreshold = 50;

/* Scale factore for normalizing feature scores */
Namespace.Params.MaxFeatureScore = 70;

/* Scale factor for normalizing topology scores */
Namespace.Params.MaxTopoScore = {segment:210, bisegment:220, loop:80, dot:80};

/* Scale factor for normalizing gestalt scores */
Namespace.Params.GestaltPerk = 20;

/* Weight used when spreading activations */
Namespace.Params.LinkWeight = 0.6;

/* Whether to enable GlueAnt and Shaker codelets */
Namespace.Params.AntsEnabled = true;


})( window.LetterSpirit = window.LetterSpirit || {} );