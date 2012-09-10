Clazz.declarePackage ("org.jsmol.test");
Clazz.load (null, "org.jsmol.test.Test", ["java.io.BufferedReader", "$.StringReader", "java.lang.Boolean", "java.util.Hashtable", "org.jmol.adapter.smarter.SmarterJmolAdapter", "org.jmol.viewer.Viewer"], function () {
c$ = Clazz.decorateAsClass (function () {
this.viewer = null;
Clazz.instantialize (this, arguments);
}, org.jsmol.test, "Test");
c$.main = Clazz.defineMethod (c$, "main", 
function (args) {
var test =  new org.jsmol.test.Test ();
}, "~A");
c$.getBufferedReaderForString = Clazz.defineMethod (c$, "getBufferedReaderForString", 
function (string) {
return  new java.io.BufferedReader ( new java.io.StringReader (string));
}, "~S");
Clazz.makeConstructor (c$, 
function () {
try {
var viewerOptions =  new java.util.Hashtable ();
viewerOptions.put ("adapter",  new org.jmol.adapter.smarter.SmarterJmolAdapter ());
viewerOptions.put ("applet", Boolean.TRUE);
viewerOptions.put ("platform", "org.jmol.awtjs.Platform");
viewerOptions.put ("fullName", "http://chemapps.stolaf.edu/jmol/test/jsmol.htm");
viewerOptions.put ("documentBase", "http://chemapps.stolaf.edu/jmol/test/jsmol.htm");
viewerOptions.put ("codeBase", "http://chemapps.stolaf.edu/jmol/test");
this.viewer =  new org.jmol.viewer.Viewer (viewerOptions);
} catch (e) {
if (Clazz.instanceOf (e, Exception)) {
System.out.println (e.getMessage ());
e.printStackTrace ();
} else {
throw e;
}
}
this.viewer.scriptWait ("load DATA \"model\" \n3\nwater\nO  0.0 0.0 0.0\nH  0.76923955 -0.59357141 0.0\nH -0.76923955 -0.59357141 0.0\n\nend \"model\"\n");
});
Clazz.defineStatics (c$,
"adapter", null,
"strXyzHOH", "3\nwater\nO  0.0 0.0 0.0\nH  0.76923955 -0.59357141 0.0\nH -0.76923955 -0.59357141 0.0\n");
});
