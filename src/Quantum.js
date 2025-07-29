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