Clazz.declarePackage ("org.jmol.jvxl.readers");
Clazz.load (["org.jmol.jvxl.readers.SurfaceReader"], "org.jmol.jvxl.readers.AtomPropertyMapper", null, function () {
c$ = Clazz.declareType (org.jmol.jvxl.readers, "AtomPropertyMapper", org.jmol.jvxl.readers.SurfaceReader);
Clazz.overrideMethod (c$, "closeReader", 
function () {
});
Clazz.overrideMethod (c$, "readSurfaceData", 
function (isMapData) {
}, "~B");
Clazz.overrideMethod (c$, "readVolumeData", 
function (isMapData) {
return false;
}, "~B");
Clazz.overrideMethod (c$, "readVolumeParameters", 
function (isMapData) {
return false;
}, "~B");
});
