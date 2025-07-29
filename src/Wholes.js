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