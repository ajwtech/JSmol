Clazz.declarePackage ("org.jmol.jvxl.readers");
Clazz.load (["org.jmol.jvxl.readers.SurfaceReader"], "org.jmol.jvxl.readers.SurfaceFileReader", ["org.jmol.util.Parser"], function () {
c$ = Clazz.decorateAsClass (function () {
this.br = null;
this.binarydoc = null;
this.os = null;
this.line = null;
this.next = null;
Clazz.instantialize (this, arguments);
}, org.jmol.jvxl.readers, "SurfaceFileReader", org.jmol.jvxl.readers.SurfaceReader);
Clazz.prepareFields (c$, function () {
this.next =  Clazz.newArray (1, 0);
});
Clazz.makeConstructor (c$, 
function (sg, br) {
Clazz.superConstructor (this, org.jmol.jvxl.readers.SurfaceFileReader, [sg]);
this.br = br;
}, "org.jmol.jvxl.readers.SurfaceGenerator,java.io.BufferedReader");
Clazz.overrideMethod (c$, "setOutputStream", 
function (os) {
if (this.binarydoc == null) this.os = os;
 else this.sg.setOutputStream (this.binarydoc, os);
}, "java.io.OutputStream");
Clazz.overrideMethod (c$, "closeReader", 
function () {
if (this.br != null) try {
this.br.close ();
} catch (e) {
if (Clazz.instanceOf (e, java.io.IOException)) {
} else {
throw e;
}
}
if (this.os != null) try {
this.os.flush ();
this.os.close ();
} catch (e) {
if (Clazz.instanceOf (e, java.io.IOException)) {
} else {
throw e;
}
}
if (this.binarydoc != null) this.binarydoc.close ();
});
Clazz.defineMethod (c$, "discardTempData", 
function (discardAll) {
this.closeReader ();
Clazz.superCall (this, org.jmol.jvxl.readers.SurfaceFileReader, "discardTempData", [discardAll]);
}, "~B");
Clazz.defineMethod (c$, "getTokens", 
function () {
return org.jmol.util.Parser.getTokens (this.line, 0);
});
Clazz.defineMethod (c$, "parseFloat", 
function () {
return org.jmol.util.Parser.parseFloat (this.line, this.next);
});
Clazz.defineMethod (c$, "parseFloat", 
function (s) {
this.next[0] = 0;
return org.jmol.util.Parser.parseFloat (s, this.next);
}, "~S");
Clazz.defineMethod (c$, "parseInt", 
function () {
return org.jmol.util.Parser.parseInt (this.line, this.next);
});
Clazz.defineMethod (c$, "parseInt", 
function (s) {
this.next[0] = 0;
return org.jmol.util.Parser.parseInt (s, this.next);
}, "~S");
Clazz.defineMethod (c$, "parseIntNext", 
function (s) {
return org.jmol.util.Parser.parseInt (s, this.next);
}, "~S");
Clazz.defineMethod (c$, "parseFloatArray", 
function (s) {
this.next[0] = 0;
return org.jmol.util.Parser.parseFloatArray (s, this.next);
}, "~S");
Clazz.defineMethod (c$, "parseFloatArray", 
function () {
return org.jmol.util.Parser.parseFloatArray (this.line, this.next);
});
Clazz.defineMethod (c$, "getNextQuotedString", 
function () {
return org.jmol.util.Parser.getNextQuotedString (this.line, this.next);
});
Clazz.defineMethod (c$, "skipTo", 
function (info, what) {
if (info != null) while (this.readLine ().indexOf (info) < 0) {
}
if (what != null) this.next[0] = this.line.indexOf (what) + what.length + 2;
}, "~S,~S");
Clazz.defineMethod (c$, "readLine", 
function () {
this.line = this.br.readLine ();
if (this.line != null) {
this.nBytes += this.line.length;
if (this.os != null) {
this.os.write (this.line.getBytes ());
this.os.write ('\n'.charCodeAt (0));
}}return this.line;
});
});
