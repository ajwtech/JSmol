Clazz.declarePackage ("org.jmol.util");
Clazz.load (null, "org.jmol.util.Rgb16", ["java.lang.StringBuffer"], function () {
c$ = Clazz.decorateAsClass (function () {
this.rScaled = 0;
this.gScaled = 0;
this.bScaled = 0;
Clazz.instantialize (this, arguments);
}, org.jmol.util, "Rgb16");
Clazz.makeConstructor (c$, 
function () {
});
c$.newI = Clazz.defineMethod (c$, "newI", 
function (argb) {
var c =  new org.jmol.util.Rgb16 ();
c.setInt (argb);
return c;
}, "~N");
Clazz.defineMethod (c$, "setInt", 
function (argb) {
this.rScaled = ((argb >> 8) & 0xFF00) | 0x80;
this.gScaled = ((argb) & 0xFF00) | 0x80;
this.bScaled = ((argb << 8) & 0xFF00) | 0x80;
}, "~N");
Clazz.defineMethod (c$, "setRgb", 
function (other) {
this.rScaled = other.rScaled;
this.gScaled = other.gScaled;
this.bScaled = other.bScaled;
}, "org.jmol.util.Rgb16");
Clazz.defineMethod (c$, "diffDiv", 
function (rgb16A, rgb16B, divisor) {
this.rScaled = Math.floor ((rgb16A.rScaled - rgb16B.rScaled) / divisor);
this.gScaled = Math.floor ((rgb16A.gScaled - rgb16B.gScaled) / divisor);
this.bScaled = Math.floor ((rgb16A.bScaled - rgb16B.bScaled) / divisor);
}, "org.jmol.util.Rgb16,org.jmol.util.Rgb16,~N");
Clazz.defineMethod (c$, "setAndIncrement", 
function (base, other) {
this.rScaled = base.rScaled;
base.rScaled += other.rScaled;
this.gScaled = base.gScaled;
base.gScaled += other.gScaled;
this.bScaled = base.bScaled;
base.bScaled += other.bScaled;
}, "org.jmol.util.Rgb16,org.jmol.util.Rgb16");
Clazz.defineMethod (c$, "getArgb", 
function () {
return (0xFF000000 | ((this.rScaled << 8) & 0x00FF0000) | (this.gScaled & 0x0000FF00) | (this.bScaled >> 8));
});
Clazz.overrideMethod (c$, "toString", 
function () {
return ( new StringBuffer ("Rgb16(")).append (this.rScaled).append (',').append (this.gScaled).append (',').append (this.bScaled).append (" -> ").append ((this.rScaled >> 8) & 0xFF).append (',').append ((this.gScaled >> 8) & 0xFF).append (',').append ((this.bScaled >> 8) & 0xFF).append (')').toString ();
});
});
