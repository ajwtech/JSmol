Clazz.declarePackage ("org.jmol.render");
Clazz.load (["org.jmol.render.ShapeRenderer"], "org.jmol.render.StarsRenderer", ["org.jmol.shape.Shape"], function () {
c$ = Clazz.declareType (org.jmol.render, "StarsRenderer", org.jmol.render.ShapeRenderer);
Clazz.defineMethod (c$, "render", 
function () {
var stars = this.shape;
if (stars.mads == null) return ;
var atoms = this.modelSet.atoms;
for (var i = this.modelSet.getAtomCount (); --i >= 0; ) {
var atom = atoms[i];
if (!atom.isVisible (this.myVisibilityFlag)) continue ;this.colix = org.jmol.shape.Shape.getColix (stars.colixes, i, atom);
if (!this.g3d.setColix (this.colix)) continue ;this.render1 (atom, stars.mads[i]);
}
});
Clazz.defineMethod (c$, "render1", 
function (atom, mad) {
var x = atom.screenX;
var y = atom.screenY;
var z = atom.screenZ;
var d = this.viewer.scaleToScreen (z, mad);
d -= (d & 1) ^ 1;
var r = Math.floor (d / 2);
this.g3d.drawLine (x - r, y, z, x - r + d, y, z);
this.g3d.drawLine (x, y - r, z, x, y - r + d, z);
this.g3d.drawLine (x, y, z - r, x, y, z - r + d);
}, "org.jmol.modelset.Atom,~N");
});
