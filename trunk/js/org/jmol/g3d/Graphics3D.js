Clazz.declarePackage ("org.jmol.g3d");
Clazz.load (["javax.vecmath.Vector3f"], "org.jmol.g3d.Graphics3D", ["java.lang.Float", "$.StringBuffer", "javax.vecmath.Point3f", "org.jmol.constant.EnumPalette", "org.jmol.g3d.Colix3D", "$.Sphere3D", "org.jmol.util.ColorUtil", "$.Escape", "$.Logger", "$.Normix", "$.Parser", "$.Shader"], function () {
c$ = Clazz.decorateAsClass (function () {
this.normix3d = null;
this.inGreyscaleMode = false;
this.changeableColixMap = null;
this.vectorAB = null;
this.vectorAC = null;
this.vectorNormal = null;
this.currentShadeIndex = 0;
this.shadesCurrent = null;
this.argbCurrent = null;
this.argbNoisyUp = null;
this.argbNoisyDn = null;
Clazz.instantialize (this, arguments);
}, org.jmol.g3d, "Graphics3D");
Clazz.prepareFields (c$, function () {
this.changeableColixMap =  Clazz.newArray (16, 0);
this.vectorAB =  new javax.vecmath.Vector3f ();
this.vectorAC =  new javax.vecmath.Vector3f ();
this.vectorNormal =  new javax.vecmath.Vector3f ();
});
c$.getInverseNormix = Clazz.defineMethod (c$, "getInverseNormix", 
function (normix) {
return org.jmol.util.Normix.getInverseNormix (normix);
}, "~N");
c$.getNormix = Clazz.defineMethod (c$, "getNormix", 
function (vector, bsTemp) {
return org.jmol.util.Normix.getNormix (vector, bsTemp);
}, "javax.vecmath.Vector3f,java.util.BitSet");
c$.get2SidedNormix = Clazz.defineMethod (c$, "get2SidedNormix", 
function (vector, bsTemp) {
return org.jmol.util.Normix.get2SidedNormix (vector, bsTemp);
}, "javax.vecmath.Vector3f,java.util.BitSet");
c$.getNormixVector = Clazz.defineMethod (c$, "getNormixVector", 
function (normix) {
return org.jmol.util.Normix.getVector (normix);
}, "~N");
Clazz.defineMethod (c$, "isDirectedTowardsCamera", 
function (normix) {
return this.normix3d.isDirectedTowardsCamera (normix);
}, "~N");
Clazz.defineMethod (c$, "getTransformedVertexVectors", 
function () {
return this.normix3d.getTransformedVectors ();
});
Clazz.makeConstructor (c$, 
function (apiPlatform) {
}, "org.jmol.api.ApiPlatform");
c$.getColix = Clazz.defineMethod (c$, "getColix", 
function (argb) {
return org.jmol.g3d.Colix3D.getColix (argb);
}, "~N");
Clazz.defineMethod (c$, "getBgColixes", 
function (bgcolixes) {
return bgcolixes;
}, "~A");
c$.getColixTranslucent = Clazz.defineMethod (c$, "getColixTranslucent", 
function (argb) {
var a = (argb >> 24) & 0xFF;
if (a == 0xFF) return org.jmol.g3d.Graphics3D.getColix (argb);
return org.jmol.g3d.Graphics3D.getColixTranslucent (org.jmol.g3d.Graphics3D.getColix (argb), true, a / 255);
}, "~N");
c$.getHexCodes = Clazz.defineMethod (c$, "getHexCodes", 
function (colixes) {
if (colixes == null) return null;
var s =  new StringBuffer ();
for (var i = 0; i < colixes.length; i++) s.append (i == 0 ? "" : " ").append (org.jmol.g3d.Graphics3D.getHexCode (colixes[i]));

return s.toString ();
}, "~A");
c$.getHexCode = Clazz.defineMethod (c$, "getHexCode", 
function (colix) {
return org.jmol.util.Escape.escapeColor (org.jmol.g3d.Graphics3D.getArgb (colix));
}, "~N");
c$.getColixArray = Clazz.defineMethod (c$, "getColixArray", 
function (colorNames) {
if (colorNames == null || colorNames.length == 0) return null;
var colors = org.jmol.util.Parser.getTokens (colorNames);
var colixes =  Clazz.newArray (colors.length, 0);
for (var j = 0; j < colors.length; j++) {
colixes[j] = org.jmol.g3d.Graphics3D.getColix (org.jmol.util.ColorUtil.getArgbFromString (colors[j]));
if (colixes[j] == 0) return null;
}
return colixes;
}, "~S");
c$.getColix = Clazz.defineMethod (c$, "getColix", 
function (colorName) {
var argb = org.jmol.util.ColorUtil.getArgbFromString (colorName);
if (argb != 0) return org.jmol.g3d.Colix3D.getColix (argb);
if ("none".equalsIgnoreCase (colorName)) return 0;
if ("opaque".equalsIgnoreCase (colorName)) return 1;
return 2;
}, "~S");
c$.applyColorTranslucencyLevel = Clazz.defineMethod (c$, "applyColorTranslucencyLevel", 
($fz = function (colix, translucentLevel) {
if (translucentLevel == 0) return (colix & -30721);
if (translucentLevel < 0) return (colix & -30721 | 30720);
if (Float.isNaN (translucentLevel) || translucentLevel >= 255 || translucentLevel == 1.0) return ((colix & -30721) | 16384);
var iLevel = Math.round ((translucentLevel < 1 ? translucentLevel * 256 : translucentLevel <= 9 ? (Math.round ((translucentLevel - 1))) << 5 : translucentLevel < 15 ? 256 : translucentLevel));
iLevel = (iLevel >> 5) % 16;
return (colix & -30721 | (iLevel << 11));
}, $fz.isPrivate = true, $fz), "~N,~N");
c$.getColixTranslucencyLevel = Clazz.defineMethod (c$, "getColixTranslucencyLevel", 
function (colix) {
var logAlpha = (colix >> 11) & 0xF;
switch (logAlpha) {
case 0:
return 0;
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
return logAlpha << 5;
case 15:
return -1;
default:
return 255;
}
}, "~N");
c$.getColixTranslucencyFractional = Clazz.defineMethod (c$, "getColixTranslucencyFractional", 
function (colix) {
var translevel = org.jmol.g3d.Graphics3D.getColixTranslucencyLevel (colix);
return (translevel == -1 ? 0.5 : translevel == 0 ? 0 : translevel == 255 ? 1 : translevel / 256);
}, "~N");
c$.getColix = Clazz.defineMethod (c$, "getColix", 
function (obj) {
if (obj == null) return 0;
if (Clazz.instanceOf (obj, org.jmol.constant.EnumPalette)) return ((obj) === org.jmol.constant.EnumPalette.NONE ? 0 : 2);
if (Clazz.instanceOf (obj, Integer)) return org.jmol.g3d.Colix3D.getColix ((obj).intValue ());
if (Clazz.instanceOf (obj, String)) return org.jmol.g3d.Graphics3D.getColix (obj);
if (Clazz.instanceOf (obj, Byte)) return ((obj).byteValue () == 0 ? 0 : 2);
if (org.jmol.util.Logger.debugging) {
org.jmol.util.Logger.debug ("?? getColix(" + obj + ")");
}return 22;
}, "~O");
c$.getColixTranslucent = Clazz.defineMethod (c$, "getColixTranslucent", 
function (colix, isTranslucent, translucentLevel) {
if (colix == 0) colix = 1;
colix &= -30721;
return (isTranslucent ? org.jmol.g3d.Graphics3D.applyColorTranslucencyLevel (colix, translucentLevel) : colix);
}, "~N,~B,~N");
c$.copyColixTranslucency = Clazz.defineMethod (c$, "copyColixTranslucency", 
function (colixFrom, colixTo) {
return org.jmol.g3d.Graphics3D.getColixTranslucent (colixTo, org.jmol.g3d.Graphics3D.isColixTranslucent (colixFrom), org.jmol.g3d.Graphics3D.getColixTranslucencyLevel (colixFrom));
}, "~N,~N");
Clazz.defineMethod (c$, "getColorArgbOrGray", 
function (colix) {
if (colix < 0) colix = this.changeableColixMap[colix & 2047];
return (this.inGreyscaleMode ? org.jmol.g3d.Colix3D.getArgbGreyscale (colix) : org.jmol.g3d.Colix3D.getArgb (colix));
}, "~N");
Clazz.defineMethod (c$, "getShades", 
function (colix) {
if (colix < 0) colix = this.changeableColixMap[colix & 2047];
return (this.inGreyscaleMode ? org.jmol.g3d.Colix3D.getShadesGreyscale (colix) : org.jmol.g3d.Colix3D.getShades (colix));
}, "~N");
c$.getChangeableColixIndex = Clazz.defineMethod (c$, "getChangeableColixIndex", 
function (colix) {
return (colix >= 0 ? -1 : (colix & 2047));
}, "~N");
c$.isColixTranslucent = Clazz.defineMethod (c$, "isColixTranslucent", 
function (colix) {
return ((colix & 30720) != 0);
}, "~N");
c$.getColixInherited = Clazz.defineMethod (c$, "getColixInherited", 
function (myColix, parentColix) {
switch (myColix) {
case 0:
return parentColix;
case 1:
return (parentColix & -30721);
default:
return ((myColix & -30721) == 1 ? (parentColix & -30721 | myColix & 30720) : myColix);
}
}, "~N,~N");
c$.isColixColorInherited = Clazz.defineMethod (c$, "isColixColorInherited", 
function (colix) {
switch (colix) {
case 0:
case 1:
return true;
default:
return (colix & -30721) == 1;
}
}, "~N");
c$.getArgb = Clazz.defineMethod (c$, "getArgb", 
function (colix) {
return org.jmol.g3d.Colix3D.getArgb (colix);
}, "~N");
Clazz.defineMethod (c$, "getChangeableColix", 
function (id, argb) {
if (id >= this.changeableColixMap.length) {
var t =  Clazz.newArray (id + 16, 0);
System.arraycopy (this.changeableColixMap, 0, t, 0, this.changeableColixMap.length);
this.changeableColixMap = t;
}if (this.changeableColixMap[id] == 0) this.changeableColixMap[id] = org.jmol.g3d.Colix3D.getColix (argb);
return (id | -32768);
}, "~N,~N");
Clazz.defineMethod (c$, "changeColixArgb", 
function (id, argb) {
if (id < this.changeableColixMap.length && this.changeableColixMap[id] != 0) this.changeableColixMap[id] = org.jmol.g3d.Colix3D.getColix (argb);
}, "~N,~N");
c$.flushCaches = Clazz.defineMethod (c$, "flushCaches", 
($fz = function () {
org.jmol.g3d.Colix3D.flushShades ();
org.jmol.g3d.Sphere3D.flushSphereCache ();
}, $fz.isPrivate = true, $fz));
c$.getLightSource = Clazz.defineMethod (c$, "getLightSource", 
function () {
return  new javax.vecmath.Point3f (org.jmol.util.Shader.xLight, org.jmol.util.Shader.yLight, org.jmol.util.Shader.zLight);
});
c$.setSpecular = Clazz.defineMethod (c$, "setSpecular", 
function (val) {
if (org.jmol.util.Shader.specularOn == val) return ;
($t$ = org.jmol.util.Shader.specularOn = val, org.jmol.util.Shader.prototype.specularOn = org.jmol.util.Shader.specularOn, $t$);
org.jmol.g3d.Graphics3D.flushCaches ();
}, "~B");
c$.getSpecular = Clazz.defineMethod (c$, "getSpecular", 
function () {
return org.jmol.util.Shader.specularOn;
});
c$.setZShadePower = Clazz.defineMethod (c$, "setZShadePower", 
function (val) {
($t$ = org.jmol.util.Shader.zPower = val, org.jmol.util.Shader.prototype.zPower = org.jmol.util.Shader.zPower, $t$);
}, "~N");
c$.getZShadePower = Clazz.defineMethod (c$, "getZShadePower", 
function () {
return org.jmol.util.Shader.zPower;
});
c$.setAmbientPercent = Clazz.defineMethod (c$, "setAmbientPercent", 
function (val) {
if (org.jmol.util.Shader.ambientPercent == val) return ;
($t$ = org.jmol.util.Shader.ambientPercent = val, org.jmol.util.Shader.prototype.ambientPercent = org.jmol.util.Shader.ambientPercent, $t$);
($t$ = org.jmol.util.Shader.ambientFraction = val / 100, org.jmol.util.Shader.prototype.ambientFraction = org.jmol.util.Shader.ambientFraction, $t$);
org.jmol.g3d.Graphics3D.flushCaches ();
}, "~N");
c$.getAmbientPercent = Clazz.defineMethod (c$, "getAmbientPercent", 
function () {
return org.jmol.util.Shader.ambientPercent;
});
c$.setDiffusePercent = Clazz.defineMethod (c$, "setDiffusePercent", 
function (val) {
if (org.jmol.util.Shader.diffusePercent == val) return ;
($t$ = org.jmol.util.Shader.diffusePercent = val, org.jmol.util.Shader.prototype.diffusePercent = org.jmol.util.Shader.diffusePercent, $t$);
($t$ = org.jmol.util.Shader.diffuseFactor = val / 100, org.jmol.util.Shader.prototype.diffuseFactor = org.jmol.util.Shader.diffuseFactor, $t$);
org.jmol.g3d.Graphics3D.flushCaches ();
}, "~N");
c$.getDiffusePercent = Clazz.defineMethod (c$, "getDiffusePercent", 
function () {
return org.jmol.util.Shader.diffusePercent;
});
c$.setPhongExponent = Clazz.defineMethod (c$, "setPhongExponent", 
function (val) {
if (org.jmol.util.Shader.phongExponent == val && org.jmol.util.Shader.usePhongExponent) return ;
($t$ = org.jmol.util.Shader.phongExponent = val, org.jmol.util.Shader.prototype.phongExponent = org.jmol.util.Shader.phongExponent, $t$);
var x = (Math.log (val) / Math.log (2));
($t$ = org.jmol.util.Shader.usePhongExponent = (x != Math.round (x)), org.jmol.util.Shader.prototype.usePhongExponent = org.jmol.util.Shader.usePhongExponent, $t$);
if (!org.jmol.util.Shader.usePhongExponent) ($t$ = org.jmol.util.Shader.specularExponent = Math.round (x), org.jmol.util.Shader.prototype.specularExponent = org.jmol.util.Shader.specularExponent, $t$);
org.jmol.g3d.Graphics3D.flushCaches ();
}, "~N");
c$.getPhongExponent = Clazz.defineMethod (c$, "getPhongExponent", 
function () {
return org.jmol.util.Shader.phongExponent;
});
c$.setSpecularExponent = Clazz.defineMethod (c$, "setSpecularExponent", 
function (val) {
if (org.jmol.util.Shader.specularExponent == val) return ;
($t$ = org.jmol.util.Shader.specularExponent = val, org.jmol.util.Shader.prototype.specularExponent = org.jmol.util.Shader.specularExponent, $t$);
($t$ = org.jmol.util.Shader.phongExponent = Math.round (Math.pow (2, val)), org.jmol.util.Shader.prototype.phongExponent = org.jmol.util.Shader.phongExponent, $t$);
($t$ = org.jmol.util.Shader.usePhongExponent = false, org.jmol.util.Shader.prototype.usePhongExponent = org.jmol.util.Shader.usePhongExponent, $t$);
org.jmol.g3d.Graphics3D.flushCaches ();
}, "~N");
c$.getSpecularExponent = Clazz.defineMethod (c$, "getSpecularExponent", 
function () {
return org.jmol.util.Shader.specularExponent;
});
c$.setSpecularPercent = Clazz.defineMethod (c$, "setSpecularPercent", 
function (val) {
if (org.jmol.util.Shader.specularPercent == val) return ;
($t$ = org.jmol.util.Shader.specularPercent = val, org.jmol.util.Shader.prototype.specularPercent = org.jmol.util.Shader.specularPercent, $t$);
($t$ = org.jmol.util.Shader.specularFactor = val / 100, org.jmol.util.Shader.prototype.specularFactor = org.jmol.util.Shader.specularFactor, $t$);
org.jmol.g3d.Graphics3D.flushCaches ();
}, "~N");
c$.getSpecularPercent = Clazz.defineMethod (c$, "getSpecularPercent", 
function () {
return org.jmol.util.Shader.specularPercent;
});
c$.setSpecularPower = Clazz.defineMethod (c$, "setSpecularPower", 
function (val) {
if (val < 0) {
org.jmol.g3d.Graphics3D.setSpecularExponent (-val);
return ;
}if (org.jmol.util.Shader.specularPower == val) return ;
($t$ = org.jmol.util.Shader.specularPower = val, org.jmol.util.Shader.prototype.specularPower = org.jmol.util.Shader.specularPower, $t$);
($t$ = org.jmol.util.Shader.intenseFraction = val / 100, org.jmol.util.Shader.prototype.intenseFraction = org.jmol.util.Shader.intenseFraction, $t$);
org.jmol.g3d.Graphics3D.flushCaches ();
}, "~N");
c$.getSpecularPower = Clazz.defineMethod (c$, "getSpecularPower", 
function () {
return org.jmol.util.Shader.specularPower;
});
Clazz.defineMethod (c$, "setColorNoisy", 
function (shadeIndex) {
this.currentShadeIndex = shadeIndex;
this.argbCurrent = this.shadesCurrent[shadeIndex];
this.argbNoisyUp = this.shadesCurrent[shadeIndex < 63 ? shadeIndex + 1 : 63];
this.argbNoisyDn = this.shadesCurrent[shadeIndex > 0 ? shadeIndex - 1 : 0];
}, "~N");
Clazz.defineMethod (c$, "setNoisySurfaceShade", 
function (screenA, screenB, screenC) {
this.vectorAB.set (screenB.x - screenA.x, screenB.y - screenA.y, screenB.z - screenA.z);
var shadeIndex;
if (screenC == null) {
shadeIndex = org.jmol.util.Shader.getShadeIndex (-this.vectorAB.x, -this.vectorAB.y, this.vectorAB.z);
} else {
this.vectorAC.set (screenC.x - screenA.x, screenC.y - screenA.y, screenC.z - screenA.z);
this.vectorAB.cross (this.vectorAB, this.vectorAC);
shadeIndex = this.vectorAB.z >= 0 ? org.jmol.util.Shader.getShadeIndex (-this.vectorAB.x, -this.vectorAB.y, this.vectorAB.z) : org.jmol.util.Shader.getShadeIndex (this.vectorAB.x, this.vectorAB.y, -this.vectorAB.z);
}if (shadeIndex > 56) shadeIndex = 56;
this.setColorNoisy (shadeIndex);
}, "javax.vecmath.Point3i,javax.vecmath.Point3i,javax.vecmath.Point3i");
Clazz.defineMethod (c$, "setWindowParameters", 
function (width, height, antialiasDisplay) {
}, "~N,~N,~B");
c$.getFontStyleID = Clazz.defineMethod (c$, "getFontStyleID", 
function (fontface) {
return -1;
}, "~S");
Clazz.defineMethod (c$, "isInDisplayRange", 
function (screenX, screenY) {
return false;
}, "~N,~N");
Clazz.defineMethod (c$, "isClippedZ", 
function (screenZ) {
return false;
}, "~N");
Clazz.defineMethod (c$, "isAntialiased", 
function () {
return false;
});
Clazz.defineMethod (c$, "getSlab", 
function () {
return 100;
});
Clazz.defineMethod (c$, "getDepth", 
function () {
return 0;
});
Clazz.defineMethod (c$, "currentlyRendering", 
function () {
return false;
});
Clazz.defineMethod (c$, "renderBackground", 
function () {
});
Clazz.defineMethod (c$, "setGreyscaleMode", 
function (b) {
}, "~B");
Clazz.defineMethod (c$, "releaseScreenImage", 
function () {
});
Clazz.defineMethod (c$, "getFont3D", 
function (fontFace, fontStyle, fontSize) {
return null;
}, "~S,~S,~N");
Clazz.defineMethod (c$, "destroy", 
function () {
});
Clazz.defineMethod (c$, "setBackgroundTransparent", 
function (b) {
}, "~B");
Clazz.defineMethod (c$, "setBackgroundArgb", 
function (argb) {
}, "~N");
Clazz.defineMethod (c$, "setSlabAndDepthValues", 
function (slabValue, depthValue, zShadeEnabled, zSlabValue, zDepthValue) {
}, "~N,~N,~B,~N,~N");
Clazz.defineMethod (c$, "isDisplayAntialiased", 
function () {
return false;
});
Clazz.defineStatics (c$,
"NORMIX_NULL", 9999,
"EXPORT_NOT", 0,
"ENDCAPS_NONE", 0,
"ENDCAPS_OPEN", 1,
"ENDCAPS_FLAT", 2,
"ENDCAPS_SPHERICAL", 3,
"ENDCAPS_OPENEND", 4,
"BLACK", 4,
"ORANGE", 5,
"PINK", 6,
"BLUE", 7,
"WHITE", 8,
"CYAN", 9,
"RED", 10,
"GREEN", 11,
"GRAY", 12,
"SILVER", 13,
"LIME", 14,
"MAROON", 15,
"NAVY", 16,
"OLIVE", 17,
"PURPLE", 18,
"TEAL", 19,
"MAGENTA", 20,
"YELLOW", 21,
"HOTPINK", 22,
"GOLD", 23,
"UNMASK_CHANGEABLE_TRANSLUCENT", 0x07FF,
"CHANGEABLE_MASK", 0x8000,
"LAST_AVAILABLE_COLIX", 2047,
"TRANSLUCENT_SHIFT", 11,
"ALPHA_SHIFT", 13,
"TRANSLUCENT_MASK", 30720,
"TRANSLUCENT_SCREENED", 30720,
"TRANSPARENT", 16384,
"TRANSLUCENT_50", 8192,
"OPAQUE_MASK", -30721,
"INHERIT_ALL", 0,
"INHERIT_COLOR", 1,
"USE_PALETTE", 2,
"RAW_RGB", 3,
"SPECIAL_COLIX_MAX", 4);
});
