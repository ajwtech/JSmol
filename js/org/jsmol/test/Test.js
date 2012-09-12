Clazz.declarePackage ("org.jsmol.test");
Clazz.load (["org.jmol.api.JmolStatusListener"], "org.jsmol.test.Test", ["java.io.BufferedReader", "$.StringReader", "java.lang.Boolean", "java.util.Hashtable", "org.jmol.adapter.smarter.SmarterJmolAdapter", "org.jmol.util.Escape", "org.jmol.viewer.Viewer"], function () {
c$ = Clazz.decorateAsClass (function () {
this.viewer = null;
Clazz.instantialize (this, arguments);
}, org.jsmol.test, "Test", null, org.jmol.api.JmolStatusListener);
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
viewerOptions.put ("debug", Boolean.TRUE);
viewerOptions.put ("platform", "org.jmol.awtjs.Platform");
viewerOptions.put ("repaintManager", "");
viewerOptions.put ("fullName", "http://chemapps.stolaf.edu/jmol/test/jsmol.htm");
viewerOptions.put ("documentBase", "http://chemapps.stolaf.edu/jmol/test/jsmol.htm");
viewerOptions.put ("codeBase", "http://chemapps.stolaf.edu/jmol/test");
System.out.println ("test 1");
this.viewer =  new org.jmol.viewer.Viewer (viewerOptions);
System.out.println ("test 2");
} catch (e) {
if (Clazz.exceptionOf (e, Exception)) {
System.out.println (e.getMessage ());
e.printStackTrace ();
} else {
throw e;
}
}
System.out.println ("Test() 1");
this.viewer.scriptWait ("load DATA \"model\"3\nwater\nO  0.0 0.0 0.0\nH  0.76923955 -0.59357141 0.0\nH -0.76923955 -0.59357141 0.0\n\nend \"model\"\n;print getProperty(\'atomInfo\')");
System.out.println (this.viewer.getProperty ("String", "atomInfo", "{*}"));
System.out.println ("Test() 2");
});
Clazz.overrideMethod (c$, "createImage", 
function (fileName, type, textOrBytes, quality) {
return null;
}, "~S,~S,~O,~N");
Clazz.overrideMethod (c$, "eval", 
function (strEval) {
return null;
}, "~S");
Clazz.overrideMethod (c$, "functionXY", 
function (functionName, x, y) {
return null;
}, "~S,~N,~N");
Clazz.overrideMethod (c$, "functionXYZ", 
function (functionName, nx, ny, nz) {
return null;
}, "~S,~N,~N,~N");
Clazz.overrideMethod (c$, "getProperty", 
function (type) {
return null;
}, "~S");
Clazz.overrideMethod (c$, "getRegistryInfo", 
function () {
return null;
});
Clazz.overrideMethod (c$, "resizeInnerPanel", 
function (data) {
}, "~S");
Clazz.overrideMethod (c$, "showUrl", 
function (url) {
}, "~S");
Clazz.overrideMethod (c$, "notifyCallback", 
function (message, data) {
System.out.println ("callback " + message + ": " + org.jmol.util.Escape.escape (data));
}, "org.jmol.constant.EnumCallback,~A");
Clazz.overrideMethod (c$, "notifyEnabled", 
function (type) {
return true;
}, "org.jmol.constant.EnumCallback");
Clazz.overrideMethod (c$, "setCallbackFunction", 
function (callbackType, callbackFunction) {
}, "~S,~S");
Clazz.defineStatics (c$,
"adapter", null,
"strXyzHOH", "3\nwater\nO  0.0 0.0 0.0\nH  0.76923955 -0.59357141 0.0\nH -0.76923955 -0.59357141 0.0\n");
});
