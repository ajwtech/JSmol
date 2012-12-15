﻿Clazz.declarePackage ("org.jmol.util");
Clazz.load (null, "org.jmol.util.BinaryDocument", ["java.io.DataInputStream", "java.lang.Double", "$.Float", "javax.util.StringXBuilder", "org.jmol.util.Logger"], function () {
c$ = Clazz.decorateAsClass (function () {
this.stream = null;
this.isRandom = false;
this.isBigEndian = true;
this.nBytes = 0;
this.os = null;
Clazz.instantialize (this, arguments);
}, org.jmol.util, "BinaryDocument");
Clazz.makeConstructor (c$, 
function () {
});
Clazz.makeConstructor (c$, 
function (bis) {
this.setStream (bis, false);
}, "java.io.BufferedInputStream");
Clazz.defineMethod (c$, "close", 
function () {
if (this.stream != null) try {
this.stream.close ();
} catch (e) {
if (Clazz.exceptionOf (e, Exception)) {
} else {
throw e;
}
}
if (this.os != null) {
try {
this.os.flush ();
this.os.close ();
} catch (e) {
if (Clazz.exceptionOf (e, java.io.IOException)) {
} else {
throw e;
}
}
}});
Clazz.defineMethod (c$, "setStream", 
function (bis, isBigEndian) {
if (bis == null) return ;
this.stream =  new java.io.DataInputStream (bis);
this.isBigEndian = isBigEndian;
}, "java.io.BufferedInputStream,~B");
Clazz.defineMethod (c$, "setIsBigEndian", 
function (TF) {
this.isBigEndian = TF;
}, "~B");
Clazz.defineMethod (c$, "setStream", 
function (stream) {
this.stream = stream;
}, "java.io.DataInputStream");
Clazz.defineMethod (c$, "setRandom", 
function (TF) {
this.isRandom = TF;
}, "~B");
Clazz.defineMethod (c$, "readByte", 
function () {
this.nBytes++;
return this.ioReadByte ();
});
Clazz.defineMethod (c$, "ioReadByte", 
($fz = function () {
var b = this.stream.readByte ();
if (this.os != null) this.os.write (b);
return b;
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "readByteArray", 
function (b) {
this.readByteArray (b, 0, b.length);
}, "~A");
Clazz.defineMethod (c$, "readByteArray", 
function (b, off, len) {
var n = this.ioRead (b, off, len);
if (n > 0) this.nBytes += n;
var nBytesRead = n;
if (n > 0 && n < len) {
while (nBytesRead < len && n > 0) {
n = this.ioRead (b, nBytesRead, len - nBytesRead);
if (n > 0) {
this.nBytes += n;
nBytesRead += n;
}}
}return nBytesRead;
}, "~A,~N,~N");
Clazz.defineMethod (c$, "ioRead", 
($fz = function (b, off, len) {
var n = this.stream.read (b, off, len);
if (n > 0 && this.os != null) this.writeBytes (b, off, n);
return n;
}, $fz.isPrivate = true, $fz), "~A,~N,~N");
Clazz.defineMethod (c$, "writeBytes", 
function (b) {
this.os.write (b, 0, b.length);
}, "~A");
Clazz.defineMethod (c$, "writeBytes", 
function (b, off, n) {
this.os.write (b, off, n);
}, "~A,~N,~N");
Clazz.defineMethod (c$, "readString", 
function (nChar) {
var temp =  Clazz.newArray (nChar, 0);
this.readByteArray (temp);
var s =  new javax.util.StringXBuilder ();
for (var j = 0; j < nChar; j++) s.appendC (String.fromCharCode (temp[j]));

return s.toString ();
}, "~N");
Clazz.defineMethod (c$, "readShort", 
function () {
this.nBytes += 2;
return (this.isBigEndian ? this.ioReadShort () : ((this.ioReadByte () & 0xff) | (this.ioReadByte () & 0xff) << 8));
});
Clazz.defineMethod (c$, "ioReadShort", 
($fz = function () {
var b = this.stream.readShort ();
if (this.os != null) this.writeShort (b);
return b;
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "writeShort", 
function (i) {
this.os.write (((i >> 8) & 0xFF));
this.os.write ((i & 0xFF));
}, "~N");
Clazz.defineMethod (c$, "readInt", 
function () {
this.nBytes += 4;
return (this.isBigEndian ? this.ioReadInt () : this.readLEInt ());
});
Clazz.defineMethod (c$, "ioReadInt", 
($fz = function () {
var i = this.stream.readInt ();
if (this.os != null) this.writeInt (i);
return i;
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "writeInt", 
function (i) {
this.os.write (((i >> 24) & 0xFF));
this.os.write (((i >> 16) & 0xFF));
this.os.write (((i >> 8) & 0xFF));
this.os.write ((i & 0xFF));
}, "~N");
c$.swapBytes = Clazz.defineMethod (c$, "swapBytes", 
function (n) {
return (((n >> 24) & 0xff) | ((n >> 16) & 0xff) << 8 | ((n >> 8) & 0xff) << 16 | (n & 0xff) << 24);
}, "~N");
c$.swapBytes = Clazz.defineMethod (c$, "swapBytes", 
function (n) {
return ((((n >> 8) & 0xff) | (n & 0xff) << 8));
}, "~N");
Clazz.defineMethod (c$, "readUnsignedShort", 
function () {
this.nBytes += 2;
var a = (this.ioReadByte () & 0xff);
var b = (this.ioReadByte () & 0xff);
return (this.isBigEndian ? (a << 8) + b : (b << 8) + a);
});
Clazz.defineMethod (c$, "readLong", 
function () {
this.nBytes += 8;
return (this.isBigEndian ? this.ioReadLong () : (((this.ioReadByte ()) & 0xff) | ((this.ioReadByte ()) & 0xff) << 8 | ((this.ioReadByte ()) & 0xff) << 16 | ((this.ioReadByte ()) & 0xff) << 24 | ((this.ioReadByte ()) & 0xff) << 32 | ((this.ioReadByte ()) & 0xff) << 40 | ((this.ioReadByte ()) & 0xff) << 48 | ((this.ioReadByte ()) & 0xff) << 54));
});
Clazz.defineMethod (c$, "ioReadLong", 
($fz = function () {
var b = this.stream.readLong ();
if (this.os != null) this.writeLong (b);
return b;
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "writeLong", 
function (b) {
this.writeInt (((b >> 32) & 0xFFFFFFFF));
this.writeInt ((b & 0xFFFFFFFF));
}, "~N");
Clazz.defineMethod (c$, "readFloat", 
function () {
this.nBytes += 4;
return (this.isBigEndian ? this.ioReadFloat () : Float.intBitsToFloat (this.readLEInt ()));
});
Clazz.defineMethod (c$, "ioReadFloat", 
($fz = function () {
var f = this.stream.readFloat ();
if (this.os != null) this.os.write (Float.floatToIntBits (f));
return f;
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "readDouble", 
function () {
this.nBytes += 8;
return (this.isBigEndian ? this.ioReadDouble () : Double.longBitsToDouble (this.readLELong ()));
});
Clazz.defineMethod (c$, "ioReadDouble", 
($fz = function () {
var d = this.stream.readDouble ();
if (this.os != null) this.writeLong (Double.doubleToRawLongBits (d));
return d;
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "readLEInt", 
($fz = function () {
return ((this.ioReadByte () & 0xff) | (this.ioReadByte () & 0xff) << 8 | (this.ioReadByte () & 0xff) << 16 | (this.ioReadByte () & 0xff) << 24);
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "readLELong", 
($fz = function () {
return (((this.ioReadByte ()) & 0xff) | ((this.ioReadByte ()) & 0xff) << 8 | ((this.ioReadByte ()) & 0xff) << 16 | ((this.ioReadByte ()) & 0xff) << 24 | ((this.ioReadByte ()) & 0xff) << 32 | ((this.ioReadByte ()) & 0xff) << 40 | ((this.ioReadByte ()) & 0xff) << 48 | ((this.ioReadByte ()) & 0xff) << 56);
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "seek", 
function (offset) {
try {
if (offset == this.nBytes) return ;
if (offset < this.nBytes) {
this.stream.reset ();
this.nBytes = 0;
} else {
offset -= this.nBytes;
}this.stream.skipBytes (offset);
this.nBytes += offset;
} catch (e) {
if (Clazz.exceptionOf (e, Exception)) {
org.jmol.util.Logger.errorEx (null, e);
} else {
throw e;
}
}
}, "~N");
Clazz.defineMethod (c$, "getPosition", 
function () {
return this.nBytes;
});
Clazz.defineMethod (c$, "setOutputStream", 
function (os, viewer, privateKey) {
if (viewer.checkPrivateKey (privateKey)) this.os = os;
}, "java.io.OutputStream,org.jmol.viewer.Viewer,~N");
});