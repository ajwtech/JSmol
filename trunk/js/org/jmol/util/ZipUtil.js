Clazz.declarePackage ("org.jmol.util");
Clazz.load (null, "org.jmol.util.ZipUtil", ["java.io.BufferedInputStream", "$.ByteArrayInputStream", "java.lang.StringBuffer", "java.util.ArrayList", "java.util.zip.GZIPInputStream", "$.ZipInputStream", "org.jmol.util.ArrayUtil", "$.Logger", "$.TextFormat"], function () {
c$ = Clazz.declareType (org.jmol.util, "ZipUtil");
c$.isZipFile = Clazz.defineMethod (c$, "isZipFile", 
function (is) {
var abMagic =  Clazz.newArray (4, 0);
try {
is.mark (5);
is.read (abMagic, 0, 4);
is.reset ();
} catch (e) {
if (Clazz.instanceOf (e, Exception)) {
} else {
throw e;
}
}
return org.jmol.util.ZipUtil.isZipFile (abMagic);
}, "java.io.InputStream");
c$.isPngZipStream = Clazz.defineMethod (c$, "isPngZipStream", 
function (is) {
if (org.jmol.util.ZipUtil.isZipFile (is)) return false;
try {
is.mark (56);
var abMagic = org.jmol.util.ZipUtil.getStreamBytes (is, 55);
is.reset ();
return (abMagic[51] == ('P').charCodeAt (0) && abMagic[52] == ('N').charCodeAt (0) && abMagic[53] == ('G').charCodeAt (0) && abMagic[54] == ('J').charCodeAt (0));
} catch (e) {
if (Clazz.instanceOf (e, Exception)) {
} else {
throw e;
}
}
return false;
}, "java.io.InputStream");
c$.checkPngZipStream = Clazz.defineMethod (c$, "checkPngZipStream", 
function (bis) {
if (!org.jmol.util.ZipUtil.isPngZipStream (bis)) return bis;
var data = null;
bis.mark (75);
try {
data = org.jmol.util.ZipUtil.getStreamBytes (bis, 74);
bis.reset ();
var pt = 0;
for (var i = 64, f = 1; --i > 54; f *= 10) pt += (data[i] - ('0').charCodeAt (0)) * f;

var n = 0;
for (var i = 74, f = 1; --i > 64; f *= 10) n += (data[i] - ('0').charCodeAt (0)) * f;

while (pt > 0) pt -= bis.skip (pt);

data = org.jmol.util.ZipUtil.getStreamBytes (bis, n);
bis.close ();
} catch (e) {
data =  Clazz.newArray (0, 0);
}
return  new java.io.BufferedInputStream ( new java.io.ByteArrayInputStream (data));
}, "java.io.BufferedInputStream");
c$.isZipFile = Clazz.defineMethod (c$, "isZipFile", 
function (bytes) {
return (bytes.length >= 4 && bytes[0] == ('P').charCodeAt (0) && bytes[1] == ('K').charCodeAt (0) && bytes[2] == ('\3').charCodeAt (0) && bytes[3] == ('\4').charCodeAt (0));
}, "~A");
c$.getStream = Clazz.defineMethod (c$, "getStream", 
function (is) {
return (Clazz.instanceOf (is, java.util.zip.ZipInputStream) ? is : Clazz.instanceOf (is, java.io.BufferedInputStream) ?  new java.util.zip.ZipInputStream (is) :  new java.util.zip.ZipInputStream ( new java.io.BufferedInputStream (is)));
}, "java.io.InputStream");
c$.getAllData = Clazz.defineMethod (c$, "getAllData", 
function (is, subfileList, name0, binaryFileList, fileData) {
var zis = org.jmol.util.ZipUtil.getStream (is);
var ze;
var listing =  new StringBuffer ();
binaryFileList = "|" + binaryFileList + "|";
var prefix = org.jmol.util.TextFormat.join (subfileList, '/', 1);
var prefixd = null;
if (prefix != null) {
prefixd = prefix.substring (0, prefix.indexOf ("/") + 1);
if (prefixd.length == 0) prefixd = null;
}try {
while ((ze = zis.getNextEntry ()) != null) {
var name = ze.getName ();
if (prefix != null && prefixd != null && !(name.equals (prefix) || name.startsWith (prefixd))) continue ;listing.append (name).append ('\n');
var sname = "|" + name.substring (name.lastIndexOf ("/") + 1) + "|";
var asBinaryString = (binaryFileList.indexOf (sname) >= 0);
var bytes = org.jmol.util.ZipUtil.getStreamBytes (zis, ze.getSize ());
var str;
if (asBinaryString) {
str = org.jmol.util.ZipUtil.getBinaryStringForBytes (bytes);
name += ":asBinaryString";
} else {
str =  String.instantialize (bytes);
}str = "BEGIN Directory Entry " + name + "\n" + str + "\nEND Directory Entry " + name + "\n";
fileData.put (name0 + "|" + name, str);
}
} catch (e) {
if (Clazz.instanceOf (e, Exception)) {
} else {
throw e;
}
}
fileData.put ("#Directory_Listing", listing.toString ());
}, "java.io.InputStream,~A,~S,~S,java.util.Map");
c$.getBinaryStringForBytes = Clazz.defineMethod (c$, "getBinaryStringForBytes", 
function (bytes) {
var ret =  new StringBuffer ();
for (var i = 0; i < bytes.length; i++) ret.append (Integer.toHexString (bytes[i] & 0xFF)).append (' ');

return ret.toString ();
}, "~A");
c$.getZipFileContents = Clazz.defineMethod (c$, "getZipFileContents", 
function (bis, list, listPtr, asBufferedInputStream) {
var ret;
if (list == null || listPtr >= list.length) return org.jmol.util.ZipUtil.getZipDirectoryAsStringAndClose (bis);
var fileName = list[listPtr];
var zis =  new java.util.zip.ZipInputStream (bis);
var ze;
try {
var isAll = (fileName.equals ("."));
if (isAll || fileName.lastIndexOf ("/") == fileName.length - 1) {
ret =  new StringBuffer ();
while ((ze = zis.getNextEntry ()) != null) {
var name = ze.getName ();
if (isAll || name.startsWith (fileName)) ret.append (name).append ('\n');
}
var str = ret.toString ();
if (asBufferedInputStream) return  new java.io.BufferedInputStream ( new java.io.ByteArrayInputStream (str.getBytes ()));
return str;
}var asBinaryString = false;
if (fileName.indexOf (":asBinaryString") > 0) {
fileName = fileName.substring (0, fileName.indexOf (":asBinaryString"));
asBinaryString = true;
}while ((ze = zis.getNextEntry ()) != null) {
if (!fileName.equals (ze.getName ())) continue ;var bytes = org.jmol.util.ZipUtil.getStreamBytes (zis, ze.getSize ());
if (org.jmol.util.ZipUtil.isZipFile (bytes)) return org.jmol.util.ZipUtil.getZipFileContents ( new java.io.BufferedInputStream ( new java.io.ByteArrayInputStream (bytes)), list, ++listPtr, asBufferedInputStream);
if (asBufferedInputStream) return  new java.io.BufferedInputStream ( new java.io.ByteArrayInputStream (bytes));
if (asBinaryString) {
ret =  new StringBuffer ();
for (var i = 0; i < bytes.length; i++) ret.append (Integer.toHexString (bytes[i] & 0xFF)).append (' ');

return ret.toString ();
}return  String.instantialize (bytes);
}
} catch (e) {
if (Clazz.instanceOf (e, Exception)) {
} else {
throw e;
}
}
return "";
}, "java.io.BufferedInputStream,~A,~N,~B");
c$.getZipFileContentsAsBytes = Clazz.defineMethod (c$, "getZipFileContentsAsBytes", 
function (bis, list, listPtr) {
var ret =  Clazz.newArray (0, 0);
var fileName = list[listPtr];
if (fileName.lastIndexOf ("/") == fileName.length - 1) return ret;
try {
bis = org.jmol.util.ZipUtil.checkPngZipStream (bis);
var zis =  new java.util.zip.ZipInputStream (bis);
var ze;
while ((ze = zis.getNextEntry ()) != null) {
if (!fileName.equals (ze.getName ())) continue ;var bytes = org.jmol.util.ZipUtil.getStreamBytes (zis, ze.getSize ());
if (org.jmol.util.ZipUtil.isZipFile (bytes) && ++listPtr < list.length) return org.jmol.util.ZipUtil.getZipFileContentsAsBytes ( new java.io.BufferedInputStream ( new java.io.ByteArrayInputStream (bytes)), list, listPtr);
return bytes;
}
} catch (e) {
if (Clazz.instanceOf (e, Exception)) {
} else {
throw e;
}
}
return ret;
}, "java.io.BufferedInputStream,~A,~N");
c$.getZipDirectoryAsStringAndClose = Clazz.defineMethod (c$, "getZipDirectoryAsStringAndClose", 
function (bis) {
var sb =  new StringBuffer ();
var s =  new Array (0);
try {
s = org.jmol.util.ZipUtil.getZipDirectoryOrErrorAndClose (bis, false);
bis.close ();
} catch (e) {
if (Clazz.instanceOf (e, Exception)) {
org.jmol.util.Logger.error (e.getMessage ());
} else {
throw e;
}
}
for (var i = 0; i < s.length; i++) sb.append (s[i]).append ('\n');

return sb.toString ();
}, "java.io.BufferedInputStream");
c$.getZipDirectoryAndClose = Clazz.defineMethod (c$, "getZipDirectoryAndClose", 
function (bis, addManifest) {
var s =  new Array (0);
try {
s = org.jmol.util.ZipUtil.getZipDirectoryOrErrorAndClose (bis, addManifest);
bis.close ();
} catch (e) {
if (Clazz.instanceOf (e, Exception)) {
org.jmol.util.Logger.error (e.getMessage ());
} else {
throw e;
}
}
return s;
}, "java.io.BufferedInputStream,~B");
c$.isJmolManifest = Clazz.defineMethod (c$, "isJmolManifest", 
function (thisEntry) {
return thisEntry.startsWith ("JmolManifest");
}, "~S");
c$.getZipDirectoryOrErrorAndClose = Clazz.defineMethod (c$, "getZipDirectoryOrErrorAndClose", 
($fz = function (bis, addManifest) {
bis = org.jmol.util.ZipUtil.checkPngZipStream (bis);
var v =  new java.util.ArrayList ();
var zis =  new java.util.zip.ZipInputStream (bis);
var ze;
var manifest = null;
while ((ze = zis.getNextEntry ()) != null) {
var fileName = ze.getName ();
if (addManifest && org.jmol.util.ZipUtil.isJmolManifest (fileName)) manifest = org.jmol.util.ZipUtil.getZipEntryAsString (zis);
 else if (!fileName.startsWith ("__MACOS")) v.add (fileName);
}
zis.close ();
if (addManifest) v.add (0, manifest == null ? "" : manifest + "\n############\n");
return v.toArray ( new Array (v.size ()));
}, $fz.isPrivate = true, $fz), "java.io.BufferedInputStream,~B");
c$.getZipEntryAsString = Clazz.defineMethod (c$, "getZipEntryAsString", 
($fz = function (is) {
var sb =  new StringBuffer ();
var buf =  Clazz.newArray (1024, 0);
var len;
while (is.available () >= 1 && (len = is.read (buf)) > 0) sb.append ( String.instantialize (buf, 0, len));

return sb.toString ();
}, $fz.isPrivate = true, $fz), "java.io.InputStream");
c$.getStreamBytes = Clazz.defineMethod (c$, "getStreamBytes", 
function (is, n) {
var buf =  Clazz.newArray (n >= 0 && n < 1024 ? n : 1024, 0);
var bytes =  Clazz.newArray (n < 0 ? 4096 : n, 0);
var len = 0;
var totalLen = 0;
while ((n < 0 || totalLen < n) && (len = is.read (buf)) > 0) {
totalLen += len;
if (totalLen > bytes.length) bytes = org.jmol.util.ArrayUtil.ensureLength (bytes, totalLen * 2);
System.arraycopy (buf, 0, bytes, totalLen - len, len);
}
if (totalLen == bytes.length) return bytes;
buf =  Clazz.newArray (totalLen, 0);
System.arraycopy (bytes, 0, buf, 0, totalLen);
return buf;
}, "java.io.InputStream,~N");
c$.isGzip = Clazz.defineMethod (c$, "isGzip", 
function (bytes) {
return (bytes != null && bytes.length > 2 && bytes[0] == 0x1F && bytes[1] == 0x8B);
}, "~A");
c$.isGzip = Clazz.defineMethod (c$, "isGzip", 
function (is) {
var abMagic =  Clazz.newArray (4, 0);
try {
is.mark (5);
is.read (abMagic, 0, 4);
is.reset ();
} catch (e) {
if (Clazz.instanceOf (e, java.io.IOException)) {
} else {
throw e;
}
}
return org.jmol.util.ZipUtil.isGzip (abMagic);
}, "java.io.InputStream");
c$.getGzippedBytesAsString = Clazz.defineMethod (c$, "getGzippedBytesAsString", 
function (bytes) {
try {
var is =  new java.io.ByteArrayInputStream (bytes);
do {
is =  new java.io.BufferedInputStream ( new java.util.zip.GZIPInputStream (is));
} while (org.jmol.util.ZipUtil.isGzip (is));
var s = org.jmol.util.ZipUtil.getZipEntryAsString (is);
is.close ();
return s;
} catch (e) {
if (Clazz.instanceOf (e, Exception)) {
return "";
} else {
throw e;
}
}
}, "~A");
c$.getGzippedInputStream = Clazz.defineMethod (c$, "getGzippedInputStream", 
function (bytes) {
try {
var is =  new java.io.ByteArrayInputStream (bytes);
do {
is =  new java.io.BufferedInputStream ( new java.util.zip.GZIPInputStream (is));
} while (org.jmol.util.ZipUtil.isGzip (is));
return is;
} catch (e) {
if (Clazz.instanceOf (e, Exception)) {
return null;
} else {
throw e;
}
}
}, "~A");
c$.getManifestScriptPath = Clazz.defineMethod (c$, "getManifestScriptPath", 
function (manifest) {
if (manifest.indexOf ("$SCRIPT_PATH$") >= 0) return "";
var ch = (manifest.indexOf ('\n') >= 0 ? '\n' : '\r');
if (manifest.indexOf (".spt") >= 0) {
var s = org.jmol.util.TextFormat.split (manifest, ch);
for (var i = s.length; --i >= 0; ) if (s[i].indexOf (".spt") >= 0) return "|" + org.jmol.util.TextFormat.trim (s[i], "\r\n \t");

}return null;
}, "~S");
c$.cacheZipContents = Clazz.defineMethod (c$, "cacheZipContents", 
function (bis, fileName, cache) {
var zis = org.jmol.util.ZipUtil.getStream (bis);
var ze;
var listing =  new StringBuffer ();
var n = 0;
try {
while ((ze = zis.getNextEntry ()) != null) {
var name = ze.getName ();
listing.append (name).append ('\n');
var nBytes = ze.getSize ();
var bytes = org.jmol.util.ZipUtil.getStreamBytes (zis, nBytes);
n += bytes.length;
cache.put (fileName + "|" + name, bytes);
}
zis.close ();
} catch (e) {
if (Clazz.instanceOf (e, Exception)) {
try {
zis.close ();
} catch (e1) {
if (Clazz.instanceOf (e1, java.io.IOException)) {
} else {
throw e1;
}
}
return null;
} else {
throw e;
}
}
org.jmol.util.Logger.info ("ZipUtil cached " + n + " bytes from " + fileName);
return listing.toString ();
}, "java.io.BufferedInputStream,~S,java.util.Map");
});
