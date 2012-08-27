Clazz.declarePackage ("org.jmol.g3d");
c$ = Clazz.decorateAsClass (function () {
this.fid = 0;
this.fontFace = null;
this.fontStyle = null;
this.fontSizeNominal = 0;
this.idFontFace = 0;
this.idFontStyle = 0;
this.fontSize = 0;
this.font = null;
this.fontMetrics = null;
this.apiPlatform = null;
Clazz.instantialize (this, arguments);
}, org.jmol.g3d, "Font3D");
c$.getFontFaceID = Clazz.defineMethod (c$, "getFontFaceID", 
function (fontface) {
if ("Monospaced".equalsIgnoreCase (fontface)) return 2;
if ("Serif".equalsIgnoreCase (fontface)) return 1;
return 0;
}, "~S");
c$.getFontStyleID = Clazz.defineMethod (c$, "getFontStyleID", 
function (fontstyle) {
for (var i = 4; --i >= 0; ) if (org.jmol.g3d.Font3D.fontStyles[i].equalsIgnoreCase (fontstyle)) return i;

return -1;
}, "~S");
c$.getFont3D = Clazz.defineMethod (c$, "getFont3D", 
function (fontID) {
return org.jmol.g3d.Font3D.font3ds[fontID & 0xFF];
}, "~N");
Clazz.defineMethod (c$, "getAscent", 
function () {
return this.apiPlatform.getFontAscent (this.fontMetrics);
});
Clazz.defineMethod (c$, "getDescent", 
function () {
return this.apiPlatform.getFontDescent (this.fontMetrics);
});
Clazz.defineMethod (c$, "getHeight", 
function () {
return this.getAscent () + this.getDescent ();
});
Clazz.defineMethod (c$, "stringWidth", 
function (text) {
return this.apiPlatform.fontStringWidth (this.fontMetrics, text);
}, "~S");
Clazz.defineStatics (c$,
"FONT_ALLOCATION_UNIT", 8);
c$.font3ds = c$.prototype.font3ds =  new Array (8);
Clazz.defineStatics (c$,
"FONT_FACE_SANS", 0,
"FONT_FACE_SERIF", 1,
"FONT_FACE_MONO", 2,
"fontFaces", ["SansSerif", "Serif", "Monospaced", ""],
"FONT_STYLE_PLAIN", 0,
"FONT_STYLE_BOLD", 1,
"FONT_STYLE_ITALIC", 2,
"FONT_STYLE_BOLDITALIC", 3,
"fontStyles", ["Plain", "Bold", "Italic", "BoldItalic"]);
