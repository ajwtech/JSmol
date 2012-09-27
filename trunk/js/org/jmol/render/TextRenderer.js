Clazz.declarePackage ("org.jmol.render");
Clazz.load (null, "org.jmol.render.TextRenderer", ["org.jmol.shape.Text"], function () {
c$ = Clazz.declareType (org.jmol.render, "TextRenderer");
c$.render = Clazz.defineMethod (c$, "render", 
function (text, g3d, scalePixelsPerMicron, imageFontScaling, isExact, boxXY) {
if (text == null) return ;
text.setPosition (g3d.getRenderWidth (), g3d.getRenderHeight (), scalePixelsPerMicron, imageFontScaling, isExact, boxXY);
if (text.image == null && text.bgcolix != 0 && g3d.setColix (text.bgcolix)) org.jmol.render.TextRenderer.showBox (g3d, text.colix, Math.round (text.boxX), Math.round (text.boxY), text.z + 2, text.zSlab, Math.round (text.boxWidth), Math.round (text.boxHeight), text.fontScale, text.isLabelOrHover);
if (g3d.setColix (text.colix)) {
if (text.image != null) {
g3d.drawImage (text.image, Math.round (text.boxX), Math.round (text.boxY), text.z, text.zSlab, text.bgcolix, Math.round (text.boxWidth), Math.round (text.boxHeight));
} else if (text.lines != null) {
var xy =  Clazz.newArray (3, 0);
for (var i = 0; i < text.lines.length; i++) {
text.setXY (xy, i);
g3d.drawString (text.lines[i], text.font, Math.round (xy[0]), Math.round (xy[1]), text.z, text.zSlab);
}
}}org.jmol.render.TextRenderer.drawPointer (text, g3d);
}, "org.jmol.shape.Text,org.jmol.api.JmolRendererInterface,~N,~N,~B,~A");
c$.drawPointer = Clazz.defineMethod (c$, "drawPointer", 
function (text, g3d) {
if ((text.pointer & 1) != 0) {
if (!g3d.setColix ((text.pointer & 2) != 0 && text.bgcolix != 0 ? text.bgcolix : text.colix)) return ;
if (text.boxX > text.movableX) g3d.drawLine (text.movableX, text.movableY, text.zSlab, Math.round (text.boxX), Math.round ((text.boxY + text.boxHeight / 2)), text.zSlab);
 else if (text.boxX + text.boxWidth < text.movableX) g3d.drawLine (text.movableX, text.movableY, text.zSlab, Math.round ((text.boxX + text.boxWidth)), Math.round ((text.boxY + text.boxHeight / 2)), text.zSlab);
}}, "org.jmol.shape.Text,org.jmol.api.JmolRendererInterface");
c$.showBox = Clazz.defineMethod (c$, "showBox", 
($fz = function (g3d, colix, x, y, z, zSlab, boxWidth, boxHeight, imageFontScaling, atomBased) {
g3d.fillRect (x, y, z, zSlab, boxWidth, boxHeight);
g3d.setColix (colix);
if (!atomBased) return ;
if (imageFontScaling >= 2) {
g3d.drawRect (x + 3, y + 3, z - 1, zSlab, boxWidth - 6, boxHeight - 6);
g3d.drawRect (x + 4, y + 4, z - 1, zSlab, boxWidth - 8, boxHeight - 8);
} else {
g3d.drawRect (x + 1, y + 1, z - 1, zSlab, boxWidth - 2, boxHeight - 2);
}}, $fz.isPrivate = true, $fz), "org.jmol.api.JmolRendererInterface,~N,~N,~N,~N,~N,~N,~N,~N,~B");
c$.renderSimpleLabel = Clazz.defineMethod (c$, "renderSimpleLabel", 
function (g3d, font, strLabel, colix, bgcolix, boxXY, z, zSlab, xOffset, yOffset, ascent, descent, doPointer, pointerColix, isExact) {
var boxWidth = font.stringWidth (strLabel) + 8;
var boxHeight = ascent + descent + 8;
var x0 = Math.round (boxXY[0]);
var y0 = Math.round (boxXY[1]);
org.jmol.shape.Text.setBoxXY (boxWidth, boxHeight, xOffset, yOffset, boxXY, isExact);
var x = boxXY[0];
var y = boxXY[1];
if (bgcolix != 0 && g3d.setColix (bgcolix)) org.jmol.render.TextRenderer.showBox (g3d, colix, Math.round (x), Math.round (y), z, zSlab, Math.round (boxWidth), Math.round (boxHeight), 1, true);
 else g3d.setColix (colix);
g3d.drawString (strLabel, font, Math.round ((x + 4)), Math.round ((y + 4 + ascent)), z - 1, zSlab);
if (doPointer) {
g3d.setColix (pointerColix);
if (xOffset > 0) g3d.drawLine (x0, y0, zSlab, Math.round (x), Math.round ((y + boxHeight / 2)), zSlab);
 else if (xOffset < 0) g3d.drawLine (x0, y0, zSlab, Math.round ((x + boxWidth)), Math.round ((y + boxHeight / 2)), zSlab);
}}, "org.jmol.api.JmolRendererInterface,org.jmol.util.JmolFont,~S,~N,~N,~A,~N,~N,~N,~N,~N,~N,~B,~N,~B");
});
