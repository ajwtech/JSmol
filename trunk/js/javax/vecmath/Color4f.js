Clazz.declarePackage ("javax.vecmath");
Clazz.load (["javax.vecmath.Tuple4f"], "javax.vecmath.Color4f", ["java.awt.Color"], function () {
c$ = Clazz.declareType (javax.vecmath, "Color4f", javax.vecmath.Tuple4f, java.io.Serializable);
Clazz.makeConstructor (c$, 
function (color) {
Clazz.superConstructor (this, javax.vecmath.Color4f, [color.getRed () / 255.0, color.getGreen () / 255.0, color.getBlue () / 255.0, color.getAlpha () / 255.0]);
}, "java.awt.Color");
Clazz.defineMethod (c$, "set", 
function (color) {
this.x = color.getRed () / 255.0;
this.y = color.getGreen () / 255.0;
this.z = color.getBlue () / 255.0;
this.w = color.getAlpha () / 255.0;
}, "java.awt.Color");
Clazz.defineMethod (c$, "get", 
function () {
var r = Math.round (this.x * 255.0);
var g = Math.round (this.y * 255.0);
var b = Math.round (this.z * 255.0);
var a = Math.round (this.w * 255.0);
return  new java.awt.Color (r, g, b, a);
});
});
