Clazz.declarePackage ("org.jmol.renderspecial");
Clazz.load (["org.jmol.render.ShapeRenderer"], "org.jmol.renderspecial.PolyhedraRenderer", ["javax.vecmath.Point3i", "org.jmol.util.Colix"], function () {
c$ = Clazz.decorateAsClass (function () {
this.drawEdges = 0;
this.isAll = false;
this.frontOnly = false;
Clazz.instantialize (this, arguments);
}, org.jmol.renderspecial, "PolyhedraRenderer", org.jmol.render.ShapeRenderer);
Clazz.defineMethod (c$, "render", 
function () {
var polyhedra = this.shape;
var polyhedrons = polyhedra.polyhedrons;
this.drawEdges = polyhedra.drawEdges;
var colixes = polyhedra.colixes;
var screens = null;
for (var i = polyhedra.polyhedronCount; --i >= 0; ) {
var iAtom = polyhedrons[i].centralAtom.getIndex ();
var colix = (colixes == null || iAtom >= colixes.length ? 0 : polyhedra.colixes[iAtom]);
screens = this.render1 (polyhedrons[i], colix, screens);
}
});
Clazz.defineMethod (c$, "render1", 
($fz = function (p, colix, screens) {
if (p.visibilityFlags == 0) return screens;
colix = org.jmol.util.Colix.getColixInherited (colix, p.centralAtom.getColix ());
var vertices = p.vertices;
var planes;
if (screens == null || screens.length < vertices.length) {
screens =  new Array (vertices.length);
for (var i = vertices.length; --i >= 0; ) screens[i] =  new javax.vecmath.Point3i ();

}planes = p.planes;
for (var i = vertices.length; --i >= 0; ) {
var atom = (Clazz.instanceOf (vertices[i], org.jmol.modelset.Atom) ? vertices[i] : null);
if (atom == null) this.viewer.transformPtScr (vertices[i], screens[i]);
 else screens[i].set (atom.screenX, atom.screenY, atom.screenZ);
}
this.isAll = (this.drawEdges == 1);
this.frontOnly = (this.drawEdges == 2);
if (this.g3d.setColix (colix)) for (var i = 0, j = 0; j < planes.length; ) this.fillFace (p.normixes[i++], screens[planes[j++]], screens[planes[j++]], screens[planes[j++]]);

if (this.g3d.setColix (org.jmol.util.Colix.getColixTranslucent (colix, false, 0))) for (var i = 0, j = 0; j < planes.length; ) this.drawFace (p.normixes[i++], screens[planes[j++]], screens[planes[j++]], screens[planes[j++]]);

return screens;
}, $fz.isPrivate = true, $fz), "org.jmol.shapespecial.Polyhedra.Polyhedron,~N,~A");
Clazz.defineMethod (c$, "drawFace", 
($fz = function (normix, A, B, C) {
if (this.isAll || this.frontOnly && this.g3d.isDirectedTowardsCamera (normix)) {
this.drawCylinderTriangle (A.x, A.y, A.z, B.x, B.y, B.z, C.x, C.y, C.z);
}}, $fz.isPrivate = true, $fz), "~N,javax.vecmath.Point3i,javax.vecmath.Point3i,javax.vecmath.Point3i");
Clazz.defineMethod (c$, "drawCylinderTriangle", 
($fz = function (xA, yA, zA, xB, yB, zB, xC, yC, zC) {
this.g3d.fillCylinderScreen (3, 3, xA, yA, zA, xB, yB, zB);
this.g3d.fillCylinderScreen (3, 3, xB, yB, zB, xC, yC, zC);
this.g3d.fillCylinderScreen (3, 3, xA, yA, zA, xC, yC, zC);
}, $fz.isPrivate = true, $fz), "~N,~N,~N,~N,~N,~N,~N,~N,~N");
Clazz.defineMethod (c$, "fillFace", 
($fz = function (normix, A, B, C) {
this.g3d.fillTriangleTwoSided (normix, A.x, A.y, A.z, B.x, B.y, B.z, C.x, C.y, C.z);
}, $fz.isPrivate = true, $fz), "~N,javax.vecmath.Point3i,javax.vecmath.Point3i,javax.vecmath.Point3i");
});
