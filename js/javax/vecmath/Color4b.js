Clazz.declarePackage ("javax.vecmath");
Clazz.load (["javax.vecmath.Tuple4b"], "javax.vecmath.Color4b", ["java.awt.Color"], function () {
c$ = Clazz.declareType (javax.vecmath, "Color4b", javax.vecmath.Tuple4b, java.io.Serializable);
Clazz.makeConstructor (c$, 
function (color) {
Clazz.superConstructor (this, javax.vecmath.Color4b, [color.getRed (), color.getGreen (), color.getBlue (), color.getAlpha ()]);
}, "java.awt.Color");
Clazz.defineMethod (c$, "set", 
function (color) {
this.x = color.getRed ();
this.y = color.getGreen ();
this.z = color.getBlue ();
this.w = color.getAlpha ();
}, "java.awt.Color");
Clazz.defineMethod (c$, "get", 
function () {
var r = this.x & 0xff;
var g = this.y & 0xff;
var b = this.z & 0xff;
var a = this.w & 0xff;
return  new java.awt.Color (r, g, b, a);
});
});
