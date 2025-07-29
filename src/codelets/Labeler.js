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