﻿Clazz.declarePackage ("org.jmol.jvxl.readers");
Clazz.load (["org.jmol.jvxl.readers.JvxlXmlReader"], "org.jmol.jvxl.readers.JvxlReader", ["java.lang.NullPointerException", "$.StringBuffer", "javax.vecmath.Point4f", "org.jmol.jvxl.data.JvxlCoder", "org.jmol.jvxl.readers.VolumeFileReader", "org.jmol.util.Colix", "$.Escape", "$.Logger", "$.Parser"], function () {
c$ = Clazz.declareType (org.jmol.jvxl.readers, "JvxlReader", org.jmol.jvxl.readers.JvxlXmlReader);
Clazz.makeConstructor (c$, 
function () {
Clazz.superConstructor (this, org.jmol.jvxl.readers.JvxlReader, []);
});
Clazz.defineMethod (c$, "init2", 
function (sg, br) {
Clazz.superCall (this, org.jmol.jvxl.readers.JvxlReader, "init2", [sg, br]);
this.isXmlFile = false;
this.JVXL_VERSION = "2.0";
}, "org.jmol.jvxl.readers.SurfaceGenerator,java.io.BufferedReader");
Clazz.overrideMethod (c$, "readParameters", 
function () {
this.jvxlFileHeaderBuffer =  new StringBuffer (this.skipComments (false));
if (this.line == null || this.line.length == 0) this.line = "Line 1";
this.jvxlFileHeaderBuffer.append (this.line).append ('\n');
if (this.readLine () == null || this.line.length == 0) this.line = "Line 2";
this.jvxlFileHeaderBuffer.append (this.line).append ('\n');
this.jvxlFileHeaderBuffer.append (this.skipComments (false));
var atomLine = this.line;
var tokens = org.jmol.util.Parser.getTokensAt (atomLine, 0);
this.isXLowToHigh = false;
this.negativeAtomCount = true;
this.atomCount = 0;
if (tokens[0] === "-0") {
} else if ((tokens[0].charAt (0)).charCodeAt (0) == 43) {
this.isXLowToHigh = true;
this.atomCount = this.parseIntStr (tokens[0].substring (1));
} else {
this.atomCount = -this.parseIntStr (tokens[0]);
}if (this.atomCount == -2147483648) return ;
this.volumetricOrigin.set (this.parseFloatStr (tokens[1]), this.parseFloatStr (tokens[2]), this.parseFloatStr (tokens[3]));
this.isAngstroms = org.jmol.jvxl.readers.VolumeFileReader.checkAtomLine (this.isXLowToHigh, this.isAngstroms, null, atomLine, this.jvxlFileHeaderBuffer);
if (!this.isAngstroms) this.volumetricOrigin.scale (0.5291772);
this.readVoxelVector (0);
this.readVoxelVector (1);
this.readVoxelVector (2);
this.skipComments (true);
for (var i = 0; i < this.atomCount; ++i) this.jvxlFileHeaderBuffer.append (this.readLine () + "\n");

org.jmol.util.Logger.info ("Reading extra JVXL information line: " + this.line);
this.nSurfaces = this.parseIntStr (this.line);
if (!(this.isJvxl = (this.nSurfaces < 0))) return ;
this.nSurfaces = -this.nSurfaces;
org.jmol.util.Logger.info ("jvxl file surfaces: " + this.nSurfaces);
var ich;
if ((ich = this.parseInt ()) == -2147483648) {
org.jmol.util.Logger.info ("using default edge fraction base and range");
} else {
this.edgeFractionBase = ich;
this.edgeFractionRange = this.parseInt ();
}if ((ich = this.parseInt ()) == -2147483648) {
org.jmol.util.Logger.info ("using default color fraction base and range");
} else {
this.colorFractionBase = ich;
this.colorFractionRange = this.parseInt ();
}this.cJvxlEdgeNaN = String.fromCharCode ((this.edgeFractionBase + this.edgeFractionRange));
});
Clazz.overrideMethod (c$, "jvxlReadData", 
function (type, nPoints) {
var str = "";
try {
while (str.length < nPoints) {
this.readLine ();
str += org.jmol.jvxl.data.JvxlCoder.jvxlUncompressString (this.line);
}
} catch (e) {
if (Clazz.exceptionOf (e, Exception)) {
org.jmol.util.Logger.error ("Error reading " + type + " data " + e);
throw  new NullPointerException ();
} else {
throw e;
}
}
return str;
}, "~S,~N");
Clazz.overrideMethod (c$, "gotoData", 
function (n, nPoints) {
if (n > 0) org.jmol.util.Logger.info ("skipping " + n + " data sets, " + nPoints + " points each");
this.vertexDataOnly = this.jvxlData.vertexDataOnly = (nPoints == 0);
for (var i = 0; i < n; i++) {
this.jvxlReadDefinitionLine (true);
org.jmol.util.Logger.info ("JVXL skipping: jvxlSurfaceDataCount=" + this.surfaceDataCount + " jvxlEdgeDataCount=" + this.edgeDataCount + " jvxlDataIsColorMapped=" + this.jvxlDataIsColorMapped);
this.jvxlSkipData (nPoints, true);
}
this.jvxlReadDefinitionLine (true);
}, "~N,~N");
Clazz.defineMethod (c$, "jvxlReadDefinitionLine", 
($fz = function (showMsg) {
var comment = this.skipComments (true);
if (showMsg) org.jmol.util.Logger.info ("reading jvxl data set: " + comment + this.line);
this.haveContourData = (comment.indexOf ("+contourlines") >= 0);
this.jvxlCutoff = this.parseFloatStr (this.line);
org.jmol.util.Logger.info ("JVXL read: cutoff " + this.jvxlCutoff);
var param1 = this.parseInt ();
var param2 = this.parseInt ();
var param3 = this.parseInt ();
if (param3 == -2147483648 || param3 == -1) param3 = 0;
if (param1 == -1) {
try {
this.params.thePlane = javax.vecmath.Point4f.new4 (this.parseFloat (), this.parseFloat (), this.parseFloat (), this.parseFloat ());
} catch (e) {
if (Clazz.exceptionOf (e, Exception)) {
org.jmol.util.Logger.error ("Error reading 4 floats for PLANE definition -- setting to 0 0 1 0  (z=0)");
this.params.thePlane = javax.vecmath.Point4f.new4 (0, 0, 1, 0);
} else {
throw e;
}
}
org.jmol.util.Logger.info ("JVXL read: plane " + this.params.thePlane);
if (param2 == -1 && param3 < 0) param3 = -param3;
} else {
this.params.thePlane = null;
}if (param1 < 0 && param2 != -1) {
this.params.isContoured = (param3 != 0);
var nContoursRead = this.parseInt ();
if (nContoursRead == -2147483648) {
if ((this.line.charAt (this.next[0])).charCodeAt (0) == 91) {
this.jvxlData.contourValues = this.params.contoursDiscrete = this.parseFloatArray ();
org.jmol.util.Logger.info ("JVXL read: contourValues " + org.jmol.util.Escape.escapeArray (this.jvxlData.contourValues));
this.jvxlData.contourColixes = this.params.contourColixes = org.jmol.util.Colix.getColixArray (this.getQuotedStringNext ());
this.jvxlData.contourColors = org.jmol.util.Colix.getHexCodes (this.jvxlData.contourColixes);
org.jmol.util.Logger.info ("JVXL read: contourColixes " + this.jvxlData.contourColors);
this.params.nContours = this.jvxlData.contourValues.length;
}} else {
if (nContoursRead < 0) {
nContoursRead = -1 - nContoursRead;
this.params.contourFromZero = false;
}if (nContoursRead != 0 && this.params.nContours == 0) {
this.params.nContours = nContoursRead;
org.jmol.util.Logger.info ("JVXL read: contours " + this.params.nContours);
}}} else {
this.params.isContoured = false;
}this.jvxlData.isJvxlPrecisionColor = (param1 == -1 && param2 == -2 || param3 < 0);
this.params.isBicolorMap = (param1 > 0 && param2 < 0);
this.jvxlDataIsColorMapped = (param3 != 0);
this.jvxlDataIs2dContour = (this.jvxlDataIsColorMapped && this.params.isContoured);
if (this.params.isBicolorMap || this.params.colorBySign) this.jvxlCutoff = 0;
this.surfaceDataCount = (param1 < -1 ? -1 - param1 : param1 > 0 ? param1 : 0);
if (param1 == -1) this.edgeDataCount = 0;
 else this.edgeDataCount = (param2 < -1 ? -param2 : param2 > 0 ? param2 : 0);
this.colorDataCount = (this.params.isBicolorMap ? -param2 : param3 < -1 ? -param3 : param3 > 0 ? param3 : 0);
if (this.params.colorBySign) this.params.isBicolorMap = true;
var dataMin = NaN;
var dataMax = NaN;
var red = NaN;
var blue = NaN;
var insideOut = (this.line.indexOf ("insideOut") >= 0);
if (this.jvxlDataIsColorMapped) {
dataMin = this.parseFloat ();
dataMax = this.parseFloat ();
red = this.parseFloat ();
blue = this.parseFloat ();
}this.jvxlSetColorRanges (dataMin, dataMax, red, blue, insideOut);
}, $fz.isPrivate = true, $fz), "~B");
Clazz.defineMethod (c$, "readSurfaceData", 
function (isMapDataIgnored) {
this.thisInside = !this.params.isContoured;
if (this.readSurfaceData ()) return ;
this.readVolumeFileSurfaceData ();
}, "~B");
Clazz.overrideMethod (c$, "jvxlSkipData", 
function (nPoints, doSkipColorData) {
if (this.surfaceDataCount > 0) this.jvxlSkipDataBlock (nPoints, true);
if (this.edgeDataCount > 0) this.jvxlSkipDataBlock (this.edgeDataCount, false);
if (this.jvxlDataIsColorMapped && doSkipColorData) this.jvxlSkipDataBlock (this.colorDataCount, false);
}, "~N,~B");
Clazz.defineMethod (c$, "jvxlSkipDataBlock", 
($fz = function (nPoints, isInt) {
var n = 0;
while (n < nPoints) {
this.readLine ();
n += (isInt ? this.countData (this.line) : org.jmol.jvxl.data.JvxlCoder.jvxlUncompressString (this.line).length);
}
}, $fz.isPrivate = true, $fz), "~N,~B");
Clazz.defineMethod (c$, "countData", 
($fz = function (str) {
var $private = Clazz.checkPrivateMethod (arguments);
if ($private != null) {
return $private.apply (this, arguments);
}
var count = 0;
var n = this.parseIntStr (str);
while (n != -2147483648) {
count += n;
n = this.parseIntNext (str);
}
return count;
}, $fz.isPrivate = true, $fz), "~S");
});
