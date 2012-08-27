Clazz.declarePackage ("org.jsmol.test");
Clazz.load (["org.jsmol.test.JSmol", "javax.vecmath.Point3f"], "org.jsmol.test.JSTest", null, function () {
c$ = Clazz.declareType (org.jsmol.test, "JSTest", org.jsmol.test.JSmol);
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
this.sayHello ("JSTest contstructor -- after super()");
this.testStatic ();
org.jsmol.test.JSmol.bs.set (Math.round ((12 + org.jsmol.test.JSTest.pt2.x)));
org.jsmol.test.JSmol.pt.x = -1;
this.sayHello ("OK-JSTest pt2.x = " + org.jsmol.test.JSTest.pt2);
org.jsmol.test.JSTest.pt2.x -= 1;
}, $fz.isPrivate = true, $fz), "~A");
c$.pt2 = c$.prototype.pt2 =  new javax.vecmath.Point3f (2, 3, 4);
});
