Clazz.declarePackage ("org.jmol.render");
Clazz.load (["org.jmol.render.ShapeRenderer"], "org.jmol.render.HoverRenderer", ["org.jmol.modelset.LabelToken", "org.jmol.render.TextRenderer"], function () {
c$ = Clazz.declareType (org.jmol.render, "HoverRenderer", org.jmol.render.ShapeRenderer);
Clazz.defineMethod (c$, "render", 
function () {
if (this.viewer.isNavigating ()) return ;
var hover = this.shape;
var antialias = this.g3d.isAntialiased ();
if (hover.atomIndex >= 0) {
var atom = this.modelSet.atoms[hover.atomIndex];
var label = (hover.specialLabel != null ? hover.specialLabel : hover.atomFormats != null && hover.atomFormats[hover.atomIndex] != null ? org.jmol.modelset.LabelToken.formatLabel (this.viewer, atom, hover.atomFormats[hover.atomIndex]) : hover.labelFormat != null ? org.jmol.modelset.LabelToken.formatLabel (this.viewer, atom, this.fixLabel (atom, hover.labelFormat)) : null);
if (label == null) return ;
var text = hover.hoverText;
text.setText (label);
text.setXY (atom.screenX, atom.screenY);
org.jmol.render.TextRenderer.render (text, this.g3d, 0, antialias ? 2 : 1, false, null);
} else if (hover.text != null) {
var text = hover.hoverText;
text.setText (hover.text);
text.setXY (hover.xy.x, hover.xy.y);
org.jmol.render.TextRenderer.render (text, this.g3d, 0, antialias ? 2 : 1, false, null);
}});
Clazz.defineMethod (c$, "fixLabel", 
function (atom, label) {
if (label == null) return null;
return (this.viewer.isJmolDataFrameForModel (atom.getModelIndex ()) && label.equals ("%U") ? "%W" : label);
}, "org.jmol.modelset.Atom,~S");
});
