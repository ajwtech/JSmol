Clazz.declarePackage ("org.jsmol.test");
Clazz.load (null, "org.jsmol.test.Test_zip", ["java.io.BufferedInputStream", "$.ByteArrayInputStream", "$.FileInputStream", "org.jmol.io.JmolBinary"], function () {
c$ = Clazz.declareType (org.jsmol.test, "Test_zip");
c$.main = Clazz.defineMethod (c$, "main", 
function (args) {
 new org.jsmol.test.Test_zip ();
}, "~A");
Clazz.makeConstructor (c$, 
function () {
try {
var x =  new java.io.BufferedInputStream ( new java.io.FileInputStream ("c:/temp/t.zip"));
var bytes = org.jmol.io.JmolBinary.getStreamAsBytes (x, null);
x =  new java.io.BufferedInputStream ( new java.io.ByteArrayInputStream (bytes));
var s = org.jmol.io.JmolBinary.getZipDirectoryAndClose (x, false);
for (var i = 0; i < s.length; i++) System.out.println (s[i]);

} catch (e) {
if (Clazz.exceptionOf (e, Exception)) {
e.printStackTrace ();
} else {
throw e;
}
}
});
});
