Clazz.declarePackage ("org.jsmol.test");
Clazz.load (["org.jmol.api.JmolStatusListener"], "org.jsmol.test.Test", ["java.io.BufferedReader", "$.StringReader", "java.lang.Boolean", "java.util.Hashtable", "org.jmol.adapter.smarter.SmarterJmolAdapter", "org.jmol.io.JmolBinary", "org.jmol.util.Escape", "org.jmol.viewer.Viewer"], function () {
c$ = Clazz.decorateAsClass (function () {
this.viewer = null;
Clazz.instantialize (this, arguments);
}, org.jsmol.test, "Test", null, org.jmol.api.JmolStatusListener);
c$.main = Clazz.defineMethod (c$, "main", 
function (args) {
 new org.jsmol.test.Test ();
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
var b =  Clazz.newByteArray (80, 0);
b[0] = 0x1F;
b[1] = 0x8B;
b[2] = 0x08;
b[3] = 0x08;
b[4] = 0xE6;
b[5] = 0x43;
b[6] = 0x0D;
b[7] = 0x45;
b[8] = 0x02;
b[9] = 0x00;
b[10] = 0x77;
b[11] = 0x61;
b[12] = 0x74;
b[13] = 0x65;
b[14] = 0x72;
b[15] = 0x2E;
b[16] = 0x78;
b[17] = 0x79;
b[18] = 0x7A;
b[19] = 0x00;
b[20] = 0x4D;
b[21] = 0xCA;
b[22] = 0xC1;
b[23] = 0x0D;
b[24] = 0x00;
b[25] = 0x20;
b[26] = 0x08;
b[27] = 0x03;
b[28] = 0xC0;
b[29] = 0x3F;
b[30] = 0x09;
b[31] = 0x3B;
b[32] = 0x30;
b[33] = 0x81;
b[34] = 0xA9;
b[35] = 0x0A;
b[36] = 0x06;
b[37] = 0x37;
b[38] = 0xF0;
b[39] = 0xE7;
b[40] = 0xFE;
b[41] = 0xDB;
b[42] = 0x58;
b[43] = 0x7E;
b[44] = 0x3E;
b[45] = 0xDA;
b[46] = 0x34;
b[47] = 0x97;
b[48] = 0x4E;
b[49] = 0x15;
b[50] = 0x53;
b[51] = 0x39;
b[52] = 0xD6;
b[53] = 0x1B;
b[54] = 0x0C;
b[55] = 0xCD;
b[56] = 0x37;
b[57] = 0xB8;
b[58] = 0x22;
b[59] = 0xF2;
b[60] = 0x27;
b[61] = 0x67;
b[62] = 0xC3;
b[63] = 0xA1;
b[64] = 0x72;
b[65] = 0x8B;
b[66] = 0x2A;
b[67] = 0x58;
b[68] = 0xA4;
b[69] = 0x1C;
b[70] = 0x7C;
b[71] = 0x3D;
b[72] = 0xBD;
b[73] = 0xAD;
b[74] = 0x18;
b[75] = 0x15;
b[76] = 0x3F;
b[77] = 0x00;
b[78] = 0x00;
b[79] = 0x00;
System.out.println ("isGzip = " + org.jmol.io.JmolBinary.isGzipB (b));
System.out.println (org.jmol.io.JmolBinary.getGzippedBytesAsString (b));
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
"strXyzHOH", "3\nwater\nO  0.0 0.0 0.0\nH  0.76923955 -0.59357141 0.0\nH -0.76923955 -0.59357141 0.0\n");
});
