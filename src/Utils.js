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