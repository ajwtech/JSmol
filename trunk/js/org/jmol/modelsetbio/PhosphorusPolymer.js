Clazz.declarePackage ("org.jmol.modelsetbio");
Clazz.load (["org.jmol.modelsetbio.BioPolymer"], "org.jmol.modelsetbio.PhosphorusPolymer", null, function () {
c$ = Clazz.declareType (org.jmol.modelsetbio, "PhosphorusPolymer", org.jmol.modelsetbio.BioPolymer);
Clazz.defineMethod (c$, "getPdbData", 
function (viewer, ctype, qtype, mStep, derivType, bsAtoms, bsSelected, bothEnds, isDraw, addHeader, tokens, pdbATOM, pdbCONECT, bsWritten) {
org.jmol.modelsetbio.BioPolymer.getPdbData (viewer, this, ctype, qtype, mStep, derivType, bsAtoms, bsSelected, bothEnds, isDraw, addHeader, tokens, pdbATOM, pdbCONECT, bsWritten);
}, "org.jmol.viewer.Viewer,~S,~S,~N,~N,javax.util.BitSet,javax.util.BitSet,~B,~B,~B,~A,org.jmol.util.OutputStringBuffer,StringBuffer,javax.util.BitSet");
});
