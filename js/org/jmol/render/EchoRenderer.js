Clazz.declarePackage ("org.jmol.render");
Clazz.load (["org.jmol.render.ShapeRenderer", "javax.vecmath.Point3i"], "org.jmol.render.EchoRenderer", ["org.jmol.render.TextRenderer"], function () {
c$ = Clazz.decorateAsClass (function () {
this.imageFontScaling = 0;
this.ptAtom = null;
this.pt = null;
Clazz.instantialize (this, arguments);
}, org.jmol.render, "EchoRenderer", org.jmol.render.ShapeRenderer);
Clazz.prepareFields (c$, function () {
this.pt =  new javax.vecmath.Point3i ();
});
Clazz.defineMethod (c$, "render", 
function () {
if (this.viewer.isPreviewOnly ()) return ;
var echo = this.shape;
var e = echo.objects.values ().iterator ();
var scalePixelsPerMicron = (this.viewer.getFontScaling () ? this.viewer.getScalePixelsPerAngstrom (true) * 10000 : 0);
this.imageFontScaling = this.viewer.getImageFontScaling ();
while (e.hasNext ()) {
var t = e.next ();
if (!t.visible || t.hidden) {
continue ;}if (t.valign == 4) {
this.viewer.transformPtScr (t.xyz, this.pt);
t.setXYZs (this.pt.x, this.pt.y, this.pt.z, this.pt.z);
} else if (t.movableZPercent != 2147483647) {
var z = this.viewer.zValueFromPercent (t.movableZPercent);
t.setZs (z, z);
}org.jmol.render.TextRenderer.render (t, this.g3d, scalePixelsPerMicron, this.imageFontScaling, false, null);
}
var frameTitle = this.viewer.getFrameTitle ();
if (frameTitle != null && frameTitle.length > 0) {
if (frameTitle.indexOf ("%{") >= 0 || frameTitle.indexOf ("@{") >= 0) frameTitle = this.viewer.formatText (frameTitle);
this.renderFrameTitle (frameTitle);
}});
Clazz.defineMethod (c$, "renderFrameTitle", 
($fz = function (frameTitle) {
if (this.isExport || !this.g3d.setColix (this.viewer.getColixBackgroundContrast ())) return ;
var fid = this.g3d.getFontFidFS ("Monospaced", 14 * this.imageFontScaling);
this.g3d.setFont (fid);
var y = Math.round ((this.viewer.getScreenHeight () * (this.g3d.isAntialiased () ? 2 : 1) - 10 * this.imageFontScaling));
var x = Math.round ((5 * this.imageFontScaling));
this.g3d.drawStringNoSlab (frameTitle, null, x, y, 0);
}, $fz.isPrivate = true, $fz), "~S");
});
