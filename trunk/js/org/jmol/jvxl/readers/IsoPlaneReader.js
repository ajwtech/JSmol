Clazz.declarePackage ("org.jmol.jvxl.readers");
Clazz.load (["org.jmol.jvxl.readers.AtomDataReader"], "org.jmol.jvxl.readers.IsoPlaneReader", null, function () {
c$ = Clazz.declareType (org.jmol.jvxl.readers, "IsoPlaneReader", org.jmol.jvxl.readers.AtomDataReader);
Clazz.makeConstructor (c$, 
function (sg) {
Clazz.superConstructor (this, org.jmol.jvxl.readers.IsoPlaneReader, [sg]);
this.precalculateVoxelData = false;
}, "org.jmol.jvxl.readers.SurfaceGenerator");
Clazz.defineMethod (c$, "setup", 
function (isMapData) {
Clazz.superCall (this, org.jmol.jvxl.readers.IsoPlaneReader, "setup", [isMapData]);
this.setHeader ("PLANE", this.params.thePlane.toString ());
this.params.cutoff = 0;
this.setVolumeForPlane ();
}, "~B");
});
