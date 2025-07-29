// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";

/**
 * @namespace Namespace.Knowledge
 * @description
 * Predefined "knowledge" about the Letter Spirit domain.
 * 
 */
Namespace.Knowledge = Namespace.Knowledge || {};

/* The letter categories */ 
Namespace.Knowledge.LetterCategories = 
['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


/**  
 * @public
 * @description
 * Mapping from pointIds [1-21] to the quantum-ids that touch that point. 
 */
Namespace.Knowledge.PointList = {
    1 : [0, 44, 14],
    2 : [14, 32, 2, 46, 17],
    3 : [17, 34, 4, 48, 20],
    4 : [20, 36, 6, 50, 23],
    5 : [23, 38, 8, 52, 26],
    6 : [26, 40, 10, 54, 29],
    7 : [29, 42, 12],
    8 : [1, 45, 15, 32, 0],
    9 : [2, 44, 15, 33, 3, 47, 18, 34],
    10 : [4, 46, 18, 35, 5, 49, 21, 36],
    11 : [6, 48, 21, 37, 7, 51, 24, 38],
    12 : [8, 50, 24, 39, 9, 53, 27, 40],
    13 : [10, 52, 27, 41, 11, 55, 30, 42],
    14 : [12, 54, 30, 43, 13],
    15 : [16, 33, 1],
    16 : [16, 45, 3, 35, 19],
    17 : [19, 47, 5, 37, 22],
    18 : [22, 49, 7, 39, 25],
    19 : [25, 51, 9, 41, 28],
    20 : [28, 53, 11, 43, 31],
    21 : [31, 55, 13]
};
   

/**  
 * Each quantum has 14 possible connecting quanta, 7 "above" and 7 "below".
 *  These quanta are numbered 1..14 starting above and moving clockwise.
 *       4 and 11 are straight
 *       3, 5, 10 and 12 are 45 off
 *       2, 6, 9 and 13 are 90 off
 *       1, 7, 8 and 14 are 135 off
 * the four types are all different, but they have the same relative offshoot angles.
 *
 * The following table gives a list of neighbors of all quanta in (above, below, clockwise) order.
 * 
 * @public
 * @description
 * A Table givind the list of neighbors for each quantum.
 */
Namespace.Knowledge.QuantaNeighbors = 
[
    [null,null,null,1,45,15,32,44,14,null,null,null,null,null],
    [null,null,null,null,null,16,33,45,15,32,0,null,null,null],
    [44,15,33,3,47,18,34,46,17,null,null,null,14,32],
    [45,16,null,null,null,19,35,47,18,34,2,44,15,33],
    [46,18,35,5,49,21,36,48,20,null,null,null,17,34],
    [47,19,null,null,null,22,37,49,21,36,4,46,18,35],
    [48,21,37,7,51,24,38,50,23,null,null,null,20,36],
    [49,22,null,null,null,25,39,51,24,38,6,48,21,37],
    [50,24,39,9,53,27,40,52,26,null,null,null,23,38],
    [51,25,null,null,null,28,41,53,27,40,8,50,24,39],
    [52,27,41,11,55,30,42,54,29,null,null,null,26,40],
    [53,28,null,null,null,31,43,55,30,42,10,52,27,41],
    [54,30,43,13,null,null,null,null,null,null,null,null,29,42],
    [55,31,null,null,null,null,null,null,null,null,12,54,30,43],
    [null,null,null,null,null,0,44,32,2,46,17,null,null,null],
    [32,0,null,null,null,1,45,33,3,47,18,34,2,44],
    [33,1,null,null,null,null,null,null,null,null,19,35,3,45],
    [null,null,null,14,32,2,46,34,4,48,20,null,null,null],
    [34,2,44,15,33,3,47,35,5,49,21,36,4,46],
    [35,3,45,16,null,null,null,null,null,null,22,37,5,47],
    [null,null,null,17,34,4,48,36,6,50,23,null,null,null],
    [36,4,46,18,35,5,49,37,7,51,24,38,6,48],
    [37,5,47,19,null,null,null,null,null,null,25,39,7,49],
    [null,null,null,20,36,6,50,38,8,52,26,null,null,null],
    [38,6,48,21,37,7,51,39,9,53,27,40,8,50],
    [39,7,49,22,null,null,null,null,null,null,28,41,9,51],
    [null,null,null,23,38,8,52,40,10,54,29,null,null,null],
    [40,8,50,24,39,9,53,41,11,55,30,42,10,52],
    [41,9,51,25,null,null,null,null,null,null,31,43,11,53],
    [null,null,null,26,40,10,54,42,12,null,null,null,null,null],
    [42,10,52,27,41,11,55,43,13,null,null,null,12,54],
    [43,11,53,28,null,null,null,null,null,null,null,null,13,55],
    [0,null,null,null,1,45,15,2,46,17,null,null,null,14],
    [1,null,null,null,null,null,16,3,47,18,34,2,44,15],
    [2,44,15,33,3,47,18,4,48,20,null,null,null,17],
    [3,45,16,null,null,null,19,5,49,21,36,4,46,18],
    [4,46,18,35,5,49,21,6,50,23,null,null,null,20],
    [5,47,19,null,null,null,22,7,51,24,38,6,48,21],
    [6,48,21,37,7,51,24,8,52,26,null,null,null,23],
    [7,49,22,null,null,null,25,9,53,27,40,8,50,24],
    [8,50,24,39,9,53,27,10,54,29,null,null,null,26],
    [9,51,25,null,null,null,28,11,55,30,42,10,52,27],
    [10,52,27,41,11,55,30,12,null,null,null,null,null,29],
    [11,53,28,null,null,null,31,13,null,null,null,12,54,30],
    [14,null,null,null,null,null,0,15,33,3,47,18,34,2],
    [15,32,0,null,null,null,1,16,null,null,null,19,35,3],
    [17,null,null,null,14,32,2,18,35,5,49,21,36,4],
    [18,34,2,44,15,33,3,19,null,null,null,22,37,5],
    [20,null,null,null,17,34,4,21,37,7,51,24,38,6],
    [21,36,4,46,18,35,5,22,null,null,null,25,39,7],
    [23,null,null,null,20,36,6,24,39,9,53,27,40,8],
    [24,38,6,48,21,37,7,25,null,null,null,28,41,9],
    [26,null,null,null,23,38,8,27,41,11,55,30,42,10],
    [27,40,8,50,24,39,9,28,null,null,null,31,43,11],
    [29,null,null,null,26,40,10,30,43,13,null,null,null,12],
    [30,42,10,52,27,41,11,31,null,null,null,null,null,13]
];
    

/** 
 * @public
 * @description 
 * The angle made by each neighbor with respect to their reference quantum 
 */
Namespace.Knowledge.NeighborAngles = 
    [135, 90, 45, 0, 45, 90, 135, 135, 90, 45, 0, 45, 90, 135];



/** 
 * @public
 * @description 
 * The quanta that lie in each of the 12 squares of the letter grid 
 */
Namespace.Knowledge.QuantaBySquare = 
[
    [0, 2, 14, 15, 32, 44],
    [1, 3, 15, 16, 33, 45],
    [17, 18, 2, 34, 46],
    [18, 19, 3, 35, 47],
    [20, 21, 4, 6, 36, 48],
    [21, 22, 5, 7, 37, 49],
    [23, 24, 6, 8, 38, 50],
    [24, 25, 7, 9, 39, 51],
    [26, 27, 10, 40, 52],
    [27, 28, 11, 41, 53],
    [29, 30, 10, 12, 42, 54],
    [30, 31, 11, 13, 43, 55]
];


/** 
 * @public
 * @description 
 * The quanta that are on the left of the letter grid 
 */
Namespace.Knowledge.LeftQuanta = 
    [0, 2, 4, 6, 8, 10, 12, 14, 17, 20, 23, 26, 29, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54];


/** 
 * @public
 * @description 
 * The quanta that are in the middle of the letter grid 
 */    
Namespace.Knowledge.MiddleQuanta = 
    [0, 2, 4, 6, 8, 10, 12, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 1, 3, 5, 7, 9, 11, 13, 
        33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 15, 18, 21, 24, 27, 30];


/** 
 * @public
 * @description 
 * The quanta that are on the right of the letter grid 
 */
Namespace.Knowledge.RightQuanta = 
    [1, 3, 5, 7, 9, 11, 13, 16, 19, 22, 25, 28, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55];

    
/** 
 * @public
 * @description 
 * Quanta grouped by vertical position in the letter grid 
 */
Namespace.Knowledge.VertQuanta = [
    [12, 13, 29, 42, 54, 30, 43, 55, 31],
    [10, 11, 29, 42, 54, 30, 43, 55, 31, 26, 40, 52, 27, 41, 53, 28],
    [8, 9, 26, 40, 52, 27, 41, 53, 28, 23, 38, 50, 24, 39, 51, 25],
    [6, 7, 23, 38, 50, 24, 39, 51, 25, 20, 36, 48, 21, 37, 49, 22],
    [4, 5, 20, 36, 48, 21, 37, 49, 22, 17, 34, 46, 18, 35, 47, 19],
    [2, 3, 17, 34, 46, 18, 35, 47, 19, 14, 32, 44, 15, 33, 45, 16],
    [0, 1, 14, 32, 44, 15, 33, 45, 16]
];


/** 
 * @public
 * @description 
 * Mid-quanta touching: Two quanta can cross without sharing tips in common, e.g. #32 and #44 
 */
Namespace.Knowledge.MidQuantaTouchMap = {
    32:44, 33:45, 34:46, 35:47, 36:48, 37:49, 38:50,
	39:51, 40:52, 41:53, 42:54, 43:55, 44:32, 45:33,
	46:34, 47:35, 48:36, 49:37, 50:38, 51:39, 52:40,
	53:41, 54:42, 55:43
};


/** 
 * @public
 * @description 
 * Groups of quanta that potentially form a tip 
 */
Namespace.Knowledge.TipGroups = 
[
    [0, 14, 44],
    [14, 32, 2, 46, 17],
    [17, 34, 4, 48, 20],
    [20, 36, 6, 50, 23],
    [23, 38, 8, 52, 26],
    [26, 40, 10, 54, 29],
    [29, 42, 12],
    [0, 1, 15, 32, 45],
    [15, 33, 3, 47, 18, 34, 2, 44],
    [18, 35, 5, 49, 21, 36, 4, 46],
    [21, 37, 7, 51, 24, 38, 6, 48],
    [24, 39, 9, 53, 27, 40, 8, 50],
    [27, 41, 11, 55, 30, 42, 10, 52],
    [12, 13, 54, 30, 43],
    [1, 33, 16],
    [16, 45, 3, 35, 19],
    [19, 47, 5, 37, 22],
    [22, 49, 7, 39, 25],
    [25, 51, 9, 41, 28],
    [28, 53, 11, 43, 31],
    [31, 55, 13]
];


/** 
 * @public
 * @description 
 * Mapping of the TipGroups to the 12 squares of the letter grid 
 */
Namespace.Knowledge.TipGroupsBySquare = 
[
    [0, 1, 7, 8],
    [7, 8, 14, 15],
    [1, 2, 8, 9],
    [8, 9, 15, 16],
    [2, 3, 9, 10],
    [9, 10, 16, 17],
    [3, 4, 10, 11],
    [10, 11, 17, 18],
    [4, 5, 11, 12],
    [11, 12, 18, 19],
    [5, 6, 12, 13],
    [12, 13, 19, 20]
];


/**
 * Blurred prototypes created over the entire PSYCH data set (NORMALS+FONTS)
 * This is made by adding all vectors in a letter category and dividing by
 * the total number of tokens.  The result is a 56-d vector with a value
 * for each quantum representing its strength.
 *
 * @public
 * @description 
 * Blurred prototypes
 */
Namespace.Knowledge.BlurredPrototypes = {
    a : [0, 0, 0, 0, 0.579, 0.421, 0.579, 0.474, 0.684, 0.368, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.053, 0, 0.474, 0.316, 0.053, 0.789, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.211, 0.263, 0.421, 0.632, 0, 0, 0, 0, 0, 0, 0, 0, 0.105, 0.421, 0.368, 0.158, 0, 0, 0, 0],
    b : [0, 0, 0, 0, 0.556, 0.333, 0.056, 0.056, 0.444, 0.556, 0, 0, 0, 0, 0.833, 0.056, 0, 1.000, 0, 0, 0.944, 0, 0.444, 0.722, 0.056, 0.500, 0, 0, 0, 0, 0, 0, 0.056, 0, 0, 0, 0.222, 0.111, 0.167, 0.389, 0, 0, 0, 0, 0.056, 0, 0, 0, 0.056, 0.500, 0.556, 0.056, 0, 0, 0, 0],
    c : [0, 0, 0, 0, 0.312, 0.562, 0.062, 0, 0.312, 0.562, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.312, 0, 0, 0.250, 0, 0.188, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.562, 0.062, 0.062, 0.312, 0, 0, 0, 0, 0, 0, 0, 0, 0.125, 0.188, 0.562, 0.188, 0, 0, 0, 0],
    d : [0, 0, 0, 0, 0.368, 0.579, 0.053, 0.053, 0.474, 0.474, 0, 0, 0, 0, 0, 0.053, 0.842, 0, 0, 1.000, 0.368, 0, 0.947, 0.421, 0.053, 0.737, 0, 0, 0, 0, 0, 0, 0, 0.053, 0, 0, 0.526, 0.053, 0.053, 0.474, 0, 0, 0, 0, 0, 0.053, 0, 0, 0.105, 0.263, 0.421, 0.158, 0, 0, 0, 0],
    e : [0, 0, 0, 0, 0.455, 0.682, 0.500, 0.500, 0.455, 0.591, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.409, 0, 0.273, 0.455, 0, 0.045, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.500, 0.545, 0.227, 0.273, 0, 0, 0, 0, 0, 0, 0, 0, 0.182, 0.318, 0.409, 0.091, 0, 0, 0, 0],
    f : [0.059, 0.235, 0.118, 0.118, 0.706, 0.647, 0, 0, 0, 0, 0, 0, 0, 0, 0.118, 0.412, 0.176, 0.118, 0.588, 0, 0.059, 0.824, 0, 0.059, 0.824, 0, 0, 0, 0, 0, 0, 0, 0.118, 0.294, 0, 0.059, 0.235, 0, 0, 0, 0, 0, 0, 0, 0.059, 0.353, 0.235, 0.118, 0.059, 0.176, 0.118, 0.059, 0, 0, 0, 0],
    g : [0, 0, 0, 0, 0.381, 0.476, 0.048, 0.048, 0.429, 0.429, 0, 0, 0.286, 0.286, 0, 0, 0, 0, 0, 0, 0.333, 0.048, 0.762, 0.429, 0, 0.952, 0, 0, 0.952, 0.143, 0.048, 0.333, 0, 0, 0, 0, 0.571, 0.095, 0.095, 0.381, 0.048, 0.048, 0, 0.524, 0, 0, 0, 0, 0.048, 0.524, 0.429, 0.095, 0, 0.095, 0.429, 0.048],
    h : [0, 0, 0, 0, 0.400, 0.267, 0, 0, 0.067, 0.067, 0, 0, 0, 0, 0.733, 0.067, 0, 1.000, 0, 0, 0.933, 0.200, 0.400, 0.667, 0.200, 0.800, 0, 0, 0, 0, 0, 0, 0.133, 0, 0, 0, 0.400, 0.133, 0.200, 0.067, 0, 0, 0, 0, 0.067, 0, 0, 0, 0.067, 0.400, 0.267, 0.133, 0, 0, 0, 0],
    i : [0.048, 0, 0.190, 0, 0.429, 0, 0.048, 0, 0, 0.048, 0, 0, 0, 0, 0, 0.095, 0, 0.095, 0.048, 0, 0.190, 0.667, 0, 0.238, 0.571, 0.048, 0, 0, 0, 0, 0, 0, 0.381, 0, 0.143, 0, 0.190, 0, 0.190, 0, 0, 0, 0, 0, 0.286, 0, 0.048, 0.048, 0.095, 0, 0.048, 0.048, 0, 0, 0, 0],
    j : [0.069, 0.034, 0.138, 0.069, 0.345, 0.172, 0.034, 0, 0, 0, 0, 0, 0.103, 0.069, 0.034, 0.103, 0, 0.034, 0.034, 0, 0, 0.690, 0.138, 0.034, 0.724, 0.172, 0, 0.724, 0.207, 0.069, 0.379, 0.034, 0.310, 0.138, 0.172, 0, 0.172, 0, 0, 0, 0.034, 0, 0.345, 0.138, 0.207, 0.034, 0.034, 0.034, 0.069, 0.034, 0.034, 0.034, 0.034, 0.034, 0.379, 0],
    k : [0, 0, 0, 0, 0.211, 0.263, 0.421, 0.263, 0.053, 0.158, 0, 0, 0, 0, 0.789, 0.053, 0, 1.000, 0, 0, 0.842, 0.105, 0.105, 0.789, 0.105, 0.211, 0, 0, 0, 0, 0, 0, 0.105, 0, 0, 0, 0.211, 0.579, 0.211, 0.053, 0, 0, 0, 0, 0.053, 0, 0, 0, 0.316, 0.158, 0.211, 0.632, 0, 0, 0, 0],
    l : [0.188, 0.062, 0, 0, 0, 0, 0, 0, 0.062, 0.125, 0, 0, 0, 0, 0.188, 0.688, 0, 0.312, 0.688, 0, 0.250, 0.688, 0, 0.062, 0.688, 0.062, 0, 0, 0, 0, 0, 0, 0.188, 0, 0, 0, 0, 0, 0.125, 0.188, 0, 0, 0, 0, 0.062, 0, 0, 0, 0.062, 0, 0.188, 0.125, 0, 0, 0, 0],
    m : [0, 0, 0, 0, 0.280, 0.240, 0.040, 0.040, 0.040, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.480, 0.640, 0.600, 0.840, 0.680, 0.880, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.480, 0.400, 0.040, 0.080, 0, 0, 0, 0, 0, 0, 0, 0, 0.360, 0.360, 0.120, 0.040, 0, 0, 0, 0],
    n : [0, 0, 0, 0, 0.353, 0.353, 0, 0, 0.059, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.471, 0.176, 0.412, 0.706, 0.235, 0.824, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.471, 0.118, 0.118, 0.059, 0, 0, 0, 0, 0, 0, 0, 0, 0.176, 0.412, 0.176, 0.118, 0, 0, 0, 0],
    o : [0, 0, 0, 0, 0.500, 0.450, 0.050, 0, 0.450, 0.500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.400, 0.100, 0.450, 0.400, 0, 0.550, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.300, 0.150, 0.250, 0.300, 0, 0, 0, 0, 0, 0, 0, 0, 0.200, 0.400, 0.350, 0.150, 0, 0, 0, 0],
    p : [0, 0, 0, 0, 0.433, 0.367, 0.067, 0.100, 0.600, 0.367, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.600, 0.100, 0.533, 0.833, 0.033, 0.400, 0.967, 0, 0, 0.833, 0.033, 0, 0, 0, 0, 0, 0.367, 0.167, 0.233, 0.500, 0, 0, 0.067, 0, 0, 0, 0, 0, 0.133, 0.400, 0.267, 0.100, 0.033, 0, 0.067, 0],
    q : [0, 0, 0, 0, 0.300, 0.500, 0.133, 0.033, 0.567, 0.500, 0, 0, 0.033, 0.200, 0, 0, 0, 0, 0, 0, 0.333, 0.133, 0.767, 0.433, 0.067, 0.867, 0, 0.033, 0.867, 0, 0.100, 0.600, 0, 0, 0, 0, 0.433, 0.200, 0.267, 0.400, 0, 0.100, 0.033, 0.300, 0, 0, 0, 0, 0.033, 0.367, 0.267, 0.100, 0, 0, 0, 0.033],
    r : [0, 0, 0, 0, 0.200, 0.600, 0.050, 0.100, 0.050, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.500, 0.050, 0.350, 0.700, 0.150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.650, 0.250, 0.100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.100, 0.350, 0.100, 0.050, 0, 0, 0, 0],
    s : [0, 0, 0, 0, 0.500, 0.455, 0.545, 0.455, 0.682, 0.636, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.227, 0.091, 0.091, 0.091, 0, 0.182, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.273, 0.091, 0.091, 0.318, 0, 0, 0, 0, 0, 0, 0, 0, 0.273, 0.364, 0.227, 0.455, 0, 0, 0, 0],
    t : [0, 0, 0, 0, 0.611, 0.833, 0, 0.056, 0.111, 0.222, 0, 0, 0, 0, 0, 0.056, 0, 0.056, 0.889, 0, 0.111, 0.833, 0, 0, 0.611, 0.222, 0, 0, 0, 0, 0, 0, 0, 0, 0.111, 0, 0.278, 0, 0.111, 0.333, 0, 0, 0, 0, 0, 0, 0.056, 0, 0.056, 0, 0.111, 0.222, 0, 0, 0, 0],
    u : [0, 0, 0, 0, 0, 0.048, 0, 0.048, 0.619, 0.286, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.619, 0.286, 0.667, 0.476, 0.143, 0.762, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.143, 0.048, 0.286, 0.476, 0, 0, 0, 0, 0, 0, 0, 0, 0.095, 0.190, 0.286, 0.095, 0, 0, 0, 0],
    v : [0, 0, 0, 0, 0, 0.048, 0.095, 0.095, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.476, 0.190, 0.429, 0.190, 0.333, 0.143, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.238, 0.286, 0.190, 0.476, 0, 0, 0, 0, 0, 0, 0, 0, 0.286, 0.190, 0.524, 0.143, 0, 0, 0, 0],
    w : [0, 0, 0, 0, 0, 0.037, 0, 0, 0.370, 0.259, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.852, 0.556, 0.852, 0.593, 0.741, 0.593, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.111, 0.037, 0.370, 0.333, 0, 0, 0, 0, 0, 0, 0, 0, 0.037, 0.111, 0.407, 0.333, 0, 0, 0, 0],
    x : [0, 0, 0, 0, 0.263, 0.158, 0.053, 0.053, 0.211, 0.211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.263, 0.474, 0.263, 0.053, 0.211, 0.263, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.211, 0.842, 0.895, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.526, 0.211, 0.053, 0.789, 0, 0, 0, 0],
    y : [0, 0, 0, 0, 0.037, 0.037, 0.074, 0, 0.407, 0.333, 0, 0, 0.444, 0.111, 0, 0, 0, 0, 0, 0, 0.704, 0.148, 0.815, 0.370, 0.074, 0.926, 0.074, 0, 0.889, 0.296, 0.037, 0.148, 0, 0, 0, 0, 0.111, 0.037, 0.111, 0.556, 0.037, 0.111, 0.185, 0.667, 0, 0, 0, 0, 0.148, 0.111, 0.370, 0.148, 0, 0.074, 0.259, 0.037],
    z : [0, 0, 0, 0, 0.438, 0.688, 0, 0.125, 0.938, 0.750, 0, 0.062, 0, 0, 0, 0, 0, 0, 0, 0, 0.375, 0.062, 0, 0, 0, 0.188, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.312, 0.750, 0.875, 0.250, 0, 0, 0, 0, 0, 0, 0, 0, 0.125, 0.062, 0.062, 0.125, 0.062, 0, 0, 0]
};


/** 
 * This table contains, for each letter of the alphabet, 
 * the average number of quanta that lie in each square of the letter grid.
 * (The average is taken over the fonts of the PSYCH data set) 
 * 
 * @public
 * @description 
 * The average number of quanta that lie in each square of the letter grid.
 */
 Namespace.Knowledge.SquarePrototypes = {
    a : [0, 0, 0, 0, 1.53, 2.05, 2.42, 2.47, 0, 0, 0, 0],
    b : [1, 0.06, 1, 0, 1.83, 1.44, 2, 1.61, 0, 0, 0, 0],
    c : [0, 0, 0, 0, 1.38, 0.81, 1.25, 1.25, 0, 0, 0, 0],
    d : [0.05, 1, 0, 1, 1.42, 1.9, 1.48, 1.95, 0, 0, 0, 0],
    e : [0, 0, 0, 0, 2.05, 2.32, 2.05, 1.5, 0, 0, 0, 0],
    f : [0.88, 1.59, 1.06, 0.88, 1.88, 1.65, 1, 0.88, 0, 0, 0, 0],
    g : [0, 0, 0, 0, 1.43, 1.95, 1.43, 1.91, 0.05, 1.1, 0.91, 1.24],
    h : [1, 0.07, 1, 0, 2, 1.4, 1.4, 1.27, 0, 0, 0, 0],
    i : [1, 0.1, 0.52, 0.1, 1.62, 0.67, 1.1, 0.72, 0, 0, 0, 0],
    j : [0.86, 0.38, 0.41, 0.14, 1.31, 1.03, 0.83, 0.93, 0.79, 0.97, 1.28, 0.62],
    k : [1, 0.05, 1, 0, 2.11, 1.47, 1.79, 1.42, 0, 0, 0, 0],
    l : [1.31, 0.75, 1, 0.69, 1, 0.69, 1.13, 1.19, 0, 0, 0, 0],
    m : [0, 0, 0, 0, 2.28, 2.28, 1.76, 1.72, 0, 0, 0, 0],
    n : [0, 0, 0, 0, 1.65, 1.47, 1.29, 1.24, 0, 0, 0, 0],
    o : [0, 0, 0, 0, 1.55, 1.55, 1.5, 1.5, 0, 0, 0, 0],
    p : [0, 0, 0, 0, 1.7, 1.67, 2.03, 1.5, 1, 0, 1, 0.03],
    q : [0, 0, 0, 0, 1.37, 2, 1.73, 1.97, 0.03, 1, 0.17, 1.23],
    r : [0, 0, 0, 0, 1.55, 1.7, 1.15, 0.3, 0, 0, 0, 0],
    s : [0, 0, 0, 0, 1.91, 1.55, 1.64, 2.05, 0, 0, 0, 0],
    t : [0.06, 0.06, 1.11, 0.89, 1.89, 1.72, 0.94, 1.67, 0, 0, 0, 0],
    u : [0, 0, 0, 0, 1.14, 1.29, 1.81, 1.81, 0, 0, 0, 0],
    v : [0, 0, 0, 0, 1.29, 1.24, 1.33, 1.19, 0, 0, 0, 0],
    w : [0, 0, 0, 0, 1.56, 1.59, 2.48, 2.26, 0, 0, 0, 0],
    x : [0, 0, 0, 0, 1.79, 2, 1.48, 1.53, 0, 0, 0, 0],
    y : [0, 0, 0, 0, 1.22, 1.15, 1.41, 2.04, 0.11, 1.07, 1.22, 1],
    z : [0, 0, 0, 0, 1.31, 1.69, 1.88, 1.44, 0.06, 0.06, 0, 0.06]
};


/**
 * This table contains, for each letter of the alphabet, and each of the
 * twelve grid cells, the average number of tips that lie in that cell.
 * The average is taken over the fonts of the PSYCH data set.
 * 
 * @public
 * @description 
 * The average number of tips that lie in each square of the letter grid.
 */
Namespace.Knowledge.TipPrototypes = {
    a : [0, 0, 0.684, 0.053, 1.053, 0.211, 0.421, 0.632, 0.526, 0, 0, 0],
    b : [1, 0.111, 0.278, 0.167, 0.056, 0.056, 0.389, 0, 0.389, 0.111, 0, 0],
    c : [0, 0, 0.125, 0.75, 0.25, 1.438, 0.125, 1.25, 0.562, 0, 0, 0],
    d : [0.105, 1, 0.158, 0.947, 0.053, 0.053, 0, 0.316, 0.316, 0.105, 0, 0],
    e : [0, 0, 0, 0.045, 0.091, 0.455, 0.091, 1.045, 0.636, 0, 0, 0],
    f : [0, 0.941, 0.588, 1.118, 0.824, 0.941, 1.118, 1.059, 0.118, 0.824, 0, 0],
    g : [0, 0, 0, 0.381, 0, 0.381, 0.095, 0.095, 0.524, 0.238, 0.952, 0.19],
    h : [1, 0.2, 0.267, 0.133, 0, 0.067, 1, 1.133, 1.4, 0.533, 0, 0],
    i : [1.0, 0.952, 1.0, 1.4, 1.143, 0.524, 1.048, 0.571, 0.476, 1.429, 0, 0],
    j : [1.483, 1.103, 1.897, 1.241, 1.103, 0.552, 0.207, 0.069, 0.414, 0.966, 0.931, 0.140],
    k : [1, 0.158, 0.263, 0.895, 0.053, 1.053, 0.842, 1.263, 1.632, 0.263, 0, 0],
    l : [0.938, 0.5, 0.375, 0.25, 0.062, 0.312, 0.562, 0.875, 0.312, 0.812, 0, 0],
    m : [0, 0, 0.28, 0.04, 0.48, 0.24, 1.88, 1.88, 1.84, 0.76, 0, 0],
    n : [0, 0, 0.353, 0.059, 0.471, 0.176, 1.176, 1.118, 1.706, 0.176, 0, 0],
    o : [0, 0, 0.1, 0.05, 0.15, 0.05, 0.05, 0, 0, 0, 0, 0],
    p : [0, 0, 0.267, 0, 0.333, 0, 0.1, 0.033, 0.067, 0.1, 1, 0.1],
    q : [0, 0, 0, 0.233, 0.033, 0.267, 0.067, 0.067, 0.167, 0.067, 0.067, 0.272],
    r : [0, 0, 0.45, 0.45, 0.7, 1.05, 1.2, 0.75, 0.9, 0.1, 0, 0],
    s : [0, 0, 0.136, 0.682, 0.318, 1, 1, 0.364, 0.773, 0.045, 0, 0],
    t : [1, 0.889, 1.667, 1.722, 0.889, 1.389, 0.444, 1, 0.222, 1.167, 0, 0],
    u : [0, 0, 1.190, 1.238, 1.238, 1.286, 0.143, 0.619, 0.476, 0.095, 0, 0],
    v : [0, 0, 1.238, 1.238, 1.238, 1.238, 0, 0, 0, 0, 0, 0],
    w : [0, 0, 1.556, 1.593, 1.889, 1.926, 0.370, 0.370, 0, 0.037, 0, 0],
    x : [0, 0, 0.737, 0.842, 1.263, 1.211, 1.526, 1.368, 1.474, 0.263, 0, 0],
    y : [0, 0, 0.926, 1, 1.074, 1.074, 0.259, 0.111, 0.519, 0.259, 0.889, 0.259],
    z : [0, 0, 0.5, 0.25, 1, 0.75, 0.5, 1.062, 0.625, 0, 0, 0.062]
};


/** 
 * @public
 * @description 
 * A table indicating, for each letter, whether it has a closed loop.
 *
 */
Namespace.Knowledge.ClosurePrototypes = {
    a : 1, b : 1, c : 0, d : 1, e : 1, f : 0, g : 1, h : 0, i : 0, j : 0, k : 0, l : 0, m : 0, 
    n : 0, o : 1, p : 1, q : 1, r : 0, s : 0, t : 0, u : 0, v : 0, w : 0, x : 0, y : 0, z : 0
};


/** 
 * @public
 * @description 
 * A table indicating, for each letter, whether it has an ascender.
 *
 */
Namespace.Knowledge.AscendPrototypes = {
    a : 0, b : 1, c : 0, d : 1, e : 0, f : 1, g : 0, h : 1, i : 1, j : 1, k : 1, l : 1, m : 0,
    n : 0, o : 0, p : 0, q : 0, r : 0, s : 0, t : 1, u : 0, v : 0, w : 0, x : 0, y : 0, z : 0
};


/** 
 * @public
 * @description 
 * A table indicating, for each letter, whether it has a descender.
 *
 */
Namespace.Knowledge.DescendPrototypes = {
    a : 0, b : 0, c : 0, d : 0, e : 0, f : 0, g : 1, h : 0, i : 0, j : 1, k : 0, l : 0, m : 0,
    n : 0, o : 0, p : 1, q : 1, r : 0, s : 0, t : 0, u : 0, v : 0, w : 0, x : 0, y : 1, z : 0
};


/** 
 * @public
 * @description 
 * A mapping of tip types to their flipped versions.
 *
 */
Namespace.Knowledge.TipFlipMap = {
    "n"  : "s",
    "ne" : "sw",
    "e"  : "w",
    "se" : "nw",
    "s"  : "n",
    "sw" : "ne",
    "w"  : "e",
    "nw" : "se",
    "full_right" : "full_left",
    "full_left" : "full_right",
    "strong_right" : "strong_left",
    "square_right" : "square_left",
    "slight_right" : "slight_left",
    "strong_left" : "strong_right",
    "square_left" : "square_right",
    "slight_left" : "slight_right",
    "curve1" : "curve2",
    "curve2" : "curve1",
    "t1" : "t2",
    "t2" : "t1",
    "t1m" : "mt2",
    "mt2" : "t1m"
};
    

/** 
 * @public
 * @description 
 * Curve types.
 */
Namespace.Knowledge.CurvesList = [    
    "full_left", "strong_left", "square_left", "slight_left",
	"straight",
	"slight_right", "square_right", "strong_right", "full_right",
     "closure", 
];


//
//  A picture of the letter grid:
//
//     1----[0]----8----[1]----15
//     |\         /|\         /|
//     | \       / | \       / |
//     |  \     /  |  \     /  |
//     |   \   /   |   \   /   |   
//     |    \ /    |    \ /    | 
//   [14]    0    [15]   1    [16]   
//     |    / \    |    / \    |
//     |   /   \   |   /   \   |
//     | [32] [44] | [33] [45] |
//     | /       \ | /       \ |
//     |/         \|/         \|
//     2----[2]----9----[3]----16
//     |\         /|\         /|
//     | \       / | \       / |
//     |  \     /  |  \     /  |
//     |   \   /   |   \   /   |   
//     |    \ /    |    \ /    | 
//   [17]    2    [18]   3    [19]   
//     |    / \    |    / \    |
//     |   /   \   |   /   \   |
//     | [34] [46] | [35] [47] |
//     | /       \ | /       \ |
//     |/         \|/         \|
//     3----[4]---10----[5]----17
//     |\         /|\         /|
//     | \       / | \       / |
//     |  \     /  |  \     /  |
//     |   \   /   |   \   /   |   
//     |    \ /    |    \ /    | 
//   [20]    4    [21]   5    [22]   
//     |    / \    |    / \    |
//     |   /   \   |   /   \   |
//     | [36] [48] | [37] [49] |
//     | /       \ | /       \ |
//     |/         \|/         \|
//     4----[6]---11----[7]----18
//     |\         /|\         /|
//     | \       / | \       / |
//     |  \     /  |  \     /  |
//     |   \   /   |   \   /   |   
//     |    \ /    |    \ /    | 
//   [23]    6    [24]   7    [25]   
//     |    / \    |    / \    |
//     |   /   \   |   /   \   |
//     | [38] [50] | [39] [51] |
//     | /       \ | /       \ |
//     |/         \|/         \|
//     5----[8]---12----[9]---19
//     |\         /|\         /|
//     | \       / | \       / |
//     |  \     /  |  \     /  |
//     |   \   /   |   \   /   |   
//     |    \ /    |    \ /    | 
//   [26]    8    [27]   9    [28]   
//     |    / \    |    / \    |
//     |   /   \   |   /   \   |
//     | [40] [52] | [41] [53] |
//     | /       \ | /       \ |
//     |/         \|/         \|
//     6----[10]--13----[11]---20
//     |\         /|\         /|
//     | \       / | \       / |
//     |  \     /  |  \     /  |
//     |   \   /   |   \   /   |   
//     |    \ /    |    \ /    | 
//   [29]    10   [30]   11   [31]   
//     |    / \    |    / \    |
//     |   /   \   |   /   \   |
//     | [42] [54] | [43] [55] |
//     | /       \ | /       \ |
//     |/         \|/         \|
//     7----[12]--14----[13]---21

})( window.LetterSpirit = window.LetterSpirit || {} );











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

/* Factor for suppressing later-generation codelets (1 means no suppression) */
Namespace.Params.GenerationGapConstant = 1;

/* Number of codelets to run in the Examiner phase */
Namespace.Params.NumExamPhaseCodelets = 800;

/* Maximum number of codelets to run overall */
Namespace.Params.MaxCodelets = 10 * Namespace.Params.NumExamPhaseCodelets;

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







// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Dict = Object.fromEntries;

/**
 * @classdesc
 * This class defines the Role objects.
 * 
 */
Namespace.Roles = class
{
   /**
     * @constant
     * @static
     */
    static a_arch = {
        name: "a_arch",
        shortName: "a-arch",
        topology: "segment",
        stroke: "downright",
        norms: {
            shape: Dict([ 
                ["simple", 40], ["bactrian", 30], ["cupped", 10], ["spiky_closure", -10] 
            ]),
            neighborhood: [
                [["dc", "n", "dc", "dc", "dc", "y", "dc", "dc"], 20]
            ],
            contact: {
                a1: Dict( [["mt2", 20], ["2ms", 15], ["t2", 1], ["m", 1]] ),
                a2: Dict( [["t2", 13], ["m", 20]] )
            },
            tips: [{
                    location: Dict( [[3, 10], [4, 7], [10, 6], [11, 6]] ),
                    orientation: Dict( [["w", 10], ["n", 6], ["sw", 7], ["nw", 7], ["s", 6]] )
                }, {
                    location: Dict( [[19, 10], [18, 7], [12, 6]] ),
                    orientation: Dict( [["s", 10], ["se", 6], ["sw", 6], ["e", 7], ["n", 7]] )
                }],
            ends: [
                Dict( [[[4, "w"], 40], [[20, "n"], 10], [[36, "sw"], 20], [[48, "nw"], 20],
                 [[5, "w"], 10], [[20, "s"], 10], [[37, "sw"], 10], [[21, "s"], 10],
                 [[48, "se"], 10]] ),

                Dict( [[[25, "s"], 40], [[51, "se"], 7], [[22, "s"], 7], [[25, "n"], 13],
                 [[39, "sw"], 7], [[9, "e"], 7]] )
            ],
            curve: Dict( [
                ["square_left", 10], ["straight", 9], ["slight_left", 9], ["slight_right", 7], ["strong_left", 7] 
            ]),
            short: 10, very_short: 6, wide: 10, half_wide: 6,
            medium_wt: 10, light: 6,  roof_x_height: 10, floor_baseline: 10,
            floor_midline: 6, l_edge_lf: 10, l_edge_md: 6, r_edge_rt: 10
        }
    };
   

   /**
     * @constant
     * @static
     */
    static backslash = {
        name: "backslash",
        shortName: "b-slash",
        topology: "segment",
        stroke: "downright",
        norms: {
            shape: Dict( [
                ["simple", 40], ["bactrian", 0], ["cupped", 20], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["dc", "y", "dc", "n", "dc", "y", "dc", "n"], 20]
            ],
            contact: {
                x1: Dict( [["m", 20]] ),
                y2: Dict( [["t2", 20]] )
            },
            tips: [{
                    location: Dict( [[3, 10], [4, 9], [10, 9], [5, 7]] ),
                    orientation: Dict( [["nw", 10], ["n", 9], ["ne", 9], ["sw", 8], ["s", 9], ["e", 7], ["w", 7]] )
                }, {
                    location: Dict( [[19, 10], [18, 7], [12, 7]] ),
                    orientation: Dict( [["se", 10], ["n", 8], ["s", 7], ["e", 9], ["sw", 8], ["w", 7]] )
                }],
            ends: [
                Dict( [[[48, "nw"], 40], [[20, "n"], 20], [[36, "ne"], 40], [[36, "sw"], 40],
                 [[20, "s"], 40], [[4, "e"], 20], [[21, "n"], 20], [[4, "w"], 20],
                 [[38, "sw"], 20]] ),

                Dict( [[[51, "se"], 40], [[25, "n"], 20], [[25, "s"], 10], [[9, "e"], 30],
                 [[39, "sw"], 20], [[24, "s"], 10], [[9, "w"], 10]] )
            ],
            curve: Dict( [
                ["straight", 10], ["square_right", 7], ["slight_right", 7], ["slight_left", 7], ["square_left", 8]
            ]),
            short: 10, very_short: 8, skinny: 8, wide: 10, half_wide: 8, light: 8,
            heavy: 6, medium_wt: 10, roof_x_height: 10, roof_midline: 8, floor_baseline: 10, 
            l_edge_lf: 10, l_edge_md: 8, r_edge_rt: 10
        }
    };
    

   /**
     * @constant
     * @static
     */
    static basebar = {
        name: "basebar", 
        shortName:"b-bar",
        topology: "segment",
        stroke: "right",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 30], ["cupped", 40], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["y", "dc", "dc", "dc", "dc", "dc", "dc", "dc"], 20]
            ],
            contact: {
                z1: Dict( [["t1", 20], ["t1m", 1]] )
            },
            tips: [{
                    location: Dict( [[5, 10], [4, 7], [3, 6]] ),
                    orientation: Dict( [["w", 8], ["n", 6], ["nw", 7], ["e", 6]] )
                }, {
                    location: Dict( [[19, 8], [17, 6], [18, 7], [12, 6], [20, 6]] ),
                    orientation: Dict( [["e", 9], ["n", 6], ["ne", 6], ["s", 6]] )
                }],
            ends: [
                Dict( [[[8, "w"], 40], [[23, "n"], 8], [[50, "nw"], 16], [[20, "n"], 8],
                 [[8, "e"], 8], [[52, "nw"], 8]] ),

                Dict( [[[9, "e"], 40], [[22, "n"], 13], [[39, "ne"], 27], [[8, "e"], 27],
                 [[25, "s"], 13], [[25, "n"], 13], [[11, "e"], 13]] )
            ],
            curve: Dict( [
                ["straight", 10], ["square_right", 7], ["slight_right", 7], ["slight_left", 6]
            ]),
            no_height: 10, short: 6, very_short: 9, wide: 10, half_wide: 6, light: 10,
            medium_wt: 8, very_light: 6, roof_baseline: 10, roof_x_height: 6, roof_midline: 8,
            floor_baseline: 11, floor_middown: 6, l_edge_lf: 10, r_edge_rt: 10, r_edge_md: 6
        }
    };
    

   /**
     * @constant
     * @static
     */
    static cap = {
        name: "cap", 
        shortName:"cap",
        topology: "segment",
        stroke: "right",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 40], ["cupped", 40], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["dc", "dc", "n", "dc", "dc", "y", "dc", "dc"], 20],
                [["n", "n", "dc", "dc", "y", "dc", "dc", "dc"], 20]
            ],
            contact: {
                r1: Dict( [["t1", 20], ["m", 11]] ),
                s1: Dict( [["t1", 20], ["m", 11]] )
            },
            tips: [{
                    location: Dict( [[3, 10], [4, 9], [10, 7], [11, 6], [17, 6]] ),
                    orientation: Dict( [["w", 10], ["ne", 7], ["sw", 9], ["s", 8], ["e", 7], ["nw", 6]] )
                }, {
                    location: Dict( [[17, 10], [10, 7], [18, 9], [11, 6], [16, 6], [37, 6], [9, 6]] ),
                    orientation: Dict( [["e", 10], ["ne", 7], ["se", 7], ["n", 7], ["s", 8], ["w", 6], ["sw", 6]] )
                }],
            ends: [
                Dict( [[[4, "w"], 40], [[36, "ne"], 8], [[36, "sw"], 40], [[20, "s"], 8],
                [[5, "w"], 8], [[48, "nw"], 8], [[4, "e"], 8], [[5, "e"], 8], [[22, "s"], 8],
                [[21, "s"], 8], [[17, "n"], 8], [[6, "w"], 8], [[48, "se"], 8],
                [[35, "ne"], 8], [[34, "sw"], 8]] ),

                Dict( [[[5, "e"], 40], [[36, "ne"], 10], [[49, "se"], 20], [[22, "n"], 20],
                [[22, "s"], 30], [[7, "w"], 10], [[4, "e"], 20], [[37, "ne"], 10],
                [[35, "ne"], 10], [[7, "e"], 10], [[37, "sw"], 10]] )
            ],
            curve: Dict( [
                ["straight", 10], ["slight_right", 7], ["square_left", 9], ["strong_left", 6], ["slight_left", 7], ["full_left", 6]
            ]),
            no_height: 9, very_short: 10, wide: 10, half_wide: 8,
            skinny: 6, light: 10, medium_wt: 9, very_light: 8,
            roof_x_height: 10,
            roof_t_height: 6, floor_x_height: 7, floor_midline: 10,
            l_edge_lf: 10, l_edge_md: 8, l_edge_rt: 6, r_edge_rt: 10,
            r_edge_md: 6
        }
    };


   /**
     * @constant
     * @static
     */
    static center_post = {
        name: "center_post", 
        shortName: "c-post",
        topology: "segment",
        stroke: "down",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", -80], ["cupped", 30], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["n", "n", "n", "n", "n", "n", "n", "n"], 20]
            ],
            contact: {
                l1: Dict( [["nc", 20]] )
            },
            tips: [{
                    location: Dict( [[8, 10], [15, 7], [2, 7], [9, 7], [1, 7], [16, 6], [10, 6], [17, 6]] ),
                    orientation: Dict( [["n", 10], ["ne", 7], ["s", 6], ["w", 6], ["sw", 6]] )
                }, {
                    location: Dict( [[12, 7], [19, 10], [18, 9], [5, 6], [17, 6], [11, 6], [4, 6]] ),
                    orientation: Dict( [["s", 9], ["n", 9], ["e", 10], ["se", 8], ["ne", 9], ["sw", 7], ["w", 6]] )
                }],
            ends: [
                Dict( [[[15, "n"], 40], [[33, "ne"], 13], [[17, "n"], 13], [[18, "n"], 8],
                [[15, "s"], 7], [[0, "w"], 7], [[32, "ne"], 7], [[14, "n"], 7],
                [[45, "nw"], 4], [[32, "sw"], 7], [[16, "n"], 6]] ),

                Dict( [[[24, "s"], 20], [[25, "s"], 10], [[9, "e"], 40], [[25, "n"], 30],
                [[39, "ne"], 20], [[51, "se"], 20], [[37, "ne"], 10], [[38, "sw"], 10]] )
            ],
            curve: Dict( [
                ["straight", 10], ["slight_right", 9], ["square_right", 8], ["strong_right", 6], ["full_right", 6]
            ]),
            tall: 10, medium_ht: 7, skinny: 7, half_wide: 10, wide: 9,
            medium_wt: 10, heavy: 9, roof_top: 10, roof_t_height: 7,
            floor_baseline: 10,
            l_edge_md: 10, l_edge_lf: 9, r_edge_md: 6, r_edge_rt: 10
        }
    };


   /**
     * @constant
     * @static
     */
    static circle = {
        name: "circle",
        shortName: "circle",
        topology: "loop",
        norms: {
            shape: Dict([
                ["closure", 40], ["spiky_closure", -10], ["bactrian", -80], ["cupped", -80], ["simple", -80]
            ]),
            neighborhood: [
                [["dc", "dc", "n", "n", "dc", "dc", "dc", "y"], 20],    // b
                [["dc", "y", "dc", "dc", "dc", "n", "n", "dc"], 20],    // d
                [["dc", "dc", "dc", "y", "y", "dc", "dc", "n"], 20],    // g
                [["n",  "n",  "n",  "n", "n",  "n", "n",  "n"], 20],    // o
                [["dc", "n", "dc", "dc", "dc", "y", "dc", "dc"], 20],   // p
                [["dc", "dc", "dc", "y", "dc", "dc", "dc", "n"], 20]    // q 
            ],
            contact: {
                o1: Dict( [["nc", 19]] ),
                b2: Dict( [["c_lf", 20], ["c_rt", 1], ["nc", 1]] ),
                d2: Dict( [["c_rt", 20], ["c_lf", 1], ["nc", 1]] ),
                g2: Dict( [["c_rt", 20], ["c_lf", 1], ["nc", 1]] ),
                p2: Dict( [["c_lf", 20], ["c_rt", 1], ["nc", 1]] ),
                q2: Dict( [["c_rt", 20], ["c_lf", 1], ["nc", 1]] )
            },
            first_point: [[4, 20], [3, 1], [5, 1], [10, 1], [11, 1], [12, 1]],
            last_point: [[18, 20], [17, 1], [19, 1], [10, 1], [11, 1], [12, 1]],
            short: 10, very_short: 6, wide: 10, half_wide: 6, heavy: 10,
            medium_wt: 6, roof_x_height: 10, roof_midline: 6, floor_baseline: 10,
            l_edge_lf: 10, l_edge_md: 6, r_edge_rt: 10
        }
    };


   /**
     * @constant
     * @static
     */
    static crossbar = {
        name: "crossbar",
        shortName: "c-bar",
        topology: "segment",
        stroke: "right",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 40], ["cupped", 40], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["y", "dc", "dc", "dc", "y", "dc", "dc", "dc"], 20]
            ],
            contact: {
                f1: Dict( [["m", 20], ["t1", 14], ["t2", 11]] ),
                t1: Dict( [["m", 20], ["t1", 14], ["t2", 11]] )
            },
            tips: [{
                    location: Dict( [[3, 9], [4, 10], [5, 7], [9, 6], [10, 6], [2, 6]] ),
                    orientation: Dict( [["w", 9], ["n", 6], ["sw", 10], ["e", 8], ["nw", 6], ["se", 6]] )
                }, {
                    location: Dict( [[17, 10], [18, 8], [10, 6], [16, 7], [11, 6]] ),
                    orientation: Dict( [["e", 10], ["ne", 8], ["se", 7], ["s", 6]] )
                }],
            ends: [
                Dict( [[[4, "w"], 27], [[6, "w"], 27], [[36, "sw"], 40], [[20, "n"], 13],
                [[4, "e"], 13], [[6, "e"], 13], [[38, "sw"], 27], [[47, "se"], 13],
                [[5, "e"], 13], [[46, "nw"], 13]] ),

                Dict( [[[5, "e"], 40], [[7, "e"], 10], [[49, "se"], 20], [[35, "ne"], 20],
                [[4, "e"], 10], [[6, "e"], 10], [[37, "ne"], 20], [[47, "se"], 10],
                [[22, "s"], 10]] )
            ],
            curve: Dict( [
                ["straight", 10], ["slight_right", 7], ["square_left", 6], ["slight_left", 7]
            ]),
            no_height: 10, short: 9, very_short: 9, wide: 10, half_wide: 7,
            light: 10, medium_wt: 6, very_light: 7, roof_x_height: 10, roof_midline: 6,
            roof_t_height: 7, floor_x_height: 10, floor_midline: 9, floor_baseline: 7,
            l_edge_lf: 10, l_edge_md: 6, r_edge_rt: 10, r_edge_md: 6
        }
    };


   /**
     * @constant
     * @static
     */
    static dot = {
        name: "dot",
        shortName: "dot",
        topology: "dot",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 40], ["cupped", 40], ["spiky_closure", 40], ["closure", 40]
            ]),
            neighborhood: [
                [["n", "dc", "dc", "dc", "y", "dc", "dc", "dc"], 20]
            ],
            contact: {
                i1: Dict( [["nc", 20], ["c_lf", 1], ["c_rt", 1]] ),
                j1: Dict( [["nc", 20], ["c_lf", 1], ["c_rt", 1]] )
            },
            firstPoint: [
                [16, 20], [1, 1], [8, 1], [15, 1], [2, 1], [9, 1], [3, 1],
                [10, 1], [17, 1], [4, 1], [11, 1], [18, 1]
            ],
            lastPoint: [
                [16, 1], [1, 1], [8, 1], [15, 1], [2, 1], [9, 1], [3, 1],
                [10, 1], [17, 1], [4, 1], [11, 1], [18, 1]
            ],
            no_height: 6, very_short: 10, short: 6, half_wide: 10,
            wide: 7, light: 10, medium_wt: 9, very_light: 7, roof_t_height: 8,
            roof_top: 10, roof_x_height: 6, floor_t_height: 10,
            floor_x_height: 9, floor_midline: 6,
            l_edge_md: 10, l_edge_lf: 8, r_edge_rt: 10, r_edge_md: 6
        }
    };


   /**
     * @constant
     * @static
     */
    static down_arm = {
        name: "down_arm",
        shortName: "dwn-arm",
        topology: "segment",
        stroke: "downright",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 10], ["cupped", 20], ["spiky_closure", 0]
            ]),
            neighborhood: [
                [["y", "y", "dc", "n", "dc", "dc", "y", "y"], 20]
            ],
            contact: {
                k1: Dict( [["t1", 20], ["m", 1]] )
            },
            tips: [{
                    location: Dict( [[11, 9], [10, 7], [4, 10], [3, 6]] ),
                    orientation: Dict( [["se", 6], ["n", 6], ["nw", 10], ["w", 9]] )
                }, {
                    location: Dict( [[19, 10], [18, 9], [12, 7]] ),
                    orientation: Dict( [["se", 7], ["n", 10], ["e", 7], ["s", 9], ["ne", 7], ["sw", 8]] )
                }],
            ends: [
                Dict( [[[51, "se"], 13], [[21, "n"], 13], [[50, "nw"], 27], [[6, "w"], 40], [[49, "nw"], 13], [[7, "w"], 27], [[48, "nw"], 13], [[51, "nw"], 13]] ),
                Dict( [[[51, "se"], 10], [[25, "n"], 40], [[9, "e"], 10], [[25, "s"], 30], [[39, "ne"], 10], [[39, "sw"], 20]] )
            ],
            curve: Dict( [
                ["straight", 7], ["strong_right", 7], ["slight_right", 10], ["square_left", 7], ["square_right", 7], ["strong_left", 9], ["slight_left", 9], ["full", 7]
            ]),
            very_short: 10, short: 7, half_wide: 10, wide: 9, light: 8,
            very_light: 10, medium_wt: 7, roof_midline: 10, roof_x_height: 8,
            floor_baseline: 10, l_edge_md: 9, l_edge_lf: 10, r_edge_rt: 10
        }
    };




   /**
     * @constant
     * @static
     */
    static down_circle = {
        name: "down_circle",
        shortName: "dwn-circ",
        topology: "loop",
        norms: {
            shape: Dict([
                ["closure", 40], ["spiky_closure", 10]
            ]),
            neighborhood: [
                [["y", "dc", "dc", "dc", "dc", "n", "dc", "dc"], 20]
            ],
            contact: {
                a2: Dict( [["nc", 1], ["c_rt", 20], ["m", 11], ["t1", 11], ["t2", 11]] )
            },
            first_point: [[4, 20], [5, 20], [12, 1], [11, 1]],
            last_point: [[18, 20], [17, 20], [10, 1], [11, 1]],
            very_short: 10, short: 6, wide: 10, half_wide: 6,
            heavy: 10, medium_wt: 9, roof_midline: 10,
            roof_x_height: 6, floor_baseline: 10,
            l_edge_lf: 10, r_edge_rt: 10, r_edge_md: 6
        }
    };


   /**
     * @constant
     * @static
     */
    static e_bowl = {
        name: "e_bowl",
        shortName: "e-bowl",
        topology: "segment",
        stroke: "down",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 10], ["cupped", 10], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["n", "n", "n", "n", "n", "n", "n", "n"], 20]
            ],
            contact: {
                e1: Dict( [["t1m", 20], ["t1", 2]] )
            },
            tips: [{
                    location: Dict( [[18, 10], [10, 6], [11, 6], [17, 7], [19, 6]] ),
                    orientation: Dict( [["s", 10], ["se", 9], ["e", 9], ["sw", 6]] ),
                }, {
                    location: Dict( [[19, 10], [17, 6], [18, 7], [12, 7]] ),
                    orientation: Dict( [["e", 10], ["ne", 7], ["n", 6], ["se", 6]] )
                }],
            ends: [
                Dict( [[[22, "s"], 40], [[49, "se"], 40], [[5, "e"], 40], [[37, "sw"], 40], [[25, "s"], 8]] ),
                Dict( [[[9, "e"], 40], [[39, "ne"], 15], [[8, "e"], 15], [[51, "se"], 5], [[25, "n"], 5]] )
            ],
            curve: Dict( [
                ["full_right", 10]
            ]),
            short: 10, very_short: 6, wide: 10, heavy: 10, medium_wt: 6,
            roof_x_height: 10, floor_baseline: 10,
            l_edge_lf: 10, r_edge_rt: 10
        }
    };


   /**
     * @constant
     * @static
     */
    static e_crossbar = {
        name: "e_crossbar",
        shortName: "e-cross",
        topology: "segment",
        stroke: "right",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 10], ["cupped", 40], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["y", "y", "y", "dc", "y", "y", "y", "y"], 20]
            ],
            contact: {
                e1: Dict( [["2ts", 20], ["t2", 2], ["mt2", 11], ["2ms", 11], ["t1m", 11]] )
            },
            tips: [{
                    location: Dict( [[4, 10], [3, 9], [5, 7], [11, 9]] ),
                    orientation: Dict( [["w", 10], ["nw", 9], ["sw", 7], ["e", 7], ["ne", 7], ["n", 5]] )
                }, {
                    location: Dict( [[18, 10], [19, 9], [17, 9], [11, 6]] ),
                    orientation: Dict( [["e", 10], ["se", 9], ["ne", 9]] )
                }],
            ends: [
                Dict( [[[6, "w"], 40], [[48, "nw"], 27], [[38, "sw"], 13], [[7, "e"], 13], [[37, "ne"], 13], [[21, "n"], 8]] ),
                Dict( [[[7, "e"], 40], [[51, "se"], 27], [[6, "e"], 27], [[37, "ne"], 40]] )
            ],
            curve: Dict( [
                ["straight", 10], ["slight_right", 7], ["slight_left", 6], ["square_right", 6], ["square_left", 6]
            ]),
            no_height: 10, short: 8, very_short: 9, wide: 10,
            half_wide: 7, light: 10, very_light: 7, roof_midline: 10,
            roof_x_height: 9, floor_midline: 10, floor_baseline: 8,
            l_edge_lf: 10, l_edge_md: 7, r_edge_rt: 10
        }
    };


   /**
     * @constant
     * @static
     */
    static e_tail = {
        name: "e_tail",
        shortName: "e-tail",
        topology: "segment",
        stroke: "downright",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 30], ["cupped", 30], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["y", "y", "dc", "n", "n", "n", "dc", "y"], 20]
            ],
            contact: {
                e2: Dict( [["t1", 20], ["m", 11]] )
            },
            tips: [{
                    location: Dict( [[4, 10], [11, 9], [5, 7], [3, 6], [10, 6]] ),
                    orientation: Dict( [["n", 10], ["ne", 6], ["nw", 8], ["se", 6], ["w", 7]] )
                }, {
                    location: Dict( [[19, 10], [18, 9], [12, 6], [5, 6]] ),
                    orientation: Dict( [["e", 10], ["ne", 8], ["w", 6], ["se", 6], ["n", 6]] )
                }],
            ends: [
                Dict( [[[23, "n"], 40], [[24, "n"], 13], [[50, "nw"], 27], [[20, "n"], 13],
                 [[8, "w"], 27], [[38, "ne"], 13], [[51, "nw"], 13], [[51, "se"], 13],
                 [[36, "ne"], 10]] ),
                Dict( [[[9, "e"], 40], [[39, "ne"], 24], [[8, "e"], 8], [[51, "se"], 8],
                 [[8, "w"], 8], [[25, "n"], 8]] )
            ],
            curve: Dict( [
                ["slight_right", 9], ["square_right", 10], ["strong_left", 7], ["strong_right", 8], ["straight", 8]
            ]),
            very_short: 10, short: 6, no_height: 6, wide: 10,
            half_wide: 9, medium_wt: 8, light: 10, very_light: 6,
            roof_midline: 10, roof_x_height: 6, roof_baseline: 6, floor_baseline: 10,
            l_edge_lf: 10, l_edge_md: 7, r_edge_rt: 10, r_edge_md: 6
        }
    };


   /**
     * @constant
     * @static
     */
    static f_post = {
        name: "f_post",
        shortName: "f-post",
        topology: "bisegment",
        stroke: "down",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 10], ["cupped", 30], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["n", "n", "dc", "n", "n", "n", "dc", "n"], 20]
            ],
            contact: {
                f1: Dict( [["m", 20], ["nc", 1]] )
            },
            tips: [{
                    location: Dict( [[15, 9], [17, 8], [16, 10], [8, 6]] ),
                    orientation: Dict( [["e", 8], ["se", 10], ["s", 9], ["ne", 7]] )
                }, {
                    location: Dict( [[12, 10], [5, 6], [19, 7]] ),
                    orientation: Dict( [["s", 10], ["se", 9], ["sw", 6]] )
                }],
            ends: [
                Dict( [[[1, "e"], 40], [[47, "se"], 27], [[45, "se"], 40], [[3, "e"], 20],
                 [[16, "s"], 13], [[19, "s"], 13], [[0, "e"], 13], [[33, "ne"], 27]] ),

                Dict( [[[24, "s"], 40], [[23, "s"], 30], [[50, "se"], 30], [[51, "se"], 20],
                 [[38, "sw"], 10]] )
            ],
            midpoint: 10,
            curve1: Dict( [
                ["slight_right", 10], ["square_right", 9], ["strong_right", 6]
            ]),
            curve2: Dict( [
                ["straight", 9], ["slight_right", 8], ["slight_left", 6]
            ]),
            tall: 10, medium_ht: 8, half_wide: 8, wide: 10, medium_wt: 10,
            heavy: 9, roof_top: 10, roof_t_height: 8, floor_baseline: 10,
            l_edge_lf: 8, l_edge_md: 10, r_edge_rt: 10, r_edge_md: 6
        }
    };


   /**
     * @constant
     * @static
     */
    static foreslash = {
        name: "foreslash",
        shortName: "f-slash",
        topology: "segment",
        stroke: "upright",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 0], ["cupped", 20], ["spiky_closure", -10]
            ]),
            neighborhood: [
                 [["dc", "n", "dc", "y", "dc", "n", "dc", "y"], 20],
                 [["dc", "dc", "dc", "y", "dc", "dc", "dc", "y"], 20]
            ],
            contact: {
                x1: Dict( [["m", 20]] ),
                z1: Dict( [["2ts", 20], ["t1m", 11], ["mt2", 11]] )
            },
            tips: [{
                    location: Dict( [[5, 10], [12, 8], [4, 6]] ),
                    orientation: Dict( [["sw", 10], ["w", 7], ["se", 9], ["s", 9], ["nw", 6], ["n", 6], ["e", 6]] )
                }, {
                    location: Dict( [[17, 10], [10, 6], [18, 9]] ),
                    orientation: Dict( [["ne", 10], ["w", 6], ["e", 7], ["n", 7], ["se", 7], ["nw", 6], ["s", 6]] )
                }],
            ends: [
                Dict( [[[38, "sw"], 40], [[8, "w"], 8], [[50, "se"], 32], [[23, "s"], 32], [[6, "w"], 8], [[39, "sw"], 8], 
                    [[50, "nw"], 8], [[23, "n"], 32], [[8, "e"], 8], [[21, "n"], 6]] ),
                Dict( [[[37, "ne"], 40], [[5, "w"], 7], [[7, "e"], 13], [[39, "ne"], 7], [[49, "se"], 13], [[22, "n"], 20], 
                    [[22, "s"], 7], [[49, "nw"], 7]] )
            ],
            curve: Dict( [
                ["straight", 10], ["slight_right", 9], ["slight_left", 9], ["square_left", 8]
            ]),
            short: 10, very_short: 8, wide: 10, half_wide: 6, light: 10,
            medium_wt: 9, roof_x_height: 10, roof_midline: 6,
            floor_baseline: 10, floor_midline: 8,
            l_edge_lf: 10, l_edge_md: 6, r_edge_rt: 10
        }
    };


   /**
     * @constant
     * @static
     */
    static halfpost = {
        name: "halfpost",
        shortName: "h-post",
        topology: "segment",
        stroke: "down",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 0], ["cupped", 30], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["y", "dc", "dc", "n", "n", "n", "dc", "dc"], 20]
            ],
            contact: {
                i1: Dict( [["nc", 20], ["t1", 1]] )
            },
            tips: [{
                    location: Dict( [[10, 10], [12, 6], [11, 9], [17, 8], [18, 6], [4, 7], [3, 6]] ),
                    orientation: Dict( [["w", 10], ["sw", 7], ["s", 9], ["e", 6], ["nw", 7], ["n", 7], ["ne", 6]] )
                }, {
                    location: Dict( [[19, 9], [12, 10], [5, 7], [18, 6]] ),
                    orientation: Dict( [["s", 10], ["w", 6], ["sw", 9], ["n", 6], ["se", 6]] )
                }],
            ends: [
                Dict( [[[5, "w"], 40], [[39, "sw"], 13], [[24, "s"], 13], [[5, "e"], 13],
                    [[21, "s"], 27], [[6, "w"], 27], [[22, "s"], 13], [[49, "nw"], 13],
                    [[48, "nw"], 13], [[37, "sw"], 13], [[37, "ne"], 13], [[22, "n"], 13],
                    [[21, "n"], 13]] ),
                Dict( [[[25, "s"], 40], [[24, "s"], 24], [[39, "sw"], 24], [[9, "w"], 8],
                    [[51, "se"], 8], [[38, "sw"], 24], [[25, "n"], 8]] )
            ],
            curve: Dict( [
                ["slight_left", 10], ["strong_left", 9], ["straight", 8], ["slight_right", 8], ["square_left", 9], ["square_right", 7], ["full_left", 7]
            ]),
            short: 10, very_short: 8, half_wide: 10, wide: 8,
            skinny: 8, medium_wt: 10, light: 8, very_light: 8,
            roof_x_height: 10, roof_midline: 8, floor_baseline: 10,
            l_edge_md: 10, l_edge_lf: 8, r_edge_rt: 10, r_edge_md: 8
        }
    };

    
   /**
     * @constant
     * @static
     */
    static left_bowl = {
        name: "left_bowl",
        shortName: "l-bowl",
        topology: "segment",
        stroke: "down",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 20], ["cupped", 40], ["spiky_closure", 10]
            ]),
            neighborhood: [
                [["n", "n", "n", "n", "n", "n", "n", "n"], 20],
                [["dc", "y", "dc", "dc", "dc", "n", "dc", "dc"], 20]
            ],
            contact: {
                c1: Dict( [["nc", 20]] ),
                d1: Dict( [["2ts", 20], ["t1", 3], ["t2", 3], ["t1m", 11], ["mt2", 11], ["2ms", 11]] ),
                g1: Dict( [["2ts", 20], ["t1", 3], ["t2", 3], ["t1m", 11], ["mt2", 11], ["2ms", 11]] ),
                q1: Dict( [["2ts", 20], ["t1", 3], ["t2", 3], ["t1m", 11], ["mt2", 11], ["2ms", 11]] )
            },
            tips: [{
                    location: Dict( [[17, 10], [18, 8], [10, 6], [11, 6], [19, 6], [21, 6]] ),
                    orientation: Dict( [["e", 14], ["se", 8], ["ne", 7], ["n", 6], ["s", 6]] )
                }, {
                    location: Dict( [[19, 10], [18, 7], [12, 6], [11, 6]] ),
                    orientation: Dict( [["e", 10], ["n", 6], ["ne", 7], ["se", 6], ["nw", 6], ["s", 6]] )
                }],
            ends: [
                Dict( [[[5, "e"], 40], [[49, "se"], 35], [[4, "e"], 15], [[7, "e"], 10], [[37, "ne"], 20], [[36, "ne"], 5], [[22, "s"], 5], [[22, "n"], 5], [[21, "s"], 5]] ),
                Dict( [[[9, "e"], 40], [[50, "se"], 3], [[39, "ne"], 12], [[25, "n"], 6], [[8, "e"], 9], [[51, "se"], 6], [[25, "s"], 3], [[51, "nw"], 3]] )
            ],
            curve: Dict( [
                ["full_right", 10], ["strong_right", 7], ["square_right", 6]
            ]),
            short: 10, very_short: 6, wide: 10, half_wide: 6, heavy: 10, medium_wt: 8, light: 6,
            roof_x_height: 10, roof_midline: 6, floor_baseline: 10,
            l_edge_lf: 10, r_edge_rt: 10, r_edge_md: 6
        }
    };

    
   /**
     * @constant
     * @static
     */
    static left_downbowl = {
        name: "left_downbowl",
        shortName: "l-dwnbwl",
        topology: "segment",
        stroke: "down",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 20], ["cupped", 40], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["y", "dc", "dc", "dc", "dc", "n", "dc", "dc"], 20]
            ],
            contact: {
                a1: Dict( [["2ts", 20], ["t2", -8], ["t1", -8]] )
            },
            tips: [{
                    location: Dict( [[18, 10], [17, 4], [11, 6]] ),
                    orientation: Dict( [["e", 10], ["ne", 9]] )
                }, {
                    location: Dict( [[19, 10], [18, 7], [12, 7]] ),
                    orientation: Dict( [["e", 10], ["ne", 7], ["se", 6]] )
                }],
            ends: [
                Dict( [[[7, "e"], 40], [[37, "ne"], 20], [[38, "ne"], 7]] ),
                Dict( [[[9, "e"], 40], [[39, "ne"], 13], [[50, "se"], 7], [[8, "e"], 7]] )
            ],
            curve: Dict( [
                ["full_right", 10], ["strong_right", 7]
            ]),
            very_short: 10, short: 9, wide: 10, medium_wt: 10, heavy: 7,
            roof_midline: 10, roof_x_height: 7, floor_baseline: 10,
            l_edge_lf: 10, r_edge_rt: 10
        }
    };


   /**
     * @constant
     * @static
     */
    static left_halfarc = {
        name: "left_halfarc",
        shortName: "l-hlfarc",
        topology: "segment",
        stroke: "down",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 0], ["cupped", 40], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["dc", "dc", "y", "dc", "dc", "n", "n", "n"], 20]
            ],
            contact: {
                w1: Dict( [["t2", 20], ["m", 11]] )
            },
            tips: [{
                    location: Dict( [[3, 9], [4, 7], [10, 7]] ),
                    orientation: Dict( [["n", 9], ["w", 6], ["ne", 7], ["nw", 6]] )
                }, {
                    location: Dict( [[12, 10], [11, 6], [5, 6], [19, 1]] ),
                    orientation: Dict( [["e", 8], ["ne", 7], ["se", 6], ["n", 6], ["s", 6]] )
                }],
            ends: [
                Dict( [[[20, "n"], 40], [[4, "w"], 8], [[36, "ne"], 32], [[23, "n"], 16], [[50, "nw"], 8]] ),
                Dict( [[[8, "e"], 40], [[38, "ne"], 30], [[50, "se"], 20], [[24, "n"], 20], [[23, "s"], 10], [[6, "e"], 10], [[9, "e"], 5]] )
            ],
            curve: Dict( [
                ["slight_right", 8], ["straight", 6], ["square_right", 10], ["strong_right", 8], ["full_right", 6]
            ]),
            short: 10, very_short: 8, half_wide: 10, wide: 8, medium_wt: 9, light: 10,
            roof_x_height: 10, roof_midline: 7, floor_baseline: 10, floor_midline: 6,
            l_edge_lf: 10, r_edge_md: 10, r_edge_rt: 8
        }
    };


   /**
     * @constant
     * @static
     */
    static left_halfarch = {
        name: "left_halfarch",
        shortName: "l-hlfarch",
        topology: "segment",
        stroke: "down",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 0], ["cupped", 40], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["dc", "dc", "y", "dc", "dc", "dc", "y", "dc"], 20]
            ],
            contact: {
                m1: Dict( [["t1m", 20], ["t1", 15], ["2ts", 7], ["m", 9], ["nc", 1]] )
            },
            tips: [{
                    location: Dict( [[3, 10], [11, 6], [4, 6], [10, 6]] ),
                    orientation: Dict( [["w", 10], ["se", 8], ["sw", 8], ["nw", 9], ["s", 9], ["n", 6]] )
                }, {
                    location: Dict( [[12, 10], [11, 9], [5, 6], [19, 7]] ),
                    orientation: Dict( [["s", 10], ["se", 7], ["sw", 6]] )
                }],
            ends: [
                Dict( [[[4, "w"], 40], [[48, "se"], 20], [[36, "sw"], 20], [[48, "nw"], 40], [[21, "s"], 20], [[24, "s"], 20], [[21, "n"], 10]] ),
                Dict( [[[24, "s"], 40], [[48, "se"], 10], [[21, "s"], 20], [[38, "sw"], 10], [[51, "se"], 10]] )
            ],
            curve: Dict( [
                ["slight_left", 10], ["straight", 9], ["strong_left", 7], ["square_left", 7]
            ]),
            short: 10, very_short: 8, half_wide: 10, wide: 6, skinny: 8, medium_wt: 8, light: 10, very_light: 8,
            roof_x_height: 10, roof_midline: 8, floor_baseline: 10, floor_midline: 8,
            l_edge_lf: 10, l_edge_md: 8, r_edge_md: 10, r_edge_rt: 8   
        }
    };


   /**
     * @constant
     * @static
     */
    static left_halfpost = {
        name: "left_halfpost", 
        shortName: "l-hlfpost",
        topology: "segment",
        stroke: "down",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 10], ["cupped", 30], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["dc", "dc", "y", "dc", "dc", "n", "n", "n"], 20]
            ],
            contact: {
                m1: Dict( [["t1", 20], ["m", 18], ["nc", 1]] ),
                n1: Dict( [["t1", 20], ["m", 18], ["nc", 1]] ),
                r1: Dict( [["t1", 20], ["m", 18], ["nc", 1]] )
            },
            tips: [{
                    location: Dict( [[3, 10], [4, 6], [10, 7], [17, 1], [11, 1]] ),
                    orientation: Dict( [["n", 10], ["nw", 8], ["ne", 8], ["sw", 6], ["w", 7], ["s", 6]] )
                }, {
                    location: Dict( [[5, 10], [12, 7], [4, 6], [19, 6]] ),
                    orientation: Dict( [["s", 10], ["sw", 8], ["se", 8], ["w", 1], ["e", 1]] )
                }              
            ],
            ends: [
                Dict( [[[20, "n"], 40], [[48, "nw"], 40], [[36, "ne"], 27], [[36, "sw"], 13],
                [[4, "w"], 27], [[21, "n"], 27], [[20, "s"], 13], [[37, "ne"], 13],
                [[23, "n"], 13], [[38, "ne"], 5], [[38, "sw"], 5]] ),

                Dict( [[[23, "s"], 40], [[24, "s"], 16], [[50, "se"], 24], [[38, "sw"], 32],
                [[20, "s"], 8], [[51, "se"], 8], [[38, "ne"], 5],
                [[9, "e"], -70]] )
            ],
            curve: Dict( [
                ["straight", 10], ["slight_left", 8], ["slight_right", 7], ["strong_left", 6], ["full_left", 6], ["square_right", 6], ["square_left", 6]
            ]),
            short: 10, very_short: 8, skinny: 8, half_wide: 10, wide: 6,
            light: 10, medium_wt: 8, roof_x_height: 10,
            roof_midline: 8, very_light: 8,
            floor_baseline: 16, floor_midline: 6, l_edge_lf: 10, l_edge_md: 6,
            r_edge_lf: 8, r_edge_md: 10, r_edge_rt: 6
        }   
    };


   /**
     * @constant
     * @static
     */
    static left_post = {
        name: "left_post", 
        shortName: "l-post",
        topology: "segment",
        stroke: "down",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 10], ["cupped", 30], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["n", "dc", "dc", "y", "dc", "dc", "dc", "n"], 20]
            ],
            contact: {
                b1: Dict( [["mt2", 20], ["m", 1], ["t2", 1], ["2ms", 18]] ),
                b2: Dict( [["m", 20], ["t2", 15]] ),
                h1: Dict( [["m", 20], ["t2", 10]] ),
                k1: Dict( [["m", 20], ["t2", 15], ["2ms", 7]] )
            },
            tips: [{
                    location: Dict( [[1, 10], [8, 8], [2, 8], [9, 6], [15, 6]] ),
                    orientation: Dict( [["n", 10], ["w", 6], ["ne", 7], ["nw", 7], ["se", 6]] )
                }, {
                    location: Dict( [[5, 10], [4, 7], [12, 7], [11, 6]] ),
                    orientation: Dict( [["s", 10], ["sw", 7], ["se", 7], ["n", 6], ["w", 6]] )
                }],
            ends: [
                Dict( [[[14, "n"], 40], [[0, "w"], 13], [[17, "n"], 40], [[44, "nw"], 27],
                    [[32, "ne"], 27], [[15, "n"], 13], [[33, "ne"], 13], [[18, "n"], 13],
                    [[44, "se"], 10]] ),
                Dict( [[[23, "s"], 40], [[38, "sw"], 30], [[20, "s"], 20], [[23, "n"], 10],
                    [[50, "se"], 20], [[24, "s"], 10], [[21, "s"], 10], [[8, "w"], 10],
                    [[8, "e"], 10]] )
            ],
            curve: Dict( [
                ["straight", 10], ["slight_left", 7], ["slight_right", 7], ["square_left", 6]
            ]),
            tall: 10, short: 8, medium_ht: 8, skinny: 10,
            half_wide: 9, wide: 6, medium_wt: 10, light: 8, heavy: 6,
            roof_top: 10, roof_t_height: 7, floor_baseline: 10,
            floor_midline: 8, floor_x_height: 8, l_edge_lf: 10, l_edge_md: 6,
            r_edge_lf: 10, r_edge_md: 9, r_edge_rt: 6 
        }
    };


   /**
     * @constant
     * @static
     */
    static left_tail = {
        name: "left_tail",
        shortName: "l-tail",
        topology: "segment",
        stroke: "down",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 20], ["cupped", 30], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["dc", "y", "dc", "n", "n", "n", "dc", "dc"], 20]
            ],
            contact: {
                p1: Dict( [["t1m", 20], ["m", 1], ["2ms", 15], ["t1", 3], ["nc", 1]] ),
                p2: Dict( [["m", 20], ["t1", 15]] )
            },
            tips: [{
                    location: Dict( [[3, 10], [5, 7], [4, 7], [12, 6]] ),
                    orientation: Dict( [["n", 10], ["sw", 6], ["w", 6], ["nw", 7], ["ne", 6]] )
                }, {
                    location: Dict( [[7, 10], [14, 6], [5, 6], [6, 7], [13, 6]] ),
                    orientation: Dict( [["s", 10], ["sw", 6], ["w", 7], ["ne", 6]] )
                }],
            ends: [
                Dict( [[[20, "n"], 40], [[38, "sw"], 13], [[4, "w"], 13], [[48, "nw"], 27],
                 [[26, "n"], 13], [[23, "n"], 27], [[40, "ne"], 13]] ),
                Dict( [[[29, "s"], 40], [[30, "s"], 10], [[23, "s"], 10], [[42, "sw"], 10],
                 [[12, "w"], 10], [[10, "w"], 10], [[26, "s"], 10], [[42, "ne"], 10]] )
            ],
            curve: Dict( [
                ["straight", 10], ["square_left", 7], ["slight_left", 7], ["slight_right", 6], ["square_right", 6]
            ]),
            tall: 8, medium_ht: 10, short: 8, skinny: 9, half_wide: 10,
            medium_wt: 10, light: 7, heavy: 6, roof_x_height: 10,
            roof_midline: 8, roof_baseline: 7, floor_bottom: 10,
            floor_middown: 7, floor_baseline: 6,
            l_edge_lf: 10, r_edge_lf: 10, r_edge_md: 9
        }
    };

    
   /**
     * @constant
     * @static
     */
    static left_uparc = {
        name: "left_uparc",
        shortName: "l-uparc",
        topology: "segment",
        stroke: "down",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", -200], ["cupped", 40], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["dc", "dc", "y", "dc", "dc", "n", "n", "n"], 20],
                [["dc", "dc", "y", "y", "y", "dc", "dc", "n"], 20]
            ],
            contact: {
                u1: Dict( [["t2", 20], ["m", 13], ["nc", 1]] ),
                y1: Dict( [["t2", 20], ["m", 13], ["nc", 1]] )
            },
            tips: [{
                    location: Dict( [[3, 10], [4, 7], [10, 7]] ),
                    orientation: Dict( [["n", 10], ["w", 6], ["ne", 7], ["nw", 6], ["s", 6]] )
                }, {
                    location: Dict( [[19, 10], [18, 9], [12, 8], [11, 7], [5, 7], [17, 6]] ),
                    orientation: Dict( [["e", 10], ["ne", 9], ["n", 7], ["se", -60]] )
                }],
            ends: [
                Dict( [[[20, "n"], 40], [[23, "n"], 10], [[36, "ne"], 20], [[4, "w"], 10], [[20, "s"], 5], [[48, "nw"], 10], [[21, "n"], 5]] ),
                Dict( [[[9, "e"], 40], [[39, "ne"], 27], [[8, "e"], 20], [[24, "n"], 7], [[37, "ne"], 7], [[38, "ne"], 7]] )
            ],
            curve: Dict( [
                ["square_right", 10], ["strong_right", 9], ["slight_right", 8], ["full_right", 8], ["slight_left", 7], ["straight", 6]
            ]),
            short: 10, very_short: 8, wide: 10, half_wide: 8, skinny: 6,
            medium_wt: 10, light: 6, heavy: 6,
            roof_x_height: 10, roof_midline: 8, floor_baseline: 10,
            l_edge_lf: 10, r_edge_rt: 10, r_edge_md: 8, r_edge_lf: 6
        }
    };

 
   /**
     * @constant
     * @static
     */
    static left_upbowl = {
        name: "left_upbowl",
        shortName: "l-upbwl",
        topology: "segment",
        stroke: "down",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 10], ["cupped", 40], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["n", "n", "dc", "dc", "y", "dc", "dc", "n"], 20]
            ],
            contact: {
                s2: Dict( [["t2", 20], ["mt2", 6]] )
            },
            tips: [{
                    location: Dict( [[17, 10], [10, 7], [18, 7]] ),
                    orientation: Dict( [["e", 10], ["ne", 6], ["se", 6], ["n", 6], ["s", 6]] )
                }, {
                    location: Dict( [[4, 7], [18, 9], [11, 10], [17, 6]] ),
                    orientation: Dict( [["s", 7], ["e", 10], ["sw", 6], ["se", 7], ["ne", 6]] )
                }],
            ends: [
                Dict( [[[5, "e"], 40], [[37, "ne"], 4], [[49, "se"], 35], [[22, "n"], 4], [[4, "e"], 20], [[22, "s"], 4]] ),
                Dict( [[[20, "s"], 13], [[7, "e"], 40], [[6, "e"], 27], [[48, "se"], 27], [[36, "sw"], 13], [[37, "ne"], 7], [[37, "sw"], 7], [[21, "s"], 7]] )
            ],
            curve: Dict( [
                ["slight_right", 6], ["strong_right", 7], ["full_right", 10], ["square_right", 8]
            ]),
            very_short: 10, wide: 10, half_wide: 7, medium_wt: 10, light: 7,
            roof_x_height: 10, floor_midline: 10,
            l_edge_lf: 10, l_edge_md: 6, r_edge_rt: 10, r_edge_md: 6
        }
    };


   /**
     * @constant
     * @static
     */
    static left_wing = {
        name: "left_wing",
        shortName: "l-wing",
        topology: "segment",
        stroke: "down",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", -200], ["cupped", -200], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["dc", "dc", "y", "dc", "dc", "n", "n", "n"], 20]
            ],
            contact: {
                v1: Dict( [["t2", 20]] )
            },
            tips: [{
                    location: Dict( [[3, 10], [4, 7], [10, 7]] ),
                    orientation: Dict( [["n", 10], ["s", 7], ["ne", 8], ["nw", 8], ["se", 7], ["w", 9], ["sw", 7]] )
                }, {
                    location: Dict( [[12, 10], [19, 7], [5, 9]] ),
                    orientation: Dict( [["se", 9], ["s", 10], ["sw", 7]] )
                }],
            ends: [
                Dict( [[[20, "n"], 40], [[20, "s"], 13], [[36, "ne"], 27], [[48, "nw"], 27], [[50, "se"], 13], [[4, "w"], 40], [[21, "n"], 13], [[36, "sw"], 13]] ),
                Dict( [[[50, "se"], 30], [[24, "s"], 40], [[23, "s"], 30], [[51, "se"], 20], [[38, "sw"], 20]] )
            ],
            curve: Dict( [
                ["slight_right", 7], ["square_left", 6], ["square_right", 6], ["straight", 9], ["slight_left", 10], ["strong_left", 1], ["full_left", 1]
            ]),
            short: 10, very_short: 8, wide: 8, half_wide: 10, skinny: 8, medium_wt: 9, light: 10,
            very_light: 8, roof_x_height: 10, roof_midline: 8, floor_baseline: 10,
            l_edge_lf: 10, r_edge_md: 10, r_edge_rt: 8, r_edge_lf: 8
        }
    }; 


   /**
     * @constant
     * @static
     */
    static right_bowl = {
        name: "right_bowl",
        shortName: "r-bowl",
        topology: "segment",
        stroke: "down",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 10], ["cupped", 40], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["dc", "dc", "dc", "n", "dc", "dc", "dc", "y"], 20],
                [["dc", "n", "dc", "dc", "dc", "y", "dc", "dc"], 20]
            ],
            contact: {
                b1: Dict( [["2ts", 20], ["t2", 1]] ),
                p1: Dict( [["2ts", 20], ["t1", 1], ["t2", 1]] )
            },
            tips: [{
                    location: Dict( [[3, 10], [4, 9], [10, 8], [11, 6]] ),
                    orientation: Dict( [["w", 10], ["sw", 7], ["nw", 7], ["s", 6]] )
                }, {
                    location: Dict( [[5, 10], [4, 8], [12, 6], [11, 5]] ),
                    orientation: Dict( [["w", 10], ["nw", 8], ["sw", 6]] )
                }],
            ends: [
                Dict( [[[4, "w"], 40], [[36, "sw"], 30], [[5, "w"], 30], [[6, "w"], 10], [[48, "nw"], 20], [[21, "s"], 10], [[37, "sw"], 10]] ),
                Dict( [[[8, "w"], 40], [[50, "nw"], 23], [[9, "w"], 6], [[38, "sw"], 6]] )
            ],
            curve: Dict( [
                ["full_left", 10], ["strong_left", 6]
            ]),
            short: 10, wide: 10, half_wide: 6, heavy: 10, medium_wt: 7,
            roof_x_height: 10, floor_baseline: 10,
            l_edge_lf: 10, l_edge_md: 6, r_edge_rt: 10
        }
    };


   /**
     * @constant
     * @static
     */
    static right_buttress = {
        name: "right_buttress",
        shortName: "r-butt",
        topology: "segment",
        stroke: "downright",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", -200], ["cupped", 30], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["dc", "dc", "dc", "n", "dc", "dc", "y", "y"], 20],
                [["dc", "dc", "dc", "n", "dc", "dc", "y", "dc"], 20]
            ],
            contact: {
                h1: Dict( [["t1", 20], ["nc", 1]] ),
                n1: Dict( [["t1", 20], ["nc", 1], ["m", -40]] )
            },
            tips: [{
                    location: Dict( [[3, 10], [10, 7], [4, 7], [11, 6], [5, 6], [12, 6], [17, 3]] ),
                    orientation: Dict( [["w", 10], ["nw", 8], ["sw", 8], ["se", 6], ["s", 6], ["n", 3]] )
                }, {
                    location: Dict( [[19, 10], [12, 8], [18, 6], [11, 6]] ),
                    orientation: Dict( [["s", 10], ["sw", 8], ["se", 6], ["e", 6], ["w", 6], ["n", 6]] )
                }],
            ends: [
                Dict( [[[4, "w"], 40], [[49, "nw"], 13], [[36, "sw"], 13], [[7, "w"], 7], [[5, "w"], 7], [[50, "se"], 7], [[38, "sw"], 13], [[37, "sw"], 7], [[48, "nw"], 20]] ),
                Dict( [[[25, "s"], 40], [[39, "sw"], 22], [[51, "se"], 4], [[9, "e"], 4], [[25, "n"], 4], [[24, "s"], 4], [[50, "se"], 4], [[9, "w"], 4]] )
            ],
            curve: Dict( [
                ["square_left", 10], ["slight_left", 9], ["strong_left", 7], ["straight", 7], ["full_left", 7], ["slight_right", 6]
            ]),
            short: 10, very_short: 6, wide: 10, half_wide: 8, skinny: 0,
            medium_wt: 10, light: 7, very_light: 6, heavy: 6,
            roof_x_height: 10, roof_midline: 6, floor_baseline: 10,
            l_edge_lf: 10, l_edge_md: 8, l_edge_rt: 0, r_edge_rt: 10
        }
    };


   /**
     * @constant
     * @static
     */
    static right_curl = {
        name: "right_curl",
        shortName: "r-curl",
        topology: "bisegment",
        stroke: "down",  
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 30], ["cupped", 40], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["y", "dc", "dc", "n", "n", "n", "dc", "dc"], 20], // j
                [["dc", "n", "n", "n", "n", "dc", "dc", "y"], 20] // y
            ],
            contact: {
                j1: Dict( [["nc", 20], ["m", 6], ["t1", 4]] ),
                y1: Dict( [["nc", 1], ["m", 20], ["t1", 4]] ),
                y2: Dict( [["nc", 1], ["m", 20], ["t1", 4]] )
            },
            tips: [{
                    location: Dict( [[10, 6], [17, 10], [11, 7], [ 4, 6], [18, 6], [3, 6]] ),
                    orientation: Dict( [["w", 8], ["e", 5], ["n", 10], ["nw", 8], ["s", 8], ["sw", 6], ["ne", 7]] )
                }, {
                    location: Dict( [[14, 7], [7, 10], [6, 9], [21, 6], [5, 6], [13, 7], [20, 6], [12, 7]] ),
                    orientation: Dict( [["w", 10], ["s", 9], ["sw", 9], ["e", 6], ["nw", 8], ["n", 7], ["se", 6]] )
                }],
            ends: [
                Dict( [[[5, "w"], 25], [[5, "e"], 5], [[22, "n"], 40], [[49, "nw"], 20], [[24, "n"], 5], [[21, "s"], 15], [[22, "s"], 5], 
                 [[37, "sw"], 5], [[37, "ne"], 15], [[6, "w"], 5], [[48, "nw"], 10], [[21, "n"], 5], [[20, "s"], 5], [[25, "n"], 30]] ),

                Dict( [[[13, "w"], 20], [[29, "s"], 40], [[12, "w"], 30], [[13, "e"], 10], [[10, "w"], 30], [[29, "n"], 10], [[40, "sw"], 10], [[42, "sw"], 30],
                 [[52, "nw"], 10], [[11, "w"], 20], [[30, "n"], 10], [[27, "n"], 10], [[43, "sw"], 20], [[54, "nw"], 20], [[55, "se"], 10], [[53, "nw"], 20],
                 [[28, "s"], 20], [[26, "s"], 10], [[41, "sw"], 10], [[23, "n"], 10]] )
            ],
            midpoint: 19,
            curve1: Dict( [["slight_left", 8], ["slight_right", 7], ["straight", 9], ["full_left", 6], ["square_left", 8], ["square_right", 6], ["strong_left", 6]]),
            curve2: Dict( [["slight_left", 10], ["square_right", 6], ["square_left", 8], ["strong_left", 6], ["straight", 7], ["slight_right", 6], ["full_left", 6]]),
            tall: 20, medium_ht: 8, short: 6,
            half_wide: 9, wide: 10, heavy: 8, medium_wt: 10, huge: 1,
            roof_x_height: 10, roof_midline: 6, floor_bottom: 10, floor_middown: 7,
            l_edge_md: 8, l_edge_lf: 10, r_edge_rt: 10, r_edge_md: 6
        }
    };


   /**
     * @constant
     * @static
     */
    static right_downbowl = {
        name: "right_downbowl",
        shortName: "r-dwnbwl",
        topology: "segment",
        stroke: "down",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 10], ["cupped", 40], ["spiky_closure", -10], ["closure", -40]
            ]),
            neighborhood: [
                [["y", "dc", "dc", "dc", "n", "dc", "dc", "dc"], 20]
            ],
            contact: {
                s2: Dict( [["t1", 20], ["t1m", 7], ["nc", 1]] )
            },
            tips: [{
                    location: Dict( [[4, 8], [11, 10], [18, 7], [19, 6], [3, 6], [17, 6]] ),
                    orientation: Dict( [["w", 10], ["nw", 8], ["n", 6], ["e", 6], ["ne", 6], ["sw", 6]] )
                }, {
                    location: Dict( [[5, 10], [4, 7], [12, 6]] ),
                    orientation: Dict( [["w", 10], ["s", 6], ["n", 6], ["nw", 7], ["sw", 6]] )
                }],
            ends: [
                Dict( [[[6, "w"], 40], [[51, "nw"], 25], [[7, "w"], 35], [[9, "e"], 5], [[25, "n"], 10], [[22, "n"], 5], [[39, "ne"], 10], [[37, "sw"], 5], [[38, "ne"], 5], [[48, "nw"], 10]] ),
                Dict( [[[8, "w"], 40], [[23, "s"], 12], [[50, "nw"], 15], [[39, "sw"], 6], [[9, "w"], 15], [[23, "n"], 15]] )
            ],
            curve: Dict( [
                ["strong_left", 10], ["square_left", 8], ["slight_left", 7], ["full_left", 8]
            ]),
            very_short: 10, short: 6, wide: 10, half_wide: 6,
            medium_wt: 10, light: 7, heavy: 6,
            roof_midline: 10, roof_x_height: 6, floor_baseline: 10,
            l_edge_lf: 10, l_edge_md: 6, r_edge_rt: 10
        }
    };


   /**
     * @constant
     * @static
     */
    static right_halfarc = {
        name: "right_halfarc",
        shortName: "r-hlfarc",
        topology: "segment",
        stroke: "down",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 0], ["cupped", 40], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["dc", "dc", "y", "dc", "dc", "dc", "y", "dc"], 20]
            ],
            contact: {
                w1: Dict( [["mt2", 20], ["t2", 15], ["m", 11], ["2ts", 11]] )
            },
            tips: [{
                    location: Dict( [[10, 10], [17, 6], [11, 8], [3, 7]] ),
                    orientation: Dict( [["n", 10], ["se", 6], ["s", 5], ["nw", 8], ["ne", 6]] )
                }, {
                    location: Dict( [[19, 10], [18, 6], [12, 7], [11, 6]] ),
                    orientation: Dict( [["e", 10], ["se", 9], ["ne", 9], ["s", 9], ["n", 7]] )
                }],
            ends: [
                Dict( [[[21, "n"], 40], [[51, "se"], 10], [[24, "n"], 35], [[48, "nw"], 20],
                 [[24, "s"], 10], [[51, "nw"], 10], [[21, "s"], 2], [[37, "ne"], 10],
                 [[38, "ne"], 10]] ),
                Dict( [[[9, "e"], 27], [[51, "se"], 40], [[39, "ne"], 40], [[24, "s"], 27],
                 [[21, "s"], 13], [[25, "n"], 13], [[8, "e"], 13]] )
            ],
            curve: Dict( [
                ["slight_right", 9], ["straight", 9], ["square_right", 10],
                ["slight_left", 7], ["strong_right", 9]
            ]),
            very_short: 10, short: 9, half_wide: 10, wide: 6, skinny: 8,
            medium_wt: 8, very_light: 8, light: 10, roof_x_height: 10,
            roof_midline: 9, floor_baseline: 10, floor_midline: 8,
            l_edge_md: 10, l_edge_lf: 8, r_edge_rt: 10, r_edge_md: 8
        }
    };
         

   /**
     * @constant
     * @static
     */
    static right_halfarch = {
        name: "right_halfarch",
        shortName: "r-hlfarc",
        topology: "segment",
        stroke: "down",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 0], ["cupped", 30], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["dc", "dc", "y", "dc", "dc", "dc", "y", "dc"], 20]
            ],
            contact: {
                m1: Dict( [["t1", 20], ["nc", 1]] )
            },
            tips: [{
                    location: Dict( [[10, 10], [11, 9], [17, 7]] ),
                    orientation: Dict( [["w", 10], ["s", 9], ["nw", 9], ["n", 7], ["sw", 7]] )
                }, {
                    location: Dict( [[19, 10], [12, 8], [18, 6]] ),
                    orientation: Dict( [["s", 10], ["w", 6], ["sw", 7], ["se", 6]] )
                }],
            ends: [
                Dict( [[[5, "w"], 40], [[21, "s"], 40], [[49, "nw"], 40], [[22, "n"], 20],
                 [[37, "sw"], 20], [[7, "w"], 20], [[4, "w"], 10]] ),
                Dict( [[[25, "s"], 40], [[9, "w"], 8], [[39, "sw"], 16], [[49, "se"], 8]] )
            ],
            curve: Dict( [
                ["slight_left", 7], ["strong_left", 7], ["square_left", 7]
            ]),
            very_short: 7, short: 10, half_wide: 10, medium_wt: 9, light: 10,
            roof_x_height: 10, roof_midline: 6, floor_baseline: 10,
            floor_midline: 6, l_edge_md: 10, r_edge_rt: 10
        }
    };


   /**
     * @constant
     * @static
     */
    static right_halfpost = {
        name: "right_halfpost",
        shortName: "r-hlfpst",
        topology: "segment",
        stroke: "down",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 10], ["cupped", 30], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["dc", "n", "n", "n", "dc", "dc", "y", "dc"], 20]
            ],
            contact: {
                u1: Dict( [["t2", 20], ["m", 18]] ),
                w1: Dict( [["t2", 20], ["m", 18]] )
            },
            tips: [{
                    location: Dict( [[17, 10], [10, 7], [18, 7], [11, 6]] ),
                    orientation: Dict( [["n", 9], ["w", 7], ["s", 10], ["ne", 8], ["se", 7], ["nw", 8]] )
                }, {
                    location: Dict( [[19, 10], [18, 9], [12, 8]] ),
                    orientation: Dict( [["s", 10], ["se", 7], ["sw", 7], ["ne", 6], ["e", 6]] )
                }],
            ends: [
                Dict( [[[22, "n"], 40], [[5, "w"], 15], [[22, "s"], 40], [[21, "s"], 20],
                 [[49, "se"], 20], [[37, "ne"], 40], [[49, "nw"], 40], [[21, "n"], 20],
                 [[25, "s"], 20]] ),
                Dict( [[[25, "s"], 40], [[22, "s"], 20], [[49, "se"], 10], [[51, "se"], 10],
                 [[39, "sw"], 20], [[39, "ne"], 10], [[24, "s"], 10], [[9, "e"], 10]] )
            ],
            curve: Dict( [
                ["straight", 10], ["square_left", 7], ["slight_left", 7], ["strong_left", 6],
                ["square_right", 7], ["strong_right", 6], ["full_left", 6], ["full_right", 6]
            ]),
            short: 10, very_short: 8, skinny: 8, half_wide: 10, light: 10, medium_wt: 8,
            very_light: 8, roof_x_height: 10, roof_midline: 8, floor_baseline: 10, floor_midline: 8,
            l_edge_rt: 7, l_edge_md: 10, r_edge_rt: 10, r_edge_md: 6
        }
    };


   /**
     * @constant
     * @static
     */
    static right_hook = {
        name: "right_hook",
        shortName: "r-hook",
        topology: "bisegment",
        stroke: "down",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 20], ["cupped", 40], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["dc", "dc", "n", "n", "n", "n", "dc", "dc"], 20]
            ],
            contact: {
                g1: Dict( [["t1m", 20], ["m", 5], ["2ms", 19], ["t1", 4], ["nc", 1]] ),
                g2: Dict( [["m", 20], ["t1", 18], ["nc", 1]] )
            },
            tips: [{
                    location: Dict( [[10, 7], [3, 6], [18, 7], [17, 10], [11, 6]] ),
                    orientation: Dict( [["w", 7], ["nw", 6], ["n", 12], ["e", 4], ["ne", 6]] )
                }, {
                    location: Dict( [[14, 6], [6, 10], [7, 7], [5, 6], [21, 6], [12, 6], [13, 6]] ),
                    orientation: Dict( [["w", 10], ["n", 7], ["nw", 7], ["se", 6], ["sw", 6]] )
                }],
            ends: [
                Dict( [[[5, "w"], 1], [[48, "nw"], 5], [[25, "n"], 5], [[5, "e"], 1],
                    [[37, "ne"], 5], [[39, "ne"], 5], [[24, "n"], 5], [[49, "nw"], 5],
                    [[22, "n"], 40]] ),
                Dict( [[[13, "w"], 8], [[29, "n"], 24], [[12, "w"], 24], [[54, "nw"], 16],
                    [[10, "w"], 40], [[52, "nw"], 16], [[54, "se"], 8], [[27, "n"], 8],
                    [[11, "w"], 8], [[55, "nw"], 8], [[53, "nw"], 8], [[41, "sw"], 8]] ),
            ],
            midpoint: 19,
            curve1: Dict( [
                ["slight_left", 7], ["square_right", 6], ["straight", 9], ["slight_right", 6]
            ]),
            curve2: Dict( [
                ["slight_left", 10], ["square_left", 9], ["straight", 6], ["strong_left", 7],  ["slight_right", -80]
            ]),
            tall: 9, medium_ht: 10, short: 6, half_wide: 7, wide: 10, heavy: 7,
            medium_wt: 10, roof_x_height: 10, roof_midline: 7, floor_bottom: 10, floor_middown: 9,
            l_edge_md: 6, l_edge_lf: 10, r_edge_rt: 10, r_edge_md: 6
        }
    };


   /**
     * @constant
     * @static
     */
    static right_post = {
        name: "right_post",
        shortName: "r-post",
        topology: "segment",
        stroke: "down",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 10], ["cupped", 30], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["n", "n", "dc", "dc", "dc", "y", "dc", "dc"], 20]
            ],
            contact: {
                d1: Dict( [["mt2", 20], ["m", 4], ["2ms", 14], ["t2", 4]] ),
                d2: Dict( [["m", 20], ["t2", 15]] )
            },
            tips: [{
                    location: Dict( [[15, 10], [9, 8], [16, 8], [8, 7]] ),
                    orientation: Dict( [["n", 10], ["ne", 7], ["nw", 6], ["sw", 6]] )
                }, {
                    location: Dict( [[19, 10], [18, 7], [12, 6]] ),
                    orientation: Dict( [["s", 10], ["se", 8], ["sw", 6]] )
                }],
            ends: [
                Dict( [[[16, "n"], 40], [[33, "ne"], 40], [[19, "n"], 40], [[18, "n"], 20], [[45, "nw"], 20], [[33, "sw"], 20]] ),
                Dict( [[[25, "s"], 40], [[51, "se"], 40], [[22, "s"], 27], [[39, "sw"], 13]] )
            ],
            curve: Dict( [
                ["straight", 10], ["slight_right", 9], ["slight_left", 7], ["square_left", 7]
            ]),
            tall: 10, medium_ht: 8, short: 6, skinny: 10, half_wide: 9,
            medium_wt: 10, heavy: 8, light: 6, roof_top: 10,
            roof_t_height: 8, floor_baseline: 10, floor_midline: 7,
            l_edge_rt: 10, l_edge_md: 9, r_edge_rt: 10
        }
    };

    
   /**
     * @constant
     * @static
     */
    static right_tail = {
        name: "right_tail",
        shortName: "r-tail",
        topology: "segment",
        stroke: "down",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 30], ["cupped", 40], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["dc", "dc", "n", "n", "n", "n", "dc", "dc"], 20]
            ],
            contact: {
                q1: Dict( [["t1m", 20], ["m", 5], ["2ms", 15], ["t1", 5], ["nc", 1]] ),
                q2: Dict( [["m", 20], ["t1", 18], ["nc", 1]] )
            },
            tips: [{
                    location: Dict( [[17, 10], [19, 7], [18, 7], [3, 6], [10, 6]] ),
                    orientation: Dict( [["n", 10], ["se", 6], ["nw", 7], ["ne", 7], ["s", 6], ["e", 4]] )
                }, {
                    location: Dict( [[21, 10], [14, 6], [20, 7]] ),
                    orientation: Dict( [["s", 10], ["se", 6], ["e", 7], ["ne", 5], ["n", 5]] )
                }],
            ends: [
                Dict( [[[22, "n"], 40], [[51, "se"], 13], [[25, "n"], 27], [[37, "ne"], 27], [[49, "nw"], 13], [[28, "s"], 13], [[48, "nw"], 13], [[5, "e"], 5]] ),
                Dict( [[[31, "s"], 40], [[30, "s"], 10], [[28, "s"], 30], [[55, "se"], 10], [[13, "e"], 20], [[11, "e"], 10], [[43, "ne"], 9]] )
            ],
            curve: Dict( [
                ["straight", 10], ["square_right", 7], ["slight_left", 6], ["slight_right", 6]
            ]),
            tall: 9, medium_ht: 10, short: 6, very_short: 6, skinny: 10,
            half_wide: 10, wide: 6, medium_wt: 10, light: 6, heavy: 7, very_light: 6,
            roof_x_height: 10, roof_midline: 7, roof_baseline: 6, floor_bottom: 10, floor_middown: 7,
            l_edge_rt: 10, l_edge_md: 9, l_edge_lf: 6, r_edge_rt: 10
        }
    };


   /**
     * @constant
     * @static
     */
    static right_wing = {
        name: "right_wing",
        shortName: "r-wing",
        topology: "segment",
        stroke: "down",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", -200], ["cupped", -200], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["dc", "n", "n", "n", "dc", "dc", "y", "dc"], 20]
            ],
            contact: {
                v1: Dict( [["t2", 20]] )
            },
            tips: [{
                    location: Dict( [[17, 10], [11, 7], [10, 9]] ),
                    orientation: Dict( [["n", 10], ["s", 7], ["nw", 7], ["w", 9], ["ne", 7]] )
                }, {
                    location: Dict( [[12, 10], [19, 9], [5, 9]] ),
                    orientation: Dict( [["sw", 10], ["s", 7]] )
                }],
            ends: [
                Dict( [[[22, "n"], 40], [[21, "s"], 13], [[49, "nw"], 13], [[5, "w"], 27], [[37, "ne"], 13]] ),
                Dict( [[[39, "sw"], 40], [[25, "s"], 27], [[38, "sw"], 27], [[8, "w"], 13], [[24, "s"], 27]] )
            ],
            curve: Dict( [
                ["slight_left", 10], ["full_left", 7], ["square_left", 7], ["straight", 8], ["strong_left", 6], ["slight_right", 6]
            ]),
            short: 10, very_short: 8, half_wide: 10, wide: 9, skinny: 8,
            light: 10,
            medium_wt: 9, roof_x_height: 10, roof_midline: 8, floor_baseline: 10,
            l_edge_rt: 8, l_edge_md: 10, l_edge_lf: 9, r_edge_rt: 10,
            r_edge_md: 8, r_edge_lf: 8
        }
    };


   /**
     * @constant
     * @static
     */
    static s_base = {
        name: "s_base",
        shortName: "s-base",
        topology: "segment",
        stroke: "right",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 0], ["cupped", 40], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["y", "dc", "dc", "n", "n", "n", "dc", "dc"], 20]
            ],
            contact: {
                s1: Dict( [["t2", 20], ["mt2", 11]] )
            },
            tips: [{
                    location: Dict( [[5, 10], [3, 6], [4, 8], [12, 7]] ),
                    orientation: Dict( [["w", 10], ["s", 6], ["nw", 8], ["e", 6]] )
                }, {
                    location: Dict( [[19, 10], [18, 9], [5, 6], [17, 6]] ),
                    orientation: Dict( [["e", 10], ["ne", 9], ["n", 9], ["se", 7], ["s", 7]] )
                }],
            ends: [
                Dict( [[[8, "w"], 40], [[23, "s"], 30], [[50, "nw"], 20], [[48, "nw"], 10], [[9, "e"], 10], [[9, "w"], 10]] ),
                Dict( [[[9, "e"], 40], [[39, "ne"], 30], [[25, "n"], 20], [[51, "se"], 10], [[23, "s"], 10], [[22, "n"], 10]] )
            ],
            curve: Dict( [
                ["straight", 10], ["slight_right", 8], ["square_right", 8], ["slight_left", 6]
            ]),
            no_height: 8, very_short: 10, short: 7, wide: 10, skinny: 6,
            half_wide: 6, light: 10, medium_wt: 8, very_light: 7,
            roof_baseline: 7, roof_midline: 10, roof_x_height: 7,
            floor_baseline: 10, l_edge_lf: 10, l_edge_md: 6, r_edge_rt: 10,
            r_edge_lf: 6
        }
    };


   /**
     * @constant
     * @static
     */
    static s_crossbar = {
        name: "s_crossbar",
        shortName: "s-cross",
        topology: "segment",
        stroke: "right",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 10], ["cupped", 40], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["y", "dc", "dc", "dc", "y", "dc", "dc", "dc"], 20]
            ],
            contact: {
                s1: Dict( [["2ts", 20]] )
            },
            tips: [{
                    location: Dict( [[4, 10], [3, 8], [11, 7], [10, 7]] ),
                    orientation: Dict( [["w", 10], ["nw", 9], ["e", 9]] )
                }, {
                    location: Dict( [[18, 10], [19, 9], [11, 7], [17, 9]] ),
                    orientation: Dict( [["e", 10], ["se", 7], ["ne", 6]] )
                }],
            ends: [
                Dict( [[[6, "w"], 40], [[48, "nw"], 27], [[6, "e"], 13], [[5, "e"], 13], [[37, "ne"], 13], [[7, "e"], 13]] ),
                Dict( [[[7, "e"], 40], [[51, "se"], 27], [[6, "e"], 13], [[37, "ne"], 13], [[38, "sw"], 13], [[5, "e"], 13]] )
            ],
            curve: Dict( [
                ["straight", 10], ["slight_right", 7], ["slight_left", 6]
            ]),
            no_height: 10, very_short: 9, short: 8, wide: 10, half_wide: 8,
            light: 10, very_light: 8, roof_midline: 10, roof_x_height: 9,
            floor_midline: 10, floor_baseline: 7, floor_x_height: 6,
            l_edge_lf: 10, l_edge_md: 7, r_edge_rt: 10, r_edge_md: 6
        }
    };


   /**
     * @constant
     * @static
     */
    static t_post = {
        name: "t_post",
        shortName: "t-post",
        topology: "bisegment",
        stroke: "down",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 20], ["cupped", 40], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["n", "n", "dc", "n", "n", "n", "dc", "n"], 20]
            ],
            contact: {
                t1: Dict( [["m", 20]] )
            },
            tips: [{
                    location: Dict( [[9, 10], [16, 6], [8, 6], [2, 9]] ),
                    orientation: Dict( [["n", 10], ["ne", 6], ["nw", 6]] )
                }, {
                    location: Dict( [[19, 10], [11, 7], [18, 9], [12, 6]] ),
                    orientation: Dict( [["e", 10], ["w", 7], ["ne", 8], ["sw", 7], ["se", 8], ["n", 9], ["s", 7]] )
                }],
            ends: [
                Dict( [[[18, "n"], 40], [[35, "ne"], 6], [[17, "n"], 17], [[46, "nw"], 11], [[15, "n"], 6]] ),
                Dict( [[[9, "e"], 40], [[7, "w"], 10], [[39, "ne"], 20], [[39, "sw"], 10], [[51, "se"], 20], [[25, "n"], 20], [[24, "n"], 10], [[24, "s"], 10]] )
            ],
            midpoint: 11,
            curve1: Dict( [
                ["straight", 9], ["slight_right", 7], ["square_left", 6], ["slight_left", 7]
            ]),
            curve2: Dict( [
                ["square_right", 9], ["strong_left", 6], ["slight_right", 8], ["strong_right", 10], ["full_right", 7], ["straight", 6]
            ]),
            medium_ht: 10, tall: 6, half_wide: 10, skinny: 9, wide: 9, medium_wt: 10, heavy: 7,
            roof_t_height: 10, roof_top: 6, floor_baseline: 10,
            l_edge_md: 10, l_edge_lf: 9, r_edge_rt: 10, r_edge_md: 6
            
        }
    };


   /**
     * @constant
     * @static
     */
    static up_arm = {
        name: "up_arm",
        shortName: "up-arm",
        topology: "segment",
        stroke: "upright",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 0], ["cupped", 30], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["y", "dc", "dc", "dc", "y", "y", "y", "y"], 20]
            ],
            contact: {
                k1: Dict( [["t1", 20], ["t1m", 20], ["m", 11]] )
            },
            tips: [{
                    location: Dict( [[5, 6], [4, 10], [11, 6], [3, 8], [10, 6], [12, 6]] ),
                    orientation: Dict( [["sw", 10], ["w", 9], ["ne", 8], ["e", 8], ["s", 6]] )
                }, {
                    location: Dict( [[17, 10], [11, 6], [18, 8], [10, 7]] ),
                    orientation: Dict( [["ne", 10], ["e", 9], ["se", 8], ["s", 8]] )
                }],
            ends: [
                Dict( [[[38, "sw"], 13], [[6, "w"], 27], [[37, "ne"], 13], [[4, "w"], 27], [[36, "sw"], 40], [[4, "e"], 13], [[5, "e"], 13], [[36, "ne"], 13], [[24, "s"], 10]] ),
                Dict( [[[37, "ne"], 40], [[5, "e"], 40], [[49, "se"], 27], [[21, "s"], 13], [[36, "ne"], 13], [[22, "s"], 13], [[4, "e"], 13]] )
            ],
            curve: Dict( [
                ["straight", 10], ["slight_right", 6], ["square_left", 6], ["strong_left", 6], ["slight_left", 8]
            ]),
            short: 6, very_short: 10, no_height: 8, wide: 10, half_wide: 9, light: 10, medium_wt: 7, very_light: 8,
            roof_x_height: 10, floor_baseline: 6, floor_midline: 10, floor_x_height: 8,
            l_edge_lf: 10, l_edge_md: 6, r_edge_rt: 10, r_edge_md: 7
        }
    };


   /**
     * @constant
     * @static
     */
    static up_circle = {
        name: "up_circle",
        shortName: "up-circ",
        topology: "loop",
        norms: {
            shape: Dict([
                ["closure", 40], ["spiky_closure", 10]
            ]),
            neighborhood: [
                [["n", "n", "dc", "dc", "y", "y", "dc", "dc"], 20]
            ],
            contact: {
                e2: Dict( [["nc", 1], ["c_lf", 20], ["c_rt", 20], ["m", 11], ["t1", 11], ["t2", 11]] )
            },
            first_point: [
                [4, 20], [3, 20], [10, 1], [11, 1]
            ],
            last_point: [
                [18, 20], [17, 20], [10, 1], [11, 1]
            ],
            very_short: 10, short: 7, wide: 10, half_wide: 6, heavy: 10,
            medium_wt: 9, roof_x_height: 10, floor_midline: 10,
            floor_baseline: 7, l_edge_lf: 10, l_edge_md: 6, r_edge_rt: 10
        }
    };


   /**
     * @constant
     * @static
     */
    static z_cap = {
        name: "z_cap",
        shortName: "z-cap",
        topology: "segment",
        stroke: "right",
        norms: {
            shape: Dict([
                ["simple", 40], ["bactrian", 40], ["cupped", 40], ["spiky_closure", -10]
            ]),
            neighborhood: [
                [["n", "dc", "dc", "dc", "y", "dc", "dc", "dc"], 20]
            ],
            contact: {
                z1: Dict( [["t2", 20], ["m", 13]] )
            },
            tips: [{
                    location: Dict( [[3, 10], [4, 9], [10, 7]] ),
                    orientation: Dict( [["w", 10], ["ne", 8], ["sw", 9], ["e", 9], ["s", 6]] )
                }, {
                    location: Dict( [[17, 10], [18, 9], [10, 9]] ),
                    orientation: Dict( [["e", 10], ["se", 8], ["ne", 7]] )
                }],
            ends: [
                Dict( [[[4, "w"], 40], [[36, "ne"], 20], [[36, "sw"], 40], [[5, "w"], 10], [[5, "e"], 10], [[4, "e"], 5], [[20, "s"], 10], [[20, "n"], 7]] ),
                Dict( [[[5, "e"], 40], [[49, "se"], 27], [[4, "e"], 13], [[36, "ne"], 13]] )
            ],
            curve: Dict( [
                ["straight", 10], ["slight_left", 8], ["square_left", 7]
            ]),
            no_height: 10, very_short: 9, wide: 10, half_wide: 9, light: 10,
            very_light: 8, medium_wt: 6,
            roof_x_height: 10, floor_x_height: 10, floor_midline: 9,
            l_edge_lf: 10, l_edge_md: 8, r_edge_rt: 10, r_edge_md: 7
        }
    };
};


for (let roleName in Namespace.Roles) { Object.freeze(Namespace.Roles[roleName]); }
Object.freeze(Namespace.Roles);


})( window.LetterSpirit = window.LetterSpirit || {} );







// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Roles = Namespace.Roles;
    
/**
 * @classdesc
 * This class encapsulates the definitions for Whole objects.
 * 
 */
Namespace.Wholes = class
{
    static a1 = {name: 'a1',  roleSet: [Roles.a_arch, Roles.left_downbowl] };
    static a2 = {name: 'a2',  roleSet: [Roles.a_arch, Roles.down_circle] };
    static b1 = {name: 'b1',  roleSet: [Roles.left_post, Roles.right_bowl] };
    static b2 = {name: 'b2',  roleSet: [Roles.left_post, Roles.circle] };
    static c1 = {name: 'c1',  roleSet: [Roles.left_bowl] };
    static d1 = {name: 'd1',  roleSet: [Roles.right_post, Roles.left_bowl] };
    static d2 = {name: 'd2',  roleSet: [Roles.right_post, Roles.circle] };
    static e1 = {name: 'e1',  roleSet: [Roles.e_bowl, Roles.e_crossbar] };
    static e2 = {name: 'e2',  roleSet: [Roles.up_circle, Roles.e_tail] };
    static f1 = {name: 'f1',  roleSet: [Roles.f_post, Roles.crossbar] };
    static g1 = {name: 'g1',  roleSet: [Roles.right_hook, Roles.left_bowl] };
    static g2 = {name: 'g2',  roleSet: [Roles.right_hook, Roles.circle] };

    static h1 = {name: 'h1',  roleSet: [Roles.left_post, Roles.right_buttress] };
    static i1 = {name: 'i1',  roleSet: [Roles.halfpost, Roles.dot] };
    static j1 = {name: 'j1',  roleSet: [Roles.right_curl, Roles.dot] };
    static k1 = {name: 'k1',  roleSet: [Roles.left_post, Roles.up_arm, Roles.down_arm] };
    static l1 = {name: 'l1',  roleSet: [Roles.center_post] };
    static m1 = {name: 'm1',  roleSet: [Roles.left_halfpost, Roles.left_halfarch, Roles.right_halfarch] };
    static n1 = {name: 'n1',  roleSet: [Roles.left_halfpost, Roles.right_buttress] };
    static o1 = {name: 'o1',  roleSet: [Roles.circle] };
    static p1 = {name: 'p1',  roleSet: [Roles.left_tail, Roles.right_bowl] };
    static p2 = {name: 'p2',  roleSet: [Roles.left_tail, Roles.circle] };

    static q1 = {name: 'q1',  roleSet: [Roles.right_tail, Roles.left_bowl] };
    static q2 = {name: 'q2',  roleSet: [Roles.right_tail, Roles.circle] };
    static r1 = {name: 'r1',  roleSet: [Roles.left_halfpost, Roles.cap] };
    static s1 = {name: 's1',  roleSet: [Roles.cap, Roles.s_crossbar, Roles.s_base] };
    static s2 = {name: 's2',  roleSet: [Roles.left_upbowl, Roles.right_downbowl] };
    static t1 = {name: 't1',  roleSet: [Roles.t_post, Roles.crossbar] };
    static u1 = {name: 'u1',  roleSet: [Roles.right_halfpost, Roles.left_uparc] };
    static v1 = {name: 'v1',  roleSet: [Roles.left_wing, Roles.right_wing] };
    static w1 = {name: 'w1',  roleSet: [Roles.right_halfpost, Roles.left_halfarc, Roles.right_halfarc] };
    static x1 = {name: 'x1',  roleSet: [Roles.foreslash, Roles.backslash] };
    static y1 = {name: 'y1',  roleSet: [Roles.right_curl, Roles.left_uparc] };
    static y2 = {name: 'y2',  roleSet: [Roles.right_curl, Roles.backslash] };
    static z1 = {name: 'z1',  roleSet: [Roles.z_cap, Roles.foreslash, Roles.basebar] };

};

for (let wholeName in Namespace.Wholes) { Object.freeze(Namespace.Wholes[wholeName]); }
Object.freeze(Namespace.Wholes);


})( window.LetterSpirit = window.LetterSpirit || {} );







// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Knowledge = Namespace.Knowledge;
    const Params = Namespace.Params;


/**
 * @classdesc
 * This class provides several utility functions used throughout the code.
 * 
 */
 Namespace.Utils = class
 {
    /**
     * Gets the xy coordinates of a given point.
     * 
     * @param {Number} pointId - The point id. (Range is [1 - 21])
     */
    static PointIdToXYCoords(pointId) 
    {
        if ((pointId < 1) || (pointId > 21)) { throw new Error("Invalid pointId, in PointIdToXYCoords"); }

        return {x: Math.floor((pointId-1)/7),  y: (pointId-1)%7}; 
    }


    /**
     * Returns the distance between two points.
     * 
     * @param {Number} pid1 - The id of the first point.
     * @param {Number} pid2 - The id of the second point.
     *
     */
    static DistanceBetweenPointIds(pid1, pid2)
    {
        const p1 = Namespace.Utils.PointIdToXYCoords(pid1);
        const p2 = Namespace.Utils.PointIdToXYCoords(pid2);
        return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    }


    /**
     * Gets the tips (as point ids) of a given Part or quanta-list.
     * 
     * @param {Part|Array} arg - The part or list of quanta ids.
     * 
     */
    static GetTips(arg) 
    {
        const qids = (arg instanceof Namespace.Part) ? arg.getQuantaIds() : arg;
        const pointIds = qids.flatMap(qid => Namespace.Quanta[qid].pointIds);
        return pointIds.filter((pid, i, a) => a.indexOf(pid) === a.lastIndexOf(pid));              
    }


    /**
     * Rounds a number to 1 decimal place.
     * 
     */
    static Round1(val)
    {
       return Math.round(val * 10) / 10;
    }


    /**
     * Rounds a number to 2 decimal places.
     * 
     */
    static Round2(val)
    {
       return Math.round(val * 100) / 100;
    }


    /**
     * Rounds a number to 3 decimal places.
     * 
     */
    static Round3(val)
    {
       return Math.round(val * 1000) / 1000;
    }


    /**
     * From a *linearlized* list of quanta, extracts the point ids 
     * encountered while walking through the list in order.
     * 
     */
    static LinearizedPointIds(qids) 
    {
        if (!qids || !qids.length) { return []; }

        const quanta = qids.map(qid => Namespace.Quanta[qid]);
        if (qids.length === 1) { return [...quanta[0].pointIds]; }

        const result = [];
        quanta.forEach((q, i) => { 
            if (i < quanta.length - 1) { 
                result.push(quanta[i+1].pointIds.includes(q.startPointId) ? q.endPointId : q.startPointId);
            } else { 
                result.push(...(quanta[i-1].pointIds.includes(q.startPointId) ? q.pointIds : q.pointIds.slice().reverse())); 
            }
        });
        return result;             
    }


    /**
     * Counts the number of mid-quanta crossings between two quanta lists.
     * 
     */
    static MidQuantaTouches(qids1, qids2) 
    {
        const crossings = qids1.map(qid1 => qids2.includes(Knowledge.MidQuantaTouchMap[qid1]) ? 1 :  0);
        return crossings.reduce((a, b) => a + b, 0);
    }

    
    /**
     * From a *linearlized* list of point ids, computes a measure the path's curvature.
     * 
     */
    static PartCurvature(pointIds) 
    {
        if (!pointIds || pointIds.length < 3) { return 0; }

        const Utils = Namespace.Utils;
        const end1 = Utils.PointIdToXYCoords(pointIds[0]);
        const end2 = Utils.PointIdToXYCoords(pointIds[pointIds.length - 1]);
        const signedDeltas = pointIds.map(pid => {
            const pt = Utils.PointIdToXYCoords(pid);
            const v1 = {x: pt.x - end1.x, y: pt.y - end1.y};
            const v2 = {x: end2.x - end1.x, y: end2.y - end1.y};
            return (-v1.x*v2.y + v1.y*v2.x)/(v2.x*v2.x + v2.y*v2.y); // (perp dist)/|v2|
        });
            
        const avg = signedDeltas.reduce((a, b) => a + b, 0)/signedDeltas.length;
        return Utils.Round3(avg);
    }


    /**
     * Reduces all role and whole activations, clears the bindings, and 
     * cues up some gestalt codelets.
     * 
     */
    static Dampen(wksp)
    {
        Object.keys(wksp.roleActivations).forEach( r => wksp.roleActivations[r] *= 0.05 );
        Object.keys(wksp.wholeActivations).forEach( w => wksp.wholeActivations[w] *= 0.10 );
        wksp.bindings = [];
        wksp.app.coderack.post(Params.GestaltBatchSize, 'gestalt', Params.VeryHighUrgency, 1);
    }


    /**
     * Given a set of quanta making up a Part, tries to do a forward traversal starting from a tip.
     * If the quanta-set has more than 2 tips, the algorithm fails and just returns the input.
     * 
     * @param {Array} qids - A list of quantum ids.
     * @param {RandGen} randGen - A random number generator.
     */
    static Linearize(qids, randGen) 
    {
        if (qids.length === 0) { return []; }

        const tips = Namespace.Utils.GetTips(qids); // Tips are points that occur only once
        const startQid = (tips.length === 0) ? qids[0] : qids.find(qid => Namespace.Quanta[qid].pointIds.includes(tips[0]));

        return (tips.length > 2) ? [...qids] : 
            Namespace.Utils._RobustNeighborSort([startQid], qids.filter(qid => qid !== startQid), randGen).flat();
    }


    /**
     * Given a set of quanta making up a Part, does a forward traversal starting from a tip. 
     * Repeats until all quanta have been assigned to some path, returning multiple paths if necessary.
     *
     */
    static RobustLinearize(qids, randGen) 
    {
        if (qids.length === 0) { return []; }

        const tips = Namespace.Utils.GetTips(qids);
        const startQid = (tips.length === 0) ? qids[0] : qids.find(qid => Namespace.Quanta[qid].pointIds.includes(tips[0]));
            
        const firstSwing = Namespace.Utils._RobustNeighborSort([startQid], qids.filter(qid => qid !== startQid), randGen);
        const remaining = qids.filter(qid => !firstSwing.flat().includes(qid));
        
        return firstSwing.concat( Namespace.Utils.RobustLinearize(remaining, randGen) );
    }
    

    /** 
     * Internal function used by the Linearize methods. 
     * Appends quanta from a second list to the tail of a first list, to build a linear path.
     * When no more can be appended, starts a new path.
     *
     */
    static _RobustNeighborSort(qids1, qids2, randGen) 
    {
        if (qids1.length === 0) { throw new Error("_RobustNeighborSort: qids1 is empty"); }
        if (qids2.length === 0) { return [qids1]; }

        const tail1 = qids1[qids1.length - 1];
        let bypassed = [];
        if (qids1.length > 1) {
            const preTail1 = qids1[qids1.length - 2];
            const commonPointId = Namespace.Quanta[tail1].pointIds.find(pid => Namespace.Quanta[preTail1].pointIds.includes(pid));
            bypassed = Knowledge.PointList[commonPointId];
        } 
        
        const nbrs = Knowledge.QuantaNeighbors[tail1];
        const options = qids2.filter(qid => nbrs.includes(qid) && !bypassed.includes(qid));        
        if (options.length > 0) {
            // Pick one of the connected quanta, append it to qids1, and recurse
            const head2 = randGen.choice(options);
            return Namespace.Utils._RobustNeighborSort([...qids1, head2], qids2.filter(qid => qid !== head2), randGen);
        } 
        else {
            // No more quanta can be appended to qids1, so start a new path
            const islands = Namespace.Utils.GlomIslands(qids2);
            return [qids1].concat( Namespace.Utils.RobustLinearize(islands[0], randGen) || []);
        }
    }


    /**
     * Groups a list of quanta into connected islands.
     * 
     */
    static GlomIslands(qids) 
    {
        let islands = [];
        let unusedQids = [...qids];

        while (unusedQids.length > 0) {
            const island = [unusedQids.shift()];
            islands.push(island); 
            let nbrs = Knowledge.QuantaNeighbors[island[0]].filter(qid => unusedQids.includes(qid));
            while (nbrs.length > 0) {
                island.push(...nbrs);
                unusedQids = unusedQids.filter(qid => !nbrs.includes(qid));
                nbrs = nbrs.flatMap(nid => Knowledge.QuantaNeighbors[nid]).filter(nid => unusedQids.includes(nid));
                nbrs = [...new Set(nbrs)];
            }
        }
        return islands;
    }
    

    /**
     * Makes connected parts, given a list of joints.
     *  
     */
    static MakePartsFromJoints(joints)
    {
        let parts = [];
        let unusedJoints = [...joints];
        while (unusedJoints.length > 0) {
            let newJointList = [unusedJoints.shift()];
            for (let j = 0; j < newJointList.length; j++) {
                for (let i = 0; i < unusedJoints.length; i++) {
                    const joint = unusedJoints[i];
                    if ( newJointList.some(jt => (jt.qidA === joint.qidA) || (jt.qidB === joint.qidA) || (jt.qidA === joint.qidB) || (jt.qidB === joint.qidB)) ) {
                        newJointList.push(joint);
                        unusedJoints[i] = null;
                    }
                }
                unusedJoints = unusedJoints.filter(x => x !== null);
            }
            if (newJointList.length > 1) { // Remove former singlets
                const newJointQids = newJointList.flatMap(jt => [jt.qidA, jt.qidB]);
                newJointList = newJointList.filter(jt => !jt.isSinglet() ||
                    newJointQids.indexOf(jt.qidA) === newJointQids.lastIndexOf(jt.qidA) ); 
            }
            parts.push(new Namespace.Part(newJointList));
        }      
        return parts;  
    }
    

    /**
     * Calculates how well a part fills a given role.
     * 
     */
    static CalcRoleScoreForPart(part, role, wksp)
    {
        const Utils = Namespace.Utils;
        const topos = part.labels.filter(f => f.hasData());     // contact, nbhd, tips, curve, curve1, curve2, shape, ends
        const features = part.labels.filter(f => !f.hasData()); // All the other labels
        const flippedTopos = topos.map(t => t.toFlipped());

        // Calculate feature score           
        let featureScore = 0;
        features.forEach(f => { featureScore += (role.norms[f.text] !== undefined) ? role.norms[f.text] : wksp.sparkerData.punish; });
        
        // Calculate topology scores
        let topoNormalScore = 0;
        topos.forEach(t => {topoNormalScore += Utils._TopologyScore(role, t, wksp); });
        
        let topoFlippedScore = 0;
        flippedTopos.forEach(t => {topoFlippedScore += Utils._TopologyScore(role, t, wksp); });  
    
        // Package the result
        featureScore = 25*(featureScore/Params.MaxFeatureScore);
        const topoScore = 25*Math.max(topoNormalScore, topoFlippedScore) / Params.MaxTopoScore[role.topology];
        const flip = (topoNormalScore > topoFlippedScore) ? 'normal' : 'flipped';

        const result = { role:role, score:Math.max(0, Utils.Round3(featureScore + topoScore + 2*Math.min(featureScore, topoScore))), flip:flip };
        return result;
    }


    /**
     * Calculates a topology score.
     * @private
     * 
     */
    static _TopologyScore(role, label, wksp)
    {
        const labelData = label.data;
        const roleData = role.norms[label.text];
        const punish = wksp.sparkerData.punish;
        const punishHard = wksp.sparkerData.punishHard;
        let val;

        const getVal = function (dict, key, defaultVal=punishHard) { 
            return (dict[key] !== undefined) ? dict[key] : defaultVal; 
        }; 

        const curveScore = function (labelData, roleData) {
            if (!roleData || !Object.keys(roleData).length) { return 0; }
            if (roleData[labelData] !== undefined) { return roleData[labelData]; }
            if (labelData == 'weird_curve') { return 0; }
            const minIndex = Math.min(...Object.keys(roleData).map(k => Knowledge.CurvesList.indexOf(k)));
            const maxIndex = Math.max(...Object.keys(roleData).map(k => Knowledge.CurvesList.indexOf(k)));
            const labelIndex = Knowledge.CurvesList.indexOf(labelData);
            const dist = Math.min(Math.abs(labelIndex - minIndex), Math.abs(maxIndex - labelIndex));
            return dist * punish;
        };

        switch (label.text) {
            case 'tips':
                if (!roleData || !roleData.length) { return 0; }
                return getVal(roleData[0].location, labelData[0][0]) + getVal(roleData[0].orientation, labelData[0][1]) + 
                       getVal(roleData[1].location, labelData[1][0]) + getVal(roleData[1].orientation, labelData[1][1]);

            case 'ends':
                if (!roleData || !roleData.length) { return 0; }
                return getVal(roleData[0], labelData[0].join()) + getVal(roleData[1], labelData[1].join());
            
            case 'neighborhood':
                if (!roleData || !roleData.length) { return 0; }
                val = punishHard;
                for (let item of roleData) {
                    if (item[0].reduce((a,b,i) => a && ((b == 'dc') || (labelData[i] == b) ||(labelData[i] == 'eq'), true))) {
                        val = item[1];
                        break;
                    }
                }
                return val;
            
            case 'contact':
                val = punishHard;
                Object.values(roleData).forEach( dict => Object.entries(dict).forEach(([k, v]) => {
                    if (k == labelData) { val = Math.max(val, v); }
                }));
                return val;
            
            case 'shape':
                return getVal(roleData, labelData, punish);
            
            case 'curve':
                if (role.topology !== 'segment') { return 0; }
                return curveScore(labelData, roleData);

            case 'curve1':
            case 'curve2':
                if (role.topology !== 'bisegment') { return 0; }
                return curveScore(labelData, roleData);

            default:
                return 0;
        }
    }


    /**
     * Sorts a list of parts by their position in the grid.
     *  
     */
    static SortPartsByGridPosition(parts)
    {
        const scoredParts = parts.map(part => { return { part: part, posn: Math.min(...part.getQuanta().map(q => 
            1000*q.startPoint.x + 100*q.startPoint.y + 10*q.endPoint.x + q.endPoint.y)) }; });
        
        return scoredParts.toSorted((a,b) => a.posn - b.posn).map(p => p.part);
    }

};

})( window.LetterSpirit = window.LetterSpirit || {} );







// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    Namespace.Codelets = Namespace.Codelets || {};


/**
 * @classdesc
 * This is the base class for all codelets.
 * 
 */
 Namespace.Codelets.CodeletBase = class
 {
    /**
     * @constructor
     */
    constructor(name, urgency, generation) 
    { 
        this.name = name || '';
        this.urgency = urgency || 0;
        this.gen = generation || 0;
    }


    /**
     * Returns a string describing the object.
     * 
     */
    synopsis(type)
    {
        return !type ? this.name : '<Codelet: ' + this.name + '>';
    }
};

})( window.LetterSpirit = window.LetterSpirit || {} );







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







// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Params = Namespace.Params;

/**
 * @classdesc
 * The Coderack class manages a set of Codelets and their execution.
 * 
 */
 Namespace.Coderack = class {

    /**
     * @constructor
     * 
     * @param {App} app - The LetterSpirit App instance.
     */
    constructor(app) 
    { 
        this.app = app;
        this.codelets = [];
        this.numCodeletsRun = 0;
        this.currentCodelet = null;
        this.lastRunCodelet = null;
        this.factory = new Namespace.Codelets.CodeletFactory(app);
    }


    /**
     * Empties the coderack and sets the 
     * run counter to zero.
     * 
     */
    reset()
    {
        this.codelets = [];
        this.numCodeletsRun = 0;
        this.currentCodelet = null;
        this.lastRunCodelet = null;
    }


    /**
     * Adds one or more codelets to the coderack. 
     * 
     * @param {number} count - The number of codelets to add.
     * @param {string} codeletName - The name of the codelets to add.
     * @param {number} urgency - The urgency of the codelet(s).
     * @param {number} generation - The generation that the codelet(s) belong(s) to.
     * @param {Array} args - Arguments to pass to the codelet(s).
     * 
     */
    post(count, codeletName, urgency, generation, args=[]) 
    {
        if (urgency !== 0) {
            urgency = Math.round(urgency / Math.pow(Params.GenerationGapConstant, generation));
            for (let i = 0; i < count; i++) {
                this.codelets.push( this.factory.create(codeletName, urgency, generation, args) );
            }
        } 
        else {
            this.app.reporter.warn(`Zero-urgency codelet ignored, in Coderack.post()`);
        }
    }


    /**
     * Runs a randomly chosen codelet from the coderack.
     * (The choice is weighted by urgency.)
     * 
     */
    async chooseAndRunCodelet()
    {
        if (this.codelets.length === 0) {
            this.app.reporter.warn(`Coderack is empty!, in Coderack.chooseAndRunCodelet()`);
            return;
        }

        // Choose a codelet to run
        this.currentCodelet = this.app.randGen.weightedChoice(this.codelets, this.codelets.map(c => c.urgency));
        this.codelets = this.codelets.filter(c => c != this.currentCodelet);
        
        // Run it
        await this.currentCodelet.run(this.app);
        this.numCodeletsRun += 1;
        this.lastRunCodelet = this.currentCodelet;
    }


    /**
     * Calculates the probability of running each codelet.
     * 
     */
    getCodeletRunProbabilities()
    {
        let probs = this.codelets.map(c => c.urgency);
        const totalProb = probs.reduce((a,b) => a+b, 0);
        return probs.map(p => p/totalProb);
    }
};


})( window.LetterSpirit = window.LetterSpirit || {} );







// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";


/**
 * @namespace Namespace.Fonts 
 * @description
 * This namespace contains the font definitions.
 */
Namespace.Fonts = Namespace.Fonts || {};

/** 
 * @description BenzeneLeft font.
 */
Namespace.Fonts.BenzeneLeft = {
    a : [4, 6, 9, 25, 49, 50, 51],
    b : [4, 9, 14, 17, 20, 25, 49, 50],
    c : [4, 9, 20, 49, 50],
    d : [4, 9, 16, 19, 20, 22, 25, 49, 50],
    e : [4, 7, 9, 20, 48, 49, 50],
    f : [0, 4, 5, 14, 21, 24, 45, 46],
    g : [4, 9, 13, 20, 25, 28, 31, 49, 50, 54],
    h : [4, 14, 17, 20, 25, 49, 50],
    i : [8, 14, 18, 24, 44, 46, 48],
    j : [12, 14, 18, 24, 27, 30, 44, 46, 48],
    k : [4, 9, 14, 17, 20, 23, 49, 50],
    l : [14, 17, 20, 50],
    m : [20, 21, 25, 48, 49, 50],
    n : [4, 20, 25, 49, 50],
    o : [4, 9, 20, 25, 49, 50],
    p : [4, 9, 20, 23, 25, 26, 29, 49, 50],
    q : [4, 9, 20, 25, 28, 31, 49, 50],
    r : [4, 20, 23, 49],
    s : [4, 9, 48, 49, 50, 51],
    t : [5, 18, 21, 46, 51],
    u : [9, 20, 25, 49, 50],
    v : [4, 21, 22, 25, 51],
    w : [20, 24, 25, 49, 50, 51],
    x : [5, 8, 21, 24, 48, 51],
    y : [9, 13, 20, 25, 28, 31, 49, 50, 54],
    z : [4, 6, 7, 9, 49, 50]
};


/** 
 * @description BenzeneRight font.
 */
Namespace.Fonts.BenzeneRight = {
    a : [5,7,8,22,25,36,38,39],
    b : [5,8,14,17,20,22,23,36,39],
    c : [5,8,23,36,39],
    d : [5,8,16,19,22,23,36,39],
    e : [5,6,8,23,36,37,39],
    f : [18,21,24,33,36,5],
    g : [5,8,12,22,23,25,28,36,39,43],
    h : [5,14,17,20,22,23,36,39],
    i : [15,17,21,24,32,34,36],
    j : [15,17,21,24,27,32,34,36,42],
    k : [5,6,7,14,17,20,23,36,39],
    l : [0,15,18,21,24,39],
    m : [4,21,22,23,36,37,39],
    n : [4,5,22,23,36,39],
    o : [5,8,22,23,36,39],
    p : [5,8,22,23,26,29,36,39],
    q : [5,8,22,23,25,28,31,36,39],
    r : [5,23,36],
    s : [5,6,7,8,36,39],
    t : [5,18,21,24,36,39],
    u : [8,22,23,25,36,39],
    v : [4,21,22,24,39],
    w : [22,23,24,36,38,39],
    x : [4,9,21,24,37,38],
    y : [8,12,22,23,25,28,36,39,43],
    z : [5,8,36,37,38,39]
};


/** 
 * @description Boat font.
 */
Namespace.Fonts.Boat = {
    a : [4, 5, 6, 7, 22, 39, 50],
    b : [4, 5, 17, 20, 22, 39, 50],
    c : [4, 5, 20, 39, 50],
    d : [4, 5, 19, 20, 22, 39, 50],
    e : [4, 5, 6, 20, 37, 39, 50],
    f : [2, 3, 4, 17, 20, 50],
    g : [4, 5, 20, 22, 25, 39, 41, 50, 52],
    h : [4, 5, 17, 20, 22, 25, 50],
    i : [2, 4, 21, 38],
    j : [3, 5, 22, 39, 40],
    k : [5, 17, 20, 23, 36, 39, 50],
    l : [17, 20, 39, 50],
    m : [4, 5, 20, 21, 22, 25, 50],
    n : [4, 5, 20, 22, 25, 50],
    o : [4, 5, 20, 22, 39, 50],
    p : [4, 5, 20, 22, 23, 26, 39, 50],
    q : [4, 5, 20, 22, 25, 28, 39, 50],
    r : [4, 5, 20, 22, 50],
    s : [4, 5, 7, 39, 48, 50],
    t : [4, 17, 20, 39, 50],
    u : [20, 22, 25, 39, 50],
    v : [20, 22, 39, 50],
    w : [20, 21, 22, 24, 39, 50],
    x : [5, 6, 37, 48, 50, 51],
    y : [20, 22, 25, 39, 41, 50, 52],
    z : [4, 5, 6, 37, 39, 50]
};


/** 
 * @description BowTie font.
 */
Namespace.Fonts.BowTie = {
    a : [4, 6, 38, 39, 49, 50],
    b : [4, 6, 15, 17, 32, 38, 39, 49, 50],
    c : [5, 25, 36, 39, 50, 51],
    d : [5, 7, 15, 19, 36, 39, 45, 50, 51],
    e : [7, 9, 36, 37, 49, 50],
    f : [3, 4, 21, 24, 32, 33, 45, 46],
    g : [7, 9, 28, 30, 36, 37, 43, 49, 50],
    h : [4, 15, 17, 24, 25, 32, 36, 38, 49, 50],
    i : [0, 24, 32, 36, 38, 44, 50],
    j : [0, 27, 29, 32, 36, 42, 44, 50, 54],
    k : [4, 7, 9, 15, 17, 23, 32, 36, 37, 49, 50],
    l : [15, 17, 20, 24, 32, 38, 50],
    m : [4, 22, 23, 24, 25, 36, 37, 48],
    n : [24, 25, 36, 38, 49, 50],
    o : [6, 36, 39, 48, 49, 50],
    p : [6, 8, 26, 30, 36, 39, 48, 49, 54],
    q : [7, 9, 13, 28, 36, 37, 43, 49, 50, 55],
    r : [22, 24, 36, 38, 49, 50],
    s : [5, 6, 38, 39, 49, 50],
    t : [4, 7, 18, 36, 39, 50, 51],
    u : [20, 21, 25, 37, 39, 49, 50],
    v : [21, 22, 36, 39, 48, 50],
    w : [8, 20, 21, 22, 25, 38, 50, 51],
    x : [8, 20, 22, 37, 38, 48, 49, 51],
    y : [9, 20, 21, 28, 30, 37, 39, 43, 49, 50],
    z : [4, 7, 36, 39, 50, 51]
};


/** 
 * @description Checkmark font.
 */
Namespace.Fonts.Checkmark = {
    a : [8, 38, 48, 51],
    b : [9, 14, 17, 20, 48, 51],
    c : [4, 25, 48, 51],
    d : [8, 16, 19, 22, 37, 38],
    e : [7, 8, 22, 37, 38],
    f : [0, 4, 5, 18, 21, 24, 44],
    g : [4, 25, 28, 31, 48, 51, 55],
    h : [14, 17, 20, 48, 51],
    i : [5, 14, 32, 37, 38],
    j : [5, 14, 23, 26, 32, 37, 38],
    k : [5, 14, 17, 20, 37, 48, 51],
    l : [15, 18, 21, 24, 32, 39],
    m : [20, 21, 22, 24, 25, 36, 37, 38],
    n : [8, 21, 22, 25, 37, 38],
    o : [8, 22, 37, 38, 39],
    p : [5, 23, 26, 29, 37, 38],
    q : [4, 25, 28, 31, 48, 51],
    r : [22, 37, 38],
    s : [4, 9, 48, 51],
    t : [4, 5, 8, 18, 21, 38],
    u : [7, 20, 23, 37, 38, 39],
    v : [5, 20, 23, 37, 38],
    w : [5, 23, 24, 37, 38, 39],
    x : [9, 20, 37, 38, 48, 51],
    y : [25, 28, 31, 48, 51, 55],
    z : [5, 8, 37, 38]
};

    
/** 
 * @description Close font.
 */
Namespace.Fonts.Close = {
    a : [5, 8, 9, 22, 25, 37, 38],
    b : [8, 9, 17, 20, 22, 23, 25, 37, 38],
    c : [8, 9, 37, 38],
    d : [8, 9, 19, 22, 25, 37, 38],
    e : [7, 8, 9, 22, 37, 38],
    f : [5, 21, 24, 35],
    g : [8, 9, 22, 25, 37, 38, 41],
    h : [9, 17, 20, 22, 23, 25, 37, 38],
    i : [21, 24, 34],
    j : [21, 24, 34, 40],
    k : [17, 37, 38, 48, 51],
    l : [18, 21, 24],
    m : [22, 24, 25, 37, 38],
    n : [22, 25, 37, 38],
    o : [8, 9, 22, 25, 37, 38],
    p : [8, 9, 22, 25, 26, 37, 38],
    q : [8, 9, 22, 25, 28, 37, 38],
    r : [22, 37, 38],
    s : [22, 23, 37, 38],
    t : [5, 18, 21, 24],
    u : [8, 9, 22, 25, 38],
    v : [20, 23, 37, 38],
    w : [20, 21, 23, 37, 38],
    x : [37, 38, 48, 51],
    y : [8, 9, 22, 25, 38, 41],
    z : [5, 8, 9, 37, 38]
};


/** 
 * @description DoubleBackslash font.
 */
Namespace.Fonts.DoubleBackslash = {
    a : [6, 24, 25, 48, 50, 51],
    b : [9, 17, 20, 23, 48, 50, 51],
    c : [4, 25, 48, 51],
    d : [4, 19, 22, 25, 48, 49, 51],
    e : [4, 7, 48, 49, 51],
    f : [2, 4, 17, 47, 48, 49, 51],
    g : [4, 22, 25, 28, 48, 49, 51, 53],
    h : [17, 20, 25, 48, 50, 51],
    i : [18, 25, 46, 47, 48, 51],
    j : [18, 28, 46, 47, 48, 51, 53],
    k : [4, 17, 20, 25, 48, 50, 51],
    l : [17, 25, 48, 51],
    m : [20, 21, 48, 49, 50, 51],
    n : [20, 25, 48, 50, 51],
    o : [4, 25, 48, 49, 51],
    p : [9, 20, 23, 26, 48, 50, 51],
    q : [9, 20, 28, 48, 50, 51],
    r : [4, 22, 48, 49, 51],
    s : [4, 9, 23, 48, 49, 50, 51],
    t : [4, 17, 25, 48, 51],
    u : [25, 48, 49, 51],
    v : [22, 25, 48, 51],
    w : [21, 22, 24, 25, 48, 50, 51],
    x : [21, 24, 48, 49, 50, 51],
    y : [20, 25, 28, 48, 49, 51, 53],
    z : [8, 9, 11, 20, 48, 51, 52]
};


/** 
 * @description FlournoyRanch font.
 */
Namespace.Fonts.FlournoyRanch = {
    a : [8, 9, 22, 23, 37, 39, 50],
    b : [8, 9, 14, 17, 20, 22, 24, 25, 37, 44, 50],
    c : [20, 39, 48, 50],
    d : [8, 9, 16, 19, 20, 22, 23, 24, 33, 39, 48],
    e : [5, 22, 23, 36, 38, 49],
    f : [2, 15, 21, 24, 45, 46, 47, 50],
    g : [4, 5, 20, 21, 23, 25, 28, 31, 38, 49, 55],
    h : [8, 14, 17, 20, 22, 24, 25, 37, 44, 50],
    i : [9, 21, 24, 36, 44],
    j : [13, 21, 24, 27, 30, 36, 44],
    k : [8, 14, 17, 20, 22, 24, 37, 44, 50, 51],
    l : [8, 14, 17, 20, 44, 50],
    m : [5, 8, 20, 22, 24, 25, 37, 48],
    n : [5, 8, 22, 24, 25, 37],
    o : [4, 5, 20, 21, 23, 38],
    p : [4, 5, 21, 22, 23, 25, 26, 29, 36, 42, 51],
    q : [4, 5, 20, 21, 23, 27, 30, 38, 39, 43, 49],
    r : [8, 21, 22, 24, 37],
    s : [8, 9, 21, 22, 49, 51],
    t : [5, 18, 21, 25, 34, 51],
    u : [5, 8, 20, 21, 23, 38],
    v : [5, 20, 21, 23, 38],
    w : [5, 8, 20, 21, 23, 25, 38, 51],
    x : [4, 21, 22, 38, 49, 51],
    y : [5, 20, 21, 23, 25, 28, 31, 38, 49, 55],
    z : [8, 9, 20, 21, 36, 38]
};


/** 
 * @description Funtnip font.
 */
Namespace.Fonts.Funtnip = {
    a : [5, 6, 7, 8, 9, 22, 38, 39],
    b : [6, 8, 9, 15, 18, 21, 22, 25, 37, 50],
    c : [4, 8, 9, 20, 50],
    d : [7, 8, 9, 15, 18, 20, 21, 23, 39, 48],
    e : [4, 5, 6, 7, 8, 23, 36, 37],
    f : [5, 6, 16, 18, 24, 33, 37],
    g : [4, 7, 20, 23, 24, 27, 30, 35, 38, 49, 54],
    h : [6, 8, 15, 18, 21, 22, 25, 37, 50],
    i : [1, 5, 6, 7, 15, 24, 44, 49],
    j : [1, 5, 6, 7, 15, 24, 27, 30, 44, 49],
    k : [6, 7, 8, 15, 18, 21, 25, 37, 50],
    l : [6, 7, 8, 15, 18, 21, 23],
    m : [6, 22, 23, 24, 25, 37, 48],
    n : [6, 8, 21, 22, 25, 37, 50],
    o : [6, 9, 21, 22, 25, 37, 50],
    p : [5, 6, 22, 24, 25, 27, 30, 36, 51],
    q : [4, 7, 20, 23, 24, 27, 30, 38, 49],
    r : [4, 21, 22, 24, 49],
    s : [4, 6, 7, 8, 9, 20, 51],
    t : [4, 7, 18, 24, 48],
    u : [5, 7, 20, 23, 24, 38, 49],
    v : [5, 7, 20, 23, 38, 49],
    w : [7, 20, 21, 22, 23, 38, 51],
    x : [5, 7, 20, 25, 38, 48, 49],
    y : [6, 22, 24, 25, 27, 30, 36, 51, 54],
    z : [5, 6, 7, 8, 9, 22, 38]
};


/** 
 * @description HintFour font.
 */
Namespace.Fonts.HintFour = {
    a : [4, 6, 39, 49, 50],
    b : [14, 17, 20, 39, 49, 50],
    c : [9, 36, 50],
    d : [16, 19, 22, 36, 39, 50],
    e : [7, 9, 36, 49, 50],
    f : [4, 18, 21, 24, 33],
    g : [25, 28, 36, 43, 49, 50],
    h : [14, 17, 20, 25, 36, 49],
    i : [20, 23, 32],
    j : [21, 24, 27, 33, 42],
    k : [6, 14, 17, 20, 37, 51],
    l : [14, 17, 20, 50],
    m : [23, 24, 25, 36, 49],
    n : [23, 25, 36, 49],
    o : [4, 39, 49, 50],
    p : [23, 26, 29, 36, 39, 49],
    q : [25, 28, 31, 36, 49, 50],
    r : [5, 23, 36],
    s : [6, 7, 8, 36, 39],
    t : [4, 18, 21, 24, 39],
    u : [8, 20, 22, 23, 39],
    v : [20, 22, 39, 50],
    w : [20, 21, 22, 39, 50],
    x : [37, 38, 48, 51],
    y : [20, 25, 28, 39, 43, 50],
    z : [5, 8, 9, 37, 38]
};


/** 
 * @description House font.
 */
Namespace.Fonts.House = {
    a : [7, 8, 9, 25, 36, 38, 49],
    b : [8, 9, 17, 20, 23, 25, 36, 49],
    c : [8, 9, 23, 36, 49],
    d : [8, 9, 19, 22, 23, 25, 36, 49],
    e : [6, 7, 8, 9, 23, 36, 49],
    f : [20, 23, 34, 36, 47, 49],
    g : [8, 9, 10, 11, 23, 25, 28, 36, 49],
    h : [17, 20, 23, 25, 36, 49],
    i : [24, 36, 49],
    j : [10, 24, 27, 36, 49],
    k : [9, 17, 20, 23, 36, 49, 50],
    l : [8, 17, 20, 23],
    m : [20, 21, 23, 24, 25, 36, 49],
    n : [20, 23, 25, 36, 49],
    o : [8, 9, 23, 25, 36, 49],
    p : [8, 9, 23, 25, 26, 36, 49],
    q : [8, 9, 23, 25, 28, 36, 49],
    r : [20, 23, 36, 49],
    s : [6, 8, 9, 36, 49, 51],
    t : [9, 18, 21, 24, 36, 49],
    u : [8, 9, 22, 23, 25, 36],
    v : [8, 22, 23, 36, 39],
    w : [8, 9, 22, 23, 24, 25, 36],
    x : [6, 7, 25, 36, 37, 38],
    y : [8, 9, 10, 11, 22, 23, 25, 28, 36],
    z : [7, 8, 9, 36, 38, 49]
};


/** 
 * @description HuntFour font.
 */
Namespace.Fonts.HuntFour = {
    a : [4, 6, 7, 25, 39, 49, 50],
    b : [14, 17, 20, 23, 36, 39, 49, 50],
    c : [9, 36, 49, 50],
    d : [16, 19, 22, 25, 36, 39, 49, 50],
    e : [6, 7, 9, 36, 49, 50],
    f : [4, 5, 18, 21, 24, 33],
    g : [12, 22, 25, 28, 36, 39, 43, 49, 50],
    h : [14, 17, 20, 23, 25, 36, 49],
    i : [4, 20, 23, 32],
    j : [5, 21, 24, 27, 33, 42],
    k : [6, 14, 17, 20, 23, 37, 51],
    l : [14, 17, 20, 50],
    m : [20, 21, 23, 24, 25, 36, 49],
    n : [20, 23, 25, 36, 49],
    o : [4, 36, 39, 49, 50],
    p : [20, 23, 26, 29, 36, 39, 49, 50],
    q : [22, 25, 28, 31, 36, 39, 49, 50],
    r : [5, 20, 23, 36],
    s : [5, 6, 7, 8, 36, 39],
    t : [4, 5, 18, 21, 24, 39],
    u : [8, 20, 22, 23, 25, 39],
    v : [20, 22, 39, 50],
    w : [20, 21, 22, 24, 39, 50],
    x : [37, 38, 48, 51],
    y : [12, 20, 22, 25, 28, 39, 43, 50],
    z : [4, 5, 8, 9, 37, 38]
};


/** 
 * @description Intersect font.
 */
Namespace.Fonts.Intersect = {
    a : [4, 6, 39, 49, 50, 51],
    b : [5, 8, 17, 22, 23, 32, 36, 39, 48],
    c : [4, 9, 20, 49, 50],
    d : [4, 9, 19, 20, 25, 37, 45, 49, 50],
    e : [7, 9, 36, 48, 49, 50],
    f : [1, 5, 17, 32, 36, 48, 51],
    g : [5, 8, 12, 22, 23, 28, 36, 39, 43, 51],
    h : [5, 17, 22, 23, 25, 32, 36, 48],
    i : [25, 34, 49],
    j : [25, 28, 34, 43, 49],
    k : [5, 17, 23, 32, 36, 48, 51],
    l : [17, 32, 48, 51],
    m : [5, 22, 23, 24, 25, 36, 48],
    n : [5, 22, 23, 25, 36, 48],
    o : [5, 8, 22, 23, 36, 39],
    p : [4, 9, 20, 25, 26, 38, 49, 50, 54],
    q : [5, 8, 22, 23, 28, 31, 36, 39, 51],
    r : [5, 24, 36, 48],
    s : [5, 8, 9, 36, 48, 51],
    t : [5, 9, 20, 34, 46, 50],
    u : [8, 20, 22, 23, 39, 51],
    v : [8, 22, 23, 36, 39, 48],
    w : [9, 20, 21, 22, 25, 38, 50],
    x : [4, 25, 37, 38, 49],
    y : [8, 12, 20, 22, 23, 28, 39, 43, 51],
    z : [4, 8, 9, 37, 38, 49]
};


/** 
 * @description SabreTooth font.
 */
Namespace.Fonts.SabreTooth = {
    a : [7, 8, 20, 38, 39, 48],
    b : [4, 7, 14, 17, 20, 23, 38, 49],
    c : [5, 6, 25, 36, 51],
    d : [5, 6, 16, 19, 22, 25, 36, 51],
    e : [5, 6, 25, 36, 37, 51],
    f : [3, 4, 14, 17, 20, 23, 44, 49],
    g : [5, 6, 22, 25, 28, 29, 36, 40, 51, 53],
    h : [14, 17, 20, 21, 23, 25, 38, 49],
    i : [6, 23, 32, 48],
    j : [6, 23, 32, 48, 52],
    k : [6, 9, 14, 17, 20, 22, 23, 37, 50],
    l : [14, 17, 20, 23, 38],
    m : [21, 23, 24, 25, 48, 49, 50],
    n : [21, 24, 25, 48, 49, 50],
    o : [8, 9, 21, 25, 38, 49],
    p : [4, 7, 20, 23, 26, 29, 38, 49],
    q : [5, 6, 22, 25, 28, 31, 36, 51],
    r : [5, 6, 7, 20, 23, 49],
    s : [4, 5, 7, 8, 39, 48],
    t : [5, 18, 20, 21, 24, 36, 39],
    u : [20, 21, 24, 50, 51],
    v : [20, 24, 37, 50],
    w : [20, 21, 22, 24, 49, 50],
    x : [6, 8, 22, 36, 37, 38, 51],
    y : [4, 6, 22, 25, 28, 29, 36, 40, 51, 53],
    z : [7, 8, 9, 20, 38, 48]
};


/** 
 * @description Shorts font.
 */
Namespace.Fonts.Shorts = {
    a : [5, 6, 7, 8, 9, 22, 23, 25],
    b : [4, 5, 8, 9, 17, 20, 22, 23, 25],
    c : [4, 8, 9, 20, 23],
    d : [4, 5, 8, 9, 19, 20, 22, 23, 25],
    e : [4, 5, 6, 7, 8, 20, 22, 23],
    f : [2, 4, 5, 17, 20, 23],
    g : [4, 5, 8, 9, 11, 20, 22, 23, 25, 28],
    h : [4, 5, 17, 20, 22, 25],
    i : [2, 4, 21, 24],
    j : [2, 4, 21, 24, 27],
    k : [6, 7, 17, 20, 23, 25, 36],
    l : [18, 21, 24],
    m : [4, 5, 20, 21, 22, 25],
    n : [4, 5, 20, 22, 25],
    o : [4, 5, 8, 9, 20, 22, 23, 25],
    p : [4, 5, 8, 9, 20, 22, 23, 25, 26],
    q : [4, 5, 8, 9, 20, 22, 23, 25, 28],
    r : [5, 21, 24],
    s : [4, 6, 7, 9, 20, 25],
    t : [4, 9, 18, 21, 24],
    u : [8, 9, 22, 23, 25],
    v : [22, 39, 50],
    w : [8, 9, 22, 23, 24, 25],
    x : [37, 38, 48, 51],
    y : [8, 9, 11, 22, 23, 25, 28],
    z : [5, 8, 37, 38]
};


/** 
 * @description Slant font.
 */
Namespace.Fonts.Slant = {
    a : [5, 7, 8, 9, 22, 25, 38],
    b : [5, 8, 9, 18, 21, 22, 25, 33, 38],
    c : [5, 8, 9, 21, 38],
    d : [5, 8, 9, 16, 19, 21, 22, 25, 38],
    e : [5, 7, 8, 9, 21, 22, 38],
    f : [5, 18, 21, 33, 38],
    g : [5, 8, 9, 12, 21, 22, 25, 30, 38, 41],
    h : [5, 18, 21, 22, 25, 33, 38],
    i : [21, 33, 38],
    j : [21, 26, 29, 33, 38],
    k : [18, 21, 25, 33, 37, 38, 51],
    l : [18, 21, 33, 38],
    m : [5, 21, 22, 23, 24, 25, 36],
    n : [5, 21, 22, 25, 38],
    o : [5, 8, 9, 21, 22, 25, 38],
    p : [5, 8, 9, 21, 22, 25, 29, 38, 40],
    q : [5, 8, 9, 21, 22, 25, 28, 31, 38],
    r : [5, 21, 38],
    s : [5, 7, 8, 9, 21, 25],
    t : [5, 8, 9, 18, 21, 38],
    u : [8, 9, 21, 22, 25, 38],
    v : [8, 21, 22, 38, 39],
    w : [8, 22, 23, 36, 38, 39],
    x : [9, 21, 22, 24, 37, 38],
    y : [8, 9, 12, 21, 22, 25, 30, 38, 41],
    z : [5, 7, 8, 9, 22, 38]
};


/** 
 * @description Slash font.
 */
Namespace.Fonts.Slash = {
    a : [4, 5, 8, 9, 22, 25, 37, 38],
    b : [8, 9, 14, 17, 20, 22, 23, 25, 37, 38],
    c : [8, 9, 37, 38],
    d : [8, 9, 16, 19, 22, 25, 37, 38],
    e : [4, 5, 8, 9, 20, 23, 37, 38],
    f : [18, 21, 24, 33, 37, 38],
    g : [8, 9, 12, 13, 22, 25, 28, 31, 37, 38],
    h : [14, 17, 20, 22, 23, 25, 37, 38],
    i : [3, 5, 16, 33, 37, 38],
    j : [3, 5, 16, 26, 29, 33, 37, 38],
    k : [14, 17, 20, 23, 37, 38, 51],
    l : [14, 17, 20, 23, 37, 38],
    m : [20, 21, 22, 24, 25, 36, 37, 38],
    n : [21, 22, 24, 25, 37, 38],
    o : [8, 9, 22, 25, 37, 38],
    p : [8, 9, 22, 25, 26, 29, 37, 38],
    q : [8, 9, 22, 25, 28, 31, 37, 38],
    r : [22, 37, 38],
    s : [5, 35, 37, 38],
    t : [9, 18, 21, 24, 37, 38],
    u : [20, 21, 23, 24, 37, 38],
    v : [5, 20, 23, 37, 38],
    w : [20, 21, 22, 23, 24, 37, 38, 39],
    x : [37, 38, 48, 51],
    y : [20, 23, 26, 29, 37, 38],
    z : [4, 5, 8, 9, 37, 38]
};


/** 
 * @description Sluice font.
 */
Namespace.Fonts.Sluice = {
    a : [4, 6, 9, 49, 50, 51],
    b : [17, 20, 21, 25, 49, 50, 51],
    c : [9, 20, 48, 49, 50],
    d : [19, 21, 22, 23, 36, 38, 39],
    e : [4, 7, 9, 48, 49, 50],
    f : [18, 24, 47, 48, 49],
    g : [10, 21, 22, 23, 25, 36, 38, 40, 41],
    h : [17, 20, 22, 24, 25, 36, 37],
    i : [24, 35, 37],
    j : [24, 35, 37, 40],
    k : [17, 20, 36, 37, 38, 51],
    l : [18, 21, 50, 51],
    m : [22, 23, 24, 25, 36, 37],
    n : [20, 22, 24, 25, 36, 37],
    o : [22, 24, 36, 37, 39],
    p : [22, 23, 24, 26, 36, 37, 39],
    q : [20, 24, 25, 28, 48, 49, 50],
    r : [22, 23, 36, 37],
    s : [5, 7, 8, 36, 39],
    t : [18, 24, 36, 37, 39],
    u : [20, 21, 23, 25, 38, 39],
    v : [37, 39, 48, 50],
    w : [20, 21, 22, 25, 50, 51],
    x : [20, 24, 36, 37, 38, 39],
    y : [10, 20, 21, 22, 23, 25, 38, 40, 41],
    z : [5, 9, 36, 37, 38, 39]
};


/** 
 * @description Snout font.
 */
Namespace.Fonts.Snout = {
    a : [7, 48, 20, 23, 8, 9, 5, 22, 25],
    b : [14, 17, 20, 23, 6, 37, 22, 25, 9, 8],
    c : [37, 6, 23, 8, 9],
    d : [7, 48, 20, 23, 8, 9, 16, 19, 22, 25],
    e : [25, 22, 5, 4, 20, 6, 51, 23, 8],
    f : [3, 44, 14, 17, 48, 24, 4, 5],
    g : [22, 25, 28, 31, 55, 10, 5, 4, 20, 23, 38, 7],
    h : [6, 37, 22, 25, 14, 17, 20, 23],
    i : [6, 37, 22, 25, 35, 4],
    j : [6, 37, 22, 25, 28, 11, 42, 35, 4],
    k : [50, 9, 14, 17, 20, 23, 6, 37, 22],
    l : [15, 18, 21, 38, 8, 9],
    m : [7, 25, 20, 23, 48, 24],
    n : [48, 7, 25, 20, 23],
    o : [8, 23, 20, 48, 7, 25, 9],
    p : [4, 5, 22, 25, 51, 6, 20, 23, 26, 29],
    q : [22, 25, 28, 31, 5, 4, 20, 23, 38, 7],
    r : [20, 23, 48, 7],
    s : [37, 22, 25, 9, 8, 4, 20, 6],
    t : [46, 21, 24, 9, 6, 37],
    u : [22, 25, 21, 38, 8, 9],
    v : [36, 21, 38, 8, 39, 22],
    w : [22, 25, 20, 6, 21, 51],
    x : [38, 51, 39, 22],
    y : [22, 25, 28, 31, 55, 10, 21, 38, 8, 9],
    z : [8, 9, 23, 20, 48, 37, 5]
};


/** 
 * @description SquareCurl font.
 */
Namespace.Fonts.SquareCurl = {
    a : [5, 6, 8, 9, 22, 23, 25],
    b : [5, 8, 9, 17, 20, 21, 22, 23, 25],
    c : [4, 8, 9, 20, 21, 23],
    d : [4, 8, 9, 19, 20, 21, 22, 23, 25],
    e : [4, 5, 7, 8, 20, 22, 23],
    f : [2, 3, 5, 6, 17, 19, 20, 23],
    g : [4, 5, 8, 11, 20, 22, 23, 24, 25, 28],
    h : [4, 5, 9, 17, 20, 22, 23, 24, 25],
    i : [2, 4, 14, 15, 20, 21, 24],
    j : [2, 4, 10, 14, 15, 20, 21, 24, 26, 27],
    k : [4, 5, 9, 17, 20, 21, 23, 24, 25],
    l : [8, 17, 20, 23, 24],
    m : [4, 5, 9, 20, 21, 22, 23, 25],
    n : [4, 5, 9, 20, 22, 23, 24, 25],
    o : [4, 5, 8, 9, 20, 22, 23, 25],
    p : [4, 5, 9, 20, 22, 23, 24, 25, 26],
    q : [4, 5, 8, 20, 22, 23, 24, 25, 28],
    r : [4, 5, 7, 20, 22, 23],
    s : [4, 6, 7, 9, 20, 25],
    t : [4, 5, 9, 18, 21, 24, 25],
    u : [5, 8, 9, 20, 21, 22, 23, 25],
    v : [5, 6, 9, 20, 22, 24, 25],
    w : [5, 8, 9, 20, 22, 23, 24, 25],
    x : [4, 6, 7, 21, 22, 23, 24],
    y : [5, 8, 9, 11, 20, 21, 22, 23, 25, 28],
    z : [5, 6, 7, 8, 22, 23]
};


/** 
 * @description StandardSquare font.
 */
Namespace.Fonts.StandardSquare = {
    a : [4, 5, 6, 7, 8, 9, 22, 23, 25],
    b : [4, 5, 8, 9, 14, 17, 20, 22, 23, 25],
    c : [4, 5, 8, 9, 20, 23],
    d : [4, 5, 8, 9, 16, 19, 20, 22, 23, 25],
    e : [4, 5, 6, 7, 8, 9, 20, 22, 23],
    f : [1, 4, 5, 15, 18, 21, 24],
    g : [4, 5, 8, 9, 12, 13, 20, 22, 23, 25, 28, 31],
    h : [4, 5, 14, 17, 20, 22, 23, 25],
    i : [3, 5, 22, 25],
    j : [3, 5, 13, 22, 25, 28, 31],
    k : [14, 17, 20, 23, 37, 38, 51],
    l : [15, 18, 21, 24],
    m : [4, 5, 20, 21, 22, 23, 24, 25],
    n : [4, 5, 20, 22, 23, 25],
    o : [4, 5, 8, 9, 20, 22, 23, 25],
    p : [4, 5, 8, 9, 20, 22, 23, 25, 26, 29],
    q : [4, 5, 8, 9, 20, 22, 23, 25, 28, 31],
    r : [4, 5, 20, 23],
    s : [4, 5, 6, 7, 8, 9, 20, 25],
    t : [4, 5, 9, 18, 21, 24],
    u : [8, 9, 20, 22, 23, 25],
    v : [20, 22, 39, 50],
    w : [8, 9, 20, 21, 22, 23, 24, 25],
    x : [37, 38, 48, 51],
    y : [8, 9, 12, 13, 20, 22, 23, 25, 28, 31],
    z : [4, 5, 8, 9, 37, 38]
};


/** 
 * @description ThreeD font.
 */
Namespace.Fonts.ThreeD = {
    a : [3, 4, 6, 8, 19, 21, 22, 23, 24, 34, 35, 36, 38, 39],
    b : [3, 4, 8, 15, 17, 19, 20, 21, 22, 23, 24, 32, 34, 35, 38, 39],
    c : [3, 4, 7, 8, 20, 21, 23, 34, 35, 38, 39],
    d : [4, 8, 16, 18, 19, 20, 21, 22, 23, 24, 33, 34, 38, 39],
    e : [3, 4, 6, 7, 8, 19, 20, 21, 23, 34, 35, 36, 37, 38, 39],
    f : [1, 2, 3, 4, 17, 20, 21, 23, 32, 33, 34, 35, 38],
    g : [3, 4, 8, 10, 19, 20, 21, 22, 23, 24, 25, 27, 34, 35, 38, 40, 41],
    h : [3, 4, 15, 17, 19, 20, 21, 22, 23, 24, 32, 34, 35, 38, 39],
    i : [1, 2, 3, 4, 19, 21, 22, 24, 32, 33, 34, 35, 39],
    j : [1, 2, 3, 4, 19, 21, 22, 24, 25, 27, 32, 33, 34, 35, 41],
    k : [3, 4, 5, 6, 15, 17, 20, 22, 23, 24, 32, 34, 35, 36, 37, 38, 39],
    l : [7, 8, 15, 17, 18, 20, 21, 23, 32, 38, 39],
    m : [3, 4, 5, 19, 20, 21, 22, 23, 24, 25, 34, 38, 39],
    n : [3, 4, 19, 20, 21, 22, 23, 24, 34, 35, 38, 39],
    o : [3, 4, 8, 19, 20, 21, 22, 23, 24, 34, 35, 38, 39],
    p : [3, 4, 8, 19, 20, 21, 22, 23, 24, 26, 34, 35, 38, 39, 40],
    q : [3, 4, 8, 19, 20, 21, 22, 23, 24, 25, 27, 34, 35, 38, 41],
    r : [3, 4, 20, 21, 23, 34, 35, 38],
    s : [3, 4, 5, 6, 8, 20, 22, 24, 34, 35, 36, 37, 38, 39],
    t : [3, 4, 7, 8, 15, 17, 20, 21, 23, 32, 34, 35, 38, 39],
    u : [8, 18, 19, 20, 21, 22, 23, 24, 34, 35, 38, 39],
    v : [18, 19, 20, 21, 22, 24, 34, 35, 36, 39, 50],
    w : [8, 9, 18, 19, 20, 21, 22, 23, 24, 25, 34, 35, 38, 39],
    x : [22, 23, 24, 34, 35, 36, 37, 38, 39, 47, 48],
    y : [8, 10, 18, 19, 20, 21, 22, 23, 24, 25, 27, 34, 35, 38, 40, 41],
    z : [3, 4, 6, 7, 8, 19, 21, 23, 34, 35, 36, 37, 38, 39]
};


/** 
 * @description WeirdArrow font.
 */
Namespace.Fonts.WeirdArrow = {
    a : [4, 5, 6, 21, 22, 25, 39, 50],
    b : [6, 8, 17, 20, 21, 23, 32, 39, 49],
    c : [7, 9, 21, 36, 50],
    d : [7, 9, 19, 21, 22, 25, 36, 45, 50],
    e : [5, 7, 9, 22, 24, 36, 50],
    f : [4, 16, 18, 24, 33, 37, 48],
    g : [7, 9, 12, 21, 25, 28, 29, 36, 43, 50],
    h : [6, 17, 20, 24, 25, 32, 36, 49],
    i : [7, 24, 34, 36, 49],
    j : [7, 24, 27, 30, 34, 36, 49, 54],
    k : [5, 7, 17, 20, 21, 23, 32, 39, 50],
    l : [3, 18, 21, 24, 32, 39, 45],
    m : [6, 20, 23, 24, 25, 36, 49],
    n : [6, 20, 24, 25, 36, 49],
    o : [6, 8, 21, 23, 39, 49],
    p : [6, 8, 21, 23, 26, 29, 39, 49],
    q : [6, 8, 13, 21, 23, 25, 28, 39, 43, 49],
    r : [7, 20, 23, 36, 49],
    s : [6, 8, 9, 36, 49, 51],
    t : [4, 9, 18, 24, 37, 48],
    u : [7, 20, 21, 25, 39, 50],
    v : [6, 21, 22, 39, 50],
    w : [6, 20, 21, 22, 39, 50],
    x : [4, 7, 21, 25, 37, 39, 50],
    y : [6, 12, 21, 22, 25, 28, 29, 39, 43, 50],
    z : [7, 8, 9, 36, 38, 49]
};


})( window.LetterSpirit = window.LetterSpirit || {} );











// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Params = Namespace.Params;
    const Knowledge = Namespace.Knowledge;


/**
 * @classdesc
 * This class provides utilities for calculating gestalt letter scores.
 * 
 */
 Namespace.GestaltScorer = class {
  
    /**
     * Calculates the gestalt scores for a given GridLetter.
     * @static
     *
     */
    static CalcGestalts(gridLetter)
    {
        const qids = gridLetter.quantaIds;

        // Feature 1. Blurred prototypes
        const qRaw = {};
        for (const [char, protVec] of Object.entries(Knowledge.BlurredPrototypes)) {
            qRaw[char] = gridLetter.distanceTo(protVec);
        }
        Namespace.GestaltScorer.InvertAndScaleToTen(qRaw);


        // Feature 2. Number of quanta in each cell (Square prototypes)
        const sqFeatureVec = [];  
        Knowledge.QuantaBySquare.forEach((sq) => {sqFeatureVec.push( sq.reduce((sum, q) => sum + (qids.includes(q) ? 1 : 0), 0) ); });
        const sqRaw = {};
        for (const [char, protVec] of Object.entries(Knowledge.SquarePrototypes)) {
            sqRaw[char] = sqFeatureVec.reduce( (absdiff, f, i) => absdiff + Math.abs(f - protVec[i]), 0 );
        }
        Namespace.GestaltScorer.InvertAndScaleToTen(sqRaw);


        // Feature 3. Number of "tips" in each cell
        const tipScores = Knowledge.TipGroups.map(tipGroup => (tipGroup.filter(tip => qids.includes(tip)).length == 1 ? 1 : 0) );  
        const tipsFeatureVec = Knowledge.TipGroupsBySquare.map(tgbs => tgbs.reduce((sum, idx) => sum + tipScores[idx], 0));
        const tipRaw = {};
        for (const [char, protVec] of Object.entries(Knowledge.TipPrototypes)) {
            tipRaw[char] = tipsFeatureVec.reduce( (absdiff, f, i) => absdiff + Math.abs(f - protVec[i]), 0 );
        }
        Namespace.GestaltScorer.InvertAndScaleToTen(tipRaw);


        // Feature 4. Closure
        const letterHasClosure = Namespace.GestaltScorer.HasClosure(gridLetter);
        const closureRaw = Object.fromEntries( 
            Object.entries(Knowledge.ClosurePrototypes).map(([char, protVal]) => [char, letterHasClosure ? 10*protVal : 10*(1 - protVal)]) );
             
            
        // Feature 5. Ascenders
        const letterHasAscender = [0,1,2,3,14,15,16,17,18,19,32,33,34,35,44,45,46,47].filter(n => qids.includes(n)).length > 0;
        const ascenderRaw = Object.fromEntries(
            Object.entries(Knowledge.AscendPrototypes).map(([char, protVal]) => [char, letterHasAscender ? 10*protVal : 10*(1 - protVal)]) );
        

        // Feature 6. Descenders
        const letterHasDescender = [10,11,12,13,26,27,28,29,30,31,40,41,42,43,52,53,54,55].filter(n => qids.includes(n)).length > 0;
        const descenderRaw = Object.fromEntries(
            Object.entries(Knowledge.DescendPrototypes).map(([char, protVal]) => [char, letterHasDescender ? 10*protVal : 10*(1 - protVal)]) );
   
        
        // Combine features 1 thru 6 into a single gestalt score for each character in the alphabet. (Score range will be -55 to 20.)
        const gestalts = {};
        for (const char of Object.keys(qRaw)) { 
            const val = (Params.GestaltPerk/16.0) * 
                (qRaw[char] + sqRaw[char] + tipRaw[char] + closureRaw[char] + ascenderRaw[char] + descenderRaw[char] - 44);
            gestalts[char] = Namespace.Utils.Round3(val);
        }

        // Make sure that at least one gestalt is greater than zero
        const maxG = Math.max(...Object.values(gestalts));
        if (maxG <= 0) { 
            for (const [key, value] of Object.entries(gestalts)) { gestalts[key] = value - maxG + 1; }
        }

        return gestalts;
    }


    /**
     * Returns true if the given GridLetter has a closed loop.
     * @static
     * @private
     */
    static HasClosure(gridLetter)
    {
        const quanta = gridLetter.quanta;
        if (quanta.length < 3) { return false; }
        
        for (let q of quanta) {
            const targetPointId = q.startPointId;
            const visited = [q];
            const stack = [q.endPointId];
            while (stack.length > 0) {
                const currEndPtId = stack.pop();
                const candidates = quanta.filter((q) => !visited.includes(q) && (q.endPointId === currEndPtId || q.startPointId === currEndPtId));
                for (let cand of candidates) {
                    if ((cand.startPointId === targetPointId) || (cand.endPointId === targetPointId)) { return true; }
                    stack.push( (cand.startPointId === currEndPtId) ? cand.endPointId : cand.startPointId );
                    visited.push(cand);
                }
            }
        }
        return false;
    }


    /**
     * Scales a given list of scores to a range of 0 to 10.
     * Also inverts the values, so that more-similar features get higher scores.
     * @static
     * @private
     * 
     */
    static InvertAndScaleToTen(scores)
    {
        const min = Math.min(...Object.values(scores));
        const max = Math.max(...Object.values(scores));
        const scale = min - max;

        for (const [key, value] of Object.entries(scores)) {
            scores[key] = (scale < 0) ? 10*(value-max)/scale : 5;
        }
    }
};

})( window.LetterSpirit = window.LetterSpirit || {} );







// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";

/**
 * @classdesc
 *  A GridLetter is a set of quanta that represents a letter.
 * 
 */
 Namespace.GridLetter = class {

    /**
     * @constructor
     * 
     * @param {Quantum[]|number[]} [quanta] - The quanta or quanta-ids that make up the letter.
     */
    constructor(quanta) 
    {
        this.quanta = (quanta || []).map(q => Number.isInteger(q) ? Namespace.Quanta[q] : q);
        this.quantaIds = this.quanta.map(q => q.id);
        this.bitVec = [...Array(56).keys()].map(i => this.quantaIds.includes(i) ? 1 : 0);
        this.numQuanta = this.quanta.length;

        // Make immutable
        [this.quanta, this.quantaIds, this.bitVec].forEach(arr => Object.freeze(arr));
        Object.freeze(this);
    }


    /**
     * Indicates whether the letter has no quanta.
     * 
     */
    isEmpty() 
    { 
        return this.quanta.length === 0; 
    }


    /**
     * Indicates whether the letter has at least one pair of touching quanta. 
     * 
     */
    hasAdjacentQuanta() 
    { 
        return this.quanta.some(q => q.neighbors.some(
            nb => ((nb !== null) && this.quantaIds.includes(nb))));
    }   


    /**
     * Indicates whether the letter is equal by value to another letter.
     * 
     * @param {GridLetter} that - The letter to compare with.
     */
    valueEquals(that) 
    { 
        // Compare string representations
        return ( this.quantaIds.toSorted().join(',') === that.quantaIds.toSorted().join(',') ); 
    }


    /**
     * Computes a measure of the distance between this letter and another.
     * 
     * @param {GridLetter} that - The letter to compare with.
     */
    distanceTo(that) 
    { 
        return this.bitVec.reduce( (absdiff, bit, i) => absdiff + Math.abs(bit - that[i]), 0 );
    }

};

})( window.LetterSpirit = window.LetterSpirit || {} );







// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Knowledge = Namespace.Knowledge;
    

/**
 * @classdesc
 * A Joint is a pair of neighboring quanta with glue, or a single quantum.
 * 
 */
 Namespace.Joint = class {

    /**
     * @constructor
     * 
     * @param {Number} qidA - The id of the first quantum.
     * @param {Number} [qidB=undefined] - The id of the second quantum (can be undefined).
     * @param {Number} [glue=0] - The glue between the two quanta.
     */
    constructor(qidA, qidB, glue) 
    { 
        this.qidA = qidA;
        this.qidB = qidB;
        this.glue = glue || 0;

        // Validation check
        if (this.qidB || (this.qidB === 0)) {
            if (!Knowledge.QuantaNeighbors[this.qidA].includes(this.qidB)) { throw new Error('Joint: input quanta must be neighbors.'); }
        }
    }

    /**
     * Returns a copy of the joint.
     */
    clone() 
    { 
        return new Namespace.Joint(this.qidA, this.qidB, this.glue); 
    }


    /**
     * Returns whether the joint is equal-by-value to another joint.
     * NB: The glue-values, and the order of the quanta are not considered.
     * 
     */
    valueEquals(that) 
    {
        if (that.numQuanta() === 1) { 
            return (this.numQuanta() === 1) && (this.qidA === that.qidA);
        }
        else {
            return (this.numQuanta() === 2) && (((this.qidA === that.qidA) && (this.qidB === that.qidB)) ||
                ((this.qidA === that.qidB) && (this.qidB === that.qidA)));
        }
    }


    /**
     * Returns the ids of the quanta in the joint.
     * 
     */
    getQids() 
    { 
        return (this.qidB || (this.qidB === 0)) ? [this.qidA, this.qidB] : [this.qidA];
    }


    /**
     * Returns whether the joint contains a given quantum.
     * 
     */
    hasQid(qid) 
    { 
        return ((this.qidA === qid) || (this.qidB === qid));
    }


    /**
     * Returns whether the joint is a single-quantum joint.
     * 
     */
    isSinglet() 
    { 
        return (!this.qidB && (this.qidB !== 0));
    }


    /**
     * Returns the number of quanta in the joint.
     * 
     */
    numQuanta() 
    { 
        return (this.qidB || (this.qidB === 0)) ? 2 : 1; 
    }


    /**
     * Returns a string representation of the joint.
     * 
     * @param {Boolean} includeGlue - Whether to include the glue value in the string.s
     * 
     */
    toString(includeGlue=false)
    {
        const jointStr = `(${this.qidA}` + ((this.qidB || (this.qidB === 0)) ? `,${this.qidB}` : '') + ')';
        return includeGlue ? `[${jointStr}, ${this.glue}]` : jointStr;
    }

};

})( window.LetterSpirit = window.LetterSpirit || {} );







// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    

/**
 * @classdesc
 * A label is a (text, data) pair that describes a feature of a Part.
 * 
 */
 Namespace.Label = class {

    /**
     * @constructor
     * 
     * @param {String} text - The label text.
     * @param {Object} [data] - The label data.
     */
    constructor(text, data) 
    { 
        this.text = text;
        this.data = data;
        this.stringRep = this._getStringRep();
        
        [this.data, this.text, this.stringRep, this].forEach(obj => Object.freeze(obj));
    }


    /**
     * Indicates whether the label has any associated data.
     * 
     */
    hasData() 
    { 
        return ((this.data !== undefined) && (this.data !== null));
    }

    
    /**
     * Creates a label for a Part whose quanta 
     * are in the reverse order of this label's quanta. 
     * 
     */
    toFlipped() 
    { 
        const TipFlipMap = Namespace.Knowledge.TipFlipMap;
 
        switch (this.text) {
            case 'curve': 
            case 'curve1':
            case 'curve2': 
            case 'contact':
                return new Namespace.Label((TipFlipMap[this.text] || this.text), (TipFlipMap[this.data] || this.data));

            case 'ends': 
            case 'tips': 
                return new Namespace.Label(this.text, this.data.slice().reverse());

            case 'quanta':
                return new Namespace.Label(this.text, this.data.slice().reverse());

            default:
                return new Namespace.Label(this.text, this.data);
        }   
    }


    /**
     * Returns a string representation of the label.
     * 
     */
    toString() 
    { 
        return this.stringRep; 
    }


    /**
     * Computes a string representation of the label.
     * @private
     * 
     */
    _getStringRep()
    {
        let str = this.text;

        switch (this.text) {
            case 'curve': 
            case 'curve1':
            case 'curve2': 
            case 'contact':
            case 'shape':
                return str + ': ' + this.data;

            case 'ends': 
            case 'tips': 
                return str + ': (' + this.data[0].join(',') + ') (' + this.data[1].join(',') + ')';

            case 'neighborhood':
                return ('nbrs' + ': (' + this.data.join(',') + ')').replaceAll('eq','e');

            case 'quanta':
                return str + ': (' + this.data.join(',') + ')';

            default:
                return str;
        }   
    }

};

})( window.LetterSpirit = window.LetterSpirit || {} );







// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    

/**
 * @classdesc
 * A Part is a joint-list, together with a set of labels.
 * 
 */
 Namespace.Part = class {

    /**
     * @constructor
     * 
     * @param {Joint[]} jointList - The joints that make up the part.
     * @param {Label[]} [labels=[]] - Labels for the part. 
     */
    constructor(jointList, labels=[]) 
    { 
        this.jointList = jointList.map(jt => (jt instanceof Namespace.Joint) ? jt : new Namespace.Joint(jt[0], jt[1]));
        this.labels = labels;

        this.quantaIds = [ ...new Set(this.jointList.flatMap(jt => jt.getQids())) ];
        this.quanta = this.quantaIds.map(qid => Namespace.Quanta[qid]);
        this.qidStr = '(' + this.quantaIds.toSorted().join(",") + ')';

        [this.jointList, this.quantaIds, this.quanta, this].forEach(obj => Object.freeze(obj));
    }

    
    /**
     * Returns a list of all (unique) quanta in the part.
     * 
     */
    getQuanta() 
    { 
        return this.quanta; 
    }


    /**
     * Returns a list of all (unique) quanta-ids in the part.
     * 
     */
    getQuantaIds() 
    { 
        return this.quantaIds; 
    }


    /**
     * Returns the number of quanta in the part.
     */
    numQuanta() 
    { 
        return this.quantaIds.length; 
    }


    /**
     * Returns the number of labels that the part has.
     */
    numLabels() 
    { 
        return this.labels.length; 
    }


    /**
     * Returns the number of tips that the part has.
     */
    numTips() 
    { 
        return Namespace.Utils.GetTips(this).length; 
    }


    /**
     * Indicates whether the part contains a given quantum.
     * 
     * @param {Number} qid - The quantum id to look for. 
     *  
     */
    hasQid(qid)
    {
        if (!qid && qid !== 0) { return false; }
        return this.jointList.some(jt => (jt.qidA === qid) || (jt.qidB === qid));
    }


    /**
     * Indicates whether the part contains a given joint. (Does not compare glue.)
     * 
     * @param {Joint} joint - The joint to look for. 
     * 
     */
    containsJoint(joint)
    {
        return this.jointList.some(jt => jt.valueEquals(joint));
    }


    /**
     * Indicates whether the part has the same joints as another part. (Does not compare glue.)
     * 
     * @param {Part} that - The part to compare with.
     * 
     */
    hasSameJointsAs(that) 
    { 
        if (that === this) { return true; }

        return this.jointList.every(jt => that.containsJoint(jt)) && 
               that.jointList.every(jt => this.containsJoint(jt));
    } 


    /**
     * Indicates whether the part has a given label.
     * 
     * @param {string} labelText - The label text to look for. 
     * 
     */
    hasLabel(labelText)
    {
        return this.labels.some(l => l.text == labelText);
    }


    /**
     * Gets a label with the given text.
     * 
     * @param {string} labelText - The label text to look for. 
     * 
     */
    getLabel(labelText)
    {
        return this.labels.find(l => l.text == labelText);
    }


    /**
     * Adds a label to the part. (Removes any existing label with the same text.)
     * 
     * @param {Object} label - The label to add. 
     * 
     */
    addLabel(label)
    {
        this.removeLabel(label.text);
        this.labels.push(label);
    }


    /**
     * Removes a label.
     * 
     * @param {string} labelText - The text of the label to remove. 
     */
    removeLabel(labelText)
    {
        const idx = this.labels.findIndex(l => l.text == labelText);
        if (idx !== -1) { this.labels.splice(idx, 1); }
    }


    /**
     * Returns the whine value of the part.
     */
    getWhine() 
    { 
        return this.getLabel('**whine')?.data || 0; 
    }


    /**
     * Returns a string representation of the part's quantum-id list.
     */
    qidString()
    {
        return this.qidStr;
    }

};

})( window.LetterSpirit = window.LetterSpirit || {} );







// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";

/**
 * @classdesc
 * A Quantum is a single segment of a letterform.
 * 
 */
Namespace.Quantum = class {

    /**
     * @constructor
     * 
     * @param {number} id - The id of the quantum (0-55).
     * @param {number} startPointId - The id of the quantum's start point (1-21)
     * @param {number} endPointId - The id of the quantum's end point (1-21)
     */
    constructor(id, startPointId, endPointId)  
    {
        // Check input 
        if ((id < 0) || (id > 55) || (startPointId < 1) || (startPointId > 21) || 
            (endPointId < 1) || (endPointId > 21) || (endPointId <= startPointId)) { 
            throw new Error("Invalid args, in Quantum constructor"); 
        }

        // Quanta are singletons, creatd for the static Namespace.Quanta list below.
        if (Namespace.Quanta && Namespace.Quanta[id]) { throw new Error("Quantum has already been created"); }

        // Cache inputs
        this.id = id;
        this.startPointId = startPointId;
        this.endPointId = endPointId;
        this.pointIds = [startPointId, endPointId];

        // Coordinates of the quantum ends. (x-range is 0-3, y-range is 0-6)
        this.startPoint = Namespace.Utils.PointIdToXYCoords(startPointId);
        this.endPoint   = Namespace.Utils.PointIdToXYCoords(endPointId);
        this.length = Math.sqrt((this.endPoint.x - this.startPoint.x)**2 + (this.endPoint.y - this.startPoint.y)**2);

        // Coordinates of the shortened-quantum ends
        let [dx, dy] = [this.endPoint.x - this.startPoint.x, this.endPoint.y - this.startPoint.y];
        this.startPointSh = {x: this.startPoint.x + 0.13*dx, y: this.startPoint.y + 0.13*dy};
        this.endPointSh   = {x: this.endPoint.x - 0.13*dx,   y: this.endPoint.y - 0.13*dy};

        // Center 
        this.center = {x:(this.startPoint.x + this.endPoint.x)/2, y:(this.startPoint.y + this.endPoint.y)/2};
        
        // Neighbors
        this.neighbors = Namespace.Knowledge.QuantaNeighbors[id];

        // Make immutable
        [this.pointIds, this.startPoint, this.endPoint, this.startPointSh, this.endPointSh, this.center, this.neighbors, this].
            forEach(obj => Object.freeze(obj));
    }


    /** 
     * Gets a Quantum given the ids of its end points.
     * 
     */ 
    static FromQids(id1, id2)
    {
        return Namespace.Quanta.find(q => 
            (q.startPointId === id1 && q.endPointId === id2) || (q.startPointId === id2 && q.endPointId === id1)
        );
    }

};


 
/**
 * The static list of all 56 Quanta.
 * By convention, startPointId is always less than endPointId.
 * @readonly
 * 
 */
Namespace.Quanta = Namespace.Quanta ||
[
    // Horizontal
    new Namespace.Quantum(0,  1,8),
    new Namespace.Quantum(1,  8,15),
    new Namespace.Quantum(2,  2,9),
    new Namespace.Quantum(3,  9,16),
    new Namespace.Quantum(4,  3,10),
    new Namespace.Quantum(5,  10,17),
    new Namespace.Quantum(6,  4,11),
    new Namespace.Quantum(7,  11,18),
    new Namespace.Quantum(8,  5,12),
    new Namespace.Quantum(9,  12,19),
    new Namespace.Quantum(10, 6,13),
    new Namespace.Quantum(11, 13,20),
    new Namespace.Quantum(12, 7,14),
    new Namespace.Quantum(13, 14,21),

    // Vertical
    new Namespace.Quantum(14, 1,2),
    new Namespace.Quantum(15, 8,9),
    new Namespace.Quantum(16, 15,16),
    new Namespace.Quantum(17, 2,3),
    new Namespace.Quantum(18, 9,10),
    new Namespace.Quantum(19, 16,17),
    new Namespace.Quantum(20, 3,4),
    new Namespace.Quantum(21, 10,11),
    new Namespace.Quantum(22, 17,18),
    new Namespace.Quantum(23, 4,5),
    new Namespace.Quantum(24, 11,12),
    new Namespace.Quantum(25, 18,19),
    new Namespace.Quantum(26, 5,6),
    new Namespace.Quantum(27, 12,13),
    new Namespace.Quantum(28, 19,20),
    new Namespace.Quantum(29, 6,7),
    new Namespace.Quantum(30, 13,14),
    new Namespace.Quantum(31, 20,21),

    // Forward slash
    new Namespace.Quantum(32, 2,8),
    new Namespace.Quantum(33, 9,15),
    new Namespace.Quantum(34, 3,9),
    new Namespace.Quantum(35, 10,16),
    new Namespace.Quantum(36, 4,10),
    new Namespace.Quantum(37, 11,17),
    new Namespace.Quantum(38, 5,11),
    new Namespace.Quantum(39, 12,18),
    new Namespace.Quantum(40, 6,12),
    new Namespace.Quantum(41, 13,19),
    new Namespace.Quantum(42, 7,13),
    new Namespace.Quantum(43, 14,20),

    // Backslash
    new Namespace.Quantum(44, 1,9),
    new Namespace.Quantum(45, 8,16),
    new Namespace.Quantum(46, 2,10),
    new Namespace.Quantum(47, 9,17),
    new Namespace.Quantum(48, 3,11),
    new Namespace.Quantum(49, 10,18),
    new Namespace.Quantum(50, 4,12),
    new Namespace.Quantum(51, 11,19),
    new Namespace.Quantum(52, 5,13),
    new Namespace.Quantum(53, 12,20),
    new Namespace.Quantum(54, 6,14),
    new Namespace.Quantum(55, 13,21)
];
// Make immutable
Object.freeze(Namespace.Quanta);



})( window.LetterSpirit = window.LetterSpirit || {} );







// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";


/**
 * @classdesc
 * This class provides methods for generating random values 
 * and making random selections.
 * 
 */
 Namespace.RandGen = class {

    /**
     * @constructor
     * @param {Number|String} [seed=Date.now] - A seed for initializing the randomness generator.
     */
    constructor(seed) 
    { 
        // Initialize
        this.seed = ((typeof(seed) !== "undefined") && (seed !== null)) ? 
            seed.toString() : Date.now().toString();

        const cyrSeed = Namespace.RandGen._get_seed_cyrb128(this.seed);
        this.rng = Namespace.RandGen._sfc32(...cyrSeed);
    }


    /**
     * Returns a random number in the range [0,1), sampled from 
     * a uniform distribution.
     * 
     * @returns A number in the range [0,1).
     */
    rand()
    {
        return this.rng();
    }


    /**
     * Returns true or false, with probabilities p and 1-p, respectively.
     * 
     * @param {Number} p - The probability of a 'true' result.
     * @returns true or false.
     */
    coinFlip(p = 0.5)
    {
        return this.rng() < p;
    }


    /**
     * Returns a random element from a given sequence.
     * 
     * @param {Indexable} seq - The sequence to select from.
     * @param {Number} n - The number of choices to make (with replacement).
     * @returns A random element from seq.
     */
    choice(seq, n)
    {
        if (!seq) {
            return null; 
        }
        if (n === undefined) { // Return an element in this case, otherwise an array
            if (!seq.length) { return null; }
            return seq[ Math.floor(this.rng()*seq.length) ]; 
        }
        else {
            const result = [];
            for (let i=0; i<n; i++) {
                result.push( seq[ Math.floor(this.rng()*seq.length) ] );
            }
            return result;
        }
    }



    /**
     * Returns the result of rolling an n-sided die. Takes floats as well as integers.
     * 
     * @param {Number} n - The number of sides on the die.
     */
    nSidedDie(n)
    {
        const floored_n = Math.floor(n);
        return (floored_n === 0) ? 0 : Math.floor(this.rng() * floored_n) + 1;
    }    

    
    /**
     * Returns a random element from the given sequence, 
     * with weighted probabilities.
     * 
     * @param {Indexable} seq - The sequence to select from.
     * @param {Array<Number>} weights - The relative weights.
     * @returns A random element from seq.
     */
    weightedChoice(seq, weights)
    {
        if (!seq || !seq.length) {
            return null; // (Apparently, many callers rely on this behavior)
        }

        const N = seq.length;
        if ( N !== weights.length ){
            throw new Error("Incompatible array lengths, in RandGen.weightedChoice");
        }
        if (weights.some(w => w < 0)){
            throw new Error("Negative weights in RandGen.weightedChoice");
        }

        let csum = 0;
        const cumWeights = weights.map((csum = 0, n => csum += n));
        const r = this.rng() * cumWeights[N-1];
        let idx = N-1;
        for (let i=0; i<N; i++){
            if (r < cumWeights[i]) {
                idx = i;
                break;
            }
        }
        return seq[idx];
    }


    /**
     * Returns true or false, with probabilities a/(a+b) and b/(a+b), respectively.
     * 
     * @param {Number} a - First number.
     * @param {Number} b - Second number.
     * @returns true or false.
     */
    weightedGreaterThan(a, b)
    {
        const sum = a + b;
        return (sum === 0) ? false : this.coinFlip(a/sum);
    }


    /**
     * Creates a 4-component seed for _sfc32, given an input seed.
     * Reference: https://stackoverflow.com/questions/521295/
     * @private
     * 
     * @param {String} inSeed - The input seed.
     * @return {Array} A 4-component integer seed.
     */
    static _get_seed_cyrb128(inSeed) {
        let h1 = 1779033703, h2 = 3144134277,
            h3 = 1013904242, h4 = 2773480762;
        for (let i = 0, k; i < inSeed.length; i++) {
            k = inSeed.charCodeAt(i);
            h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
            h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
            h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
            h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
        }
        h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
        h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
        h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
        h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
        return [(h1^h2^h3^h4)>>>0, (h2^h1)>>>0, (h3^h1)>>>0, (h4^h1)>>>0];
    }


    /**
     * Returns a function that generates random numbers, seeded with the given 4-component seed. 
     * Reference: https://stackoverflow.com/questions/521295/
     * @private
     * 
     * @param {Number} a - 1st seed component.
     * @param {Number} b - 2nd seed component.
     * @param {Number} c - 3rd seed component.
     * @param {Number} d - 4th seed component.
     * @return {Function} A function that produces random numbers in the range [0,1).
     */
    static _sfc32(a, b, c, d) {
        return function() {
          a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0; 
          let t = (a + b) | 0;
          a = b ^ b >>> 9;
          b = c + (c << 3) | 0;
          c = (c << 21 | c >>> 11);
          d = d + 1 | 0;
          t = t + d | 0;
          c = c + t | 0;
          return (t >>> 0) / 4294967296;
        };
    }
};

})( window.LetterSpirit = window.LetterSpirit || {} );







// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";


/**
 * @classdesc
 * This class is used to report information to the console.
 * 
 */
 Namespace.Reporter = class {

    /**
     * @constructor
     * 
     */
    constructor() 
    { 
        this.errorsEnabled = true;
        this.warningsEnabled = true;
        this.infoEnabled = true;
        this.traceEnabled = false; 
        this.traceDetailsEnabled = false;
    }
  
       
    /**
     * Reports a trace message.
     *   
     * @param {String} msg - The message to be reported.
     */
    trace(msg)
    {
        if (this.traceEnabled) {
            console.info('Trace: ' + msg);
        }
    }       
    

    /**
     * Reports a trace-details message.
     *   
     * @param {String} msg - The message to be reported.
     */
    traceDetail(msg)
    {
        if (this.traceDetailsEnabled) {
            console.info('Trace*: ' + msg);
        }
    }       
    

    /**
     * Reports an informational message.
     * 
     * @param {String} msg - The message to be reported.
     */
    info(msg)
    {
        if (this.infoEnabled) {
            console.info('Info: ' + msg);
        }
    }       
    

    /**
     * Reports a warning message.
     *   
     * @param {String} msg - The message to be reported.
     */
    warn(msg)
    {
        if (this.warningsEnabled) {
            console.warn('Warning: ' + msg);
        }
    }    
    
       
    /**
     * Reports an error message.
     *   
     * @param {String} msg - The message to be reported.
     */
    error(msg)
    {
        if (this.errorsEnabled) {
            console.error('Error: ' + msg);
        }
    }    
    
 };


})( window.LetterSpirit = window.LetterSpirit || {} );







// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Knowledge = Namespace.Knowledge;
    const Params = Namespace.Params;
    const Utils = Namespace.Utils;


/**
 * @classdesc
 * This class implements the Smart-Parse algorithm for segmenting
 * a set of quanta into parts.
 * 
 */
 Namespace.SmartParser = class
 {
    /**
     * @constructor
     * @param {App} app - The LetterSpirit App instance.
     */
    constructor(app) 
    { 
        this.app = app;
    }


    /**
     * Runs the Smart-Parse algorithm.
     * 
     */
    run()
    {
        const SP = Namespace.SmartParser;
        const [wksp, rack, randGen] = [this.app.workspace, this.app.coderack, this.app.randGen];

        // Select a promising Whole category for the input letter
        const charOptions = Knowledge.LetterCategories.filter(char => wksp.inputLetterGestalts[char] > 0);
        const topOption = charOptions.reduce((prev, curr) => wksp.inputLetterGestalts[curr] > wksp.inputLetterGestalts[prev] ? curr : prev);
        const chosenChar = (charOptions.length == 0) ? 'o' : 
            (rack.numCodeletsRun < 5) ? topOption :
            randGen.weightedChoice(charOptions, charOptions.map(char => wksp.inputLetterGestalts[char]));

        // Pick a corresponding gestalt function
        const gestaltFuncs = randGen.choice(SP.GestaltFuncs[chosenChar]);

        // Evaluate the gestalt function
        const allQids = wksp.inputGridLetter.quantaIds;
        const firstPass = SP.EvalFunc(gestaltFuncs[0], allQids, allQids, randGen).map(qidSet => Utils.Linearize(qidSet, randGen));
    
        let gestaltResult;
        if ((gestaltFuncs.length === 1) || allQids.every(qid => firstPass[0].includes(qid))) {
            gestaltResult = firstPass;
        } 
        else {
            const restFlattened = firstPass.slice(1).flat();
            gestaltResult = [firstPass[0]].concat(SP.EvalFunc(gestaltFuncs[1], restFlattened, allQids, randGen));
        }

        // Update the workspace
        wksp.parts = gestaltResult.map(qidSet => 
            new Namespace.Part(SP.QuantaJoints(qidSet), [new Namespace.Label('**whine', 10)])
        );
        Utils.Dampen(wksp); // Clears bindings, posts a gestalt codelet
        rack.post(2*wksp.parts.length, 'looker', Params.VeryHighUrgency, 1);
    }


    /**
     * Evaluates a gestalt function.
     * @private
     * 
     */
    static EvalFunc(funcParams, qids, allQids, randGen) 
    {
        const SP = Namespace.SmartParser;
        const islands =  Utils.GlomIslands(qids);
    
        switch (funcParams[0]) {
            case 'glomIslands':
                return islands;
            
            case 'cleaveOut': {
                const startPoint = SP.GetPoint(funcParams[1], 'no-except', qids, allQids, randGen);
                const cleaveland = islands.find(island => island.map(qid => Namespace.Quanta[qid].pointIds).flat().includes(startPoint));
                const rest = islands.filter(island => island !== cleaveland);
                const finishPoint = SP.GetPoint(funcParams[2], startPoint, cleaveland, allQids, randGen);
                return rest.concat(SP.CleaveOut(startPoint, finishPoint, cleaveland, randGen));
            }
            default:
                throw new Error(`Unknown parse command: ${funcParams[0]}`);
        }
    }


    /**
     * Finds a point id given its specification.
     * @private
     * 
     */    
    static GetPoint(pointSpec, except, qids, allQids, randGen) 
    {
        const targetPid = pointSpec[1];
        const Dist = Utils.DistanceBetweenPointIds;

        switch (pointSpec[0]) 
        {
            case 'ptN': {
                // Nearest point
                const pids = [ ...new Set( qids.flatMap(qid => Namespace.Quanta[qid].pointIds) ) ];
                let candidates = pids.filter(pid => pid != except);
                return candidates.reduce((prev, curr) => Dist(curr, targetPid) < Dist(prev, targetPid) ? curr : prev);
            }
            case 'tpN': {
                // Nearest tip
                let tips = Namespace.Utils.GetTips(qids).filter(pid => pid != except);
                if (tips.length === 0) { 
                    const pids = [ ...new Set( qids.flatMap(qid => Namespace.Quanta[qid].pointIds) ) ];
                    tips = pids.filter(pid => pid != except); 
                }
                return tips.reduce((prev, curr) => Dist(curr, targetPid) < Dist(prev, targetPid) ? curr : prev);
            }
            case 'trp': {
                // Triple point
                const pids = allQids.flatMap(qid => Namespace.Quanta[qid].pointIds);
                const upids = [...new Set(pids)];
                let candidates = upids.filter(upid => (pids.filter(p => p == upid).length == 3) );
                if (candidates.length > 0) {
                    return randGen.choice(candidates);
                }
                else {
                    // Fall back to the point nearest to point 4. (That's where action tends to occur for 'e' and 'k'.)
                    candidates = [ ...new Set( qids.flatMap(qid => Namespace.Quanta[qid].pointIds) )];
                    return candidates.reduce((prev, curr) => Dist(curr, 4) < Dist(prev, 4) ? curr : prev);
                }
            }
            case 'quad': {
                // Quadruple point
                const pids = allQids.flatMap(qid => Namespace.Quanta[qid].pointIds);
                const upids = [...new Set(pids)];
                const candidates = upids.filter(upid => (pids.filter(p => p == upid).length == 4) );
                if (candidates.length > 0) {
                    return randGen.choice(candidates);
                }
                else {
                    // Fall back to triple point
                    return Namespace.SmartParser.GetPoint(['trp'], except, qids, allQids, randGen);
                }
            }
            default:
                return undefined;
        }        
    }


    /**
     * From a given set of quanta, extracts a part that touches the specified start and finish points,
     * then separates any leftover quanta into connected sets.
     * @private
     * 
     */
    static CleaveOut(startPoint, finishPoint, qids, randGen)
    {
        const onePart = Namespace.SmartParser.ShortestPath(startPoint, finishPoint, qids);
        const rest = qids.filter(qid => !onePart.includes(qid));
        return [onePart].concat( (rest.length === 0) ? [] : Namespace.Utils.RobustLinearize(rest, randGen) );
    }


    /**
     * Finds the shortest path between two points, that uses only the given set of quanta.
     * @private
     */
    static ShortestPath(startPoint, endPoint, qids)
    {
        const quanta = qids.map(qid => Namespace.Quanta[qid]);
        const scores = [];
        for (let i = 0; i <= 21; i++) { scores.push({val:Number.POSITIVE_INFINITY, srcPoint:-1, srcQid:-1}); }
        scores[startPoint].val = 0;
        
        let stack = [startPoint];
        while (stack.length > 0) {
            let pointId = stack.shift();
            for (let q of quanta.filter(q => q.pointIds.includes(pointId))) {
                const farPointId = (q.startPointId === pointId) ? q.endPointId : q.startPointId;
                const newScoreVal = scores[pointId].val + q.length;
                if (newScoreVal < scores[farPointId].val) {
                    scores[farPointId] = {val:newScoreVal, srcPoint:pointId, srcQid:q.id};
                    stack.push(farPointId);
                }                           
            }
        }
        
        if (scores[endPoint].srcPoint === -1) {
            throw new Error("No path from " + startPoint + " to " + endPoint + ", in ShortestPath()");
        }

        const path = [];
        let pointId = endPoint;
        while (pointId != startPoint) {
            path.push(scores[pointId].srcQid);
            pointId = scores[pointId].srcPoint;
        }
        path.reverse();
        return path;
    }


    /**
     * Gets a list of all implied joints in a given set of quanta.
     * @private
     * 
     */
    static QuantaJoints(qids)
    {
        const joints = [];
        const N = qids.length;
        for (let i = 0; i < N; i++) {
            const qidA = qids[i];
            const nbrs = Knowledge.QuantaNeighbors[qidA];
            for (let j = i + 1; j < N; j++) {
                const qidB = qids[j];
                if (nbrs.includes(qidB)) { joints.push(new Namespace.Joint(qidA, qidB)); }
            }
        }

        // Add any singlets
        const singlets = qids.filter( qid => !joints.some(j => j.hasQid(qid)) );
        joints.push(...singlets.map(qid => new Namespace.Joint(qid)));

        return joints;
    }


    /**
     * Defines the functions used to segment a set of quanta into 
     * parts with good gestalt scores.
     * 
     * @private
     */
    static GestaltFuncs = 
    {
        // In the following, tpN means "tip nearest",  ptN means "point nearest",  
        // trp means "triple point",  quad means "quadruple point"

        a: [[['cleaveOut', ['tpN', 3], ['ptN', 19]]]],
        b: [[['cleaveOut', ['tpN', 1], ['ptN', 5]]]],
        c: [[['glomIslands']]],
        d: [[['cleaveOut', ['tpN', 15], ['ptN', 19]]]],
        e: [
            [['cleaveOut', ['ptN', 18], ['ptN', 4]]],
            [['cleaveOut', ['trp'], ['ptN', 18]]]
        ],
        f: [[['cleaveOut', ['tpN', 15], ['tpN', 12]]]],
        g: [[['cleaveOut', ['tpN', 7], ['ptN', 17]]]],
        h: [[['cleaveOut', ['tpN', 1], ['tpN', 5]]]],
        i: [[['glomIslands']]],
        j: [[['glomIslands']]],
        k: [
             [['cleaveOut', ['tpN', 1], ['ptN', 5]],   ['cleaveOut', ['tpN', 17], ['ptN', 5]]],
             [['cleaveOut', ['quad'],   ['tpN', 17]],  ['cleaveOut', ['quad'],    ['tpN', 19]]],
             [['cleaveOut', ['tpN', 1], ['ptN', 5]],   ['cleaveOut', ['tpN', 17], ['ptN', 3]]]
        ],
        l: [[['glomIslands']]],
        m: [
             [['cleaveOut', ['tpN', 5],  ['ptN', 3]],   ['cleaveOut', ['tpN', 5], ['ptN', 3]]],
             [['cleaveOut', ['ptN', 11], ['ptN', 10]]],
             [['cleaveOut', ['tpN', 5],  ['ptN', 3]],   ['cleaveOut', ['tpN', 11], ['ptN', 3]]],
             [['cleaveOut', ['tpN', 5],  ['ptN', 3]],   ['cleaveOut', ['tpN', 3], ['ptN', 12]]]
        ],
        n: [[['cleaveOut', ['tpN', 5], ['ptN', 3]]]],
        o: [[['glomIslands']]],
        p: [[['cleaveOut', ['tpN', 7], ['ptN', 3]]]],
        q: [[['cleaveOut', ['tpN', 21], ['ptN', 17]]]],
        r: [[['cleaveOut', ['tpN', 5], ['ptN', 3]]]],
        s: [[['cleaveOut', ['tpN', 17], ['ptN', 11]]]],
        t: [[['cleaveOut', ['tpN', 9], ['tpN', 19]]]],
        u: [[['cleaveOut', ['tpN', 17], ['ptN', 19]]]],
        v: [[['cleaveOut', ['tpN', 17], ['ptN', 13]]]],
        w: [
             [['cleaveOut', ['tpN', 17], ['ptN', 19]], ['cleaveOut', ['tpN', 17], ['ptN', 19]]],
             [['cleaveOut', ['tpN', 17], ['ptN', 19]], ['cleaveOut', ['tpN', 11], ['ptN', 19]]],
             [['cleaveOut', ['tpN', 17], ['ptN', 19]], ['cleaveOut', ['tpN', 19], ['ptN', 10]]]
        ],
        x: [[['cleaveOut', ['tpN', 17], ['tpN', 5]]]],
        y: [[['cleaveOut', ['tpN', 17], ['tpN', 7]]]],
        z: [
             [['cleaveOut', ['tpN', 3], ['ptN', 17]],  ['cleaveOut', ['tpN', 19], ['ptN', 5]]],
             [['cleaveOut', ['tpN', 19], ['ptN', 5]],  ['cleaveOut', ['tpN', 5], ['ptN', 17]]]
        ]
    };


};

})( window.LetterSpirit = window.LetterSpirit || {} );







// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Params = Namespace.Params;


/**
 * @classdesc
 * The Temperature class keeps track of the current temperature.
 * 
 */
 Namespace.Temperature = class {

    /**
     * @constructor
     * 
     */
    constructor(app) 
    { 
        this.app = app;
        this.value = 100;
    }

    
    /**
     * Resets the temperature to its initial value.
     * 
     */
    reset()
    {
        this.value = 100;
    }


    /**
     * Computes the current temperature, which takes into account
     * the goodness of parts and the whole activations in the workspace.
     * 
     */
    update()
    {
        const wksp = this.app.workspace;

        const wkspGoodness = wksp.calcGoodness(); 
        const memCount = Object.values(wksp.wholeActivations).filter(val => val >= Params.WholeThreshold).length;
        const memGoodness = (memCount === 0) ? 0 : 100/memCount; 
         
        const currentTemp = this.value;
        const targetTemp = Math.abs(100 - (wkspGoodness + memGoodness)/2); 
        const diff = Math.abs(currentTemp - targetTemp);
        const newTemp = (targetTemp > currentTemp) ? (currentTemp + diff) : (currentTemp - diff);
        
        this.value = newTemp;
    }
};

})( window.LetterSpirit = window.LetterSpirit || {} );







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







// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Params = Namespace.Params;
    const Utils = Namespace.Utils;
    const Part = Namespace.Part;
    const Joint = Namespace.Joint;

/**
 * @classdesc
 * This codelet gets bound to a part with too many tips (more than two),
 * or to a part that does not activate any roles. It breaks the part 
 * into smaller parts.
 * 
 */
 Namespace.Codelets.Breaker = class extends Namespace.Codelets.CodeletBase
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
        super('breaker', urgency, generation);
        this.part = args[0];
    }


    /**
     * Runs the codelet.
     */
    run(app)
    {
        // Display codelet info
        const wksp = app.workspace;
        wksp.infoBarText = 'Recognizing...';
        wksp.codeletTitleText = 'Breaker codelet from generation ' + this.gen; 
        wksp.codeletMessage1 = wksp.codeletMessage2 = '';    
        
        // Check whether the part is still around
        const part = this.part;
        const otherParts = wksp.parts.filter(p => !p.hasSameJointsAs(part));
        if (!wksp.containsPart(part)) { 
            wksp.codeletMessage1 = "Part is no longer around ... >>>fizzle<<<";
            return;
        }

        // Break the part
        wksp.codeletMessage1 = "Breaking part " + part.qidString(); 
        let newParts = Namespace.Codelets.Breaker.ReglueSortAndCrack(part.jointList, wksp);
        newParts.forEach(p => p.addLabel(new Namespace.Label('**whine', 25)));

        Utils.Dampen(wksp);
        wksp.parts = [...newParts, ...otherParts];
        wksp.app.coderack.post(newParts.length, 'looker', Params.MediumUrgency, this.gen+1);        
        wksp.codeletMessage2 = "Workspace re-set and lookers spun";
    }


    /**
     * Performs the actual breaking.
     * @private
     */
    static ReglueSortAndCrack(inputJointList, wksp)
    {
        const inputQids = [... new Set(inputJointList.flatMap(jt => jt.getQids()) )];

        // Helper function
        const breakFunc = function(jointList) {
            let parts = Utils.MakePartsFromJoints( jointList.map(jtg => jtg.joint) );
            inputQids.forEach(qid => { // Make any leftover quanta into singlet parts
                if (!parts.some(p => p.hasQid(qid))) { parts.push(new Part([new Joint(qid)])); } 
            });

            if (jointList.length == 0) { return parts; }
 
            // Lose joints that have no glue, and keep going until we have at least two parts
            if ((jointList[0].glue == 0) || (parts.length < 2))  { 
                return breakFunc(jointList.slice(1));
            } else { 
                return parts; 
            } 
        };

        
        // Get the non-singlet joints, sorted by glue
        let modJointList = inputJointList.filter(jt => !jt.isSinglet()).map(jt => { 
            const wkspJoint = wksp.getUpdatedJoint(jt);
            const glue = wkspJoint ? wkspJoint.glue : wksp.app.randGen.nSidedDie(100);
            return {joint:(wkspJoint || jt), glue:glue};
        });
        modJointList.sort((a,b) => a.glue - b.glue);

        if (modJointList.length == 0) {
            return [new Part(inputJointList)];
        } else {
            return breakFunc(modJointList.slice(1));
        }
    }
};

})( window.LetterSpirit = window.LetterSpirit || {} );







// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    Namespace.Codelets = Namespace.Codelets || {};


/**
 * @classdesc
 * This class provides a factory method for creating codelets.
 * 
 */
 Namespace.Codelets.CodeletFactory = class
 {
    /**
     * @constructor
     * 
     * @param {App} app - The LetterSpirit App instance.
     */
    constructor(app) 
    { 
        this.app = app;
    }


    /**
     * Creates a codelet given its name and constructor arguments.
     * 
     * @param {string} name - The name of the codelet.
     * @param {Number} urgency - The urgency of the codelet.
     * @param {Number} generation - The generation that the codelet belongs to. 
     * @param {Array} codeletArgs - Arguments to pass to the codelet.
     * 
     */
    create(name, urgency, generation, codeletArgs)
    {
        const ctorArgs = [urgency, generation, codeletArgs];

        let result = null;
        switch (name) 
        {
            case 'breaker':
                result = new Namespace.Codelets.Breaker(...ctorArgs);
                break;

            case 'gestalt':
                result = new Namespace.Codelets.Gestalt(...ctorArgs);
                break;

            case 'glue-ant':
                result = new Namespace.Codelets.GlueAnt(...ctorArgs);
                break;

            case 'label-checker':
                result = new Namespace.Codelets.LabelChecker(...ctorArgs);
                break;

            case 'labeler':
                result = new Namespace.Codelets.Labeler(...ctorArgs);
                break;

            case 'looker':
                result = new Namespace.Codelets.Looker(...ctorArgs);
                break;

            case 'pacifier':
                result = new Namespace.Codelets.Pacifier(...ctorArgs);
                break;
                    
            case 'shaker':
                result = new Namespace.Codelets.Shaker(...ctorArgs);
                break;    

            case 'sparker':
                result = new Namespace.Codelets.Sparker(...ctorArgs);
                break;    
        
            case 'spreader':
                result = new Namespace.Codelets.Spreader(...ctorArgs);
                break;    
            
            case 'top-down-breaker':
                result = new Namespace.Codelets.TopDownBreaker(...ctorArgs);
                break;    
                    
            case 'top-down-glommer':
                result = new Namespace.Codelets.TopDownGlommer(...ctorArgs);
                break;

            default:
                    throw new Error('Unknown codelet name: ' + name);
        }
        return result;
    }
};

})( window.LetterSpirit = window.LetterSpirit || {} );







// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Params = Namespace.Params;

/**
 * @classdesc
 * This codelet updates the Whole-activations based on their gestalt scores.
 * 
 */
 Namespace.Codelets.Gestalt = class extends Namespace.Codelets.CodeletBase
 {
    /**
     * @constructor
     * 
     * @param {Number} urgency - The urgency of the codelet.
     * @param {Number} generation - The generation that the codelet belongs to.
     */
    constructor(urgency, generation) 
    { 
        super('gestalt', urgency, generation);
    }


    /**
     * Runs the codelet.
     * 
     */
    run(app)
    {
        // Display codelet info
        const wksp = app.workspace;
        wksp.infoBarText = 'Recognizing...';
        wksp.codeletTitleText = 'Gestalt codelet from generation ' + this.gen;  
        wksp.codeletMessage1 = 'Spinning activation-spreader';
        wksp.codeletMessage2 = '';

        // Update whole-activations
        Object.values(Namespace.Wholes).forEach(whole => { 
            const oldActivation = wksp.wholeActivations[whole.name];
            const categoryScore = wksp.inputLetterGestalts[whole.name[0]];
            const newActivation = Math.max(-100, Math.min(100, oldActivation + categoryScore));
            wksp.wholeActivations[whole.name] = newActivation; 
        }); 

        // Post an activation-spreader codelet
        app.coderack.post(1, 'spreader', Params.HighUrgency, this.gen+1);
    }
};

})( window.LetterSpirit = window.LetterSpirit || {} );







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







// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Params = Namespace.Params;


/**
 * @classdesc
 * This codelet checks a part chosen at random from the workspace to see if it 
 * has enough labels to justify sparking some activations.
 * 
 */
 Namespace.Codelets.LabelChecker = class extends Namespace.Codelets.CodeletBase
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
        super('label-checker', urgency, generation);
    }


    /**
     * Runs the codelet.
     */
    run(app)
    {
        const [wksp, rack] = [app.workspace, app.coderack];

        // Display codelet info
        wksp.infoBarText = 'Recognizing...';
        wksp.codeletTitleText = 'Label-checker codelet from generation ' + this.gen; 
        wksp.codeletMessage1 = wksp.codeletMessage2 = '';    
        
        const part = app.randGen.choice(wksp.parts);

        let enoughLabels = Params.LabelTotal;
        if (part.numTips() == 0) { enoughLabels -= 2; }
        if (rack.numCodeletsRun >= Params.NumExamPhaseCodelets) { enoughLabels -= 1; }

        const urgency = 20 + (5 * (part.numLabels() - enoughLabels + 4));

        wksp.codeletMessage1 = `Checking part ${part.qidString()}`; 
        if (part.numLabels() >= enoughLabels) {
            wksp.codeletMessage2 = `Part passed inspection ... adding sparker.`;
            rack.post(1, 'sparker', urgency, this.gen+1, [part]);
        } else {
            wksp.codeletMessage2 = `Not enough labels ... >>>fizzle<<<`;
        }
    }
};

})( window.LetterSpirit = window.LetterSpirit || {} );







// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Params = Namespace.Params;
    const Knowledge = Namespace.Knowledge;
    const Label = Namespace.Label;


/**
 * @classdesc
 * This codelet attempts to attach labels to a Part. 
 * 
 */
 Namespace.Codelets.Labeler = class extends Namespace.Codelets.CodeletBase
 {

    // Labeler functions
    static LabelFuncs;

    /**
     * @constructor
     * 
     * @param {Number} urgency - The urgency of the codelet.
     * @param {Number} generation - The generation that the codelet belongs to.
     * @param {Array} args - Arguments to pass to the codelet.
     */
    constructor(urgency, generation, args) 
    { 
        super('labeler', urgency, generation);
        this.part = args[0];

        // Initilize the static list of labeler functions
        const Labeler = Namespace.Codelets.Labeler;
        Labeler.LabelFuncs = Labeler.LabelFuncs || [
            {name: 'Contact', func: Labeler.LabelContact}, 
            {name: 'Neighbors', func: Labeler.LabelNeighbors}, 
            {name: 'Tips', func: Labeler.LabelTips}, 
            {name: 'Curve', func: Labeler.LabelCurve}, 
            {name: 'Height', func: Labeler.LabelHeight}, 
            {name: 'Weight', func: Labeler.LabelWeight}, 
            {name: 'Shape', func: Labeler.LabelShape}, 
            {name: 'Ends', func: Labeler.LabelEnds}, 
            {name: 'Width', func: Labeler.LabelWidth}, 
            {name: 'Vertical', func: Labeler.LabelVertical}, 
            {name: 'Horizontal', func: Labeler.LabelHorizontal}
        ];
    }


    /**
     * Runs the codelet.
     */
    run(app)
    {
        // Display codelet info
        const wksp = app.workspace;
        wksp.infoBarText = 'Recognizing...';
        wksp.codeletTitleText = 'Labeler codelet from generation ' + this.gen; 
        wksp.codeletMessage1 = wksp.codeletMessage2 = '';    

        const updatedPart = wksp.getUpdatedPart(this.part); // In case the part has changed
        if (!updatedPart || updatedPart.hasLabel('**whine')) {
            wksp.codeletMessage1 = `Part ${this.part.qidString()} is no longer around ... >>>Fizzle<<<`;
        } 
        else {
            for (let i=0; i<9; i++) {
                const labelFunc = app.randGen.choice(Namespace.Codelets.Labeler.LabelFuncs);
                wksp.codeletMessage1 = `Labeling part ${updatedPart.qidString()} with type ${labelFunc.name}`;
                labelFunc.func(updatedPart, wksp.inputGridLetter.quantaIds);
            }
        }

        // Post a label-checker codelet
        app.coderack.post(1, 'label-checker', Params.MediumUrgency, this.gen+1);
    }


    /**
     * Adds a contact label, which will be one of:
     *  - 'all_over' (tips and middle), 
     *  - 't1m' (tip1 and middle), 
     *  - '2ts' (two tips, no middle), 
     *  - 't1'  (tip1 only), 
     *  - 't2'  (tip2 only), 
     *  - 'nc'  (no contact), 
     *  - 'm'   (middle only), 
     *  - 'mt2' (middle and tip2), 
     *  - '2ms' (multiple middle points).
     *  - 'c_lf' (contact on the left),
     *  - 'c_rt' (contact on the right).
     */
    static LabelContact(part, inputLetterQids) 
    {
        const qids = part.getLabel('quanta')?.data || [];
        part.addLabel( new Label('contact', Namespace.Codelets.Labeler.ContactLabelData(qids, inputLetterQids)) );
    }


    /**
     * Computes contact label data, based on the given quanta.
     */
    static ContactLabelData(partQids, inputLetterQids)
    {
        const Utils = Namespace.Utils;
        const partPids = Utils.LinearizedPointIds(partQids); // partQids is linearized
        const otherQids = inputLetterQids.filter(qid => !partQids.includes(qid)); 
        const otherPids = [ ...new Set(otherQids.flatMap(qid => Namespace.Quanta[qid].pointIds)) ]; // otherQids is not necessarily linearized

        if (Utils.GetTips(partQids).length) {
            const tip1 = otherPids.includes(partPids[0]);
            const tip2 = otherPids.includes(partPids[partPids.length-1]);
            const middle = Utils.MidQuantaTouches(partQids, otherQids) + partPids.slice(1, partPids.length-1).filter(pid => otherPids.includes(pid)).length;

            if (tip1) {
                if (middle > 0) {
                    return (tip2) ? 'all_over' : 't1m';  // Both tips and middle, or just tip1 and middle
                } else {
                    return (tip2) ? '2ts' : 't1';        // Both tips and not middle, or just tip1
                }
            } else {
                if (tip2) {
                    return (middle > 0) ? 'mt2' : 't2';  // Tip2 and middle, or just tip2
                } else {
                    return (middle === 0) ? 'nc' : (middle === 1 ) ? 'm' : '2ms';  // Nowhere, middle once, or middle more than once
                }
            }
        } 
        else {
            const touchingPids = partPids.filter(pid => otherPids.includes(pid));
            if (touchingPids.length === 0) {
                return 'nc'; // no contact
            } else {
                return (Math.max(...touchingPids) > 14) ? 'c_rt' : 'c_lf';  // contact on the right, or the left
            }
        }
    }


    /**
     * Adds a neighbors label. The label consists of 8 yes/no/equal flags, one for each of the 8 
     * cardinal directions [n, ne, e, se, s, sw, w, nw], indicating whether there is a 
     * neighboring quantum in that direction.
     */
    static LabelNeighbors(part, inputLetterQids) 
    {
        const qids = part.getLabel('quanta')?.data || [];
        const otherIds = inputLetterQids.filter(qid => !qids.includes(qid));
        const quanta = qids.map(qid => Namespace.Quanta[qid]);
        const others = otherIds.map(qid => Namespace.Quanta[qid]);
        const partPoints = quanta.map(q => q.startPoint).concat(quanta.map(q => q.endPoint));
        const otherPoints = others.map(q => q.startPoint).concat(others.map(q => q.endPoint));

        const coord = function(dir, x, y) {
            switch (dir) {
                case 'n':  return  -y;
                case 'ne': return  x-y;
                case 'e':  return  x;
                case 'se': return  x+y;
                case 's':  return  y;
                case 'sw': return -x+y;
                case 'w':  return -x;
                case 'nw': return -x-y;
            }
        };

        let nData = ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'];
        if ((qids.length > 0) && (otherIds.length > 0)) {
            nData = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'].map(dir => {
                const extPart = Math.max(...partPoints.map(p => coord(dir, p.x, p.y)));
                const extOther = Math.max(...otherPoints.map(p => coord(dir, p.x, p.y)));
                return (extOther > extPart) ? 'y' : (extOther < extPart) ? 'n' : 'eq';
            });
        }

        part.addLabel( new Label('neighborhood', nData) );
    }


    /**
     * Adds a tips label. It will have the form 
     * [ [tip0PointId, tip0Orientation], [tip1PointId, tip1Orientation] ], where 
     * each tipOrientation is one of 'n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'.
     */
    static LabelTips(part) 
    {
        const qids = part.getLabel('quanta')?.data || []; // Linearized
        const tips = Namespace.Utils.GetTips(qids);
        if (tips.length > 0) { 
            const q0 = Namespace.Quanta[qids[0]];
            let [s0, e0] = tips.includes(q0.startPointId) ? [q0.endPoint, q0.startPoint] : [q0.startPoint, q0.endPoint];
            const [dx0, dy0] = [e0.x - s0.x, e0.y - s0.y];
            const ori0 = '' + ((dy0 > 0) ? 's' : (dy0 < 0) ? 'n' : '')  + ((dx0 > 0) ? 'e' : (dx0 < 0) ? 'w' : '');

            const q1 = Namespace.Quanta[qids[qids.length-1]];
            let [s1, e1] = tips.includes(q1.startPointId) ? [q1.endPoint, q1.startPoint] : [q1.startPoint, q1.endPoint];
            const [dx1, dy1] = [e1.x - s1.x, e1.y - s1.y];
            const ori1 = '' + ((dy1 > 0) ? 's' : (dy1 < 0) ? 'n' : '')  + ((dx1 > 0) ? 'e' : (dx1 < 0) ? 'w' : '');

            const tData = [[tips[0], ori0], [tips[tips.length-1], ori1]];
            part.addLabel( new Label('tips', tData) );
        }
    }   


    /**
     * Adds curve labels. 
     * For the entire curve, as well as each of its halves, assigns a label 
     * which is one of ['straight', 'slight_right', 'square_right',
     * 'strong_right', 'slight_left', 'square_left', 'strong_left'].
     * 
     */
    static LabelCurve(part) 
    {
        const qids = part.getLabel('quanta')?.data || [];

        const L = qids.length;
        const firstHalf = qids.slice(0, Math.ceil(L/2));
        const secondHalf = qids.slice(Math.floor(L/2), L);
    
        part.addLabel( new Label('curve', Namespace.Codelets.Labeler.CurveLabelData(qids)) );
        part.addLabel( new Label('curve1', Namespace.Codelets.Labeler.CurveLabelData(firstHalf)) );
        part.addLabel( new Label('curve2', Namespace.Codelets.Labeler.CurveLabelData(secondHalf)) );
    }       


    /**
     * Computes curve label data, based on the given quanta.
     */
    static CurveLabelData(qids)
    {
        const Utils = Namespace.Utils;
        const tips = Utils.GetTips(qids);
        if (tips.length < 2) {
            return 'closure';
        } else {
            const n = Utils.PartCurvature( Utils.LinearizedPointIds(qids) );
            const result =
                ((-0.05 <= n) && (n <= 0.05)) ? 'straight' : 
                ((0.051 <= n) && (n <= 0.15)) ? 'slight_right' :
                ((0.151 <= n) && (n <= 0.251)) ? 'square_right' : 
                ((0.251 <= n) && (n <= 0.381)) ? 'strong_right' :
                ((n > 0.381)) ? 'full_right' : 
                ((-0.151 <= n) && (n <= -0.05)) ? 'slight_left' :
                ((-0.251 <= n) && (n <= -0.151)) ? 'square_left' : 
                ((-0.381 <= n) && (n <= -0.251)) ? 'strong_left' :
                ((n < -0.381)) ? 'full_left' : 
                'weird_curve';
            return result;
        }
    }
    
    
    /**
     * Adds a height label, which will be one of ['no_height', 'very_short', 
     * 'short', 'medium_ht', 'tall', 'very_tall'].
     * 
     */
    static LabelHeight(part) 
    {
        const qids = part.getLabel('quanta')?.data || []; 
        part.addLabel( Namespace.Codelets.Labeler.CreateHeightLabel(qids) );
    }   


    /**
     * Creates a height label based on the given quanta.
     */
    static CreateHeightLabel(qids) 
    {
        // Determine which rows of the letter grid are occupied by the input quanta
        let rowIds = [14, 15, 16, 32, 33, 44, 45];

        let height = 0;
        for (let r=0; r<6; r++) {
            if (rowIds.some(id => qids.includes(id))) { height += 1; }
            rowIds = rowIds.map((id, i) => {return id + ((i<3) ? 3 : 2);});
        }
        const text = (height === 0) ? 'no_height' : (height === 1) ? 'very_short' : (height === 2) ? 'short' : 
            (height === 3) ? 'medium_ht' : (height === 4) ? 'tall' : 'very_tall';

        return new Label(text, null);
    }
    
    
    /**
     * Adds a weight label, which will be one of ['zero', 'very_light', 'light', 
     * 'medium_wt', 'heavy', 'huge'].
     * 
     */
    static LabelWeight(part) 
    {
        const numQuanta = (part.getLabel('quanta')?.data || []).length;
        part.addLabel( Namespace.Codelets.Labeler.CreateWeightLabel(numQuanta) );
    }   


    /**
     * Creates a weight label based on the number of quanta.
     */
    static CreateWeightLabel(numQuanta) 
    {
        const text = (numQuanta < 1) ? 'zero' : (numQuanta <= 1.5) ? 'very_light' : (numQuanta <= 2.9) ? 'light' : 
            (numQuanta <= 5) ? 'medium_wt' : (numQuanta <= 8) ? 'heavy' : 'huge';   

        return new Label(text, null);
    }


    /**
     * Adds a shape label, which will be one of ['spiky_closure', 'closure', 
     * 'bactrian', 'cupped', 'simple'].
     * 
     */
    static LabelShape(part) 
    {
        const qids = part.getLabel('quanta')?.data || [];
        part.addLabel( new Label('shape', Namespace.Codelets.Labeler.ShapeLabelData(qids)) );
    }


    /**
     * Computes shape label data, based on the given quanta.
     */
    static ShapeLabelData(qids)
    {
        const Utils = Namespace.Utils;
        const tips = Utils.GetTips(qids);

        const closure = (tips.length < 2);
        const midqClosure = (Utils.MidQuantaTouches(qids, qids) > 0);

        if (midqClosure || (closure && (tips.length > 0))) {
            return 'spiky_closure';
        } else if (closure) {
            return 'closure';
        } 
        else 
        {
            const hasHumps = function(pids, sign=1) {
                const yVals = pids.map(pid => sign * Utils.PointIdToXYCoords(pid).y);
                const minY = Math.min(...yVals);
                for (let i=yVals.indexOf(minY)+1; i < yVals.lastIndexOf(minY); i++) {
                    if (yVals[i] > minY) { return true; }
                }
                return false;
            };

            const pids = Utils.LinearizedPointIds(qids);
            const trimLpids = pids.slice(1);
            const trimRpids = pids.slice(0, pids.length-1);

            const bactrian = (hasHumps(pids) && (hasHumps(trimLpids) || hasHumps(trimRpids))) ||
                (hasHumps(pids, -1) && (hasHumps(trimLpids, -1) || hasHumps(trimRpids, -1)));
            if (bactrian) { 
                return 'bactrian'; // to keep w from being called u
            }

            const ctips = [pids[0], pids[pids.length-1]];
            const midIds = pids.slice(1, pids.length-1);
            if (midIds.length > 0) { 
                const midMax = Math.max(...midIds.map(pid => Utils.PointIdToXYCoords(pid).y));
                const ctipsMax = Math.max(...ctips.map(pid => Utils.PointIdToXYCoords(pid).y));
                if (midMax >= ctipsMax) { 
                    return 'cupped'; // to keep w from being called v
                }
            }
            return 'simple';
        }
    }   


    /**
     * Adds an ends label. Similar to tip labels, but tagged with the ids of the 
     * edge *quanta" instead of the tip points.
     * 
     */
    static LabelEnds(part) 
    {
        const qids = part.getLabel('quanta')?.data || []; // Linearized
        const tips = Namespace.Utils.GetTips(qids);
        if (tips.length > 0) { 
            const q0 = Namespace.Quanta[qids[0]];
            let [s0, e0] = tips.includes(q0.startPointId) ? [q0.endPoint, q0.startPoint] : [q0.startPoint, q0.endPoint];
            const [dx0, dy0] = [e0.x - s0.x, e0.y - s0.y];
            const ori0 = '' + ((dy0 > 0) ? 's' : (dy0 < 0) ? 'n' : '')  + ((dx0 > 0) ? 'e' : (dx0 < 0) ? 'w' : '');

            const q1 = Namespace.Quanta[qids[qids.length-1]];
            let [s1, e1] = (q1 === q0) ? [e0, s0] : tips.includes(q1.startPointId) ? [q1.endPoint, q1.startPoint] : [q1.startPoint, q1.endPoint];
            const [dx1, dy1] = [e1.x - s1.x, e1.y - s1.y];
            const ori1 = '' + ((dy1 > 0) ? 's' : (dy1 < 0) ? 'n' : '')  + ((dx1 > 0) ? 'e' : (dx1 < 0) ? 'w' : '');

            // Return list of two sublists
            const eData = [[qids[0], ori0], [qids[qids.length-1], ori1]];
            part.addLabel( new Label('ends', eData) );
        }
    }


    /**
     * Adds a width label, one of ['skinny', 'half_wide', 'wide'].
     * 
     */
    static LabelWidth(part) 
    {
        const qids = part.getLabel('quanta')?.data || [];
        part.addLabel( Namespace.Codelets.Labeler.WidthLabelData(qids) );
    }


    /**
     * Computes width label data, based on the given quanta.
     */
    static WidthLabelData(qids) 
    {
        // Determine which columns of the letter grid are occupied by the input quanta
        const col0Ids = [0, 2, 4, 6, 8, 10, 12, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54];
        const col1Ids = [1, 3, 5, 7, 9, 11, 13, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55];

        let width = 0;
        if (col0Ids.some(id => qids.includes(id))) { width += 1; }
        if (col1Ids.some(id => qids.includes(id))) { width += 1; } 
        const text = (width === 0) ? 'skinny' : (width === 1) ? 'half_wide' : 'wide';

        return new Label(text, null);
    }


    /**
     * Adds vertical labels.
     * 
     */
    static LabelVertical(part) 
    {
        const qids = part.getLabel('quanta')?.data || [];
        const occupiedVerticalSectors = [0, 1, 2, 3, 4, 5, 6].filter(s => Knowledge.VertQuanta[s].some(v => qids.includes(v)));
        const roofLevel = Math.max(...occupiedVerticalSectors);
        const floorLevel = Math.min(...occupiedVerticalSectors);
        
        const roofLabels = ['roof_bottom', 'roof_middown', 'roof_baseline', 'roof_midline', 'roof_x_height', 'roof_t_height', 'roof_top'];
        const floorLabels = ['floor_bottom', 'floor_middown', 'floor_baseline', 'floor_midline', 'floor_x_height', 'floor_t_height', 'floor_top'];

        part.addLabel(new Label(roofLabels[roofLevel], null));
        part.addLabel(new Label(floorLabels[floorLevel], null));
    }


    /**
     * Adds horizontal labels.
     * 
     */
    static LabelHorizontal(part) 
    {
        const qids = part.getLabel('quanta')?.data || [];
        const labels = Namespace.Codelets.Labeler.CreateHorizontalLabels(qids);
        part.addLabel(labels[0]);
        part.addLabel(labels[1]);
    } 
    

    /**
     * Creates horizontal labels based on the given quanta.
     */
    static CreateHorizontalLabels(qids) 
    {
        const lf = Knowledge.LeftQuanta.some(id => qids.includes(id));
        const md = Knowledge.MiddleQuanta.some(id => qids.includes(id));
        const rt = Knowledge.RightQuanta.some(id => qids.includes(id));

        const rightEdgeText = rt ? 'r_edge_rt' : md ? 'r_edge_md' : 'r_edge_lf';
        const leftEdgeText  = lf ? 'l_edge_lf' : md ? 'l_edge_md' : 'l_edge_rt';
        
        return [new Label(rightEdgeText, null), new Label(leftEdgeText, null)];
    }
};

})( window.LetterSpirit = window.LetterSpirit || {} );







// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Params = Namespace.Params;
    const Knowledge = Namespace.Knowledge;
    const Utils = Namespace.Utils;


/**
 * @classdesc
 * This codelet picks a part at random and decides whether it's worth
 * labeling. If so, it posts some labeler codelets, otherwise it increases 
 * thw part's whine and posts a pacifier codelet.
 * 
 */
 Namespace.Codelets.Looker = class extends Namespace.Codelets.CodeletBase
 {
    /**
     * @constructor
     * 
     * @param {Number} urgency - The urgency of the codelet.
     * @param {Number} generation - The generation that the codelet belongs to.
     */
    constructor(urgency, generation) 
    { 
        super('looker', urgency, generation);
    }


    /**
     * Runs the codelet.
     */
    run(app)
    {
        const [wksp, rack] = [app.workspace, app.coderack];

        // Display codelet info
        wksp.infoBarText = 'Recognizing...';
        wksp.codeletTitleText = 'Looker codelet from generation ' + this.gen; 
        wksp.codeletMessage1 = wksp.codeletMessage2 = '';
        
        // Get a part at random, and check it's "linearizability"
        const part = app.randGen.choice(wksp.parts);
        const partIsWeird = Namespace.Codelets.Looker.IsWeird(part);
        const passes = Namespace.Codelets.Looker.InspectPart(part, wksp.inputGridLetter, app.randGen);
        
        if (partIsWeird) { 
            rack.post(1, 'breaker', Params.HighUrgency, this.gen+1, [part]); 
        }        
        if ((passes && !partIsWeird) || part.hasLabel('quanta')) 
        {
            // Mollify the whiny part, and add some labeler codelets (bound to the part) to the coderack
            if (part.hasLabel('**whine')) {
                wksp.codeletMessage1 = 'Part ' + part.qidString() + ' passed inspection. Adding labelers';
                part.removeLabel('**whine');
                part.addLabel( new Namespace.Label('quanta', Utils.Linearize(part.getQuantaIds(), app.randGen)) );
                rack.post(Params.LabelerBatchSize, 'labeler', Params.MediumUrgency, this.gen+1, [part]);
            } else {
                wksp.codeletMessage1 = 'Part ' + part.qidString() + ' is already labeled ... >>>fizzle<<<';
            }
        } 
        else {
            // Make an overlooked part more whiny
            wksp.codeletMessage1 = ('Bad part ' + part.qidString() + '... increasing whine and posting pacifier');
            const newWhine = part.getWhine() + Params.WhineIncrement;
            part.addLabel( new Namespace.Label('**whine', newWhine) );
            rack.post(1, 'pacifier', newWhine, this.gen+1);
        }    
    }

    
    /**
     * Checks whether a shape (a set of quanta) has forks, or more than 2 tips.
     *
     */
    static IsWeird(part) 
    {
        // Utility function, used below
        const neighborSortable = function(qids1, qids2) { 
            const tail1 = qids1[qids1.length - 1];
            const branches = qids2.filter(qid => Knowledge.QuantaNeighbors[tail1].includes(qid)); 
            const forkInRoad = (branches.length > 2) || ((branches.length === 2) && (qids1.length + qids2.length > 3) && 
                Knowledge.QuantaNeighbors[branches[1]].includes(branches[0]));
            if (forkInRoad) {
                return false;
            } else if (qids2.length === 0) {
                return true;
            } else {
                const head2 = branches[0];
                return neighborSortable([...qids1, head2], qids2.filter(qid => qid !== head2));
            }
        };

        const qids = part.getQuantaIds();
        const tips = Namespace.Utils.GetTips(qids);
        const startQid = (tips.length === 0) ? qids[0] : qids.find(qid => Namespace.Quanta[qid].pointIds.includes(tips[0]));
        return (tips.length > 2) ? true : !neighborSortable([startQid], qids.filter(qid => qid !== startQid));
    }


    /**
     * Decides whether a part is acceptable.
     *
     */
    static InspectPart(part, inputGridLetter, randGen) 
    {       
        return (part.numQuanta() > 2) || (part.numLabels() > 1) || 
            (4.5*(part.numLabels() + 1)/inputGridLetter.numQuanta > randGen.rand());
    }
};

})( window.LetterSpirit = window.LetterSpirit || {} );







// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Knowledge = Namespace.Knowledge;
    const Params = Namespace.Params;
    const Utils = Namespace.Utils;


/**
 * @classdesc
 * This codelet probabilistically picks a whining part and tries to either combine it
 * with a neighboring part or add labels to it.
 * 
 */
 Namespace.Codelets.Pacifier = class extends Namespace.Codelets.CodeletBase
 {
    /**
     * @constructor
     * 
     * @param {Number} urgency - The urgency of the codelet.
     * @param {Number} generation - The generation that the codelet belongs to.
     */
    constructor(urgency, generation) 
    { 
        super('pacifier', urgency, generation);
    }


    /**
     * Runs the codelet.
     */
    run(app)
    {
        const [wksp, rack, randGen, gen] = [app.workspace, app.coderack, app.randGen, this.gen];
        const [Looker, Pacifier] = [Namespace.Codelets.Looker, Namespace.Codelets.Pacifier];

        // Display codelet info
        wksp.infoBarText = 'Recognizing...';
        wksp.codeletTitleText = 'Pacifier codelet from generation ' + gen; 
        wksp.codeletMessage1 = wksp.codeletMessage2 = '';    
        
        // Get whiners
        const whiners = wksp.parts.filter(p => p.hasLabel('**whine')); 
        if (whiners.length === 0) { 
            wksp.codeletMessage1 = 'There are no whiners ... >>>fizzle<<<';
            return;
        }

        // Pick a random whiner, weighted by whininess
        const crybaby = app.randGen.weightedChoice(whiners, whiners.map(p => p.getWhine()));
        if (crybaby && Looker.IsWeird(crybaby)) {
            rack.post(1, 'breaker', Params.HighUrgency, this.gen+1, [crybaby]); 
            wksp.codeletMessage1 = 'Whiny part is weird ... >>>fizzle<<<';
            return;
        } 

        // Get a neighbor of the crybaby, preferring small ones
        const [smallNeighbor, allNeighbors] = Pacifier.GetSmallNeighbor(crybaby, wksp);
        const neighbor = smallNeighbor ? randGen.choice([smallNeighbor, randGen.choice(allNeighbors)]) : null;
        const others = allNeighbors.filter(p => p != neighbor);
        
        // Decide whether to accept (and hence silence) the crybaby, or glom it with a neighboring part
        const crybabyPasses = crybaby ? Looker.InspectPart(crybaby, wksp.inputGridLetter, app.randGen) : false;
        if (crybabyPasses || !neighbor || !Pacifier.CombinePartsAndTest(crybaby, neighbor, others, wksp)) {
            // Add labeler codelets
            wksp.codeletMessage1 = (`${crybaby.qidString()} passed, adding labelers`);
            crybaby.removeLabel('**whine');
            crybaby.addLabel( new Namespace.Label('quanta', Utils.Linearize(crybaby.getQuantaIds(), app.randGen)) );
            rack.post(Params.LabelerBatchSize, 'labeler', Params.MediumUrgency, gen+1, [crybaby]);
        } else {            
            // Successfully glommed
            wksp.codeletMessage1 = `Glomming ${crybaby.qidString()} to neighbor ${neighbor.qidString()}`; 
            wksp.codeletMessage2 = 'Adding looker codelets';
            rack.post(2, 'looker', Params.MediumUrgency, gen+1);
            Utils.Dampen(wksp);
        }
    }


    /**
     * Finds a part's smallest neighbor, with some heuristic tie-breaking.
     * Returns a list of the form [smallest, [allNeighbors]] so that procesing can 
     * continue if smallest neighbor doesn't pan out.
     */
    static GetSmallNeighbor(crybaby, wksp)
    {
        if (!crybaby) { return [null, []]; }
        
        // Get all parts that are neighbors of crybaby
        const cbQids = crybaby.getQuantaIds();
        const neighboringQids = [ ...new Set(cbQids.flatMap(qid => Knowledge.QuantaNeighbors[qid])) ].filter(qid => !cbQids.includes(qid));  
        const allNeighbors = wksp.parts.filter(p => (p != crybaby) && p.getQuantaIds().some(q => neighboringQids.includes(q)));
        if (allNeighbors.length === 0) { return [null, []]; }

        // Find a smallest neighbor
        let smallestNbr = null;
        const minPartSize = allNeighbors.reduce((a,b) => Math.min(a, b.getQuantaIds().length), Number.MAX_SAFE_INTEGER);
        const smallestNbrs = allNeighbors.filter(p => p.getQuantaIds().length === minPartSize);
        if (smallestNbrs.length === 1) {
            smallestNbr = smallestNbrs[0];
        } 
        else { // Break ties by first looking at whininess    
            smallestNbr = wksp.app.randGen.choice( smallestNbrs.filter(p => p.hasLabel('**whine')) );
            if (!smallestNbr) { // If there are no whiners, look at goodness
                const minGoodness = smallestNbrs.reduce((a,b) => Math.min(a, wksp.calcPartGoodness(b)), Number.MAX_SAFE_INTEGER);
                smallestNbr = wksp.app.randGen.choice( smallestNbrs.filter(p => wksp.calcPartGoodness(p) === minGoodness) ); 
            }
        }
        return [smallestNbr, allNeighbors];
    }


    /**
     * Tries to combine two parts into a new, non-weird one.
     * 
     */
    static CombinePartsAndTest(partA, partB, fallbacks, wksp) 
    {
        const Joint = Namespace.Joint;
        const randGen = wksp.app.randGen;

        const qidsA = partA.getQuantaIds();
        let success = false;
        let fallbackIndex = -1;

        while (fallbackIndex < fallbacks.length) {
            const toGlom = (fallbackIndex < 0) ? partB : fallbacks[fallbackIndex];
            const qidsG = toGlom.getQuantaIds();
            const newJointCandidates = [];
            qidsA.forEach(qidA => {
                qidsG.forEach(qidG => {
                    if (Knowledge.QuantaNeighbors[qidA].includes(qidG)) { newJointCandidates.push(new Joint(qidA, qidG)); }
                });
            });
            if (newJointCandidates.length > 0) {
                const newJoint = randGen.choice(newJointCandidates);
                let newJointList = [...partA.jointList, ...toGlom.jointList, newJoint];
                if (newJointList.length > 1) { // Remove former singlets
                    const newJointQids = newJointList.flatMap(jt => [jt.qidA, jt.qidB]);
                    newJointList = newJointList.filter(jt => !jt.isSinglet() ||
                        newJointQids.indexOf(jt.qidA) === newJointQids.lastIndexOf(jt.qidA) ); 
                }
                const newPart = new Namespace.Part( newJointList, [new Namespace.Label('**whine',15)] );
                
                // Accept the new part only if it is not too weird
                if (newPart.numTips() <= 2) {
                    wksp.removePart(partA);
                    wksp.removePart(toGlom);
                    wksp.parts.push(newPart);
                    success = true; 
                    break; 
                }
            }
            fallbackIndex++;
        }
        return success;
    }

};

})( window.LetterSpirit = window.LetterSpirit || {} );







// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Params = Namespace.Params;
    const Utils = Namespace.Utils;

/**
 * @classdesc
 * This codelet "shakes" the current grid letter, breaking it randomly into smaller parts.
 * 
 */
 Namespace.Codelets.Shaker = class extends Namespace.Codelets.CodeletBase
 {
    /**
     * @constructor
     * 
     * @param {Number} urgency - The urgency of the codelet.
     * @param {Number} generation - The generation that the codelet belongs to.
     */
    constructor(urgency, generation) 
    { 
        super('shaker', urgency, generation);
    }


    /**
     * Runs the codelet.
     */
    async run(app)
    {
        const [wksp, antData] = [app.workspace, app.workspace.glueAntData];

        // Display codelet info
        wksp.infoBarText = 'Shaking...';
        wksp.codeletTitleText = 'Shaker codelet from generation ' + this.gen;  
        wksp.codeletMessage1 = wksp.codeletMessage2 = '';
        app.ui?.workspaceUi.redrawHeader();

        // Initialize
        const targetNumParts = 1 + Math.round(wksp.inputGridLetter.numQuanta / Params.ShakePartSize);
        const targetNumJoints = Math.max(0, wksp.joints.length - targetNumParts);
        let dissolvedGlue = 0;
        
        // Maybe draw a shaking animation
        if (Params.AnimateShaker) { 
            app.ui?.workspaceUi.shakeGridLetter(); 
            await new Promise(r => setTimeout(function() { app.ui?.workspaceUi.stopShaking(); r(); }, 1000));
        }

        // Probabilistically dissolve glue in the joints
        while (wksp.joints.length > targetNumJoints) {
            wksp.joints.forEach(joint => { 
                if (app.randGen.coinFlip(Params.SolventStrength)) {
                    const deltaGlue = Math.min(joint.glue, 1); 
                    joint.glue -= deltaGlue; 
                    dissolvedGlue += deltaGlue;
                }     
            });
            wksp.joints = wksp.joints.filter(joint => joint.glue > 0);
        }
        wksp.codeletMessage1 = `Glue: ${antData.totalGluePlaced - dissolvedGlue}`;

        // Make parts from the connected sets of quanta
        const joints = wksp.joints.toSorted((j1, j2) => j2.qidA - j1.qidA || j2.qidB - j1.qidB);
        wksp.parts = Utils.MakePartsFromJoints(joints);
        
        // Add unbonded single quanta as "singlet" parts
        const orphans = wksp.inputGridLetter.quantaIds.filter(qid => !wksp.parts.some(part => part.hasQid(qid)));
        orphans.forEach( orphan => wksp.parts.push(new Namespace.Part( [new Namespace.Joint(orphan)] )) );

        // Set initial whine values on the parts
        wksp.parts.forEach(part => { part.addLabel(new Namespace.Label('**whine', 20)); });
        
        // Begin recognizing
        app.coderack.post(Params.GestaltBatchSize, 'gestalt', Params.InitialGestaltCodeletUrgency, 1);
        app.coderack.post(2*wksp.parts.length, 'looker', Params.MediumUrgency, 3);
    }
   
};

})( window.LetterSpirit = window.LetterSpirit || {} );







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







// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Params = Namespace.Params;
    

/**
 * @classdesc
 * This codelet spreads activation among wholes and roles. 
 * 
 */
 Namespace.Codelets.Spreader = class extends Namespace.Codelets.CodeletBase
 {
    /**
     * @constructor
     * 
     * @param {Number} urgency - The urgency of the codelet.
     * @param {Number} generation - The generation that the codelet belongs to.
     */
    constructor(urgency, generation) 
    { 
        super('spreader', urgency, generation);
    }


    /**
     * Runs the codelet.
     */
    run(app)
    {
        const [wksp, randGen]  =[app.workspace, app.randGen];

        // Display codelet info
        wksp.infoBarText = 'Recognizing...';
        wksp.codeletTitleText = 'Activation-spreader codelet from generation ' + this.gen; 
        wksp.codeletMessage1 = wksp.codeletMessage2 = '';  

        // Check whether all parts are sparked
        const allPartsSparked = wksp.parts.every(p => wksp.bindings.some(b => b.part.hasSameJointsAs(p)));
        if (allPartsSparked && (randGen.rand() <= 1/3)) {
            Namespace.Codelets.Sparker.DoSomething(randGen.choice(wksp.parts), this.gen, app);
        }

        // Calc updated role activations from their associated whole activations
        const roleActsBuffer = {};
        Object.values(Namespace.Roles).forEach(role => {
            const oldAct = wksp.roleActivations[role.name];
            const associatedWholes = Object.keys(role.norms.contact); 
            const newAct = Params.LinkWeight * Math.max(-1, ...associatedWholes.map(w => wksp.wholeActivations[w])); 
            roleActsBuffer[role.name] = Math.min(100, Math.max(-100, newAct + Math.min(40, oldAct)));
        });

        // Calc updated whole activations from their associated role activations
        const wholeActsBuffer = {};
        Object.values(Namespace.Wholes).forEach(whole => {
            const oldAct = wksp.wholeActivations[whole.name]; 
            const newAct = Params.LinkWeight * whole.roleSet.reduce((sum, r) => sum + wksp.roleActivations[r.name], 0) / whole.roleSet.length; 
            wholeActsBuffer[whole.name] = Math.min(100, Math.max(-100, newAct + Math.min(20, oldAct)));
        });

        // Transfer the buffered values to the workspace
        Object.keys(roleActsBuffer).forEach( r => wksp.roleActivations[r] = roleActsBuffer[r] ); 
        Object.keys(wholeActsBuffer).forEach( w => wksp.wholeActivations[w] = wholeActsBuffer[w] );
        
        wksp.rRoleCheckWholes();

    }
};

})( window.LetterSpirit = window.LetterSpirit || {} );







// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";


/**
 * @classdesc
 * This codelet breaks a part into smaller parts.
 * 
 */
 Namespace.Codelets.TopDownBreaker = class extends Namespace.Codelets.CodeletBase
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
        super('top-down-breaker', urgency, generation);
        this.part = args[0];
    }


    /**
     * Runs the codelet.
     */
    run(app)
    {
        // Just run a breaker codelet
        (new Namespace.Codelets.Breaker(this.urgency, this.gen, [this.part])).run(app);
        app.workspace.codeletTitleText = 'Top-down-breaker codelet from generation ' + this.gen;    
    }

};

})( window.LetterSpirit = window.LetterSpirit || {} );







// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    const Knowledge = Namespace.Knowledge;
    const Params = Namespace.Params;
    const Utils = Namespace.Utils;


/**
 * @classdesc
 * This codelet attempts to combine a part with one of its neighboring parts.
 * 
 */
 Namespace.Codelets.TopDownGlommer = class extends Namespace.Codelets.CodeletBase
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
        super('top-down-glommer', urgency, generation);
        this.part = args[0];
    }


    /**
     * Runs the codelet.
     */
    run(app)
    {
        // Display codelet info
        const wksp = app.workspace;
        wksp.infoBarText = 'Recognizing...';
        wksp.codeletTitleText = 'Top-down-glommer codelet from generation ' + this.gen; 
        wksp.codeletMessage1 = wksp.codeletMessage2 = '';    
        
        // Bail if the part is no longer around
        const part = wksp.getUpdatedPart(this.part);
        if (!part) {
            wksp.codeletMessage1 = "Part is no longer around ... >>>fizzle<<<";
            return; 
        }
        else {
            const partQids = part.getQuantaIds();
            const nbrQids = [ ...new Set(partQids.flatMap(qid => Knowledge.QuantaNeighbors[qid])) ].filter(qid => !partQids.includes(qid));  
            const nbrs = wksp.parts.filter(p => (p != part) && p.getQuantaIds().some(q => nbrQids.includes(q))); 
            const randNbr = app.randGen.choice(nbrs);
            const worst = app.randGen.weightedChoice(nbrs, nbrs.map(p => 100 - wksp.calcPartGoodness(p)));
            const nbr = app.randGen.choice([randNbr, worst]);
            
            if ((nbr !== null) && Namespace.Codelets.Pacifier.CombinePartsAndTest(part, nbr, [], wksp)) {
                wksp.codeletMessage1 = "Glomming " + part.qidString() + " to neighbor " + nbr.qidString();
                wksp.codeletMessage2 = "Adding looker codelets";
                app.coderack.post(2, 'looker', Params.MediumUrgency, this.gen+1);                
                Utils.Dampen(wksp);
            } 
            else {
                wksp.codeletMessage1 = "Nobody to glom to ... >>>fizzle<<<";
            }
        }
    }

};

})( window.LetterSpirit = window.LetterSpirit || {} );







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
        this.bkgndColor = '#fffbcc';
        this.posBlobColor = '#000070';
        this.negBlobColor = '#ff0000';
        this.titleColor = '#707070';
        
        this.mainDiv = Namespace.UiUtils.CreateElement('div', 
            'activations-div', this.parentDiv, {top:'0%', left:'0%', width:'100%', height:'100%',
            border:'1px solid black', background:this.bkgndColor}); 

        this.canvas = Namespace.UiUtils.CreateElement('canvas',
            'acts-canvas', this.parentDiv, {position:'absolute', margin:'0', 
            padding:'0', top:'0%', left:'0%', width:'100%', height:'100%', 
            border: '1px solid', background:this.bkgndColor}
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
        
        // Draw the blobs and maybe their labels
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
                ctx.clearRect(sq.x, sq.y, sq.w, sq.h);
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
                const cx = (c + 0.5) * dp.cellWidth;
                const cy = r*dp.cellHeight + dp.maxRadius + 2;
                dp.circleCoords[c][r] = {x:cx, y:cy};
                dp.squareCoords[c][r] = {x:cx-mr-1, y:cy-mr-1, w:2*mr+2, h:2*mr+2};
                dp.textCoords[c][r] = {x:cx, y:(r+1)*dp.cellHeight - dp.labelFontSize/2}; 
            }
        }
        return true;
    }

};


})( window.LetterSpirit = window.LetterSpirit || {} );








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







// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";


/**
 * @classdesc
 * This class implements a draggable dalog box.
 * 
 */
Namespace.Dialog = class 
{   
    /**
     * @constructor
     * 
     * @param {HTMLElement} [parent=document.body] - The dialog's parent element.
     * @param {Number} width - The dialog width, in percentage units
     * @param {Number} height - The dialog height, in percentage units.
     * @param {String} [title] - Text to be displayed on the dialog's title bar.
     * @param {Boolean} [modal=false] - Whether the dialog is modal. (Currently only non-modal is supported.)
     * @param {String} [bkgndColor] - The dialog's background color.
     * @param {String} [titleBarColor] - The dialog's title bar color.
     */
    constructor(parent, width, height, title, modal, bkgndColor, titleBarColor)
    {
        this.parent        = parent || document.body;
        this.width         = width;
        this.height        = height;
        this.modal         = modal; // Not supported yet
        this.mainDiv       = null;
        this.startPos      = [0,0];  
        this.mouseDownLoc  = [0,0];  
        this.dragStartFunc = this._onDragStart.bind(this);
        this.dragMoveFunc  = this._onDragMove.bind(this);
        this.dragEndFunc   = this._onDragEnd.bind(this);
        this.onOk          = null;
        this.onCancel      = null;
        this.fontFamily    = 'verdana, arial, helvetica, sans-serif';

        // Create the user interface
        this._initUi( (title || ""), (bkgndColor || 'white'), (titleBarColor || bkgndColor || 'white') );      
    }


    /**
     * Lays out the UI.
     * @private
     * 
     * @param {String} [title] - Text to be displayed in the dialog's title bar.
     * @param {String} [bkgndColor] - The dialog's background color.
     * @param {String} [titleBarColor] - The dialog's title bar color.
     * 
     */
    _initUi(title, bkgndColor, titleBarColor)
    {
        const UiUtils = Namespace.UiUtils;

        // Container div
        this.mainDiv = UiUtils.CreateElement('div', 'dialog_maindiv', this.parent); 
        UiUtils.StyleElement(this.mainDiv, {display:'none', width:
            this.width.toString() + '%', height:this.height.toString() + '%', 
            left:((100 - this.width)/2).toString() + '%', 
            top:((100 - this.height)/2).toString() + '%', 
            zIndex:'10', backgroundColor:bkgndColor,
            border:'1px solid black'} );
            
        // Titlebar 
        const titleFontSize = (.03 * this.height).toString() + 'vh';
        this.titleDiv = UiUtils.CreateElement('div', 'dialog_titlediv', this.mainDiv); 
        this.titleDiv.innerHTML = title;
        UiUtils.StyleElement(this.titleDiv, {
            width:'95%',height:'5%',
            left:'0px', top:'0px', display:'flex', alignItems:'center', justifyContent:'center',
            backgroundColor:titleBarColor, fontSize:titleFontSize, fontFamily:this.fontFamily} 
        );
        this.titleDiv.className += ' noselect';
        this.titleDiv.addEventListener( 
            (UiUtils.isTouchDevice() ? 'touchstart' : 'mousedown'), this.dragStartFunc);  

        // Close button
        this.closeDiv = UiUtils.CreateElement('div', 'dialog_closediv', this.mainDiv); 
        this.closeDiv.innerHTML = 'X';
        UiUtils.StyleElement(this.closeDiv, {
            width:'5%', height:'5%', 
            right:'0px', top:'0px', display:'flex', alignItems:'center', justifyContent:'center',
            backgroundColor:titleBarColor, fontSize:titleFontSize, fontFamily:this.fontFamily} 
        );
        this.closeDiv.className += ' noselect';
        this.closeDiv.addEventListener( (UiUtils.isTouchDevice() ? 'touchstart' : 'click'), this._onTitleBarClose.bind(this) ); 
        this.closeDiv.addEventListener('mouseover', function() { this.closeDiv.style.fontWeight = 'bold'; }.bind(this) ); 
        this.closeDiv.addEventListener('mouseout',  function() { this.closeDiv.style.fontWeight = 'normal'; }.bind(this) ); 

        // User content div
        this.userDiv = UiUtils.CreateElement('div', 'dialog_userdiv', this.mainDiv); 
        UiUtils.StyleElement(this.userDiv, {bottom:'0px', left:'0px', width:'100%', height:'95%'} ); 
    }


    /**
     * Shows the dialog.
     * 
     * @param {Function} [onOk] - Function to invoke if the dialog's OK button is clicked.
     * @param {Function} [onCancel] - Function to invoke if the dialog is cancelled.
     * 
     */
    show(onOk, onCancel)
    {
        if (onOk) { this.onOk = onOk; }
        if (onCancel) { this.onCancel = onCancel; }

        this.mainDiv.style.display = 'inline-block';  
    }


    /**
     * Hides the dialog.
     * 
     */
    hide()
    {
        this.mainDiv.style.display = 'none';  
    }


    /**
     * Indicates whether the dialog is currenty shown.
     * 
     */
    isShown()
    {
        return this.mainDiv.style.display != 'none';  
    }


    /**
     * Handler for clicks on the dismiss button. (Sub-classes can override.)
     * @private
     * 
     */
    _onTitleBarClose()
    {
        if (this.onCancel) { this.onCancel(this); }
        this.hide();  
    }


    /**
     * Handler for drag-start events.
     * @private
     * 
     * @param {Event} event - Event info.
     * 
     */
    _onDragStart(event)
    {
        const mouseLoc = this._getEventCoordinates(event);
        if ( (mouseLoc[0] !== null) && (mouseLoc[1] !== null) ) 
        { 
            event.preventDefault();
            
            const rect = this.mainDiv.getBoundingClientRect();
            this.startPos = {x:rect.left, y:rect.top};
            this.mouseDownLoc = mouseLoc;

            document.addEventListener( (Namespace.UiUtils.isTouchDevice() ? 'touchmove' : 'mousemove'), this.dragMoveFunc );  
            document.addEventListener( (Namespace.UiUtils.isTouchDevice() ? 'touchend touchcancel' : 'mouseup'), this.dragEndFunc );  
        }
    }


    /**
     * Handler for drag-move events.
     * @private
     * 
     * @param {Event} event - Event info.
     * 
     */
    _onDragMove(event)
    {
        const mouseLoc = this._getEventCoordinates(event);
        if ( (mouseLoc[0] !== null) && (mouseLoc[1] !== null) ) 
        { 
            event.preventDefault();
            const w = parseFloat(this.mainDiv.style.width);
            const pw = this.parent.clientWidth || 1024;
            const ph = this.parent.clientHeight || 1024;
            const newX = Math.max(64-w, Math.min(pw-64, this.startPos.x + mouseLoc[0]-this.mouseDownLoc[0]));
            const newY = Math.max(0,    Math.min(ph-64, this.startPos.y + mouseLoc[1]-this.mouseDownLoc[1]));
            this.mainDiv.style.left = newX.toString() + 'px';  
            this.mainDiv.style.top  = newY.toString() + 'px';  
        }
    }


    /**
     * Handler for drag-end events.
     * @private
     * 
     * @param {Event} event - Event info.
     * 
     */
    // eslint-disable-next-line no-unused-vars
    _onDragEnd(event)
    {
        document.removeEventListener( (Namespace.UiUtils.isTouchDevice() ? 'touchmove' : 'mousemove'), this.dragMoveFunc );  
        document.removeEventListener( (Namespace.UiUtils.isTouchDevice() ? 'touchend touchcancel' : 'mouseup'), this.dragEndFunc );  
    }


    /**
     * Gets the coordinates from a given event.
     * @private
     * 
     * @param {Event} event - Event info.
     * 
     */
    _getEventCoordinates(event)
    {
        // Read the event coordinates
        let cx1 = event.clientX;
        let cy1 = event.clientY;

        if ( (typeof(cx1) == 'undefined') || (typeof(cy1) == 'undefined') || (cx1 === null) || (cy1 === null) ) {
            if ( this.isTouchDevice && event.originalEvent && event.originalEvent.targetTouches ) { 
                if (event.originalEvent.targetTouches.length > 0)  {
                    cx1 = event.originalEvent.targetTouches[0].clientX;
                    cy1 = event.originalEvent.targetTouches[0].clientY;
                }
            }
        }
        if ( (typeof(cx1) == 'undefined') || (typeof(cy1) == 'undefined') ) {
            cx1 = cy1 = null;
        }
        return [cx1, cy1];
    }

};

})( window.LetterSpirit = window.LetterSpirit || {} );










// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";

/**
 * @classdesc
 * This class implements a dialog for displaying help info.
 * 
 */
Namespace.HelpDialog = class extends Namespace.Dialog
{

    /**
     * @constructor
     * 
     * @param {HTMLElement} [parent=document.body] - The dialog's parent element.
     */
    constructor(parent) 
    {
        super(parent, 65, 80, 'Examiner Help', false, '#d5bfa2', '#c09f72');
        this._buildUi();
    }


    /**
     * Builds the UI.
     * @private
     */
    _buildUi()
    {
        Namespace.UiUtils.StyleElement(this.userDiv, {overflowX:'auto', overflowY:'scroll'});

        this.textDiv = Namespace.UiUtils.CreateElement('div', 'text-div',
            this.userDiv, {left:'3%', width:'94%', height:'100%', fontSize:'20px', fontFamily:this.fontFamily}
        );

        this.textDiv.innerHTML =
        '<p></p>' + 
        '<p>This app is a JavaScript implementation of a computer model of human letter-recognition, ' +  
        'that was originally developed by Douglas Hofstadter, Gary McGraw and John Rehling ' + 
        '(<a href="https://en.wikipedia.org/wiki/Fluid_Concepts_and_Creative_Analogies" target="_blank" rel="noopener noreferrer">link</a>).</p>' + 
        
        '<p>To try it out, enter a letter in the green left-hand grid, either by pressing the <i>random</i> button or by clicking on segments in the grid.</p>' +
        '<p>Then hit the <i>play</i> button to watch the Examiner "think." ' +  '(You can also pause, single-step, reset, and adjust the speed.)</p>' +

        '<p>While running, the central work-area displays</p>' +
        '<ul>' +
            '<li> A summary of the Examiner&rsquo;s current actions, at the top</li>' +
            '<li> A tentative breakdown of the input letter into color-coded parts, on the right side</li>' +
            '<li> Descriptions for the parts, in the center' + 
        '</ul>' +
        
        '<p>The thermometer shows how satisfied the Examiner is with its current progress; lower temperatures imply greater satisfaction.</p>' +

        '<p>In the yellow <i>Activations</i> area, the Examiner&rsquo;s built-in "concepts" are shown in a grid. ' + 
        'The size of the dot over each one indicates how active that concept is at the current moment. (Red indicates negative activation.)</p>' +

        '<p>The pink <i>Coderack</i> area displays the list of subroutines or <i>codelets</i> that the Examiner ' +
        'uses to perform its work. The number of each type of codelet currently in the coderack is shown in a dynamical ' +
        'bar graph. The last-run codelet is indicated by a black triangle.</p>' +
        
        '<p>The algorithm is probabilistic, so you may get different results each time you run it on a given letter.</p>' + 

        '<p><a href="https://github.com/Paul-G2/letter-spirit-examiner-js" target="_blank" rel="noopener noreferrer">This app&rsquo;s code</a> ' + 
        'is heavily based on the original Scheme code by John Rehling, linked ' + 
        '<a href="https://github.com/Alex-Linhares/FARGonautica/tree/master#project-letter-spirit" target="_blank" rel="noopener noreferrer">here</a>.</p>';
    }

};

})( window.LetterSpirit = window.LetterSpirit || {} );












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
        this.randoBtn.style.fontSize = 0.27*dp.ygap + 'px';

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







// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    
    
/**
 * @classdesc
 * This is the top level container for the LetterSpirit UI elements.
 * 
 */
Namespace.MainUi = class {

    /**
     * @constructor
     * 
     * @param {App} app - The LetterSpirit App instance.
     */
    constructor(app) 
    { 
        this.app = app;
        this.rafId = null;

        // Create the UI elements
        this.topbarUi      = new Namespace.TopbarUi(this, document.getElementById('topbar_area'));
        this.inputUi       = new Namespace.InputUi(this, document.getElementById('input_area'));
        this.workspaceUi   = new Namespace.WorkspaceUi(this, document.getElementById('workspace_area'));
        this.activationsUi = new Namespace.ActivationsUi(this, document.getElementById('activations_area'));
        this.coderackUi    = new Namespace.CoderackUi(this, document.getElementById('coderack_area')); 

        this.uiList = [this.topbarUi, this.inputUi, this.workspaceUi, this.activationsUi, this.coderackUi];

        // Listen for resize events
        const resizeFunc = this._onResize.bind(this);
        window.addEventListener('resize', resizeFunc);
        window.addEventListener('orientationchange', resizeFunc);

        // Do an initial rendering, after the DOM settles.
        setTimeout( resizeFunc, 250 );
        setTimeout( resizeFunc, 1500 );    
    }


    /**
     * Handler for resize events.
     * @private
     *
     */
    _onResize()
    { 
        if ( this.rafId ) { window.cancelAnimationFrame(this.rafId); }

        this.rafId = window.requestAnimationFrame( () => {          
            this.uiList.forEach( ui => ui._onResize() );
            this.rafId = null;
        });
    }

    /**
     * Re-renders all the UI elements.
     * @private
     * 
     */
    redraw()
    {
        this.uiList.forEach( ui => ui.redraw() );
    }

};


})( window.LetterSpirit = window.LetterSpirit || {} );







// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    
    
/**
 * @classdesc
 * This class draws the title bar at the top of the screen.
 * 
 */
Namespace.TopbarUi = class {

    /**
     * @constructor
     * 
     * @param {MainUi} parentUi - The parent Ui.
     * @param {HTMLElement} parentDiv - The html div that hosts
     *  this ui.
     */
    constructor(parentUi, parentDiv) 
    { 
        this.parentUi = parentUi;
        this.parentDiv = parentDiv;

        this._buildUi(parentDiv);  
    }


    /**
     * Creates the ui elements.
     * @private
     * 
     */
    _buildUi()
    {
        const UiUtils = Namespace.UiUtils;

        this.mainDiv = UiUtils.CreateElement('div', 
            'topbar-div', this.parentDiv, 
            {position:'absolute', top:'0%', left:'0%', width:'100%', 
            height:'100%', background:'#bfcbdf'}
        );     
             
        // this.logoImg = UiUtils.CreateElement('img', 'logo', this.mainDiv, 
        //     {width:'auto', top:'12%', height:'76%', left:'1vh'}, {src:'./app_logo.png'}
        // );
        // this.logoImg.className += " noselect";

        this.titleSpan = UiUtils.CreateElement('span', 'title-span', 
            this.mainDiv, {top:'0%', height:'100%', left:'0%', width:'93%', 
            display:'flex', alignItems:'center', justifyContent:'center',
            color:'#404040', fontFamily:'Arial', fontWeight:'bold', 
            fontStyle:'italic', fontSize: '3.2vh'}
        ); 
        this.titleSpan.innerHTML = 'Letter Spirit Examiner';
        this.titleSpan.className += " noselect";

        this.helpBtn = UiUtils.CreateElement('button', 'help-btn',
            this.mainDiv, {top:'15%', height:'70%', right:'2%', width:'7vh',
            display:'flex', alignItems:'center', justifyContent:'center',
            color:'#404040', fontFamily:'Arial', fontWeight:'normal',
            fontSize: '2.5vh', background:'#dfdfdf', border:'1px solid #404040' }
        );
        this.helpBtn.innerHTML = '&nbsp;&nbsp;Help&nbsp;&nbsp;';
        this.helpBtn.className += " noselect";
        this.helpBtn.onclick = this._onHelpBtnClick.bind(this);

        this.helpDialog = new Namespace.HelpDialog(document.getElementById('app_area'));
    }


    /**
     * Redraws the ui.
     * @private
     * 
     */
    redraw()
    {
        // Nothing to do here
    }


    /**
     * Handler for resize events.
     * @private
     * 
     */
    _onResize()
    {    
        // Nothing to do here
    }


    /**
     * Handler for help-button clicks.
     * @private
     * 
     */
    _onHelpBtnClick()
    {    
        if (this.helpDialog.isShown()) {
            this.helpDialog.hide();
        }
        else {
            this.helpDialog.show();
        }
    }


};


})( window.LetterSpirit = window.LetterSpirit || {} );








// eslint-disable-next-line no-shadow-restricted-names, no-unused-vars, no-extra-semi
;(function(Namespace, undefined) {
    "use strict";
    
    
/**
 * @classdesc
 * This class provides several utility functions needed by the UI classes.
 * 
 */
Namespace.UiUtils = class {
    constructor() { }
};


/**
 * Creates an html element and appends it to the parent.
 *
 */
Namespace.UiUtils.CreateElement = function(type, id, parent, styles, props, omitDefaults=false) 
{
    const elem = document.createElement(type);
    elem.id = id;
    if (parent) { parent.append(elem); }

    if (styles) {
        for (let styName in styles) {
            if (Object.prototype.hasOwnProperty.call(styles, styName)) {
                let val = styles[styName];
                if (typeof val === 'number') { val = val.toString() + 'px'; }
                elem.style[styName] = val;
            }
        }
    }
    if (props) {
        for (let propName in props) {
            if (Object.prototype.hasOwnProperty.call(props, propName)) {
                elem[propName] = props[propName];
            }
        }        
    }

    // Set some default styles
    if (!omitDefaults) {
        if (!styles || !Object.prototype.hasOwnProperty.call(styles, 'position')) { elem.style.position = 'absolute'; }
        if (!styles || !Object.prototype.hasOwnProperty.call(styles, 'margin'))   { elem.style.margin = '0px'; }
        if (!styles || !Object.prototype.hasOwnProperty.call(styles, 'padding'))  { elem.style.padding = '0px'; }
    }
    
    return elem;
};


/**
 * Applies styling to an html element
 * @static
 * 
 */
Namespace.UiUtils.StyleElement = function(elem, styles, omitDefaults=false) 
{
    for (let propName in styles) {
        if (Object.prototype.hasOwnProperty.call(styles, propName)) {
            let val = styles[propName];
            if (typeof val === 'number') { val = val.toString() + 'px'; }
            elem.style[propName] = val;
        }
    }

    // Set some default styles
    if (!omitDefaults) {
        if (!Object.prototype.hasOwnProperty.call(styles, 'position')) { elem.style.position = 'absolute'; }
        if (!Object.prototype.hasOwnProperty.call(styles, 'margin'))   { elem.style.margin = '0px'; }
        if (!Object.prototype.hasOwnProperty.call(styles, 'padding'))  { elem.style.padding = '0px'; }
    }

    return elem;
};


/**
 * Tries to determine whether we're on a touch device.
 * @static
 * 
 */
Namespace.UiUtils.isTouchDevice = function()
{
    // This test is fallible, but it seems to be the best we can do.
    return ( ('ontouchstart' in document.documentElement) || window.navigator.msMaxTouchPoints );
};


/**
 * Gets the coordinates of a given event.
 * @static
 * 
 * @param {Event} e - Event info.
 * 
 */
Namespace.UiUtils.GetEventCoordinates = function(e)
{
	let [cx, cy] = [e.clientX, e.clientY];

	if ( (typeof(cx) == 'undefined') || (typeof(cy) == 'undefined') || (cx === null) || (cy === null)) {
		var evt = (e.targetTouches && e.targetTouches.length) ? e : e.originalEvent;
		if (evt && evt.targetTouches && evt.targetTouches.length) {
			[cx, cy] = [evt.targetTouches[0].clientX, evt.targetTouches[0].clientY]; 
		}
	}

	if ( (typeof(cx) == 'undefined') || (typeof(cy) == 'undefined') ) {
		cx = cy = null;
	}
	return [cx, cy];
};


/**
 * Gets the coordinates of a given event, relative to the upper-left corner of a given element.
 * @static
 * 
 * @param {Event} e - Event info.
 * 
 */
Namespace.UiUtils.GetRelativeEventCoordinates = function(e)
{
	const coords = Namespace.UiUtils.GetEventCoordinates(e);
	if ( (coords[0] === null) || (coords[1] === null) ) {
		return undefined;
	}

    const elemRect = e.target.getBoundingClientRect();
    return [coords[0] - elemRect.left, coords[1] - elemRect.top];
};



/**
 * Returns the squared distance from a point to a line segment.
 * @static
 * 
 */
Namespace.UiUtils.SquaredDistanceToLineSegment = function(pt, lineStart, lineEnd) 
{ 
    var line = [lineEnd[0] - lineStart[0], lineEnd[1] - lineStart[1]];

    var lineLengthSq = (line[0])**2 + (line[1])**2;
    if (lineLengthSq < 1e-16) {
        return (pt[0] - lineStart[0])**2 + (pt[1] - lineStart[1])**2;
    }
    
    var t = ((pt[0] - lineStart[0])*line[0] + (pt[1] - lineStart[1])*line[1]) / lineLengthSq;
    t = Math.max(0, Math.min(1, t));

    var projPt = [lineStart[0] + t*line[0], lineStart[1] + t*line[1]];
    var distSq = (pt[0] - projPt[0])**2 + (pt[1] - projPt[1])**2;

    return distSq;
};


/** 
 * Resizes a given canvas's raster to match its display size.
 *
 */
Namespace.UiUtils.RightsizeCanvas = function(canv)
{
    const clientWidth = Math.round(canv.clientWidth);
    const clientHeight = Math.round(canv.clientHeight);
    if ( (clientWidth < 1) || (clientHeight < 1) ) { return false; }

    const dpr = window.devicePixelRatio;
    const reqCanvasWidth = Math.round(dpr * clientWidth);
    const reqCanvasHeight = Math.round(dpr * clientHeight);

    if ( (canv.width != reqCanvasWidth) || 
        (canv.height != reqCanvasHeight) ) { 
            canv.width = reqCanvasWidth;  
            canv.height = reqCanvasHeight;
            canv.getContext('2d').scale(dpr, dpr);
            canv.setAttribute('width', reqCanvasWidth.toString() + 'px'); 
            canv.setAttribute('height', reqCanvasHeight.toString() + 'px'); 
    } 
    return true;
};  


/** 
 * Checks whether the canvas size has changed.
 *
 */
Namespace.UiUtils.NeedToRescale = function(drawParams, context)
{
    const dp = drawParams;

    if (!dp || !dp.canvasWidth || !dp.canvasHeight) {
        return true; 
    }
    else {
        return (context.canvas.width != dp.canvasWidth) || 
            (context.canvas.height != dp.canvasHeight);
    }
};  


/**
 * Draws a line on a canvas.
 *
 */
Namespace.UiUtils.DrawLine = function(ctx, xa, ya, xb, yb)
{
    ctx.beginPath();
    ctx.moveTo(xa, ya);
    ctx.lineTo(xb, yb);
    ctx.stroke();
};


/**
 * Draws a sequence of lines on a canvas.
 *
 */
Namespace.UiUtils.DrawLines = function(ctx, pts)
{
    if (!pts || (pts.length < 2)) { return; }
    
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (let i=1; i<pts.length; i++) {
        ctx.lineTo(pts[i].x, pts[i].y);
    }
    ctx.stroke();
};




})( window.LetterSpirit = window.LetterSpirit || {} );







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
            if (!this._updateLabelDrawParams(ctx, parts)) { return; }
        }

        // Re-draw all the graphics
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = this.bkgndColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.textAlign = "left";
        for (let i = 0; i < parts.length; i++) { 
            let j;
            const part = parts[i];
            ctx.font = dp.labelFont;
            ctx.fillStyle = this.partColors[i%this.partColors.length];
            const labels = part.labels.toSorted((a,b) => a.text.localeCompare(b.text));
            for (j=0; j<labels.length; j++) {
                ctx.fillText(labels[j].toString(), dp.textStart[0] + dp.columnSkip*i, dp.textStart[1] + dp.lineSkip*j);
            }
            if (wksp.solution) {
                const partRole = wksp.solution.guess ? '?' : (wksp.solution.partRoleMap.get(part)?.name || '?');
                ctx.font = dp.partRoleFont;
                ctx.fillText(partRole.replaceAll('_', '-'), dp.textStart[0] + dp.columnSkip*i, dp.textStart[1] + dp.lineSkip*(j+1.5)); 
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
            const partColors = this.partColors;
            ctx.lineWidth = Math.max(1, Math.round(4*dp.gridDotRadius));
            ctx.lineCap = 'round';
            parts.forEach( (part, i) => {
                ctx.strokeStyle = partColors[i % partColors.length];
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
        dp.textStart = [0.0125*cw, 0.08*ch];    
        dp.lineSkip = fontSize*1.3;    
        dp.columnSkip = fontSize*17;   
        dp.labelFont ='normal ' + fontSize.toString() + 'px Courier New';
        dp.partRoleFont ='italic bold ' + Math.round(1.5*fontSize).toString() + 'px Arial';

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








