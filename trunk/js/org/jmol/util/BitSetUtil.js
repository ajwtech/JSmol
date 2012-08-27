Clazz.declarePackage ("org.jmol.util");
Clazz.load (["java.util.BitSet"], "org.jmol.util.BitSetUtil", null, function () {
c$ = Clazz.declareType (org.jmol.util, "BitSetUtil");
c$.setBit = Clazz.defineMethod (c$, "setBit", 
function (i) {
var bs =  new java.util.BitSet (i + 1);
bs.set (i);
return bs;
}, "~N");
c$.areEqual = Clazz.defineMethod (c$, "areEqual", 
function (a, b) {
return (a == null || b == null ? a == null && b == null : a.equals (b));
}, "java.util.BitSet,java.util.BitSet");
c$.haveCommon = Clazz.defineMethod (c$, "haveCommon", 
function (a, b) {
return (a == null || b == null ? false : a.intersects (b));
}, "java.util.BitSet,java.util.BitSet");
c$.cardinalityOf = Clazz.defineMethod (c$, "cardinalityOf", 
function (bs) {
return (bs == null ? 0 : bs.cardinality ());
}, "java.util.BitSet");
c$.newBitSet = Clazz.defineMethod (c$, "newBitSet", 
function (i0, i1) {
var bs =  new java.util.BitSet (i1);
bs.set (i0, i1);
return bs;
}, "~N,~N");
c$.setAll = Clazz.defineMethod (c$, "setAll", 
function (n) {
var bs =  new java.util.BitSet (n);
bs.set (0, n);
return bs;
}, "~N");
c$.andNot = Clazz.defineMethod (c$, "andNot", 
function (a, b) {
if (b != null && a != null) a.andNot (b);
return a;
}, "java.util.BitSet,java.util.BitSet");
c$.copy = Clazz.defineMethod (c$, "copy", 
function (bs) {
return bs == null ? null : bs.clone ();
}, "java.util.BitSet");
c$.copy = Clazz.defineMethod (c$, "copy", 
function (a, b) {
if (a == null || b == null) return null;
b.clear ();
b.or (a);
return b;
}, "java.util.BitSet,java.util.BitSet");
c$.copyInvert = Clazz.defineMethod (c$, "copyInvert", 
function (bs, n) {
return (bs == null ? null : org.jmol.util.BitSetUtil.andNot (org.jmol.util.BitSetUtil.setAll (n), bs));
}, "java.util.BitSet,~N");
c$.invertInPlace = Clazz.defineMethod (c$, "invertInPlace", 
function (bs, n) {
return org.jmol.util.BitSetUtil.copy (org.jmol.util.BitSetUtil.copyInvert (bs, n), bs);
}, "java.util.BitSet,~N");
c$.toggleInPlace = Clazz.defineMethod (c$, "toggleInPlace", 
function (a, b) {
if (a.equals (b)) {
a.clear ();
} else if (org.jmol.util.BitSetUtil.andNot (org.jmol.util.BitSetUtil.copy (b), a).length () == 0) {
org.jmol.util.BitSetUtil.andNot (a, b);
} else {
a.or (b);
}return a;
}, "java.util.BitSet,java.util.BitSet");
c$.deleteBits = Clazz.defineMethod (c$, "deleteBits", 
function (bs, bsDelete) {
if (bs == null || bsDelete == null) return bs;
var ipt = bsDelete.nextSetBit (0);
if (ipt < 0) return bs;
var len = bs.length ();
var lend = Math.min (len, bsDelete.length ());
var i;
for (i = bsDelete.nextClearBit (ipt); i < lend && i >= 0; i = bsDelete.nextClearBit (i + 1)) bs.set (ipt++, bs.get (i));

for (i = lend; i < len; i++) bs.set (ipt++, bs.get (i));

if (ipt < len) bs.clear (ipt, len);
return bs;
}, "java.util.BitSet,java.util.BitSet");
c$.bsNull = c$.prototype.bsNull =  new java.util.BitSet ();
});
