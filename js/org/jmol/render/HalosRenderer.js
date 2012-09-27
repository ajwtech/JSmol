Clazz.declarePackage ("org.jmol.render");
Clazz.load (["org.jmol.render.ShapeRenderer"], "org.jmol.render.HalosRenderer", ["org.jmol.util.Colix"], function () {
c$ = Clazz.decorateAsClass (function () {
this.isAntialiased = false;
Clazz.instantialize (this, arguments);
}, org.jmol.render, "HalosRenderer", org.jmol.render.ShapeRenderer);
Clazz.defineMethod (c$, "render", 
function () {
var halos = this.shape;
var selectDisplayTrue = this.viewer.getSelectionHaloEnabled (true);
var showHiddenSelections = (selectDisplayTrue && this.viewer.getShowHiddenSelectionHalos ());
if (halos.mads == null && halos.bsHighlight == null && !selectDisplayTrue) return ;
this.isAntialiased = this.g3d.isAntialiased ();
var atoms = this.modelSet.atoms;
var bsSelected = (selectDisplayTrue ? this.viewer.getSelectionSet (false) : null);
for (var i = this.modelSet.getAtomCount (); --i >= 0; ) {
var atom = atoms[i];
if ((atom.getShapeVisibilityFlags () & 1) == 0) continue ;var isHidden = this.modelSet.isAtomHidden (i);
this.mad = (halos.mads == null ? 0 : halos.mads[i]);
this.colix = (halos.colixes == null || i >= halos.colixes.length ? 0 : halos.colixes[i]);
if (selectDisplayTrue && bsSelected.get (i)) {
if (isHidden && !showHiddenSelections) continue ;if (this.mad == 0) this.mad = -1;
if (this.colix == 0) this.colix = halos.colixSelection;
if (this.colix == 2) this.colix = 23;
 else if (this.colix == 0) this.colix = org.jmol.util.Colix.getColixInherited (this.colix, atom.getColix ());
} else if (isHidden) {
continue ;} else {
this.colix = org.jmol.util.Colix.getColixInherited (this.colix, atom.getColix ());
}if (this.mad != 0) this.render1 (atom);
if (!isHidden && halos.bsHighlight != null && halos.bsHighlight.get (i)) {
this.mad = -2;
this.colix = halos.colixHighlight;
this.render1 (atom);
}}
});
Clazz.defineMethod (c$, "render1", 
function (atom) {
var colixFill = (this.mad == -2 ? 0 : org.jmol.util.Colix.getColixTranslucent (this.colix, true, 0.5));
var z = atom.screenZ;
var diameter = this.mad;
if (diameter < 0) {
diameter = atom.screenDiameter;
if (diameter == 0) {
var ellipsemax = atom.getADPMinMax (true);
if (ellipsemax > 0) diameter = this.viewer.scaleToScreen (z, Math.round ((ellipsemax * 2000)));
if (diameter == 0) {
diameter = this.viewer.scaleToScreen (z, this.mad == -2 ? 250 : 500);
}}} else {
diameter = this.viewer.scaleToScreen (z, this.mad);
}var d = diameter;
if (this.isAntialiased) d /= 2;
var more = (d / 2);
if (this.mad == -2) more /= 2;
if (more < 8) more = 8;
if (more > 20) more = 20;
d += more;
if (this.isAntialiased) d *= 2;
if (d < 1) return ;
this.g3d.drawFilledCircle (this.colix, colixFill, Math.round (d), atom.screenX, atom.screenY, atom.screenZ);
}, "org.jmol.modelset.Atom");
});
