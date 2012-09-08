﻿Clazz.declarePackage ("org.jmol.shape");
Clazz.load (["org.jmol.shape.FontLineShape"], "org.jmol.shape.Bbcage", null, function () {
c$ = Clazz.decorateAsClass (function () {
this.isVisible = false;
this.mad = 0;
Clazz.instantialize (this, arguments);
}, org.jmol.shape, "Bbcage", org.jmol.shape.FontLineShape);
Clazz.defineMethod (c$, "initShape", 
function () {
Clazz.superCall (this, org.jmol.shape.Bbcage, "initShape", []);
this.font3d = this.gdata.getFont3D (14);
this.myType = "boundBox";
});
Clazz.overrideMethod (c$, "setVisibilityFlags", 
function (bs) {
this.isVisible = ((this.mad = this.viewer.getObjectMad (4)) != 0);
if (!this.isVisible) return ;
var bboxModels = this.viewer.getBoundBoxModels ();
if (bboxModels == null) return ;
for (var i = bs.nextSetBit (0); i >= 0; i = bs.nextSetBit (i + 1)) if (bboxModels.get (i)) return ;

this.isVisible = false;
}, "java.util.BitSet");
});
