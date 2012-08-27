Clazz.declarePackage ("org.jsmol.test");
Clazz.load (["java.util.BitSet", "javax.vecmath.Point3f"], "org.jsmol.test.JSmol", ["org.jsmol.test.EnumTest"], function () {
c$ = Clazz.decorateAsClass (function () {
this.testing = 22;
Clazz.instantialize (this, arguments);
}, org.jsmol.test, "JSmol");
Clazz.makeConstructor (c$, 
function () {
this.sayHello ("JSmol contstructor");
this.testEnum ();
this.sayHello ("OK-JSmol");
});
Clazz.defineMethod (c$, "testStatic", 
function () {
this.sayHello ("testing = " + this.testing + " pt = " + org.jsmol.test.JSmol.pt + " bs = " + org.jsmol.test.JSmol.bs);
org.jsmol.test.JSmol.bs.clear (5);
org.jsmol.test.JSmol.bs.set (11);
});
Clazz.defineMethod (c$, "testEnum", 
($fz = function () {
this.sayHello (" EnumTest.ONCE = " + org.jsmol.test.EnumTest.ONCE);
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "sayHello", 
function (s) {
{
alert("Hello, JavaScript -- " + s);
}}, "~S");
c$.bs = c$.prototype.bs =  new java.util.BitSet ();
{
org.jsmol.test.JSmol.bs.set (5);
org.jsmol.test.JSmol.bs.set (6);
}c$.pt = c$.prototype.pt =  new javax.vecmath.Point3f (2, 3, 4);
});
