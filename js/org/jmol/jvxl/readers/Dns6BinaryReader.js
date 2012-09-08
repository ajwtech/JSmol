﻿Clazz.declarePackage ("org.jmol.jvxl.readers");
Clazz.load (["org.jmol.jvxl.readers.MapFileReader"], "org.jmol.jvxl.readers.Dsn6BinaryReader", ["java.io.ByteArrayInputStream", "$.DataInputStream", "java.lang.StringBuffer", "org.jmol.util.BinaryDocument", "$.Logger"], function () {
c$ = Clazz.decorateAsClass (function () {
this.byteFactor = 0;
this.xyCount = 0;
this.nBrickX = 0;
this.nBrickY = 0;
this.brickLayerVoxelCount = 0;
this.brickLayerByteCount = 0;
this.brickRowByteCount = 0;
this.brickLayer = null;
this.pt = 0;
Clazz.instantialize (this, arguments);
}, org.jmol.jvxl.readers, "Dsn6BinaryReader", org.jmol.jvxl.readers.MapFileReader);
Clazz.makeConstructor (c$, 
function (sg, fileName, data) {
Clazz.superConstructor (this, org.jmol.jvxl.readers.Dsn6BinaryReader, [sg, null]);
this.binarydoc =  new org.jmol.util.BinaryDocument ();
if (data == null) this.binarydoc.setStream (sg.getAtomDataServer ().getBufferedInputStream (fileName), true);
 else this.binarydoc.setStream ( new java.io.DataInputStream ( new java.io.ByteArrayInputStream (data.getBytes ())));
if (this.params.thePlane == null) this.params.insideOut = !this.params.insideOut;
this.nSurfaces = 1;
}, "org.jmol.jvxl.readers.SurfaceGenerator,~S,~S");
Clazz.overrideMethod (c$, "readParameters", 
function () {
var header =  Clazz.newArray (19, 0);
for (var i = 0; i < 19; i++) header[i] = this.binarydoc.readShort ();

if (header[18] != 100) {
this.binarydoc.setIsBigEndian (false);
for (var i = 0; i < 19; i++) header[i] = org.jmol.util.BinaryDocument.swapBytes (header[i]);

}this.nxyzStart[0] = header[0];
this.nxyzStart[1] = header[1];
this.nxyzStart[2] = header[2];
this.nx = header[3];
this.ny = header[4];
this.nz = header[5];
this.na = header[6];
this.nb = header[7];
this.nc = header[8];
this.a = header[9];
this.b = header[10];
this.c = header[11];
this.alpha = header[12];
this.beta = header[13];
this.gamma = header[14];
var header16 = header[15];
var header17 = header[16];
var scalingFactor = header[17];
var header19 = header[18];
this.maps = 3;
this.mapr = 2;
this.mapc = 1;
this.dmin = (0 - header17) * header19 / header16;
this.dmax = (255 - header17) * header19 / header16;
this.drange = this.dmax - this.dmin;
this.byteFactor = this.drange / 255;
var dminError1 = (0 - header17 - 0.5) * header19 / (header16 - 0.5);
var dminError2 = (0 - header17 + 0.5) * header19 / (header16 + 0.5);
var dmaxError1 = (255 - header17 - 0.5) * header19 / (header16 - 0.5);
var dmaxError2 = (255 - header17 + 0.5) * header19 / (header16 + 0.5);
var dminError = Math.round (((dminError2 - dminError1) / 0.002)) * 0.001;
var dmaxError = Math.round (((dmaxError2 - dmaxError1) / 0.002)) * 0.001;
org.jmol.util.Logger.info ("DNS6 dmin,dmax = " + this.dmin + "+/-" + dminError + "," + this.dmax + "+/-" + dmaxError);
this.a /= scalingFactor;
this.b /= scalingFactor;
this.c /= scalingFactor;
this.alpha /= scalingFactor;
this.beta /= scalingFactor;
this.gamma /= scalingFactor;
this.binarydoc.seek (0x200);
this.getVectorsAndOrigin ();
this.setCutoffAutomatic ();
this.xyCount = this.nx * this.ny;
this.brickLayerVoxelCount = this.xyCount * 8;
this.nBrickX = Math.floor ((this.nx + 7) / 8);
this.nBrickY = Math.floor ((this.ny + 7) / 8);
this.brickRowByteCount = this.nBrickX * 512;
this.brickLayerByteCount = this.brickRowByteCount * this.nBrickY;
this.brickLayer =  Clazz.newArray (this.brickLayerByteCount, 0);
this.jvxlFileHeaderBuffer =  new StringBuffer ();
this.jvxlFileHeaderBuffer.append ("DNS6/O progressive brick data reader\n");
this.jvxlFileHeaderBuffer.append ("see http://www.uoxray.uoregon.edu/tnt/manual/node104.html\n");
});
Clazz.defineMethod (c$, "readBrickLayer", 
($fz = function () {
this.binarydoc.readByteArray (this.brickLayer);
this.pt = 0;
this.nBytes = this.binarydoc.getPosition ();
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "getBrickValue", 
($fz = function (pt) {
var x = pt % this.nx;
var y = (Math.floor (pt / this.nx)) % this.ny;
var z = Math.floor (pt / this.xyCount);
var brickX = x % 8;
var brickY = y % 8;
var brickZ = z % 8;
var bX = Math.floor (x / 8);
var bY = Math.floor (y / 8);
var bPt = bY * 512 * this.nBrickX + bX * 512 + brickZ * 64 + brickY * 8 + brickX;
if (bPt % 2 == 0) bPt++;
 else bPt--;
var value = (this.brickLayer[bPt] + 256) % 256;
return this.dmin + value * this.byteFactor;
}, $fz.isPrivate = true, $fz), "~N");
Clazz.overrideMethod (c$, "nextVoxel", 
function () {
if ((this.pt % this.brickLayerVoxelCount) == 0) this.readBrickLayer ();
return this.getBrickValue (this.pt++);
});
Clazz.overrideMethod (c$, "skipData", 
function (nPoints) {
for (var i = 0; i < nPoints; i++) this.binarydoc.readByte ();

}, "~N");
});