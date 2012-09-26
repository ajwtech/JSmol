Clazz.declarePackage ("org.jmol.adapter.smarter");
Clazz.load (["org.jmol.api.JmolAdapter"], "org.jmol.adapter.smarter.SmarterJmolAdapter", ["java.io.BufferedInputStream", "$.BufferedReader", "$.ByteArrayInputStream", "$.StringReader", "java.util.ArrayList", "$.Hashtable", "org.jmol.adapter.smarter.AtomIterator", "$.AtomSetCollection", "$.BondIterator", "$.Resolver", "$.StructureIterator", "org.jmol.util.CompoundDocument", "$.Logger", "$.TextFormat", "$.ZipUtil"], function () {
c$ = Clazz.declareType (org.jmol.adapter.smarter, "SmarterJmolAdapter", org.jmol.api.JmolAdapter);
Clazz.makeConstructor (c$, 
function () {
Clazz.superConstructor (this, org.jmol.adapter.smarter.SmarterJmolAdapter, ["SmarterJmolAdapter"]);
});
Clazz.overrideMethod (c$, "getFileTypeName", 
function (atomSetCollectionOrReader) {
if (Clazz.instanceOf (atomSetCollectionOrReader, org.jmol.adapter.smarter.AtomSetCollection)) return (atomSetCollectionOrReader).getFileTypeName ();
if (Clazz.instanceOf (atomSetCollectionOrReader, java.io.BufferedReader)) return org.jmol.adapter.smarter.Resolver.getFileType (atomSetCollectionOrReader);
return null;
}, "~O");
Clazz.overrideMethod (c$, "getAtomSetCollectionReader", 
function (name, type, bufferedReader, htParams) {
return org.jmol.adapter.smarter.SmarterJmolAdapter.staticGetAtomSetCollectionReader (name, type, bufferedReader, htParams);
}, "~S,~S,java.io.BufferedReader,java.util.Map");
c$.staticGetAtomSetCollectionReader = Clazz.defineMethod (c$, "staticGetAtomSetCollectionReader", 
function (name, type, bufferedReader, htParams) {
try {
var ret = org.jmol.adapter.smarter.Resolver.getAtomCollectionReader (name, type, bufferedReader, htParams, -1);
if (Clazz.instanceOf (ret, String)) {
try {
bufferedReader.close ();
} catch (e) {
if (Clazz.exceptionOf (e, Exception)) {
} else {
throw e;
}
}
} else {
(ret).setup (name, htParams, bufferedReader);
}return ret;
} catch (e) {
try {
bufferedReader.close ();
} catch (ex) {
if (Clazz.exceptionOf (ex, Exception)) {
} else {
throw ex;
}
}
bufferedReader = null;
org.jmol.util.Logger.error ("" + e);
return "" + e;
}
}, "~S,~S,java.io.BufferedReader,java.util.Map");
Clazz.overrideMethod (c$, "getAtomSetCollection", 
function (atomSetCollectionReader) {
return org.jmol.adapter.smarter.SmarterJmolAdapter.staticGetAtomSetCollection (atomSetCollectionReader);
}, "~O");
c$.staticGetAtomSetCollection = Clazz.defineMethod (c$, "staticGetAtomSetCollection", 
function (a) {
var br = null;
try {
br = a.reader;
var ret = a.readData ();
if (!(Clazz.instanceOf (ret, org.jmol.adapter.smarter.AtomSetCollection))) return ret;
var atomSetCollection = ret;
if (atomSetCollection.errorMessage != null) return atomSetCollection.errorMessage;
return atomSetCollection;
} catch (e) {
e.printStackTrace ();
try {
br.close ();
} catch (ex) {
if (Clazz.exceptionOf (ex, Exception)) {
} else {
throw ex;
}
}
br = null;
org.jmol.util.Logger.error ("" + e);
return "" + e;
}
}, "org.jmol.adapter.smarter.AtomSetCollectionReader");
Clazz.overrideMethod (c$, "getAtomSetCollectionReaders", 
function (fileReader, names, types, htParams, getReadersOnly) {
var size = names.length;
var readers = (getReadersOnly ?  new Array (size) : null);
var atomsets = (getReadersOnly ? null :  new Array (size));
for (var i = 0; i < size; i++) {
try {
var reader = fileReader.getBufferedReaderOrBinaryDocument (i, false);
if (!(Clazz.instanceOf (reader, java.io.BufferedReader))) return reader;
var ret = org.jmol.adapter.smarter.Resolver.getAtomCollectionReader (names[i], (types == null ? null : types[i]), reader, htParams, i);
if (!(Clazz.instanceOf (ret, org.jmol.adapter.smarter.AtomSetCollectionReader))) return ret;
var r = ret;
if (r.isBinary) {
r.setup (names[i], htParams, fileReader.getBufferedReaderOrBinaryDocument (i, true));
} else {
r.setup (names[i], htParams, reader);
}if (getReadersOnly) {
readers[i] = r;
} else {
ret = r.readData ();
if (!(Clazz.instanceOf (ret, org.jmol.adapter.smarter.AtomSetCollection))) return ret;
atomsets[i] = ret;
if (atomsets[i].errorMessage != null) return atomsets[i].errorMessage;
}} catch (e) {
org.jmol.util.Logger.error ("" + e);
return "" + e;
}
}
if (getReadersOnly) return readers;
return this.getAtomSetCollectionFromSet (readers, atomsets, htParams);
}, "org.jmol.api.JmolFilesReaderInterface,~A,~A,java.util.Map,~B");
Clazz.overrideMethod (c$, "getAtomSetCollectionFromSet", 
function (readerSet, atomsets, htParams) {
var readers = readerSet;
var asc = (atomsets == null ?  new Array (readers.length) : atomsets);
if (atomsets == null) {
for (var i = 0; i < readers.length; i++) {
try {
var ret = readers[i].readData ();
if (!(Clazz.instanceOf (ret, org.jmol.adapter.smarter.AtomSetCollection))) return ret;
asc[i] = ret;
if (asc[i].errorMessage != null) return asc[i].errorMessage;
} catch (e) {
org.jmol.util.Logger.error ("" + e);
return "" + e;
}
}
}var result;
if (htParams.containsKey ("trajectorySteps")) {
result = asc[0];
try {
result.finalizeTrajectory (htParams.get ("trajectorySteps"), htParams.get ("vibrationSteps"));
} catch (e) {
if (Clazz.exceptionOf (e, Exception)) {
if (result.errorMessage == null) result.errorMessage = "" + e;
} else {
throw e;
}
}
} else {
result =  new org.jmol.adapter.smarter.AtomSetCollection (asc);
}return (result.errorMessage == null ? result : result.errorMessage);
}, "~O,~O,java.util.Map");
Clazz.overrideMethod (c$, "getAtomSetCollectionOrBufferedReaderFromZip", 
function (is, fileName, zipDirectory, htParams, asBufferedReader, asBufferedInputStream) {
return org.jmol.adapter.smarter.SmarterJmolAdapter.staticGetAtomSetCollectionOrBufferedReaderFromZip (is, fileName, zipDirectory, htParams, 1, asBufferedReader, asBufferedInputStream);
}, "java.io.InputStream,~S,~A,java.util.Map,~B,~B");
c$.staticGetAtomSetCollectionOrBufferedReaderFromZip = Clazz.defineMethod (c$, "staticGetAtomSetCollectionOrBufferedReaderFromZip", 
($fz = function (is, fileName, zipDirectory, htParams, subFilePtr, asBufferedReader, asBufferedInputStream) {
var doCombine = (subFilePtr == 1);
htParams.put ("zipSet", fileName);
var subFileList = htParams.get ("subFileList");
if (subFileList == null) subFileList = org.jmol.adapter.smarter.Resolver.checkSpecialInZip (zipDirectory);
var subFileName = (subFileList == null || subFilePtr >= subFileList.length ? null : subFileList[subFilePtr]);
if (subFileName != null && (subFileName.startsWith ("/") || subFileName.startsWith ("\\"))) subFileName = subFileName.substring (1);
var selectedFile = 0;
if (subFileName == null && htParams.containsKey ("modelNumber")) {
selectedFile = (htParams.get ("modelNumber")).intValue ();
if (selectedFile > 0 && doCombine) htParams.remove ("modelNumber");
}var manifest = htParams.get ("manifest");
var useFileManifest = (manifest == null);
if (useFileManifest) manifest = (zipDirectory.length > 0 ? zipDirectory[0] : "");
var haveManifest = (manifest.length > 0);
if (haveManifest) {
if (org.jmol.util.Logger.debugging) org.jmol.util.Logger.info ("manifest for  " + fileName + ":\n" + manifest);
}var ignoreErrors = (manifest.indexOf ("IGNORE_ERRORS") >= 0);
var selectAll = (manifest.indexOf ("IGNORE_MANIFEST") >= 0);
var exceptFiles = (manifest.indexOf ("EXCEPT_FILES") >= 0);
if (selectAll || subFileName != null) haveManifest = false;
if (useFileManifest && haveManifest) {
var path = org.jmol.util.ZipUtil.getManifestScriptPath (manifest);
if (path != null) return "NOTE: file recognized as a script file: " + fileName + path + "\n";
}var vCollections =  new java.util.ArrayList ();
var htCollections = (haveManifest ?  new java.util.Hashtable () : null);
var nFiles = 0;
var ret = org.jmol.adapter.smarter.Resolver.checkSpecialData (is, zipDirectory);
if (Clazz.instanceOf (ret, String)) return ret;
var data = ret;
try {
if (data != null) {
var reader =  new java.io.BufferedReader ( new java.io.StringReader (data.toString ()));
if (asBufferedReader) {
return reader;
}ret = org.jmol.adapter.smarter.Resolver.getAtomCollectionReader (fileName, null, reader, htParams, -1);
if (!(Clazz.instanceOf (ret, org.jmol.adapter.smarter.AtomSetCollectionReader))) return ret;
(ret).setup (fileName, htParams, reader);
ret = (ret).readData ();
if (Clazz.instanceOf (ret, org.jmol.adapter.smarter.AtomSetCollection)) {
var atomSetCollection = ret;
if (atomSetCollection.errorMessage != null) {
if (ignoreErrors) return null;
return atomSetCollection.errorMessage;
}return atomSetCollection;
}if (ignoreErrors) return null;
return "unknown reader error";
}if (Clazz.instanceOf (is, java.io.BufferedInputStream)) is = org.jmol.util.ZipUtil.checkPngZipStream (is);
var zis = org.jmol.util.ZipUtil.getStream (is);
var ze;
if (haveManifest) manifest = '|' + manifest.$replace ('\r', '|').$replace ('\n', '|') + '|';
while ((ze = zis.getNextEntry ()) != null && (selectedFile <= 0 || vCollections.size () < selectedFile)) {
if (ze.isDirectory ()) continue ;var thisEntry = ze.getName ();
if (subFileName != null && !thisEntry.equals (subFileName)) continue ;if (subFileName != null) htParams.put ("subFileName", subFileName);
if (org.jmol.util.ZipUtil.isJmolManifest (thisEntry) || haveManifest && exceptFiles == manifest.indexOf ("|" + thisEntry + "|") >= 0) continue ;var bytes = org.jmol.util.ZipUtil.getStreamBytes (zis, ze.getSize ());
if (org.jmol.util.ZipUtil.isZipFile (bytes)) {
var bis =  new java.io.BufferedInputStream ( new java.io.ByteArrayInputStream (bytes));
var zipDir2 = org.jmol.util.ZipUtil.getZipDirectoryAndClose (bis, true);
bis =  new java.io.BufferedInputStream ( new java.io.ByteArrayInputStream (bytes));
var atomSetCollections = org.jmol.adapter.smarter.SmarterJmolAdapter.staticGetAtomSetCollectionOrBufferedReaderFromZip (bis, fileName + "|" + thisEntry, zipDir2, htParams, ++subFilePtr, asBufferedReader, asBufferedInputStream);
if (Clazz.instanceOf (atomSetCollections, String)) {
if (ignoreErrors) continue ;return atomSetCollections;
} else if (Clazz.instanceOf (atomSetCollections, org.jmol.adapter.smarter.AtomSetCollection) || Clazz.instanceOf (atomSetCollections, java.util.List)) {
if (haveManifest && !exceptFiles) htCollections.put (thisEntry, atomSetCollections);
 else vCollections.add (atomSetCollections);
} else if (Clazz.instanceOf (atomSetCollections, java.io.BufferedReader)) {
if (doCombine) zis.close ();
return atomSetCollections;
} else {
if (ignoreErrors) continue ;zis.close ();
return "unknown zip reader error";
}} else if (asBufferedInputStream) {
if (org.jmol.util.ZipUtil.isGzip (bytes)) return org.jmol.util.ZipUtil.getGzippedInputStream (bytes);
var bis =  new java.io.BufferedInputStream ( new java.io.ByteArrayInputStream (bytes));
if (doCombine) zis.close ();
return bis;
} else {
var sData = (org.jmol.util.CompoundDocument.isCompoundDocument (bytes) ? ( new org.jmol.util.CompoundDocument ( new java.io.BufferedInputStream ( new java.io.ByteArrayInputStream (bytes)))).getAllData ("Molecule", "Input").toString () : org.jmol.util.ZipUtil.isGzip (bytes) ? org.jmol.util.ZipUtil.getGzippedBytesAsString (bytes) :  String.instantialize (bytes));
var reader =  new java.io.BufferedReader ( new java.io.StringReader (sData));
if (asBufferedReader) {
if (doCombine) zis.close ();
return reader;
}var fname = fileName + "|" + ze.getName ();
ret = org.jmol.adapter.smarter.Resolver.getAtomCollectionReader (fname, null, reader, htParams, -1);
if (Clazz.instanceOf (ret, org.jmol.adapter.smarter.AtomSetCollectionReader)) {
(ret).setup (fname, htParams, reader);
ret = (ret).readData ();
}if (!(Clazz.instanceOf (ret, org.jmol.adapter.smarter.AtomSetCollection))) {
if (ignoreErrors) continue ;zis.close ();
return "" + ret;
}if (haveManifest && !exceptFiles) htCollections.put (thisEntry, ret);
 else vCollections.add (ret);
var a = ret;
if (a.errorMessage != null) {
if (ignoreErrors) continue ;zis.close ();
return a.errorMessage;
}}}
if (doCombine) zis.close ();
if (haveManifest && !exceptFiles) {
var list = org.jmol.util.TextFormat.split (manifest, '|');
for (var i = 0; i < list.length; i++) {
var file = list[i];
if (file.length == 0 || file.indexOf ("#") == 0) continue ;if (htCollections.containsKey (file)) vCollections.add (htCollections.get (file));
 else if (org.jmol.util.Logger.debugging) org.jmol.util.Logger.info ("manifested file " + file + " was not found in " + fileName);
}
}if (!doCombine) return vCollections;
var result =  new org.jmol.adapter.smarter.AtomSetCollection (vCollections);
if (result.errorMessage != null) {
if (ignoreErrors) return null;
return result.errorMessage;
}if (nFiles == 1) selectedFile = 1;
if (selectedFile > 0 && selectedFile <= vCollections.size ()) return vCollections.get (selectedFile - 1);
return result;
} catch (e$$) {
if (Clazz.exceptionOf (e$$, Exception)) {
var e = e$$;
{
if (ignoreErrors) return null;
org.jmol.util.Logger.error ("" + e);
return "" + e;
}
} else if (Clazz.exceptionOf (e$$, Error)) {
var er = e$$;
{
org.jmol.util.Logger.error (null, er);
return "" + er;
}
} else {
throw e$$;
}
}
}, $fz.isPrivate = true, $fz), "java.io.InputStream,~S,~A,java.util.Map,~N,~B,~B");
Clazz.overrideMethod (c$, "getAtomSetCollectionFromDOM", 
function (DOMNode, htParams) {
try {
var ret = org.jmol.adapter.smarter.Resolver.DOMResolve (DOMNode, htParams);
if (!(Clazz.instanceOf (ret, org.jmol.adapter.smarter.AtomSetCollectionReader))) return ret;
var a = ret;
a.setup ("DOM node", htParams, null);
ret = a.readData (DOMNode);
if (!(Clazz.instanceOf (ret, org.jmol.adapter.smarter.AtomSetCollection))) return ret;
var asc = ret;
if (asc.errorMessage != null) return asc.errorMessage;
return asc;
} catch (e) {
org.jmol.util.Logger.error ("" + e);
return "" + e;
}
}, "~O,java.util.Map");
Clazz.overrideMethod (c$, "specialLoad", 
function (name, type) {
return org.jmol.adapter.smarter.Resolver.specialLoad (name, type);
}, "~S,~S");
Clazz.overrideMethod (c$, "finish", 
function (atomSetCollection) {
(atomSetCollection).finish ();
}, "~O");
Clazz.overrideMethod (c$, "getAtomSetCollectionName", 
function (atomSetCollection) {
return (atomSetCollection).getCollectionName ();
}, "~O");
Clazz.overrideMethod (c$, "getAtomSetCollectionAuxiliaryInfo", 
function (atomSetCollection) {
return (atomSetCollection).getAtomSetCollectionAuxiliaryInfo ();
}, "~O");
Clazz.overrideMethod (c$, "getAtomSetCount", 
function (atomSetCollection) {
return (atomSetCollection).getAtomSetCount ();
}, "~O");
Clazz.overrideMethod (c$, "getAtomSetNumber", 
function (atomSetCollection, atomSetIndex) {
return (atomSetCollection).getAtomSetNumber (atomSetIndex);
}, "~O,~N");
Clazz.overrideMethod (c$, "getAtomSetName", 
function (atomSetCollection, atomSetIndex) {
return (atomSetCollection).getAtomSetName (atomSetIndex);
}, "~O,~N");
Clazz.overrideMethod (c$, "getAtomSetAuxiliaryInfo", 
function (atomSetCollection, atomSetIndex) {
return (atomSetCollection).getAtomSetAuxiliaryInfo (atomSetIndex);
}, "~O,~N");
Clazz.overrideMethod (c$, "getHydrogenAtomCount", 
function (atomSetCollection) {
return (atomSetCollection).getHydrogenAtomCount ();
}, "~O");
Clazz.overrideMethod (c$, "getBondList", 
function (atomSetCollection) {
return (atomSetCollection).getBondList ();
}, "~O");
Clazz.overrideMethod (c$, "getAtomCount", 
function (atomSetCollection) {
var a = atomSetCollection;
return (a.bsAtoms == null ? a.getAtomCount () : a.bsAtoms.cardinality ());
}, "~O");
Clazz.overrideMethod (c$, "coordinatesAreFractional", 
function (atomSetCollection) {
return (atomSetCollection).coordinatesAreFractional;
}, "~O");
Clazz.overrideMethod (c$, "getNotionalUnitcell", 
function (atomSetCollection) {
return (atomSetCollection).notionalUnitCell;
}, "~O");
Clazz.overrideMethod (c$, "getPdbScaleMatrix", 
function (atomSetCollection) {
var a = (atomSetCollection).notionalUnitCell;
if (a.length < 22) return null;
var b =  Clazz.newArray (16, 0);
for (var i = 0; i < 16; i++) b[i] = a[6 + i];

return b;
}, "~O");
Clazz.overrideMethod (c$, "getPdbScaleTranslate", 
function (atomSetCollection) {
var a = (atomSetCollection).notionalUnitCell;
if (a.length < 22) return null;
var b =  Clazz.newArray (3, 0);
b[0] = a[9];
b[1] = a[13];
b[2] = a[17];
return b;
}, "~O");
Clazz.overrideMethod (c$, "getAtomIterator", 
function (atomSetCollection) {
return  new org.jmol.adapter.smarter.AtomIterator (atomSetCollection);
}, "~O");
Clazz.overrideMethod (c$, "getBondIterator", 
function (atomSetCollection) {
return  new org.jmol.adapter.smarter.BondIterator (atomSetCollection);
}, "~O");
Clazz.overrideMethod (c$, "getStructureIterator", 
function (atomSetCollection) {
return (atomSetCollection).getStructureCount () == 0 ? null :  new org.jmol.adapter.smarter.StructureIterator (atomSetCollection);
}, "~O");
Clazz.defineStatics (c$,
"PATH_KEY", ".PATH");
c$.PATH_SEPARATOR = c$.prototype.PATH_SEPARATOR = System.getProperty ("path.separator", "/");
});
