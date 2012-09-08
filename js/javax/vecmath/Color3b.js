Clazz.declarePackage ("javax.vecmath");
Clazz.load (["javax.vecmath.Tuple3b"], "javax.vecmath.Color3b", ["java.awt.Color"], function () {
c$ = Clazz.declareType (javax.vecmath, "Color3b", javax.vecmath.Tuple3b, java.io.Serializable);
Clazz.makeConstructor (c$, 
function (color) {
Clazz.superConstructor (this, javax.vecmath.Color3b, [color.getRed (), color.getGreen (), color.getBlue ()]);
}, "java.awt.Color");
Clazz.defineMethod (c$, "set", 
function (color) {
this.x = color.getRed ();
this.y = color.getGreen ();
this.z = color.getBlue ();
}, "java.awt.Color");
Clazz.defineMethod (c$, "get", 
function () {
var r = this.x & 0xff;
var g = this.y & 0xff;
var b = this.z & 0xff;
return  new java.awt.Color (r, g, b);
});
});
