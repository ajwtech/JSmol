Clazz.declarePackage ("org.jmol.jvxl.readers");
Clazz.load (["org.jmol.jvxl.readers.VolumeFileReader"], "org.jmol.jvxl.readers.PltFormattedReader", ["java.lang.StringBuffer", "org.jmol.viewer.Viewer"], function () {
c$ = Clazz.declareType (org.jmol.jvxl.readers, "PltFormattedReader", org.jmol.jvxl.readers.VolumeFileReader);
Clazz.makeConstructor (c$, 
function (sg, br) {
Clazz.superConstructor (this, org.jmol.jvxl.readers.PltFormattedReader, [sg, br]);
this.isAngstroms = true;
this.jvxlData.wasCubic = true;
this.jvxlFileHeaderBuffer =  new StringBuffer ();
this.nSurfaces = 1;
}, "org.jmol.jvxl.readers.SurfaceGenerator,java.io.BufferedReader");
Clazz.overrideMethod (c$, "readParameters", 
function () {
var n1 = this.parseInt (this.readLine ());
var n2 = this.parseInt ();
this.nPointsX = this.parseInt (this.readLine ());
this.nPointsY = this.parseInt ();
this.nPointsZ = this.parseInt ();
this.jvxlFileHeaderBuffer.append ("Plt formatted data (" + n1 + "," + n2 + ") " + this.nPointsX + " x " + this.nPointsY + " x " + this.nPointsZ + " \nJmol " + org.jmol.viewer.Viewer.getJmolVersion () + '\n');
this.volumetricOrigin.set (0, 0, 0);
var xmin = this.parseFloat (this.readLine ().substring (0, 12));
var xmax = this.parseFloat (this.line.substring (12, 24));
var ymin = this.parseFloat (this.line.substring (24, 36));
var ymax = this.parseFloat (this.line.substring (36, 48));
var zmin = this.parseFloat (this.line.substring (48, 60));
var zmax = this.parseFloat (this.line.substring (60, 72));
this.volumetricOrigin.set (xmin, ymin, zmin);
this.voxelCounts[0] = this.nPointsX;
this.voxelCounts[1] = this.nPointsY;
this.voxelCounts[2] = this.nPointsZ;
this.volumetricVectors[0].set (0, 0, (xmax - xmin) / this.nPointsX);
this.volumetricVectors[1].set (0, (ymax - ymin) / this.nPointsY, 0);
this.volumetricVectors[2].set ((zmax - zmin) / this.nPointsZ, 0, 0);
});
});
