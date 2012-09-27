Clazz.declarePackage ("org.jmol.render");
Clazz.load (["org.jmol.render.FontLineShapeRenderer", "javax.vecmath.Point3f"], "org.jmol.render.AxesRenderer", ["org.jmol.constant.EnumAxesMode", "org.jmol.util.Point3fi"], function () {
c$ = Clazz.decorateAsClass (function () {
this.screens = null;
this.originScreen = null;
this.colixes = null;
Clazz.instantialize (this, arguments);
}, org.jmol.render, "AxesRenderer", org.jmol.render.FontLineShapeRenderer);
Clazz.prepareFields (c$, function () {
this.screens =  new Array (6);
{
for (var i = 6; --i >= 0; ) this.screens[i] =  new javax.vecmath.Point3f ();

}this.originScreen =  new javax.vecmath.Point3f ();
this.colixes =  Clazz.newArray (3, 0);
});
Clazz.overrideMethod (c$, "initRenderer", 
function () {
this.endcap = 2;
this.draw000 = false;
});
Clazz.defineMethod (c$, "render", 
function () {
var axes = this.shape;
var mad = this.viewer.getObjectMad (1);
if (mad == 0 || !this.g3d.checkTranslucent (false)) return ;
var isXY = (axes.axisXY.z != 0);
if (!isXY && this.viewer.isNavigating () && this.viewer.getNavigationPeriodic ()) return ;
var axesMode = this.viewer.getAxesMode ();
this.imageFontScaling = this.viewer.getImageFontScaling ();
if (this.viewer.areAxesTainted ()) {
var f = axes.font3d;
axes.initShape ();
if (f != null) axes.font3d = f;
}this.font3d = this.g3d.getFont3DScaled (axes.font3d, this.imageFontScaling);
var cellInfos = this.modelSet.getCellInfos ();
var modelIndex = this.viewer.getCurrentModelIndex ();
var isUnitCell = (axesMode === org.jmol.constant.EnumAxesMode.UNITCELL);
if (this.viewer.isJmolDataFrameForModel (modelIndex) && !this.viewer.getModelSet ().getJmolFrameType (modelIndex).equals ("plot data") || isUnitCell && modelIndex < 0) return ;
var nPoints = 6;
var labelPtr = 0;
if (isUnitCell && cellInfos != null) {
nPoints = 3;
labelPtr = 6;
} else if (isXY) {
nPoints = 3;
labelPtr = 9;
} else if (axesMode === org.jmol.constant.EnumAxesMode.BOUNDBOX) {
nPoints = 6;
labelPtr = (this.viewer.getAxesOrientationRasmol () ? 15 : 9);
}if (axes.labels != null) {
if (nPoints != 3) nPoints = axes.labels.length;
labelPtr = -1;
}var isDataFrame = this.viewer.isJmolDataFrame ();
var slab = this.g3d.getSlab ();
var diameter = mad;
var drawTicks = false;
if (isXY) {
if (this.exportType == 1) return ;
if (mad >= 20) {
diameter = (mad > 500 ? 5 : Math.floor (mad / 100));
if (diameter == 0) diameter = 2;
} else {
if (this.g3d.isAntialiased ()) diameter += diameter;
}this.g3d.setSlab (0);
this.pt0.set (this.viewer.transformPt (axes.axisXY));
this.originScreen.set (this.pt0.x, this.pt0.y, this.pt0.z);
var zoomDimension = this.viewer.getScreenDim ();
var scaleFactor = zoomDimension / 10 * axes.scale;
if (this.g3d.isAntialiased ()) scaleFactor *= 2;
for (var i = 0; i < 3; i++) {
this.viewer.rotatePoint (axes.getAxisPoint (i, false), this.screens[i]);
this.screens[i].z *= -1;
this.screens[i].scaleAdd (scaleFactor, this.screens[i], this.originScreen);
}
} else {
drawTicks = (axes.tickInfos != null);
if (drawTicks) {
if (this.atomA == null) {
this.atomA =  new org.jmol.util.Point3fi ();
this.atomB =  new org.jmol.util.Point3fi ();
}this.atomA.set (axes.getOriginPoint (isDataFrame));
}this.viewer.transformPtNoClip (axes.getOriginPoint (isDataFrame), this.originScreen);
diameter = this.getDiameter (Math.round (this.originScreen.z), mad);
for (var i = nPoints; --i >= 0; ) this.viewer.transformPtNoClip (axes.getAxisPoint (i, isDataFrame), this.screens[i]);

}var xCenter = this.originScreen.x;
var yCenter = this.originScreen.y;
this.colixes[0] = this.viewer.getObjectColix (1);
this.colixes[1] = this.viewer.getObjectColix (2);
this.colixes[2] = this.viewer.getObjectColix (3);
for (var i = nPoints; --i >= 0; ) {
this.colix = this.colixes[i % 3];
this.g3d.setColix (this.colix);
var label = (axes.labels == null ? org.jmol.render.AxesRenderer.axisLabels[i + labelPtr] : i < axes.labels.length ? axes.labels[i] : null);
if (label != null && label.length > 0) this.renderLabel (label, this.screens[i].x, this.screens[i].y, this.screens[i].z, xCenter, yCenter);
if (drawTicks) {
this.tickInfo = axes.tickInfos[(i % 3) + 1];
if (this.tickInfo == null) this.tickInfo = axes.tickInfos[0];
this.atomB.set (axes.getAxisPoint (i, isDataFrame));
if (this.tickInfo != null) {
this.tickInfo.first = 0;
this.tickInfo.signFactor = (i % 6 >= 3 ? -1 : 1);
}}this.renderLine (this.originScreen, this.screens[i], diameter, this.pt0, this.pt1, drawTicks && this.tickInfo != null);
}
if (nPoints == 3 && !isXY) {
this.colix = this.viewer.getColixBackgroundContrast ();
this.g3d.setColix (this.colix);
this.renderLabel ("0", this.originScreen.x, this.originScreen.y, this.originScreen.z, xCenter, yCenter);
}if (isXY) this.g3d.setSlab (slab);
});
Clazz.defineMethod (c$, "renderLabel", 
($fz = function (str, x, y, z, xCenter, yCenter) {
var strAscent = this.font3d.getAscent ();
var strWidth = this.font3d.stringWidth (str);
var dx = x - xCenter;
var dy = y - yCenter;
if ((dx != 0 || dy != 0)) {
var dist = Math.sqrt (dx * dx + dy * dy);
dx = (strWidth * 0.75 * dx / dist);
dy = (strAscent * 0.75 * dy / dist);
x += dx;
y += dy;
}var xStrBaseline = x - Math.floor (strWidth / 2);
var yStrBaseline = y + Math.floor (strAscent / 2);
this.g3d.drawString (str, this.font3d, Math.round (xStrBaseline), Math.round (yStrBaseline), Math.round (z), Math.round (z));
}, $fz.isPrivate = true, $fz), "~S,~N,~N,~N,~N,~N");
Clazz.defineStatics (c$,
"axisLabels", ["+X", "+Y", "+Z", null, null, null, "a", "b", "c", "X", "Y", "Z", null, null, null, "X", null, "Z", null, "(Y)", null]);
});
