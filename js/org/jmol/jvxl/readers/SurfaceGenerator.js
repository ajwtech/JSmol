Clazz.declarePackage ("org.jmol.jvxl.readers");
Clazz.load (["javax.vecmath.Point3f", "$.Vector3f"], "org.jmol.jvxl.readers.SurfaceGenerator", ["java.io.BufferedReader", "$.InputStreamReader", "$.StringReader", "java.util.BitSet", "javax.vecmath.Point4f", "org.jmol.jvxl.data.JvxlCoder", "$.JvxlData", "$.MeshData", "$.VolumeData", "org.jmol.jvxl.readers.ApbsReader", "$.AtomPropertyMapper", "$.CastepDensityReader", "$.CubeReader", "$.Dsn6BinaryReader", "$.EfvetReader", "$.IsoFxyReader", "$.IsoFxyzReader", "$.IsoIntersectReader", "$.IsoMOReader", "$.IsoMepReader", "$.IsoMlpReader", "$.IsoPlaneReader", "$.IsoShapeReader", "$.IsoSolventReader", "$.JaguarReader", "$.JvxlReader", "$.JvxlXmlReader", "$.KinemageReader", "$.MrcBinaryReader", "$.MsmsReader", "$.NffFileReader", "$.ObjReader", "$.Parameters", "$.PltFormattedReader", "$.PmeshReader", "$.SurfaceReader", "$.VolumeDataReader", "$.XplorReader", "$.XsfReader", "org.jmol.util.ArrayUtil", "$.Logger", "$.Measure", "$.Parser", "$.SurfaceFileTyper", "$.TextFormat"], function () {
c$ = Clazz.decorateAsClass (function () {
this.jvxlData = null;
this.meshData = null;
this.params = null;
this.volumeData = null;
this.meshDataServer = null;
this.atomDataServer = null;
this.marchingSquares = null;
this.version = null;
this.$isValid = true;
this.fileType = null;
this.os = null;
this.surfaceReader = null;
this.colorPtr = 0;
this.vAC = null;
this.vAB = null;
this.vNorm = null;
this.ptRef = null;
this.bsVdw = null;
Clazz.instantialize (this, arguments);
}, org.jmol.jvxl.readers, "SurfaceGenerator");
Clazz.prepareFields (c$, function () {
this.vAC =  new javax.vecmath.Vector3f ();
this.vAB =  new javax.vecmath.Vector3f ();
this.vNorm =  new javax.vecmath.Vector3f ();
this.ptRef =  new javax.vecmath.Point3f (0, 0, 1e15);
});
Clazz.defineMethod (c$, "isValid", 
function () {
return this.$isValid;
});
Clazz.defineMethod (c$, "getFileType", 
function () {
return this.fileType;
});
Clazz.defineMethod (c$, "setVersion", 
function (version) {
this.version = version;
}, "~S");
Clazz.makeConstructor (c$, 
function () {
this.setup (null, null, null, null);
});
Clazz.makeConstructor (c$, 
function (atomDataServer, meshDataServer, meshData, jvxlData) {
this.setup (atomDataServer, meshDataServer, meshData, jvxlData);
}, "org.jmol.atomdata.AtomDataServer,org.jmol.jvxl.api.MeshDataServer,org.jmol.jvxl.data.MeshData,org.jmol.jvxl.data.JvxlData");
Clazz.defineMethod (c$, "setup", 
($fz = function (atomDataServer, meshDataServer, meshData, jvxlData) {
this.atomDataServer = atomDataServer;
this.meshDataServer = meshDataServer;
this.params =  new org.jmol.jvxl.readers.Parameters ();
this.meshData = (meshData == null ?  new org.jmol.jvxl.data.MeshData () : meshData);
this.jvxlData = (jvxlData == null ?  new org.jmol.jvxl.data.JvxlData () : jvxlData);
this.volumeData =  new org.jmol.jvxl.data.VolumeData ();
this.initializeIsosurface ();
}, $fz.isPrivate = true, $fz), "org.jmol.atomdata.AtomDataServer,org.jmol.jvxl.api.MeshDataServer,org.jmol.jvxl.data.MeshData,org.jmol.jvxl.data.JvxlData");
Clazz.defineMethod (c$, "isStateDataRead", 
function () {
return this.params.state == 2;
});
Clazz.defineMethod (c$, "getFileName", 
function () {
return this.params.fileName;
});
Clazz.defineMethod (c$, "getMeshDataServer", 
function () {
return this.meshDataServer;
});
Clazz.defineMethod (c$, "getAtomDataServer", 
function () {
return this.atomDataServer;
});
Clazz.defineMethod (c$, "getColorEncoder", 
function () {
return this.params.colorEncoder;
});
Clazz.defineMethod (c$, "getVertexSource", 
function () {
return this.params.vertexSource;
});
Clazz.defineMethod (c$, "setJvxlData", 
function (jvxlData) {
this.jvxlData = jvxlData;
if (jvxlData != null) jvxlData.version = this.version;
}, "org.jmol.jvxl.data.JvxlData");
Clazz.defineMethod (c$, "getJvxlData", 
function () {
return this.jvxlData;
});
Clazz.defineMethod (c$, "getMeshData", 
function () {
return this.meshData;
});
Clazz.defineMethod (c$, "setMarchingSquares", 
function (marchingSquares) {
this.marchingSquares = marchingSquares;
}, "org.jmol.jvxl.calc.MarchingSquares");
Clazz.defineMethod (c$, "getMarchingSquares", 
function () {
return this.marchingSquares;
});
Clazz.defineMethod (c$, "getParams", 
function () {
return this.params;
});
Clazz.defineMethod (c$, "getScript", 
function () {
return this.params.script;
});
Clazz.defineMethod (c$, "getTitle", 
function () {
return this.params.title;
});
Clazz.defineMethod (c$, "getBsSelected", 
function () {
return this.params.bsSelected;
});
Clazz.defineMethod (c$, "getBsIgnore", 
function () {
return this.params.bsIgnore;
});
Clazz.defineMethod (c$, "getVolumeData", 
function () {
return this.volumeData;
});
Clazz.defineMethod (c$, "getPlane", 
function () {
return this.params.thePlane;
});
Clazz.defineMethod (c$, "getColor", 
function (which) {
switch (which) {
case -1:
return this.params.colorNeg;
case 1:
return this.params.colorPos;
}
return 0;
}, "~N");
Clazz.defineMethod (c$, "setModelIndex", 
function (modelIndex) {
this.params.modelIndex = modelIndex;
}, "~N");
Clazz.defineMethod (c$, "getIAddGridPoints", 
function () {
return this.params.iAddGridPoints;
});
Clazz.defineMethod (c$, "getIsPositiveOnly", 
function () {
return this.params.isPositiveOnly;
});
Clazz.defineMethod (c$, "isInsideOut", 
function () {
return this.params.insideOut != this.params.dataXYReversed;
});
Clazz.defineMethod (c$, "getCutoff", 
function () {
return this.params.cutoff;
});
Clazz.defineMethod (c$, "getMoData", 
function () {
return this.params.moData;
});
Clazz.defineMethod (c$, "isCubeData", 
function () {
return this.jvxlData.wasCubic;
});
Clazz.defineMethod (c$, "setParameter", 
function (propertyName, value) {
return this.setParameter (propertyName, value, null);
}, "~S,~O");
Clazz.defineMethod (c$, "setParameter", 
function (propertyName, value, bs) {
if ("debug" === propertyName) {
var TF = (value).booleanValue ();
this.params.logMessages = TF;
this.params.logCube = TF;
return true;
}if ("init" === propertyName) {
this.initializeIsosurface ();
if (Clazz.instanceOf (value, org.jmol.jvxl.readers.Parameters)) {
this.params = value;
} else {
this.params.script = value;
if (this.params.script != null && this.params.script.indexOf (";#") >= 0) {
this.params.script = org.jmol.util.TextFormat.simpleReplace (this.params.script, ";#", "; #");
}}return false;
}if ("map" === propertyName) {
this.params.resetForMapping ((value).booleanValue ());
if (this.surfaceReader != null) this.surfaceReader.minMax = null;
return true;
}if ("finalize" === propertyName) {
this.initializeIsosurface ();
return true;
}if ("clear" === propertyName) {
if (this.surfaceReader != null) this.surfaceReader.discardTempData (true);
return false;
}if ("fileIndex" === propertyName) {
this.params.fileIndex = (value).intValue ();
if (this.params.fileIndex < 1) this.params.fileIndex = 1;
this.params.readAllData = false;
return true;
}if ("blockData" === propertyName) {
this.params.blockCubeData = (value).booleanValue ();
return true;
}if ("withinPoints" === propertyName) {
this.params.boundingBox = (value)[1];
return true;
}if ("boundingBox" === propertyName) {
var pts = value;
this.params.boundingBox = [ new javax.vecmath.Point3f (pts[0]),  new javax.vecmath.Point3f (pts[pts.length - 1])];
return true;
}if ("func" === propertyName) {
this.params.func = value;
return true;
}if ("intersection" === propertyName) {
this.params.intersection = value;
return true;
}if ("bsSolvent" === propertyName) {
this.params.bsSolvent = value;
return true;
}if ("select" === propertyName) {
this.params.bsSelected = value;
return true;
}if ("ignore" === propertyName) {
this.params.bsIgnore = value;
return true;
}if ("propertySmoothing" === propertyName) {
this.params.propertySmoothing = (value).booleanValue ();
return true;
}if ("propertyDistanceMax" === propertyName) {
this.params.propertyDistanceMax = (value).floatValue ();
return true;
}if ("propertySmoothingPower" === propertyName) {
this.params.propertySmoothingPower = (value).intValue ();
return true;
}if ("title" === propertyName) {
if (value == null) {
this.params.title = null;
return true;
} else if (Clazz.instanceOf (value, Array)) {
this.params.title = value;
for (var i = 0; i < this.params.title.length; i++) if (this.params.title[i].length > 0) org.jmol.util.Logger.info (this.params.title[i]);

}return true;
}if ("sigma" === propertyName) {
this.params.cutoff = this.params.sigma = (value).floatValue ();
this.params.isPositiveOnly = false;
this.params.cutoffAutomatic = false;
return true;
}if ("cutoff" === propertyName) {
this.params.cutoff = (value).floatValue ();
this.params.isPositiveOnly = false;
this.params.cutoffAutomatic = false;
return true;
}if ("parameters" === propertyName) {
this.params.parameters = org.jmol.util.ArrayUtil.ensureLength (value, 2);
if (this.params.parameters.length > 0 && this.params.parameters[0] != 0) this.params.cutoff = this.params.parameters[0];
return true;
}if ("cutoffPositive" === propertyName) {
this.params.cutoff = (value).floatValue ();
this.params.isPositiveOnly = true;
return true;
}if ("cap" === propertyName || "slab" === propertyName) {
if (value != null) this.params.addSlabInfo (value);
return true;
}if ("scale" === propertyName) {
this.params.scale = (value).floatValue ();
return true;
}if ("scale3d" === propertyName) {
this.params.scale3d = (value).floatValue ();
return true;
}if ("angstroms" === propertyName) {
this.params.isAngstroms = true;
return true;
}if ("resolution" === propertyName) {
var resolution = (value).floatValue ();
this.params.resolution = (resolution > 0 ? resolution : 3.4028235E38);
return true;
}if ("downsample" === propertyName) {
var rate = (value).intValue ();
this.params.downsampleFactor = (rate >= 0 ? rate : 0);
return true;
}if ("anisotropy" === propertyName) {
if ((this.params.dataType & 32) == 0) this.params.setAnisotropy (value);
return true;
}if ("eccentricity" === propertyName) {
this.params.setEccentricity (value);
return true;
}if ("addHydrogens" === propertyName) {
this.params.addHydrogens = (value).booleanValue ();
return true;
}if ("squareData" === propertyName) {
this.params.isSquared = (value).booleanValue ();
return true;
}if ("gridPoints" === propertyName) {
this.params.iAddGridPoints = true;
return true;
}if ("atomIndex" === propertyName) {
this.params.atomIndex = (value).intValue ();
return true;
}if ("insideOut" === propertyName) {
this.params.insideOut = true;
return true;
}if ("sign" === propertyName) {
this.params.isCutoffAbsolute = true;
this.params.colorBySign = true;
this.colorPtr = 0;
return true;
}if ("colorRGB" === propertyName) {
var rgb = (value).intValue ();
this.params.colorRgb = this.params.colorPos = this.params.colorPosLCAO = rgb;
if (this.colorPtr++ == 0) {
this.params.colorNeg = this.params.colorNegLCAO = rgb;
} else {
this.params.colorRgb = 2147483647;
}return true;
}if ("monteCarloCount" === propertyName) {
this.params.psi_monteCarloCount = (value).intValue ();
return true;
}if ("rangeAll" === propertyName) {
this.params.rangeAll = true;
return true;
}if ("rangeSelected" === propertyName) {
this.params.rangeSelected = true;
return true;
}if ("red" === propertyName) {
this.params.valueMappedToRed = (value).floatValue ();
return true;
}if ("blue" === propertyName) {
this.params.valueMappedToBlue = (value).floatValue ();
if (this.params.valueMappedToRed > this.params.valueMappedToBlue) {
var f = this.params.valueMappedToRed;
this.params.valueMappedToRed = this.params.valueMappedToBlue;
this.params.valueMappedToBlue = f;
this.params.isColorReversed = !this.params.isColorReversed;
}this.params.rangeDefined = true;
this.params.rangeAll = false;
return true;
}if ("reverseColor" === propertyName) {
this.params.isColorReversed = true;
return true;
}if ("setColorScheme" === propertyName) {
this.getSurfaceSets ();
this.params.colorBySets = true;
this.mapSurface ();
return true;
}if ("center" === propertyName) {
this.params.center.set (value);
return true;
}if ("volumeData" === propertyName) {
this.params.volumeData = value;
return true;
}if ("origin" === propertyName) {
this.params.origin = value;
return true;
}if ("step" === propertyName) {
this.params.steps = value;
return true;
}if ("point" === propertyName) {
this.params.points = value;
return true;
}if ("withinDistance" === propertyName) {
this.params.distance = (value).floatValue ();
return true;
}if ("withinPoint" === propertyName) {
this.params.point = value;
return true;
}if ("progressive" === propertyName) {
this.params.isXLowToHigh = true;
return true;
}if ("phase" === propertyName) {
var color = value;
this.params.isCutoffAbsolute = true;
this.params.colorBySign = true;
this.params.colorByPhase = true;
this.params.colorPhase = org.jmol.jvxl.readers.SurfaceReader.getColorPhaseIndex (color);
if (this.params.colorPhase < 0) {
org.jmol.util.Logger.warn (" invalid color phase: " + color);
this.params.colorPhase = 0;
}this.params.colorByPhase = this.params.colorPhase != 0;
if (this.params.state >= 2) {
this.params.dataType = this.params.surfaceType;
this.params.state = 3;
this.params.isBicolorMap = true;
this.surfaceReader.applyColorScale ();
}return true;
}if ("radius" === propertyName) {
org.jmol.util.Logger.info ("solvent probe radius set to " + value);
this.params.atomRadiusData = value;
return true;
}if ("envelopeRadius" === propertyName) {
this.params.envelopeRadius = (value).floatValue ();
return true;
}if ("cavityRadius" === propertyName) {
this.params.cavityRadius = (value).floatValue ();
return true;
}if ("cavity" === propertyName) {
this.params.isCavity = true;
return true;
}if ("doFullMolecular" === propertyName) {
this.params.doFullMolecular = true;
return true;
}if ("pocket" === propertyName) {
this.params.pocket = value;
this.params.fullyLit = this.params.pocket.booleanValue ();
return true;
}if ("minset" === propertyName) {
this.params.minSet = (value).intValue ();
return true;
}if ("maxset" === propertyName) {
this.params.maxSet = (value).intValue ();
return true;
}if ("plane" === propertyName) {
this.params.setPlane (value);
return true;
}if ("contour" === propertyName) {
this.params.isContoured = true;
var n;
if (Clazz.instanceOf (value, Array)) {
this.params.contoursDiscrete = value;
this.params.nContours = this.params.contoursDiscrete.length;
} else if (Clazz.instanceOf (value, javax.vecmath.Point3f)) {
var pt = this.params.contourIncrements = value;
var from = pt.x;
var to = pt.y;
var step = pt.z;
if (step <= 0) step = 1;
n = 0;
for (var p = from; p <= to + step / 10; p += step, n++) {
}
this.params.contoursDiscrete =  Clazz.newArray (n, 0);
var p = from;
for (var i = 0; i < n; i++, p += step) {
this.params.contoursDiscrete[i] = p;
}
this.params.nContours = n;
} else {
n = (value).intValue ();
if (n == 0) this.params.nContours = 9;
 else if (n > 0) this.params.nContours = n;
 else this.params.thisContour = -n;
}return true;
}if ("colorDiscrete" === propertyName) {
this.params.contourColixes = value;
return true;
}if ("colorDensity" === propertyName) {
this.params.colorDensity = true;
return true;
}if ("fullPlane" === propertyName) {
this.params.contourFromZero = !(value).booleanValue ();
return true;
}if ("mapLattice" === propertyName) {
this.params.mapLattice = value;
return true;
}if ("property" === propertyName) {
this.params.dataType = 1206;
this.params.theProperty = value;
this.mapSurface ();
return true;
}if ("sphere" === propertyName) {
this.params.setSphere ((value).floatValue ());
this.surfaceReader =  new org.jmol.jvxl.readers.IsoShapeReader (this, this.params.distance);
this.generateSurface ();
return true;
}if ("ellipsoid" === propertyName) {
if (Clazz.instanceOf (value, javax.vecmath.Point4f)) this.params.setEllipsoid (value);
 else if (Clazz.instanceOf (value, Array)) this.params.setEllipsoid (value);
 else return true;
this.surfaceReader =  new org.jmol.jvxl.readers.IsoShapeReader (this, this.params.distance);
this.generateSurface ();
return true;
}if ("ellipsoid3" === propertyName) {
this.params.setEllipsoid (value);
this.surfaceReader =  new org.jmol.jvxl.readers.IsoShapeReader (this, this.params.distance);
this.generateSurface ();
return true;
}if ("lp" === propertyName) {
this.params.setLp (value);
this.surfaceReader =  new org.jmol.jvxl.readers.IsoShapeReader (this, 3, 2, 0, 15, 0);
this.generateSurface ();
return true;
}if ("rad" === propertyName) {
this.params.setRadical (value);
this.surfaceReader =  new org.jmol.jvxl.readers.IsoShapeReader (this, 3, 2, 0, 15, 0);
this.generateSurface ();
return true;
}if ("lobe" === propertyName) {
this.params.setLobe (value);
this.surfaceReader =  new org.jmol.jvxl.readers.IsoShapeReader (this, 3, 2, 0, 15, 0);
this.generateSurface ();
return true;
}if ("hydrogenOrbital" === propertyName) {
if (!this.params.setAtomicOrbital (value)) {
this.$isValid = false;
return true;
}this.surfaceReader =  new org.jmol.jvxl.readers.IsoShapeReader (this, this.params.psi_n, this.params.psi_l, this.params.psi_m, this.params.psi_Znuc, this.params.psi_monteCarloCount);
this.processState ();
return true;
}if ("functionXY" === propertyName) {
this.params.setFunctionXY (value);
if (this.params.isContoured) this.volumeData.setPlaneParameters ( new javax.vecmath.Point4f (0, 0, 1, 0));
if ((this.params.functionInfo.get (0)).indexOf ("_xyz") >= 0) this.getFunctionZfromXY ();
this.processState ();
return true;
}if ("functionXYZ" === propertyName) {
this.params.setFunctionXYZ (value);
this.processState ();
return true;
}if ("lcaoType" === propertyName) {
this.params.setLcao (value, this.colorPtr);
return true;
}if ("lcaoCartoonCenter" === propertyName) {
if (++this.params.state != 2) return true;
if (this.params.center.x == 3.4028235E38) this.params.center.set (value);
return false;
}if ("molecular" === propertyName || "solvent" === propertyName || "sasurface" === propertyName || "nomap" === propertyName) {
this.params.setSolvent (propertyName, (value).floatValue ());
org.jmol.util.Logger.info (this.params.calculationType);
this.processState ();
return true;
}if ("moData" === propertyName) {
this.params.moData = value;
return true;
}if ("mepCalcType" === propertyName) {
this.params.mep_calcType = (value).intValue ();
return true;
}if ("mep" === propertyName) {
this.params.setMep (value, false);
this.processState ();
return true;
}if ("mlp" === propertyName) {
this.params.setMep (value, true);
this.processState ();
return true;
}if ("nci" === propertyName) {
var isPromolecular = (value).booleanValue ();
this.params.setNci (isPromolecular);
if (isPromolecular) this.processState ();
return true;
}if ("calculationType" === propertyName) {
this.params.calculationType = value;
return true;
}if ("charges" === propertyName) {
this.params.theProperty = value;
return true;
}if ("randomSeed" === propertyName) {
this.params.randomSeed = (value).intValue ();
return true;
}if ("molecularOrbital" === propertyName) {
var iMo = 0;
var linearCombination = null;
if (Clazz.instanceOf (value, Integer)) {
iMo = (value).intValue ();
} else {
linearCombination = value;
}this.params.setMO (iMo, linearCombination);
org.jmol.util.Logger.info (this.params.calculationType);
this.processState ();
return true;
}if ("fileType" === propertyName) {
this.fileType = value;
return true;
}if ("fileName" === propertyName) {
this.params.fileName = value;
return true;
}if ("outputStream" === propertyName) {
this.os = value;
return true;
}if ("readFile" === propertyName) {
if ((this.surfaceReader = this.setFileData (value)) == null) {
org.jmol.util.Logger.error ("Could not set the surface data");
return true;
}this.surfaceReader.setOutputStream (this.os);
this.generateSurface ();
return true;
}if ("getSurfaceSets" === propertyName) {
this.getSurfaceSets ();
return true;
}if ("mapColor" === propertyName) {
if ((this.surfaceReader = this.setFileData (value)) == null) {
org.jmol.util.Logger.error ("Could not set the mapping data");
return true;
}this.surfaceReader.setOutputStream (this.os);
this.mapSurface ();
return true;
}if ("periodic" === propertyName) {
this.params.isPeriodic = true;
}return false;
}, "~S,~O,java.util.BitSet");
Clazz.defineMethod (c$, "getSurfaceSets", 
($fz = function () {
if (this.meshDataServer == null) {
this.meshData.getSurfaceSet ();
} else {
this.meshDataServer.fillMeshData (this.meshData, 1, null);
this.meshData.getSurfaceSet ();
this.meshDataServer.fillMeshData (this.meshData, 3, null);
}}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "processState", 
($fz = function () {
if (this.params.state == 1 && this.params.thePlane != null) this.params.state++;
if (this.params.state >= 2) {
this.mapSurface ();
} else {
this.generateSurface ();
}}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "setReader", 
($fz = function () {
if (this.surfaceReader != null) return !this.surfaceReader.vertexDataOnly;
switch (this.params.dataType) {
case 1205:
this.surfaceReader =  new org.jmol.jvxl.readers.IsoPlaneReader (this);
break;
case 1206:
this.surfaceReader =  new org.jmol.jvxl.readers.AtomPropertyMapper (this, null);
break;
case 1333:
this.surfaceReader =  new org.jmol.jvxl.readers.IsoIntersectReader (this);
break;
case 1195:
case 1203:
case 1196:
this.surfaceReader =  new org.jmol.jvxl.readers.IsoSolventReader (this);
break;
case 1844:
case 1837:
this.surfaceReader =  new org.jmol.jvxl.readers.IsoMOReader (this);
break;
case 8:
this.surfaceReader =  new org.jmol.jvxl.readers.IsoFxyReader (this);
break;
case 9:
this.surfaceReader =  new org.jmol.jvxl.readers.IsoFxyzReader (this);
break;
case 1328:
if (this.params.state == 3) this.surfaceReader =  new org.jmol.jvxl.readers.AtomPropertyMapper (this, "Mep");
 else this.surfaceReader =  new org.jmol.jvxl.readers.IsoMepReader (this);
break;
case 1329:
if (this.params.state == 3) this.surfaceReader =  new org.jmol.jvxl.readers.AtomPropertyMapper (this, "Mlp");
 else this.surfaceReader =  new org.jmol.jvxl.readers.IsoMlpReader (this);
break;
}
org.jmol.util.Logger.info ("Using surface reader " + this.surfaceReader);
return true;
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "generateSurface", 
($fz = function () {
if (++this.params.state != 2) return ;
this.setReader ();
var haveMeshDataServer = (this.meshDataServer != null);
if (this.params.colorBySign) this.params.isBicolorMap = true;
if (this.surfaceReader == null) {
org.jmol.util.Logger.error ("surfaceReader is null for " + this.params.dataType);
return ;
}if (!this.surfaceReader.createIsosurface (false)) {
org.jmol.util.Logger.error ("Could not create isosurface");
this.params.cutoff = NaN;
this.surfaceReader.closeReader ();
return ;
}if (this.params.pocket != null && haveMeshDataServer) this.surfaceReader.selectPocket (!this.params.pocket.booleanValue ());
if (this.params.minSet > 0) this.surfaceReader.excludeMinimumSet ();
if (this.params.maxSet > 0) this.surfaceReader.excludeMaximumSet ();
if (this.params.slabInfo != null) this.surfaceReader.slabIsosurface (this.params.slabInfo);
if (haveMeshDataServer) this.meshDataServer.notifySurfaceGenerationCompleted ();
if (this.jvxlData.thisSet >= 0) this.getSurfaceSets ();
if (this.jvxlData.jvxlDataIs2dContour) {
this.surfaceReader.colorIsosurface ();
this.params.state = 3;
}if (this.jvxlData.jvxlDataIsColorDensity) {
this.params.state = 3;
}if (this.params.colorBySign || this.params.isBicolorMap) {
this.params.state = 3;
this.surfaceReader.applyColorScale ();
}this.surfaceReader.jvxlUpdateInfo ();
this.setMarchingSquares (this.surfaceReader.marchingSquares);
this.surfaceReader.discardTempData (false);
this.params.mappedDataMin = 3.4028235E38;
this.surfaceReader.closeReader ();
if (this.params.state != 3 && (this.surfaceReader.hasColorData || this.params.colorDensity)) {
this.params.state = 3;
this.colorIsosurface ();
}this.surfaceReader = null;
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "mapSurface", 
($fz = function () {
if (this.params.state == 1 && this.params.thePlane != null) this.params.state++;
if (++this.params.state < 3) return ;
if (!this.setReader ()) return ;
if (this.params.isPeriodic) this.volumeData.isPeriodic = true;
if (this.params.thePlane != null) {
var isSquared = this.params.isSquared;
this.params.isSquared = false;
this.params.cutoff = 0;
this.volumeData.setMappingPlane (this.params.thePlane);
this.surfaceReader.createIsosurface (!this.params.isPeriodic);
this.volumeData.setMappingPlane (null);
if (this.meshDataServer != null) this.meshDataServer.notifySurfaceGenerationCompleted ();
if (this.params.dataType == 1205) {
this.surfaceReader.discardTempData (true);
return ;
}this.params.isSquared = isSquared;
this.params.mappedDataMin = 3.4028235E38;
this.surfaceReader.readVolumeData (true);
if (this.params.mapLattice != null) this.volumeData.isPeriodic = true;
} else if (!this.params.colorBySets && !this.params.colorDensity) {
this.surfaceReader.readAndSetVolumeParameters (true);
this.params.mappedDataMin = 3.4028235E38;
this.surfaceReader.readVolumeData (true);
}this.colorIsosurface ();
this.surfaceReader.closeReader ();
this.surfaceReader = null;
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "getSlabInfo", 
function () {
return this.params.slabInfo;
});
Clazz.defineMethod (c$, "colorIsosurface", 
function () {
this.surfaceReader.colorIsosurface ();
this.surfaceReader.jvxlUpdateInfo ();
this.surfaceReader.updateTriangles ();
this.surfaceReader.discardTempData (true);
if (this.meshDataServer != null) this.meshDataServer.notifySurfaceMappingCompleted ();
});
Clazz.defineMethod (c$, "getProperty", 
function (property, index) {
if (property === "jvxlFileData") return org.jmol.jvxl.data.JvxlCoder.jvxlGetFile (this.jvxlData, null, this.params.title, "", true, index, null, null);
if (property === "jvxlFileInfo") return org.jmol.jvxl.data.JvxlCoder.jvxlGetInfo (this.jvxlData);
return null;
}, "~S,~N");
Clazz.defineMethod (c$, "setFileData", 
($fz = function (value) {
var fileType = this.fileType;
this.fileType = null;
if (Clazz.instanceOf (value, org.jmol.jvxl.data.VolumeData)) {
this.volumeData = value;
return  new org.jmol.jvxl.readers.VolumeDataReader (this);
}if (Clazz.instanceOf (value, java.util.Map)) {
this.volumeData = (value).get ("volumeData");
return  new org.jmol.jvxl.readers.VolumeDataReader (this);
}var data = null;
if (Clazz.instanceOf (value, String)) {
data = value;
value =  new java.io.BufferedReader ( new java.io.StringReader (value));
}var br = value;
if (fileType == null) fileType = org.jmol.util.SurfaceFileTyper.determineSurfaceFileType (br);
if (fileType != null && fileType.startsWith ("UPPSALA")) {
var fname = this.params.fileName;
fname = fname.substring (0, fname.indexOf ("/", 10));
fname += org.jmol.util.Parser.getNextQuotedString (fileType, fileType.indexOf ("A HREF") + 1);
this.params.fileName = fname;
value = this.atomDataServer.getBufferedInputStream (fname);
if (value == null) {
org.jmol.util.Logger.error ("Isosurface: could not open file " + fname);
return null;
}br =  new java.io.BufferedReader ( new java.io.InputStreamReader (value));
fileType = org.jmol.util.SurfaceFileTyper.determineSurfaceFileType (br);
}if (fileType == null) fileType = "UNKNOWN";
org.jmol.util.Logger.info ("data file type was determined to be " + fileType);
if (fileType.equals ("Jvxl+")) return  new org.jmol.jvxl.readers.JvxlReader (this, br);
if (fileType.equals ("Jvxl")) return  new org.jmol.jvxl.readers.JvxlReader (this, br);
if (fileType.equals ("JvxlXML")) return  new org.jmol.jvxl.readers.JvxlXmlReader (this, br);
if (fileType.equals ("Apbs")) return  new org.jmol.jvxl.readers.ApbsReader (this, br);
if (fileType.equals ("Cube")) return  new org.jmol.jvxl.readers.CubeReader (this, br);
if (fileType.equals ("Jaguar")) return  new org.jmol.jvxl.readers.JaguarReader (this, br);
if (fileType.equals ("Xplor")) return  new org.jmol.jvxl.readers.XplorReader (this, br);
if (fileType.equals ("Xsf")) return  new org.jmol.jvxl.readers.XsfReader (this, br);
if (fileType.equals ("PltFormatted")) return  new org.jmol.jvxl.readers.PltFormattedReader (this, br);
if (fileType.equals ("MRC")) {
try {
br.close ();
} catch (e) {
if (Clazz.instanceOf (e, java.io.IOException)) {
} else {
throw e;
}
}
br = null;
return  new org.jmol.jvxl.readers.MrcBinaryReader (this, this.params.fileName);
}if (fileType.equals ("DSN6")) {
try {
br.close ();
} catch (e) {
if (Clazz.instanceOf (e, java.io.IOException)) {
} else {
throw e;
}
}
br = null;
return  new org.jmol.jvxl.readers.Dsn6BinaryReader (this, this.params.fileName, data);
}if (fileType.equals ("Efvet")) return  new org.jmol.jvxl.readers.EfvetReader (this, br);
if (fileType.equals ("Pmesh")) return  new org.jmol.jvxl.readers.PmeshReader (this, this.params.fileName, br);
if (fileType.equals ("Obj")) return  new org.jmol.jvxl.readers.ObjReader (this, br);
if (fileType.equals ("Msms")) return  new org.jmol.jvxl.readers.MsmsReader (this, this.params.fileName, br);
if (fileType.equals ("Kinemage")) return  new org.jmol.jvxl.readers.KinemageReader (this, br);
if (fileType.equals ("CastepDensity")) return  new org.jmol.jvxl.readers.CastepDensityReader (this, br);
if (fileType.equals ("Nff")) return  new org.jmol.jvxl.readers.NffFileReader (this, br);
return null;
}, $fz.isPrivate = true, $fz), "~O");
Clazz.defineMethod (c$, "initializeIsosurface", 
function () {
this.params.initialize ();
this.colorPtr = 0;
this.surfaceReader = null;
this.marchingSquares = null;
this.initState ();
});
Clazz.defineMethod (c$, "initState", 
function () {
this.params.state = 1;
this.params.dataType = this.params.surfaceType = 0;
});
Clazz.defineMethod (c$, "setLcao", 
function () {
this.params.colorPos = this.params.colorPosLCAO;
this.params.colorNeg = this.params.colorNegLCAO;
return this.params.lcaoType;
});
Clazz.defineMethod (c$, "getFunctionZfromXY", 
($fz = function () {
var origin = this.params.functionInfo.get (1);
var counts =  Clazz.newArray (3, 0);
var nearest =  Clazz.newArray (3, 0);
var vectors =  new Array (3);
for (var i = 0; i < 3; i++) {
var info = this.params.functionInfo.get (i + 2);
counts[i] = Math.abs (Math.round (info.x));
vectors[i] =  new javax.vecmath.Vector3f (info.y, info.z, info.w);
}
var nx = counts[0];
var ny = counts[1];
var pt =  new javax.vecmath.Point3f ();
var pta =  new javax.vecmath.Point3f ();
var ptb =  new javax.vecmath.Point3f ();
var ptc =  new javax.vecmath.Point3f ();
var data = this.params.functionInfo.get (5);
var data2 =  Clazz.newArray (nx, ny, 0);
var d;
for (var i = 0; i < nx; i++) for (var j = 0; j < ny; j++) {
pt.scaleAdd (i, vectors[0], origin);
pt.scaleAdd (j, vectors[1], pt);
var dist = org.jmol.jvxl.readers.SurfaceGenerator.findNearestThreePoints (pt.x, pt.y, data, nearest);
pta.set ((d = data[nearest[0]])[0], d[1], d[2]);
if (dist < 0.00001) {
pt.z = d[2];
} else {
ptb.set ((d = data[nearest[1]])[0], d[1], d[2]);
ptc.set ((d = data[nearest[2]])[0], d[1], d[2]);
pt.z = this.distanceVerticalToPlane (pt.x, pt.y, pta, ptb, ptc);
}data2[i][j] = pt.z;
}

this.params.functionInfo.set (5, data2);
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "distanceVerticalToPlane", 
($fz = function (x, y, pta, ptb, ptc) {
var d = org.jmol.util.Measure.getDirectedNormalThroughPoints (pta, ptb, ptc, this.ptRef, this.vNorm, this.vAB, this.vAC);
return (this.vNorm.x * x + this.vNorm.y * y + d) / -this.vNorm.z;
}, $fz.isPrivate = true, $fz), "~N,~N,javax.vecmath.Point3f,javax.vecmath.Point3f,javax.vecmath.Point3f");
c$.findNearestThreePoints = Clazz.defineMethod (c$, "findNearestThreePoints", 
($fz = function (x, y, xyz, result) {
var d;
var dist1;
var dist2;
var dist3;
var i1;
var i2;
var i3;
i1 = i2 = i3 = -1;
dist1 = dist2 = dist3 = 3.4028235E38;
for (var i = xyz.length; --i >= 0; ) {
d = (d = xyz[i][0] - x) * d + (d = xyz[i][1] - y) * d;
if (d < dist1) {
dist3 = dist2;
dist2 = dist1;
dist1 = d;
i3 = i2;
i2 = i1;
i1 = i;
} else if (d < dist2) {
dist3 = dist2;
dist2 = d;
i3 = i2;
i2 = i;
} else if (d < dist3) {
dist3 = d;
i3 = i;
}}
result[0] = i1;
result[1] = i2;
result[2] = i3;
return dist1;
}, $fz.isPrivate = true, $fz), "~N,~N,~A,~A");
Clazz.defineMethod (c$, "addRequiredFile", 
function (fileName) {
if (this.meshDataServer == null) return ;
this.meshDataServer.addRequiredFile (fileName);
}, "~S");
Clazz.defineMethod (c$, "log", 
function (msg) {
if (this.atomDataServer == null) System.out.println (msg);
 else this.atomDataServer.log (msg);
}, "~S");
Clazz.defineMethod (c$, "setOutputStream", 
function (binaryDoc, os) {
if (this.meshDataServer == null) return ;
this.meshDataServer.setOutputStream (binaryDoc, os);
}, "~O,java.io.OutputStream");
Clazz.defineMethod (c$, "isFullyLit", 
function () {
return (this.params.thePlane != null || this.params.fullyLit);
});
Clazz.defineMethod (c$, "geVdwBitSet", 
function () {
return this.bsVdw;
});
Clazz.defineMethod (c$, "fillAtomData", 
function (atomData, mode) {
if ((mode & 2) != 0 && atomData.bsSelected != null) {
if (this.bsVdw == null) this.bsVdw =  new java.util.BitSet ();
this.bsVdw.or (atomData.bsSelected);
}this.atomDataServer.fillAtomData (atomData, mode);
}, "org.jmol.atomdata.AtomData,~N");
Clazz.defineMethod (c$, "getSpanningVectors", 
function () {
return this.surfaceReader.getSpanningVectors ();
});
});
