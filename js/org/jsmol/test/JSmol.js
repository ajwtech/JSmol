Clazz.declarePackage ("org.jsmol.test");
Clazz.load (["java.lang.Enum", "java.util.BitSet", "javax.vecmath.Point3f"], "org.jsmol.test.JSmol", ["org.jsmol.test.EnumTest"], function () {
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
this.sayHello (" EnumTest.ONCE = " + org.jsmol.test.EnumTest.ONCE + "; TT.A = " + org.jsmol.test.JSmol.TT.A);
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "sayHello", 
function (s) {
System.out.println ("Hello Java -- " + s);
}, "~S");
Clazz.pu$h ();
c$ = Clazz.declareType (org.jsmol.test.JSmol, "TT", Enum);
Clazz.defineEnumConstant (c$, "A", 0, []);
Clazz.defineEnumConstant (c$, "B", 1, []);
Clazz.defineEnumConstant (c$, "C", 2, []);
Clazz.defineEnumConstant (c$, "D", 3, []);
c$ = Clazz.p0p ();
c$.bs = c$.prototype.bs =  new java.util.BitSet ();
{
org.jsmol.test.JSmol.bs.set (5);
org.jsmol.test.JSmol.bs.set (6);
}c$.pt = c$.prototype.pt = javax.vecmath.Point3f.new3 (2, 3, 4);
});
