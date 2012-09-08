Clazz.declarePackage ("org.jmol.jvxl.readers");
Clazz.load (["org.jmol.jvxl.readers.VolumeFileReader"], "org.jmol.jvxl.readers.ApbsReader", ["java.lang.StringBuffer", "org.jmol.util.Parser"], function () {
c$ = Clazz.declareType (org.jmol.jvxl.readers, "ApbsReader", org.jmol.jvxl.readers.VolumeFileReader);
Clazz.makeConstructor (c$, 
function (sg, br) {
Clazz.superConstructor (this, org.jmol.jvxl.readers.ApbsReader, [sg, br]);
if (this.params.thePlane == null) this.params.insideOut = !this.params.insideOut;
this.isAngstroms = true;
this.nSurfaces = 1;
}, "org.jmol.jvxl.readers.SurfaceGenerator,java.io.BufferedReader");
Clazz.overrideMethod (c$, "readParameters", 
function () {
this.jvxlFileHeaderBuffer =  new StringBuffer (this.skipComments (false));
while (this.line != null && this.line.length == 0) this.readLine ();

this.jvxlFileHeaderBuffer.append ("APBS OpenDx DATA ").append (this.line).append ("\n");
this.jvxlFileHeaderBuffer.append ("see http://apbs.sourceforge.net\n");
var atomLine = this.readLine ();
var tokens = org.jmol.util.Parser.getTokens (atomLine);
if (tokens.length >= 4) {
this.volumetricOrigin.set (this.parseFloat (tokens[1]), this.parseFloat (tokens[2]), this.parseFloat (tokens[3]));
}org.jmol.jvxl.readers.VolumeFileReader.checkAtomLine (this.isXLowToHigh, this.isAngstroms, tokens[0], atomLine, this.jvxlFileHeaderBuffer);
this.readVoxelVector (0);
this.readVoxelVector (1);
this.readVoxelVector (2);
this.readLine ();
tokens = this.getTokens ();
for (var i = 0; i < 3; i++) this.voxelCounts[i] = this.parseInt (tokens[i + 5]);

this.readLine ();
});
});
