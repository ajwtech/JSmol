Clazz.declarePackage ("org.jmol.rendersurface");
Clazz.load (["org.jmol.rendersurface.IsosurfaceRenderer"], "org.jmol.rendersurface.MolecularOrbitalRenderer", ["java.text.NumberFormat"], function () {
c$ = Clazz.decorateAsClass (function () {
this.nf = null;
Clazz.instantialize (this, arguments);
}, org.jmol.rendersurface, "MolecularOrbitalRenderer", org.jmol.rendersurface.IsosurfaceRenderer);
Clazz.defineMethod (c$, "render", 
function () {
this.imageFontScaling = this.viewer.getImageFontScaling ();
Clazz.superCall (this, org.jmol.rendersurface.MolecularOrbitalRenderer, "render", []);
});
Clazz.overrideMethod (c$, "renderInfo", 
function () {
if (this.viewer.getCurrentModelIndex () < 0 || this.mesh.title == null || !this.g3d.setColix (this.viewer.getColixBackgroundContrast ())) return ;
if (this.nf == null) this.nf = java.text.NumberFormat.getInstance ();
if (this.nf != null) {
this.nf.setMaximumFractionDigits (3);
this.nf.setMinimumFractionDigits (3);
}var fid = this.g3d.getFontFid ("Monospaced", 14 * this.imageFontScaling);
this.g3d.setFont (fid);
var lineheight = Math.round ((15 * this.imageFontScaling));
var x = Math.round ((5 * this.imageFontScaling));
var y = lineheight;
for (var i = 0; i < this.mesh.title.length; i++) if (this.mesh.title[i].length > 0) {
this.g3d.drawStringNoSlab (this.mesh.title[i], null, x, y, 0);
y += lineheight;
}
});
});
