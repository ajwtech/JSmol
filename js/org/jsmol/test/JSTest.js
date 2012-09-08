﻿Clazz.declarePackage ("org.jsmol.test");
Clazz.load (["org.jsmol.test.JSmol", "javax.vecmath.Point3f"], "org.jsmol.test.JSTest", ["org.jmol.util.Logger", "org.jmol.viewer.JmolConstants"], function () {
c$ = Clazz.decorateAsClass (function () {
if (!Clazz.isClassDefined ("org.jsmol.test.JSTest.TestInner")) {
org.jsmol.test.JSTest.$JSTest$TestInner$ ();
}
Clazz.instantialize (this, arguments);
}, org.jsmol.test, "JSTest", org.jsmol.test.JSmol);
c$.main = Clazz.defineMethod (c$, "main", 
function (args) {
var jmolApp =  new org.jsmol.test.JSTest (args);
jmolApp.sayHello ("...second time...");
jmolApp =  new org.jsmol.test.JSTest (args);
jmolApp.sayHello ("...third time...");
jmolApp =  new org.jsmol.test.JSTest (args);
}, "~A");
Clazz.makeConstructor (c$, 
($fz = function (args) {
Clazz.superConstructor (this, org.jsmol.test.JSTest);
System.out.println ("testing123");
this.sayHello ("JSTest constructor -- after super()");
this.testStatic ();
org.jsmol.test.JSmol.bs.set (Math.round ((12 + org.jsmol.test.JSTest.pt2.x)));
org.jsmol.test.JSmol.pt.x = -1;
this.sayHello ("OK-JSTest pt2.x = " + org.jsmol.test.JSTest.pt2);
org.jsmol.test.JSTest.pt2.x -= 1;
var ti = Clazz.innerTypeInstance (org.jsmol.test.JSTest.TestInner, this, null);
ti.say ("ok - ti");
org.jmol.util.Logger.info ("test log info");
org.jmol.util.Logger.debug ("test log debug");
org.jmol.util.Logger.error ("test log error");
org.jmol.util.Logger.info (org.jsmol.test.JSTest.testArray[3]);
org.jmol.util.Logger.info (org.jmol.viewer.JmolConstants.getShapeClassName (33, false));
}, $fz.isPrivate = true, $fz), "~A");
c$.$JSTest$TestInner$ = function () {
Clazz.pu$h ();
c$ = Clazz.decorateAsClass (function () {
Clazz.prepareCallback (this, arguments);
Clazz.instantialize (this, arguments);
}, org.jsmol.test.JSTest, "TestInner");
Clazz.defineMethod (c$, "say", 
function (a) {
this.b$["org.jsmol.test.JSTest"].sayHello (a);
}, "~S");
c$ = Clazz.p0p ();
};
c$.pt2 = c$.prototype.pt2 =  new javax.vecmath.Point3f (2, 3, 4);
Clazz.defineStatics (c$,
"testArray", ["a", "b", "c", "d"]);
});