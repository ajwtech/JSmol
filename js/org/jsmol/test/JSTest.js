Clazz.declarePackage ("org.jsmol.test");
Clazz.load (["org.jsmol.test.JSmol", "javax.vecmath.Point3f"], "org.jsmol.test.JSTest", ["java.lang.Boolean", "org.jmol.util.Logger", "org.jmol.viewer.JmolConstants"], function () {
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
var b = '@';
var c = 2 + b.charCodeAt (0);
var d = 2;
var e = "3" + b;
var f = String.fromCharCode ((b.charCodeAt (0) + d));
System.out.println ("x,x1,x2=" + c + "," + e + "," + f);
this.b$["org.jsmol.test.JSTest"].sayHello (this.checkMap ('K'));
this.b$["org.jsmol.test.JSTest"].sayHello (this.myTest ("test"));
this.b$["org.jsmol.test.JSTest"].sayHello (this.checkMap (this.getObj ("string")));
this.b$["org.jsmol.test.JSTest"].sayHello (this.checkMap ((this.getObj ("boolean")).booleanValue ()));
this.b$["org.jsmol.test.JSTest"].sayHello (a);
}, "~S");
Clazz.defineMethod (c$, "myTest", 
function (a) {
return a;
}, "~S");
Clazz.defineMethod (c$, "checkMap", 
function (a) {
return "OK-checkMapchar-" + a;
}, "~S");
Clazz.defineMethod (c$, "checkMap", 
function (a) {
return "OK-checkMapchar-" + a;
}, "~S");
Clazz.defineMethod (c$, "checkMap", 
function (a) {
return "OK-checkMapbool-" + a;
}, "~B");
Clazz.defineMethod (c$, "getObj", 
function (a) {
if (a.equalsIgnoreCase ("string")) return "testing";
return Boolean.TRUE;
}, "~S");
c$ = Clazz.p0p ();
};
c$.pt2 = c$.prototype.pt2 =  new javax.vecmath.Point3f (2, 3, 4);
Clazz.defineStatics (c$,
"testArray", ["a", "b", "c", "d"]);
});
