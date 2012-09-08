﻿Clazz.declarePackage ("org.jmol.jvxl.readers");
Clazz.load (["org.jmol.jvxl.readers.VolumeFileReader"], "org.jmol.jvxl.readers.CubeReader", ["java.lang.StringBuffer", "org.jmol.util.Logger", "$.Parser"], function () {
c$ = Clazz.declareType (org.jmol.jvxl.readers, "CubeReader", org.jmol.jvxl.readers.VolumeFileReader);
Clazz.overrideMethod (c$, "readParameters", 
function () {
this.jvxlFileHeaderBuffer =  new StringBuffer ();
this.jvxlFileHeaderBuffer.append (this.readLine ()).append ('\n');
this.jvxlFileHeaderBuffer.append (this.readLine ()).append ('\n');
var atomLine = this.readLine ();
var tokens = org.jmol.util.Parser.getTokens (atomLine, 0);
this.atomCount = this.parseInt (tokens[0]);
this.negativeAtomCount = (this.atomCount < 0);
if (this.negativeAtomCount) this.atomCount = -this.atomCount;
this.volumetricOrigin.set (this.parseFloat (tokens[1]), this.parseFloat (tokens[2]), this.parseFloat (tokens[3]));
org.jmol.jvxl.readers.VolumeFileReader.checkAtomLine (this.isXLowToHigh, this.isAngstroms, tokens[0], atomLine, this.jvxlFileHeaderBuffer);
if (!this.isAngstroms) this.volumetricOrigin.scale (0.5291772);
for (var i = 0; i < 3; ++i) this.readVoxelVector (i);

for (var i = 0; i < this.atomCount; ++i) this.jvxlFileHeaderBuffer.append (this.readLine () + "\n");

if (!this.negativeAtomCount) {
this.nSurfaces = 1;
} else {
this.readLine ();
org.jmol.util.Logger.info ("Reading extra CUBE information line: " + this.line);
this.nSurfaces = this.parseInt (this.line);
}});
});
