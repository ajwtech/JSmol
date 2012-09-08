Clazz.declarePackage ("org.jmol.util");
Clazz.load (null, "org.jmol.util.FastBitSet", ["java.util.BitSet", "org.jmol.util.Escape"], function () {
c$ = Clazz.decorateAsClass (function () {
this.bitmap = null;
Clazz.instantialize (this, arguments);
}, org.jmol.util, "FastBitSet", null, Cloneable);
Clazz.makeConstructor (c$, 
function () {
this.bitmap = org.jmol.util.FastBitSet.emptyBitmap;
});
Clazz.makeConstructor (c$, 
($fz = function (bitCount) {
this.bitmap =  Clazz.newArray (org.jmol.util.FastBitSet.getWordCountFromBitCount (bitCount), 0);
}, $fz.isPrivate = true, $fz), "~N");
Clazz.makeConstructor (c$, 
function (bitsetToCopy) {
var wordCount = org.jmol.util.FastBitSet.bitmapGetMinimumWordCount (bitsetToCopy.bitmap);
if (wordCount == 0) this.bitmap = org.jmol.util.FastBitSet.emptyBitmap;
 else {
this.bitmap =  Clazz.newArray (wordCount, 0);
System.arraycopy (bitsetToCopy.bitmap, 0, this.bitmap, 0, wordCount);
}}, "org.jmol.util.FastBitSet");
c$.getEmptySet = Clazz.defineMethod (c$, "getEmptySet", 
function () {
return org.jmol.util.FastBitSet.emptySet;
});
c$.allocateBitmap = Clazz.defineMethod (c$, "allocateBitmap", 
function (bitCount) {
return  new org.jmol.util.FastBitSet (bitCount);
}, "~N");
Clazz.defineMethod (c$, "and", 
function (setAnd) {
org.jmol.util.FastBitSet.bitmapAnd (this.bitmap, setAnd.bitmap);
}, "org.jmol.util.FastBitSet");
Clazz.defineMethod (c$, "andNot", 
function (setAndNot) {
org.jmol.util.FastBitSet.bitmapAndNot (this.bitmap, setAndNot.bitmap);
}, "org.jmol.util.FastBitSet");
Clazz.defineMethod (c$, "cardinality", 
function () {
return org.jmol.util.FastBitSet.bitmapGetCardinality (this.bitmap);
});
Clazz.defineMethod (c$, "cardinality", 
function (max) {
var n = org.jmol.util.FastBitSet.bitmapGetCardinality (this.bitmap);
for (var i = this.length (); --i >= max; ) if (this.get (i)) n--;

return n;
}, "~N");
Clazz.defineMethod (c$, "clear", 
function () {
org.jmol.util.FastBitSet.bitmapClear (this.bitmap);
});
Clazz.defineMethod (c$, "clear", 
function (bitIndex) {
if ((bitIndex >> 5) < this.bitmap.length) org.jmol.util.FastBitSet.bitmapClearBit (this.bitmap, bitIndex);
}, "~N");
Clazz.defineMethod (c$, "clear", 
function (fromIndex, toIndex) {
var bitmapCount = org.jmol.util.FastBitSet.bitmapGetSizeInBits (this.bitmap);
if (fromIndex >= bitmapCount) return ;
if (toIndex > bitmapCount) toIndex = bitmapCount;
org.jmol.util.FastBitSet.bitmapClearRange (this.bitmap, fromIndex, toIndex - fromIndex);
}, "~N,~N");
Clazz.overrideMethod (c$, "clone", 
function () {
var bitCount = org.jmol.util.FastBitSet.bitmapGetSizeInBits (this.bitmap);
var result =  new org.jmol.util.FastBitSet (bitCount);
System.arraycopy (this.bitmap, 0, result.bitmap, 0, this.bitmap.length);
return result;
});
Clazz.overrideMethod (c$, "equals", 
function (obj) {
return (Clazz.instanceOf (obj, org.jmol.util.FastBitSet) && org.jmol.util.FastBitSet.bitmapIsEqual (this.bitmap, (obj).bitmap));
}, "~O");
Clazz.defineMethod (c$, "flip", 
function (bitIndex) {
if (this.get (bitIndex)) this.clear (bitIndex);
 else this.set (bitIndex);
}, "~N");
Clazz.defineMethod (c$, "flip", 
function (fromIndex, toIndex) {
for (var i = fromIndex; i < toIndex; ++i) this.flip (i);

}, "~N,~N");
Clazz.defineMethod (c$, "get", 
function (bitIndex) {
return (bitIndex < org.jmol.util.FastBitSet.bitmapGetSizeInBits (this.bitmap) && org.jmol.util.FastBitSet.bitmapGetBit (this.bitmap, bitIndex));
}, "~N");
Clazz.defineMethod (c$, "isEmpty", 
function () {
return org.jmol.util.FastBitSet.bitmapIsEmpty (this.bitmap);
});
Clazz.defineMethod (c$, "length", 
function () {
var i = org.jmol.util.FastBitSet.bitmapGetMinimumWordCount (this.bitmap);
return (i == 0 ? 0 : (i << 5) - org.jmol.util.FastBitSet.numberOfLeadingZeros (this.bitmap[i - 1]));
});
Clazz.defineMethod (c$, "nextSetBit", 
function (fromIndex) {
return org.jmol.util.FastBitSet.bitmapNextSetBit (this.bitmap, fromIndex);
}, "~N");
Clazz.defineMethod (c$, "or", 
function (setOr) {
org.jmol.util.FastBitSet.bitmapOr (this.bitmap = org.jmol.util.FastBitSet.ensureSufficientWords (this.bitmap, setOr.bitmap.length), setOr.bitmap);
}, "org.jmol.util.FastBitSet");
Clazz.defineMethod (c$, "set", 
function (bitIndex) {
org.jmol.util.FastBitSet.bitmapSetBit (this.bitmap = org.jmol.util.FastBitSet.ensureSufficientBits (this.bitmap, bitIndex + 1), bitIndex);
}, "~N");
Clazz.defineMethod (c$, "set", 
function (bitIndex, value) {
if (value) this.set (bitIndex);
 else this.clear (bitIndex);
}, "~N,~B");
Clazz.defineMethod (c$, "set", 
function (fromIndex, toIndex) {
org.jmol.util.FastBitSet.bitmapSetRange (this.bitmap = org.jmol.util.FastBitSet.ensureSufficientBits (this.bitmap, toIndex), fromIndex, toIndex - fromIndex);
}, "~N,~N");
Clazz.defineMethod (c$, "set", 
function (fromIndex, toIndex, value) {
if (value) this.set (fromIndex, toIndex);
 else this.clear (fromIndex, toIndex);
}, "~N,~N,~B");
Clazz.defineMethod (c$, "size", 
function () {
return org.jmol.util.FastBitSet.bitmapGetSizeInBits (this.bitmap);
});
Clazz.defineMethod (c$, "xor", 
function (setXor) {
org.jmol.util.FastBitSet.bitmapXor (this.bitmap = org.jmol.util.FastBitSet.ensureSufficientWords (this.bitmap, setXor.bitmap.length), setXor.bitmap);
}, "org.jmol.util.FastBitSet");
Clazz.defineMethod (c$, "toBitSet", 
function () {
var bs =  new java.util.BitSet ();
var i = org.jmol.util.FastBitSet.bitmapGetSizeInBits (this.bitmap);
while (--i >= 0) if (this.get (i)) bs.set (i);

return bs;
});
Clazz.overrideMethod (c$, "toString", 
function () {
return org.jmol.util.Escape.escape (this.toBitSet ());
});
Clazz.overrideMethod (c$, "hashCode", 
function () {
var h = 1234;
for (var i = this.bitmap.length; --i >= 0; ) h ^= this.bitmap[i] * (i + 1);

return ((h >> 32) ^ h);
});
c$.bitmapGetBit = Clazz.defineMethod (c$, "bitmapGetBit", 
($fz = function (bitmap, i) {
return ((bitmap[(i >> 5)] >> (i & 31)) & 1) != 0;
}, $fz.isPrivate = true, $fz), "~A,~N");
c$.bitmapSetBit = Clazz.defineMethod (c$, "bitmapSetBit", 
($fz = function (bitmap, i) {
bitmap[(i >> 5)] |= 1 << (i & 31);
}, $fz.isPrivate = true, $fz), "~A,~N");
c$.bitmapClearBit = Clazz.defineMethod (c$, "bitmapClearBit", 
($fz = function (bitmap, i) {
bitmap[(i >> 5)] &= ~(1 << (i & 31));
}, $fz.isPrivate = true, $fz), "~A,~N");
c$.bitmapSetRange = Clazz.defineMethod (c$, "bitmapSetRange", 
($fz = function (bitmap, iStart, bitCount) {
while ((iStart & 31) != 0) {
org.jmol.util.FastBitSet.bitmapSetBit (bitmap, iStart++);
if (--bitCount == 0) return ;
}
while ((bitCount & 31) != 0) {
org.jmol.util.FastBitSet.bitmapSetBit (bitmap, iStart + --bitCount);
}
var wordIndex = iStart >> 5;
var wordCount = bitCount >> 5;
while (--wordCount >= 0) bitmap[wordIndex++] = -1;

}, $fz.isPrivate = true, $fz), "~A,~N,~N");
c$.bitmapClearRange = Clazz.defineMethod (c$, "bitmapClearRange", 
($fz = function (bitmap, iStart, bitCount) {
while ((iStart & 31) != 0) {
org.jmol.util.FastBitSet.bitmapClearBit (bitmap, iStart++);
if (--bitCount == 0) return ;
}
while ((bitCount & 31) != 0) org.jmol.util.FastBitSet.bitmapClearBit (bitmap, iStart + --bitCount);

var wordIndex = iStart >> 5;
var wordCount = bitCount >> 5;
while (--wordCount >= 0) bitmap[wordIndex++] = 0;

}, $fz.isPrivate = true, $fz), "~A,~N,~N");
c$.bitmapClear = Clazz.defineMethod (c$, "bitmapClear", 
($fz = function (bitmap) {
for (var i = bitmap.length; --i >= 0; ) bitmap[i] = 0;

}, $fz.isPrivate = true, $fz), "~A");
c$.bitmapGetMinimumWordCount = Clazz.defineMethod (c$, "bitmapGetMinimumWordCount", 
($fz = function (bitmap) {
var indexLast;
for (indexLast = bitmap.length; --indexLast >= 0 && bitmap[indexLast] == 0; ) {
}
return indexLast + 1;
}, $fz.isPrivate = true, $fz), "~A");
c$.bitmapGetSizeInBits = Clazz.defineMethod (c$, "bitmapGetSizeInBits", 
($fz = function (bitmap) {
return bitmap.length << 5;
}, $fz.isPrivate = true, $fz), "~A");
c$.getWordCountFromBitCount = Clazz.defineMethod (c$, "getWordCountFromBitCount", 
($fz = function (bitCount) {
return (bitCount + 32 - 1) >> 5;
}, $fz.isPrivate = true, $fz), "~N");
c$.bitmapAnd = Clazz.defineMethod (c$, "bitmapAnd", 
($fz = function (bitmap, bitmapAnd) {
var wordCount = bitmap.length < bitmapAnd.length ? bitmap.length : bitmapAnd.length;
var n = bitmap.length;
while (n > wordCount) bitmap[--n] = 0;

while (--wordCount >= 0) bitmap[wordCount] &= bitmapAnd[wordCount];

}, $fz.isPrivate = true, $fz), "~A,~A");
c$.bitmapAndNot = Clazz.defineMethod (c$, "bitmapAndNot", 
($fz = function (bitmap, bitmapAndNot) {
var wordCount = (bitmap.length < bitmapAndNot.length) ? bitmap.length : bitmapAndNot.length;
while (--wordCount >= 0) bitmap[wordCount] &= ~bitmapAndNot[wordCount];

}, $fz.isPrivate = true, $fz), "~A,~A");
c$.bitmapOr = Clazz.defineMethod (c$, "bitmapOr", 
($fz = function (bitmap, bitmapOr) {
var wordCount = bitmapOr.length;
while (--wordCount >= 0) bitmap[wordCount] |= bitmapOr[wordCount];

}, $fz.isPrivate = true, $fz), "~A,~A");
c$.bitmapXor = Clazz.defineMethod (c$, "bitmapXor", 
($fz = function (bitmap, bitmapXor) {
var wordCount = bitmapXor.length;
while (--wordCount >= 0) bitmap[wordCount] ^= bitmapXor[wordCount];

}, $fz.isPrivate = true, $fz), "~A,~A");
c$.bitmapNextSetBit = Clazz.defineMethod (c$, "bitmapNextSetBit", 
($fz = function (bitmap, fromIndex) {
var maxIndex = bitmap.length << 5;
if (fromIndex >= maxIndex) return -1;
while ((fromIndex & 31) != 0) {
if (org.jmol.util.FastBitSet.bitmapGetBit (bitmap, fromIndex)) return fromIndex;
++fromIndex;
}
while (fromIndex < maxIndex) {
if (bitmap[fromIndex >> 5] != 0) break;
fromIndex += 32;
}
while (fromIndex < maxIndex) {
if (org.jmol.util.FastBitSet.bitmapGetBit (bitmap, fromIndex)) return fromIndex;
++fromIndex;
}
return -1;
}, $fz.isPrivate = true, $fz), "~A,~N");
c$.bitmapGetCardinality = Clazz.defineMethod (c$, "bitmapGetCardinality", 
($fz = function (bitmap) {
var count = 0;
for (var i = bitmap.length; --i >= 0; ) {
if (bitmap[i] != 0) count += org.jmol.util.FastBitSet.countBitsInWord (bitmap[i]);
}
return count;
}, $fz.isPrivate = true, $fz), "~A");
c$.countBitsInWord = Clazz.defineMethod (c$, "countBitsInWord", 
($fz = function (word) {
word = (word & 0x55555555) + ((word >> 1) & 0x55555555);
word = (word & 0x33333333) + ((word >> 2) & 0x33333333);
word = (word & 0x0F0F0F0F) + ((word >> 4) & 0x0F0F0F0F);
word = (word & 0x00FF00FF) + ((word >> 8) & 0x00FF00FF);
word = (word & 0x0000FFFF) + ((word >> 16) & 0x0000FFFF);
return word;
}, $fz.isPrivate = true, $fz), "~N");
c$.bitmapIsEqual = Clazz.defineMethod (c$, "bitmapIsEqual", 
($fz = function (bitmap1, bitmap2) {
if (bitmap1 === bitmap2) return true;
var count1 = org.jmol.util.FastBitSet.bitmapGetMinimumWordCount (bitmap1);
if (count1 != org.jmol.util.FastBitSet.bitmapGetMinimumWordCount (bitmap2)) return false;
while (--count1 >= 0) if (bitmap1[count1] != bitmap2[count1]) return false;

return true;
}, $fz.isPrivate = true, $fz), "~A,~A");
c$.bitmapIsEmpty = Clazz.defineMethod (c$, "bitmapIsEmpty", 
($fz = function (bitmap) {
var i = bitmap.length;
while (--i >= 0) if (bitmap[i] != 0) return false;

return true;
}, $fz.isPrivate = true, $fz), "~A");
c$.numberOfLeadingZeros = Clazz.defineMethod (c$, "numberOfLeadingZeros", 
($fz = function (i) {
if (i == 0) return 32;
var n = 1;
if (i >>> 16 == 0) {
n += 16;
i <<= 16;
}if (i >>> 24 == 0) {
n += 8;
i <<= 8;
}if (i >>> 28 == 0) {
n += 4;
i <<= 4;
}if (i >>> 30 == 0) {
n += 2;
i <<= 2;
}n -= i >>> 31;
return n;
}, $fz.isPrivate = true, $fz), "~N");
c$.ensureSufficientBits = Clazz.defineMethod (c$, "ensureSufficientBits", 
($fz = function (bitmap, minimumBitCount) {
return org.jmol.util.FastBitSet.ensureSufficientWords (bitmap, (minimumBitCount + 31) >> 5);
}, $fz.isPrivate = true, $fz), "~A,~N");
c$.ensureSufficientWords = Clazz.defineMethod (c$, "ensureSufficientWords", 
($fz = function (bitmap, minimumWordCount) {
if (minimumWordCount > bitmap.length) {
var newBitmap =  Clazz.newArray (minimumWordCount, 0);
System.arraycopy (bitmap, 0, newBitmap, 0, bitmap.length);
return newBitmap;
}return bitmap;
}, $fz.isPrivate = true, $fz), "~A,~N");
Clazz.defineStatics (c$,
"emptyBitmap",  Clazz.newArray (0, 0));
c$.emptySet = c$.prototype.emptySet =  new org.jmol.util.FastBitSet ();
Clazz.defineStatics (c$,
"F_ADDRESS_BITS_PER_WORD", 5,
"F_BITS_PER_WORD", 32,
"F_BIT_INDEX_MASK", 31,
"F_INT_ALL_BITS_SET", 0xFFFFFFFF);
});
