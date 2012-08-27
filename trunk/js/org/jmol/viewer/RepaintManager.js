Clazz.declarePackage ("org.jmol.viewer");
Clazz.load (["javax.vecmath.Point3f"], "org.jmol.viewer.RepaintManager", ["org.jmol.util.Logger", "org.jmol.viewer.JmolConstants"], function () {
c$ = Clazz.decorateAsClass (function () {
this.viewer = null;
this.shapeManager = null;
this.renderers = null;
this.holdRepaint = 0;
this.repaintPending = false;
this.logTime = false;
this.bsAtoms = null;
this.ptOffset = null;
Clazz.instantialize (this, arguments);
}, org.jmol.viewer, "RepaintManager");
Clazz.prepareFields (c$, function () {
this.ptOffset =  new javax.vecmath.Point3f ();
});
Clazz.makeConstructor (c$, 
function (viewer, shapeManager) {
this.viewer = viewer;
this.shapeManager = shapeManager;
}, "org.jmol.viewer.Viewer,org.jmol.viewer.ShapeManager");
Clazz.defineMethod (c$, "pushHoldRepaint", 
function () {
++this.holdRepaint;
});
Clazz.defineMethod (c$, "popHoldRepaint", 
function (andRepaint) {
--this.holdRepaint;
if (this.holdRepaint <= 0) {
this.holdRepaint = 0;
if (andRepaint) {
this.repaintPending = true;
this.viewer.repaint ();
}}}, "~B");
Clazz.defineMethod (c$, "refresh", 
function () {
if (this.repaintPending) return false;
this.repaintPending = true;
if (this.holdRepaint == 0) {
this.viewer.repaint ();
}return true;
});
Clazz.defineMethod (c$, "repaintDone", 
function () {
this.repaintPending = false;
this.notify ();
});
Clazz.defineMethod (c$, "requestRepaintAndWait", 
function () {
this.viewer.repaint ();
try {
this.wait (this.viewer.getRepaintWait ());
if (this.repaintPending) {
org.jmol.util.Logger.error ("repaintManager requestRepaintAndWait timeout");
this.repaintDone ();
}} catch (e) {
if (Clazz.instanceOf (e, InterruptedException)) {
} else {
throw e;
}
}
});
Clazz.defineMethod (c$, "clear", 
function (iShape) {
if (this.renderers == null) return ;
if (iShape >= 0) this.renderers[iShape] = null;
 else for (var i = 0; i < 35; ++i) this.renderers[i] = null;

}, "~N");
Clazz.defineMethod (c$, "getRenderer", 
($fz = function (shapeID, g3d) {
if (this.renderers[shapeID] != null) return this.renderers[shapeID];
var className = org.jmol.viewer.JmolConstants.getShapeClassName (shapeID) + "Renderer";
try {
var shapeClass = Class.forName (className);
var renderer = shapeClass.newInstance ();
renderer.setViewerG3dShapeID (this.viewer, g3d, shapeID);
return this.renderers[shapeID] = renderer;
} catch (e) {
if (Clazz.instanceOf (e, Exception)) {
org.jmol.util.Logger.error ("Could not instantiate renderer:" + className, e);
return null;
} else {
throw e;
}
}
}, $fz.isPrivate = true, $fz), "~N,org.jmol.g3d.Graphics3D");
Clazz.defineMethod (c$, "render", 
function (g3d, modelSet, isFirstPass) {
if (modelSet == null || !this.viewer.mustRenderFlag ()) return ;
this.logTime = false;
if (this.logTime) org.jmol.util.Logger.startTimer ();
this.viewer.finalizeTransformParameters ();
try {
g3d.renderBackground ();
if (isFirstPass) {
var minMax = this.shapeManager.transformAtoms (this.bsAtoms, this.ptOffset);
this.bsAtoms = null;
if (minMax != null) this.renderCrossHairs (g3d, minMax);
this.renderSelectionRubberBand (g3d);
}if (this.renderers == null) this.renderers =  new Array (35);
for (var i = 0; i < 35 && g3d.currentlyRendering (); ++i) {
var shape = this.shapeManager.getShape (i);
if (shape == null) continue ;this.getRenderer (i, g3d).render (g3d, modelSet, shape);
if (this.logTime) org.jmol.util.Logger.checkTimer ("render time " + org.jmol.viewer.JmolConstants.getShapeClassName (i));
}
} catch (e) {
if (Clazz.instanceOf (e, Exception)) {
e.printStackTrace ();
org.jmol.util.Logger.error ("rendering error? ");
} else {
throw e;
}
}
}, "org.jmol.g3d.Graphics3D,org.jmol.modelset.ModelSet,~B");
Clazz.defineMethod (c$, "setSelectedTranslation", 
function (bsAtoms, xyz, xy) {
this.bsAtoms = bsAtoms;
switch (xyz) {
case 'X':
case 'x':
this.ptOffset.x += xy;
break;
case 'Y':
case 'y':
this.ptOffset.y += xy;
break;
case 'Z':
case 'z':
this.ptOffset.z += xy;
break;
}
}, "java.util.BitSet,~N,~N");
Clazz.defineMethod (c$, "renderCrossHairs", 
($fz = function (g3d, minMax) {
}, $fz.isPrivate = true, $fz), "org.jmol.g3d.Graphics3D,~A");
Clazz.defineMethod (c$, "renderSelectionRubberBand", 
($fz = function (g3d) {
}, $fz.isPrivate = true, $fz), "org.jmol.g3d.Graphics3D");
Clazz.defineMethod (c$, "renderExport", 
function (type, g3d, modelSet, fName) {
return null;
}, "~S,org.jmol.g3d.Graphics3D,org.jmol.modelset.ModelSet,~S");
});
