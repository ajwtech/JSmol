Clazz.declarePackage ("org.jmol.renderbio");
Clazz.load (["org.jmol.renderbio.BioShapeRenderer"], "org.jmol.renderbio.BackboneRenderer", ["org.jmol.util.Colix"], function () {
c$ = Clazz.declareType (org.jmol.renderbio, "BackboneRenderer", org.jmol.renderbio.BioShapeRenderer);
Clazz.overrideMethod (c$, "renderBioShape", 
function (bioShape) {
var isDataFrame = this.viewer.isJmolDataFrameForModel (bioShape.modelIndex);
for (var i = this.bsVisible.nextSetBit (0); i >= 0; i = this.bsVisible.nextSetBit (i + 1)) {
var atomA = this.modelSet.atoms[this.leadAtomIndices[i]];
var atomB = this.modelSet.atoms[this.leadAtomIndices[i + 1]];
if (atomA.getNBackbonesDisplayed () == 0 || atomB.getNBackbonesDisplayed () == 0 || this.modelSet.isAtomHidden (atomB.getIndex ())) continue ;if (!isDataFrame && atomA.distance (atomB) > 10) continue ;var xA = atomA.screenX;
var yA = atomA.screenY;
var zA = atomA.screenZ;
var xB = atomB.screenX;
var yB = atomB.screenY;
var zB = atomB.screenZ;
var colixA = org.jmol.util.Colix.getColixInherited (this.colixes[i], atomA.getColix ());
var colixB = org.jmol.util.Colix.getColixInherited (this.colixes[i + 1], atomB.getColix ());
this.mad = this.mads[i];
if (this.mad < 0) {
this.g3d.drawLine (colixA, colixB, xA, yA, zA, xB, yB, zB);
} else {
var width = (this.exportType == 1 ? this.mad : this.viewer.scaleToScreen (Math.floor ((zA + zB) / 2), this.mad));
this.g3d.fillCylinder (colixA, colixB, 3, width, xA, yA, zA, xB, yB, zB);
}}
}, "org.jmol.shapebio.BioShape");
});
