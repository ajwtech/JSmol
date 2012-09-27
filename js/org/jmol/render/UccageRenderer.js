Clazz.declarePackage ("org.jmol.render");
Clazz.load (["org.jmol.render.CageRenderer", "javax.vecmath.Point3f"], "org.jmol.render.UccageRenderer", ["java.text.NumberFormat", "org.jmol.util.BoxInfo", "$.SimpleUnitCell", "$.TextFormat"], function () {
c$ = Clazz.decorateAsClass (function () {
this.nf = null;
this.fid = 0;
this.doLocalize = false;
this.verticesT = null;
this.fset0 = null;
this.cell0 = null;
this.cell1 = null;
this.offset = null;
this.offsetT = null;
Clazz.instantialize (this, arguments);
}, org.jmol.render, "UccageRenderer", org.jmol.render.CageRenderer);
Clazz.prepareFields (c$, function () {
this.verticesT =  new Array (8);
{
for (var i = 8; --i >= 0; ) {
this.verticesT[i] =  new javax.vecmath.Point3f ();
}
}this.fset0 =  new javax.vecmath.Point3f (555, 555, 1);
this.cell0 =  new javax.vecmath.Point3f ();
this.cell1 =  new javax.vecmath.Point3f ();
this.offset =  new javax.vecmath.Point3f ();
this.offsetT =  new javax.vecmath.Point3f ();
});
Clazz.overrideMethod (c$, "setEdges", 
function () {
this.tickEdges = org.jmol.util.BoxInfo.uccageTickEdges;
});
Clazz.defineMethod (c$, "initRenderer", 
function () {
Clazz.superCall (this, org.jmol.render.UccageRenderer, "initRenderer", []);
this.draw000 = false;
});
Clazz.defineMethod (c$, "render", 
function () {
this.imageFontScaling = this.viewer.getImageFontScaling ();
this.font3d = this.g3d.getFont3DScaled ((this.shape).font3d, this.imageFontScaling);
var mad = this.viewer.getObjectMad (5);
this.colix = this.viewer.getObjectColix (5);
if (mad == 0 || !this.g3d.setColix (this.colix) || this.viewer.isJmolDataFrame () || this.viewer.isNavigating () && this.viewer.getNavigationPeriodic ()) return ;
this.doLocalize = this.viewer.getUseNumberLocalization ();
this.render1 (mad);
});
Clazz.defineMethod (c$, "render1", 
function (mad) {
var unitcell = this.viewer.getCurrentUnitCell ();
if (unitcell == null) return ;
this.isPolymer = unitcell.isPolymer ();
this.isSlab = unitcell.isSlab ();
var vertices = unitcell.getUnitCellVertices ();
this.offset.set (unitcell.getCartesianOffset ());
var fset = unitcell.getUnitCellMultiplier ();
var haveMultiple = (fset != null);
if (!haveMultiple) fset = this.fset0;
org.jmol.util.SimpleUnitCell.ijkToPoint3f (Math.round (fset.x), this.cell0, 0);
org.jmol.util.SimpleUnitCell.ijkToPoint3f (Math.round (fset.y), this.cell1, 1);
var firstLine;
var allow0;
var allow1;
if (fset.z < 0) {
this.cell0.scale (-1 / fset.z);
this.cell1.scale (-1 / fset.z);
}var axisPoints = this.viewer.getAxisPoints ();
var drawAllLines = (this.viewer.getObjectMad (1) == 0 || this.viewer.getAxesScale () < 2 || axisPoints == null);
var aPoints = axisPoints;
for (var x = Math.round (this.cell0.x); x < this.cell1.x; x++) {
for (var y = Math.round (this.cell0.y); y < this.cell1.y; y++) {
for (var z = Math.round (this.cell0.z); z < this.cell1.z; z++) {
if (haveMultiple) {
this.offsetT.set (x, y, z);
this.offsetT.scale (Math.abs (fset.z));
unitcell.toCartesian (this.offsetT, true);
this.offsetT.add (this.offset);
aPoints = (x == 0 && y == 0 && z == 0 ? axisPoints : null);
firstLine = (drawAllLines || aPoints == null ? 0 : 3);
allow0 = 0xFF;
allow1 = 0xFF;
} else {
this.offsetT.set (this.offset);
firstLine = (drawAllLines ? 0 : 3);
allow0 = 0xFF;
allow1 = 0xFF;
}for (var i = 8; --i >= 0; ) this.verticesT[i].add (vertices[i], this.offsetT);

this.render (mad, this.verticesT, aPoints, firstLine, allow0, allow1, Math.abs (fset.z));
}
}
}
if (this.viewer.getDisplayCellParameters () && !this.viewer.isPreviewOnly () && !unitcell.isPeriodic ()) this.renderInfo (unitcell);
}, "~N");
Clazz.defineMethod (c$, "nfformat", 
($fz = function (x) {
return (this.doLocalize && this.nf != null ? this.nf.format (x) : org.jmol.util.TextFormat.formatDecimal (x, 3));
}, $fz.isPrivate = true, $fz), "~N");
Clazz.defineMethod (c$, "renderInfo", 
($fz = function (symmetry) {
if (this.isExport || !this.g3d.setColix (this.viewer.getColixBackgroundContrast ())) return ;
if (this.nf == null) {
this.nf = java.text.NumberFormat.getInstance ();
}this.fid = this.g3d.getFontFid ("Monospaced", 14 * this.imageFontScaling);
if (this.nf != null) {
this.nf.setMaximumFractionDigits (3);
this.nf.setMinimumFractionDigits (3);
}this.g3d.setFont (this.fid);
var lineheight = Math.round ((15 * this.imageFontScaling));
var x = Math.round ((5 * this.imageFontScaling));
var y = lineheight;
var spaceGroup = symmetry.getSpaceGroupName ();
if (this.isPolymer) spaceGroup = "polymer";
 else if (this.isSlab) spaceGroup = "slab";
if ( new Boolean (spaceGroup != null & !spaceGroup.equals ("-- [--]")).valueOf ()) {
y += lineheight;
this.g3d.drawStringNoSlab (spaceGroup, null, x, y, 0);
}y += lineheight;
this.g3d.drawStringNoSlab ("a=" + this.nfformat (symmetry.getUnitCellInfo (0)) + "\u00C5", null, x, y, 0);
if (!this.isPolymer) {
y += lineheight;
this.g3d.drawStringNoSlab ("b=" + this.nfformat (symmetry.getUnitCellInfo (1)) + "\u00C5", null, x, y, 0);
}if (!this.isPolymer && !this.isSlab) {
y += lineheight;
this.g3d.drawStringNoSlab ("c=" + this.nfformat (symmetry.getUnitCellInfo (2)) + "\u00C5", null, x, y, 0);
}if (this.nf != null) this.nf.setMaximumFractionDigits (1);
if (!this.isPolymer) {
if (!this.isSlab) {
y += lineheight;
this.g3d.drawStringNoSlab ("\u03B1=" + this.nfformat (symmetry.getUnitCellInfo (3)) + "\u00B0", null, x, y, 0);
y += lineheight;
this.g3d.drawStringNoSlab ("\u03B2=" + this.nfformat (symmetry.getUnitCellInfo (4)) + "\u00B0", null, x, y, 0);
}y += lineheight;
this.g3d.drawStringNoSlab ("\u03B3=" + this.nfformat (symmetry.getUnitCellInfo (5)) + "\u00B0", null, x, y, 0);
}}, $fz.isPrivate = true, $fz), "org.jmol.api.SymmetryInterface");
});
