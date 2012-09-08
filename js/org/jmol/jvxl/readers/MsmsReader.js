Clazz.declarePackage ("org.jmol.jvxl.readers");
Clazz.load (["org.jmol.jvxl.readers.PmeshReader"], "org.jmol.jvxl.readers.MsmsReader", ["java.io.BufferedReader", "$.InputStreamReader", "org.jmol.util.Logger", "$.TextFormat"], function () {
c$ = Clazz.decorateAsClass (function () {
this.fileName = null;
Clazz.instantialize (this, arguments);
}, org.jmol.jvxl.readers, "MsmsReader", org.jmol.jvxl.readers.PmeshReader);
Clazz.makeConstructor (c$, 
function (sg, fileName, br) {
Clazz.superConstructor (this, org.jmol.jvxl.readers.MsmsReader, [sg, br]);
this.fileName = fileName;
this.type = "msms";
this.onePerLine = true;
this.fixedCount = 3;
this.vertexBase = 1;
this.setHeader ();
}, "org.jmol.jvxl.readers.SurfaceGenerator,~S,java.io.BufferedReader");
Clazz.defineMethod (c$, "readVertices", 
function () {
this.skipHeader ();
return Clazz.superCall (this, org.jmol.jvxl.readers.MsmsReader, "readVertices", []);
});
Clazz.defineMethod (c$, "readPolygons", 
function () {
this.br.close ();
this.fileName = org.jmol.util.TextFormat.simpleReplace (this.fileName, ".vert", ".face");
org.jmol.util.Logger.info ("reading from file " + this.fileName);
try {
this.br =  new java.io.BufferedReader ( new java.io.InputStreamReader (this.sg.getAtomDataServer ().getBufferedInputStream (this.fileName)));
} catch (e) {
if (Clazz.instanceOf (e, Exception)) {
org.jmol.util.Logger.info ("Note: file " + this.fileName + " was not found");
this.br = null;
return true;
} else {
throw e;
}
}
this.sg.addRequiredFile (this.fileName);
this.skipHeader ();
return Clazz.superCall (this, org.jmol.jvxl.readers.MsmsReader, "readPolygons", []);
});
Clazz.defineMethod (c$, "skipHeader", 
($fz = function () {
while (this.readLine () != null && this.line.indexOf ("#") >= 0) {
}
this.tokens = this.getTokens ();
this.iToken = 0;
}, $fz.isPrivate = true, $fz));
});
