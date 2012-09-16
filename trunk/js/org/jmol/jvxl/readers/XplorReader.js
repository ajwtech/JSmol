﻿Clazz.declarePackage ("org.jmol.jvxl.readers");
Clazz.load (["org.jmol.jvxl.readers.MapFileReader"], "org.jmol.jvxl.readers.XplorReader", ["java.lang.StringBuffer", "org.jmol.util.Logger", "org.jmol.viewer.Viewer"], function () {
c$ = Clazz.decorateAsClass (function () {
this.nBlock = 0;
this.linePt = 2147483647;
this.nRead = 0;
Clazz.instantialize (this, arguments);
}, org.jmol.jvxl.readers, "XplorReader", org.jmol.jvxl.readers.MapFileReader);
Clazz.makeConstructor (c$, 
function (sg, br) {
Clazz.superConstructor (this, org.jmol.jvxl.readers.XplorReader, [sg, br]);
if (this.params.thePlane == null) this.params.insideOut = !this.params.insideOut;
this.nSurfaces = 1;
}, "org.jmol.jvxl.readers.SurfaceGenerator,java.io.BufferedReader");
Clazz.overrideMethod (c$, "readParameters", 
function () {
this.jvxlFileHeaderBuffer =  new StringBuffer ();
var nLines = this.parseIntStr (this.getLine ());
for (var i = nLines; --i >= 0; ) {
this.line = this.br.readLine ().trim ();
org.jmol.util.Logger.info ("XplorReader: " + this.line);
this.jvxlFileHeaderBuffer.append ("# ").append (this.line).append ('\n');
}
this.jvxlFileHeaderBuffer.append ("Xplor data\nJmol " + org.jmol.viewer.Viewer.getJmolVersion () + '\n');
this.na = this.parseIntStr (this.getLine ());
this.nxyzStart[0] = this.parseInt ();
this.nx = this.parseInt () - this.nxyzStart[0] + 1;
this.nb = this.parseInt ();
this.nxyzStart[1] = this.parseInt ();
this.ny = this.parseInt () - this.nxyzStart[1] + 1;
this.nc = this.parseInt ();
this.nxyzStart[2] = this.parseInt ();
this.nz = this.parseInt () - this.nxyzStart[2] + 1;
this.a = this.parseFloatStr (this.getLine ());
this.b = this.parseFloat ();
this.c = this.parseFloat ();
this.alpha = this.parseFloat ();
this.beta = this.parseFloat ();
this.gamma = this.parseFloat ();
this.getLine ();
this.maps = 3;
this.mapr = 2;
this.mapc = 1;
this.getVectorsAndOrigin ();
this.setCutoffAutomatic ();
this.nBlock = this.voxelCounts[2] * this.voxelCounts[1];
});
Clazz.defineMethod (c$, "getLine", 
($fz = function () {
this.readLine ();
while (this.line != null && (this.line.length == 0 || this.line.indexOf ("REMARKS") >= 0 || this.line.indexOf ("XPLOR:") >= 0)) this.readLine ();

return this.line;
}, $fz.isPrivate = true, $fz));
Clazz.overrideMethod (c$, "nextVoxel", 
function () {
if (this.linePt >= this.line.length) {
this.readLine ();
this.linePt = 0;
if ((this.nRead % this.nBlock) == 0) {
this.readLine ();
}}if (this.line == null) return 0;
var val = this.parseFloatStr (this.line.substring (this.linePt, this.linePt + 12));
this.linePt += 12;
this.nRead++;
return val;
});
});
