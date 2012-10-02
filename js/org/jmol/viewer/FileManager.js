Clazz.declarePackage ("org.jmol.viewer");
Clazz.load (["java.io.BufferedReader", "java.lang.Enum", "org.jmol.api.JmolFilesReaderInterface", "java.util.Hashtable"], "org.jmol.viewer.FileManager", ["java.io.BufferedInputStream", "$.ByteArrayInputStream", "$.ByteArrayOutputStream", "$.FileInputStream", "$.FileOutputStream", "$.InputStreamReader", "$.StringReader", "java.lang.Long", "java.net.URL", "$.URLEncoder", "java.text.DateFormat", "java.util.ArrayList", "$.Date", "java.util.zip.CRC32", "$.GZIPInputStream", "$.ZipEntry", "$.ZipInputStream", "$.ZipOutputStream", "javax.util.StringXBuilder", "org.jmol.api.JmolViewer", "org.jmol.script.ScriptCompiler", "org.jmol.util.ArrayUtil", "$.Base64", "$.BinaryDocument", "$.CompoundDocument", "$.Escape", "$.Logger", "$.Parser", "$.TextFormat", "$.ZipUtil", "org.jmol.viewer.DataManager", "$.JmolConstants", "$.Viewer"], function () {
c$ = Clazz.decorateAsClass (function () {
this.viewer = null;
this.pathForAllFiles = "";
this.nameAsGiven = "zapped";
this.fullPathName = null;
this.fileName = null;
this.appletDocumentBaseURL = null;
this.appletProxy = null;
this.jmolZip = null;
if (!Clazz.isClassDefined ("org.jmol.viewer.FileManager.DOMReader")) {
org.jmol.viewer.FileManager.$FileManager$DOMReader$ ();
}
if (!Clazz.isClassDefined ("org.jmol.viewer.FileManager.FileReader")) {
org.jmol.viewer.FileManager.$FileManager$FileReader$ ();
}
if (!Clazz.isClassDefined ("org.jmol.viewer.FileManager.FilesReader")) {
org.jmol.viewer.FileManager.$FileManager$FilesReader$ ();
}
if (!Clazz.isClassDefined ("org.jmol.viewer.FileManager.DataReader")) {
org.jmol.viewer.FileManager.$FileManager$DataReader$ ();
}
if (!Clazz.isClassDefined ("org.jmol.viewer.FileManager.ArrayDataReader")) {
org.jmol.viewer.FileManager.$FileManager$ArrayDataReader$ ();
}
if (!Clazz.isClassDefined ("org.jmol.viewer.FileManager.StringDataReader")) {
org.jmol.viewer.FileManager.$FileManager$StringDataReader$ ();
}
if (!Clazz.isClassDefined ("org.jmol.viewer.FileManager.VectorDataReader")) {
org.jmol.viewer.FileManager.$FileManager$VectorDataReader$ ();
}
this.pngjCache = null;
this.spardirCache = null;
this.cache = null;
Clazz.instantialize (this, arguments);
}, org.jmol.viewer, "FileManager");
Clazz.prepareFields (c$, function () {
this.cache =  new java.util.Hashtable ();
});
Clazz.makeConstructor (c$, 
function (viewer) {
this.viewer = viewer;
this.clear ();
}, "org.jmol.viewer.Viewer");
Clazz.defineMethod (c$, "clear", 
function () {
this.fullPathName = this.fileName = this.nameAsGiven = this.viewer.getZapName ();
this.spardirCache = null;
});
Clazz.defineMethod (c$, "setLoadState", 
($fz = function (htParams) {
if (this.viewer.getPreserveState ()) {
htParams.put ("loadState", this.viewer.getLoadState (htParams));
}}, $fz.isPrivate = true, $fz), "java.util.Map");
Clazz.defineMethod (c$, "getPathForAllFiles", 
function () {
return this.pathForAllFiles;
});
Clazz.defineMethod (c$, "setPathForAllFiles", 
function (value) {
if (value.length > 0 && !value.endsWith ("/") && !value.endsWith ("|")) value += "/";
return this.pathForAllFiles = value;
}, "~S");
Clazz.defineMethod (c$, "setFileInfo", 
function (fileInfo) {
this.fullPathName = fileInfo[0];
this.fileName = fileInfo[1];
this.nameAsGiven = fileInfo[2];
}, "~A");
Clazz.defineMethod (c$, "getFileInfo", 
function () {
return [this.fullPathName, this.fileName, this.nameAsGiven];
});
Clazz.defineMethod (c$, "getFullPathName", 
function () {
return this.fullPathName != null ? this.fullPathName : this.nameAsGiven;
});
Clazz.defineMethod (c$, "getFileName", 
function () {
return this.fileName != null ? this.fileName : this.nameAsGiven;
});
Clazz.defineMethod (c$, "getAppletDocumentBase", 
function () {
return (this.appletDocumentBaseURL == null ? "" : this.appletDocumentBaseURL.toString ());
});
Clazz.defineMethod (c$, "setAppletContext", 
function (documentBase) {
try {
this.appletDocumentBaseURL = (documentBase.length == 0 ? null :  new java.net.URL (documentBase));
} catch (e) {
if (Clazz.exceptionOf (e, java.net.MalformedURLException)) {
} else {
throw e;
}
}
}, "~S");
Clazz.defineMethod (c$, "setAppletProxy", 
function (appletProxy) {
this.appletProxy = (appletProxy == null || appletProxy.length == 0 ? null : appletProxy);
}, "~S");
Clazz.defineMethod (c$, "getState", 
function (sfunc) {
var commands =  new javax.util.StringXBuilder ();
if (sfunc != null) {
sfunc.append ("  _setFileState;\n");
commands.append ("function _setFileState() {\n\n");
}if (commands.indexOf ("append") < 0 && this.viewer.getModelSetFileName ().equals ("zapped")) commands.append ("  zap;\n");
this.viewer.appendLoadStates (commands);
if (sfunc != null) commands.append ("\n}\n\n");
return commands.toString ();
}, "javax.util.StringXBuilder");
Clazz.defineMethod (c$, "getFileTypeName", 
function (fileName) {
var pt = fileName.indexOf ("::");
if (pt >= 0) return fileName.substring (0, pt);
if (fileName.startsWith ("=")) return "pdb";
var br = this.getUnzippedBufferedReaderOrErrorMessageFromName (fileName, null, true, false, true, true);
if (Clazz.instanceOf (br, java.io.BufferedReader)) return this.viewer.getModelAdapter ().getFileTypeName (br);
if (Clazz.instanceOf (br, java.util.zip.ZipInputStream)) {
var zipDirectory = this.getZipDirectoryAsString (fileName);
if (zipDirectory.indexOf ("JmolManifest") >= 0) return "Jmol";
return this.viewer.getModelAdapter ().getFileTypeName (org.jmol.viewer.FileManager.getBufferedReaderForString (zipDirectory));
}if (Clazz.instanceOf (br, Array)) {
return (br)[0];
}return null;
}, "~S");
c$.getBISForStringXBuilder = Clazz.defineMethod (c$, "getBISForStringXBuilder", 
function (t) {
return  new java.io.BufferedInputStream ( new java.io.ByteArrayInputStream ((t).toString ().getBytes ()));
}, "~O");
c$.getBufferedReaderForString = Clazz.defineMethod (c$, "getBufferedReaderForString", 
function (string) {
return  new java.io.BufferedReader ( new java.io.StringReader (string));
}, "~S");
Clazz.defineMethod (c$, "getZipDirectoryAsString", 
($fz = function (fileName) {
var t = this.getBufferedInputStreamOrErrorMessageFromName (fileName, fileName, false, false, null);
if (Clazz.instanceOf (t, javax.util.StringXBuilder)) t = org.jmol.viewer.FileManager.getBISForStringXBuilder (t);
return org.jmol.util.ZipUtil.getZipDirectoryAsStringAndClose (t);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "createAtomSetCollectionFromFile", 
function (name, htParams, isAppend) {
if (htParams.get ("atomDataOnly") == null) {
this.setLoadState (htParams);
}name = this.viewer.resolveDatabaseFormat (name);
var pt = name.indexOf ("::");
var nameAsGiven = (pt >= 0 ? name.substring (pt + 2) : name);
var fileType = (pt >= 0 ? name.substring (0, pt) : null);
org.jmol.util.Logger.info ("\nFileManager.getAtomSetCollectionFromFile(" + nameAsGiven + ")" + (name.equals (nameAsGiven) ? "" : " //" + name));
var names = this.classifyName (nameAsGiven, true);
if (names.length == 1) return names[0];
var fullPathName = names[0];
var fileName = names[1];
htParams.put ("fullPathName", (fileType == null ? "" : fileType + "::") + fullPathName.$replace ('\\', '/'));
if (this.viewer.getMessageStyleChime () && this.viewer.getDebugScript ()) this.viewer.scriptStatus ("Requesting " + fullPathName);
var fileReader = Clazz.innerTypeInstance (org.jmol.viewer.FileManager.FileReader, this, null, fileName, fullPathName, nameAsGiven, fileType, null, htParams, isAppend);
fileReader.run ();
return fileReader.atomSetCollection;
}, "~S,java.util.Map,~B");
Clazz.defineMethod (c$, "createAtomSetCollectionFromFiles", 
function (fileNames, htParams, isAppend) {
this.setLoadState (htParams);
var fullPathNames =  new Array (fileNames.length);
var namesAsGiven =  new Array (fileNames.length);
var fileTypes =  new Array (fileNames.length);
for (var i = 0; i < fileNames.length; i++) {
var pt = fileNames[i].indexOf ("::");
var nameAsGiven = (pt >= 0 ? fileNames[i].substring (pt + 2) : fileNames[i]);
var fileType = (pt >= 0 ? fileNames[i].substring (0, pt) : null);
var names = this.classifyName (nameAsGiven, true);
if (names.length == 1) return names[0];
fullPathNames[i] = names[0];
fileNames[i] = names[0].$replace ('\\', '/');
fileTypes[i] = fileType;
namesAsGiven[i] = nameAsGiven;
}
htParams.put ("fullPathNames", fullPathNames);
htParams.put ("fileTypes", fileTypes);
var filesReader = Clazz.innerTypeInstance (org.jmol.viewer.FileManager.FilesReader, this, null, fullPathNames, namesAsGiven, fileTypes, null, htParams, isAppend);
filesReader.run ();
return filesReader.atomSetCollection;
}, "~A,java.util.Map,~B");
Clazz.defineMethod (c$, "createAtomSetCollectionFromString", 
function (strModel, loadScript, htParams, isAppend, isLoadVariable) {
if (!isLoadVariable) org.jmol.viewer.DataManager.getInlineData (loadScript, strModel, isAppend, this.viewer.getDefaultLoadFilter ());
this.setLoadState (htParams);
var isAddH = (strModel.indexOf ("Viewer.AddHydrogens") >= 0);
var fnames = (isAddH ? this.getFileInfo () : null);
var fileReader = Clazz.innerTypeInstance (org.jmol.viewer.FileManager.FileReader, this, null, "string", "string", "string", null, org.jmol.viewer.FileManager.getBufferedReaderForString (strModel), htParams, isAppend);
fileReader.run ();
if (fnames != null) this.setFileInfo (fnames);
if (!isAppend && !(Clazz.instanceOf (fileReader.atomSetCollection, String))) {
this.viewer.zap (false, true, false);
this.fullPathName = this.fileName = (strModel === "1 0 C 0 0" ? "Jmol Model Kit" : "string");
}return fileReader.atomSetCollection;
}, "~S,javax.util.StringXBuilder,java.util.Map,~B,~B");
Clazz.defineMethod (c$, "createAtomSeCollectionFromStrings", 
function (arrayModels, loadScript, htParams, isAppend) {
if (!htParams.containsKey ("isData")) {
var oldSep = "\"" + this.viewer.getDataSeparator () + "\"";
var tag = "\"" + (isAppend ? "append" : "model") + " inline\"";
var sb =  new javax.util.StringXBuilder ();
sb.append ("set dataSeparator \"~~~next file~~~\";\ndata ").append (tag);
for (var i = 0; i < arrayModels.length; i++) {
if (i > 0) sb.append ("~~~next file~~~");
sb.append (arrayModels[i]);
}
sb.append ("end ").append (tag).append (";set dataSeparator ").append (oldSep);
loadScript.appendSB (sb);
}this.setLoadState (htParams);
org.jmol.util.Logger.info ("FileManager.getAtomSetCollectionFromStrings(string[])");
var fullPathNames =  new Array (arrayModels.length);
var readers =  new Array (arrayModels.length);
for (var i = 0; i < arrayModels.length; i++) {
fullPathNames[i] = "string[" + i + "]";
readers[i] = Clazz.innerTypeInstance (org.jmol.viewer.FileManager.StringDataReader, this, null, arrayModels[i]);
}
var filesReader = Clazz.innerTypeInstance (org.jmol.viewer.FileManager.FilesReader, this, null, fullPathNames, fullPathNames, null, readers, htParams, isAppend);
filesReader.run ();
return filesReader.atomSetCollection;
}, "~A,javax.util.StringXBuilder,java.util.Map,~B");
Clazz.defineMethod (c$, "createAtomSeCollectionFromArrayData", 
function (arrayData, htParams, isAppend) {
org.jmol.util.Logger.info ("FileManager.getAtomSetCollectionFromArrayData(Vector)");
var nModels = arrayData.size ();
var fullPathNames =  new Array (nModels);
var readers =  new Array (nModels);
for (var i = 0; i < nModels; i++) {
fullPathNames[i] = "String[" + i + "]";
var data = arrayData.get (i);
if (Clazz.instanceOf (data, String)) readers[i] = Clazz.innerTypeInstance (org.jmol.viewer.FileManager.StringDataReader, this, null, arrayData.get (i));
 else if (Clazz.instanceOf (data, Array)) readers[i] = Clazz.innerTypeInstance (org.jmol.viewer.FileManager.ArrayDataReader, this, null, arrayData.get (i));
 else if (Clazz.instanceOf (data, java.util.List)) readers[i] = Clazz.innerTypeInstance (org.jmol.viewer.FileManager.VectorDataReader, this, null, arrayData.get (i));
}
var filesReader = Clazz.innerTypeInstance (org.jmol.viewer.FileManager.FilesReader, this, null, fullPathNames, fullPathNames, null, readers, htParams, isAppend);
filesReader.run ();
return filesReader.atomSetCollection;
}, "java.util.List,java.util.Map,~B");
Clazz.defineMethod (c$, "createAtomSetCollectionFromDOM", 
function (DOMNode, htParams) {
var aDOMReader = Clazz.innerTypeInstance (org.jmol.viewer.FileManager.DOMReader, this, null, DOMNode, htParams);
aDOMReader.run ();
return aDOMReader.atomSetCollection;
}, "~O,java.util.Map");
Clazz.defineMethod (c$, "createAtomSetCollectionFromReader", 
function (fullPathName, name, reader, htParams) {
var fileReader = Clazz.innerTypeInstance (org.jmol.viewer.FileManager.FileReader, this, null, name, fullPathName, name, null, reader, htParams, false);
fileReader.run ();
return fileReader.atomSetCollection;
}, "~S,~S,~O,java.util.Map");
Clazz.defineMethod (c$, "getBufferedInputStream", 
function (fullPathName) {
var ret = this.getBufferedReaderOrErrorMessageFromName (fullPathName,  new Array (2), true, true);
return (Clazz.instanceOf (ret, java.io.BufferedInputStream) ? ret : null);
}, "~S");
Clazz.defineMethod (c$, "getBufferedInputStreamOrErrorMessageFromName", 
function (name, fullName, showMsg, checkOnly, outputBytes) {
var cacheBytes = (fullName == null ? null : this.getCachedPngjBytes (fullName));
if (cacheBytes == null) cacheBytes = this.cacheGet (fullName, true);
var isPngjBinaryPost = (name.indexOf ("?POST?_PNGJBIN_") >= 0);
var isPngjPost = (isPngjBinaryPost || name.indexOf ("?POST?_PNGJ_") >= 0);
if (name.indexOf ("?POST?_PNG_") > 0 || isPngjPost) {
var o = this.viewer.getImageAs (isPngjPost ? "PNGJ" : "PNG", -1, 0, 0, null, null);
if (!(Clazz.instanceOf (o, Array))) return o;
if (isPngjBinaryPost) {
outputBytes = o;
name = org.jmol.util.TextFormat.simpleReplace (name, "?_", "=_");
} else {
name =  new javax.util.StringXBuilder ().append (name).append ("=").appendSB (org.jmol.util.Base64.getBase64 (o)).toString ();
}}var errorMessage = null;
var iurl = (cacheBytes == null ? org.jmol.viewer.FileManager.urlPrefixes.length : -1);
for (; --iurl >= 0; ) if (name.startsWith (org.jmol.viewer.FileManager.urlPrefixes[iurl])) break;

var isURL = (iurl >= 0);
var post = null;
if (isURL && (iurl = name.indexOf ("?POST?")) >= 0) {
post = name.substring (iurl + 6);
name = name.substring (0, iurl);
}var isApplet = (this.appletDocumentBaseURL != null);
var bis = null;
var ret = null;
try {
var fai = this.viewer.getFileAdapter ();
if (cacheBytes == null && (isApplet || isURL)) {
if (isApplet && isURL && this.appletProxy != null) name = this.appletProxy + "?url=" + this.urlEncode (name);
var url = (isApplet ?  new java.net.URL (this.appletDocumentBaseURL, name) :  new java.net.URL (name));
if (checkOnly) return null;
name = url.toString ();
if (showMsg && name.toLowerCase ().indexOf ("password") < 0) org.jmol.util.Logger.info ("FileManager opening " + name);
ret = fai.getBufferedURLInputStream (url, outputBytes, post);
if (Clazz.instanceOf (ret, javax.util.StringXBuilder) || Clazz.instanceOf (ret, String)) return ret;
} else if (cacheBytes == null && (cacheBytes = this.cacheGet (name, true)) == null) {
if (showMsg) org.jmol.util.Logger.info ("FileManager opening " + name);
ret = fai.getBufferedFileInputStream (name);
}if (Clazz.instanceOf (ret, String)) return ret;
if (cacheBytes == null) bis = ret;
 else bis =  new java.io.BufferedInputStream ( new java.io.ByteArrayInputStream (cacheBytes));
if (checkOnly) {
bis.close ();
bis = null;
}return bis;
} catch (e) {
if (Clazz.exceptionOf (e, Exception)) {
try {
if (bis != null) bis.close ();
} catch (e1) {
if (Clazz.exceptionOf (e1, java.io.IOException)) {
} else {
throw e1;
}
}
errorMessage = "" + e;
} else {
throw e;
}
}
return errorMessage;
}, "~S,~S,~B,~B,~A");
Clazz.defineMethod (c$, "urlEncode", 
($fz = function (name) {
try {
return java.net.URLEncoder.encode (name, "utf-8");
} catch (e) {
if (Clazz.exceptionOf (e, java.io.UnsupportedEncodingException)) {
return name;
} else {
throw e;
}
}
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "getFullPathNameOrError", 
function (filename) {
var names = this.classifyName (filename, true);
if (names == null || names[0] == null || names.length < 2) return [null, "cannot read file name: " + filename];
var name = names[0];
var fullPath = names[0].$replace ('\\', '/');
name = org.jmol.viewer.FileManager.getZipRoot (name);
var errMsg = this.getBufferedInputStreamOrErrorMessageFromName (name, fullPath, false, true, null);
return [fullPath, (Clazz.instanceOf (errMsg, String) ? errMsg : null)];
}, "~S");
Clazz.defineMethod (c$, "getBufferedReaderOrErrorMessageFromName", 
function (name, fullPathNameReturn, isBinary, doSpecialLoad) {
var data = this.cacheGet (name, false);
var bytes = (Clazz.instanceOf (data, Array) ? data : null);
if (name.startsWith ("cache://")) {
if (data == null) return "cannot read " + name;
if (Clazz.instanceOf (data, Array)) {
bytes = data;
} else {
return org.jmol.viewer.FileManager.getBufferedReaderForString (data);
}}var names = this.classifyName (name, true);
if (names == null) return "cannot read file name: " + name;
if (fullPathNameReturn != null) fullPathNameReturn[0] = names[0].$replace ('\\', '/');
return this.getUnzippedBufferedReaderOrErrorMessageFromName (names[0], bytes, false, isBinary, false, doSpecialLoad);
}, "~S,~A,~B,~B");
Clazz.defineMethod (c$, "getEmbeddedFileState", 
function (fileName) {
var dir = null;
dir = this.getZipDirectory (fileName, false);
if (dir.length == 0) {
var state = this.viewer.getFileAsStringBin (fileName, 2147483647, false, true);
return (state.indexOf ("**** Jmol Embedded Script ****") < 0 ? "" : org.jmol.script.ScriptCompiler.getEmbeddedScript (state));
}for (var i = 0; i < dir.length; i++) if (dir[i].indexOf (".spt") >= 0) {
var data = [fileName + "|" + dir[i], null];
this.getFileDataOrErrorAsString (data, 2147483647, false, false);
return data[1];
}
return "";
}, "~S");
Clazz.defineMethod (c$, "getUnzippedBufferedReaderOrErrorMessageFromName", 
function (name, bytes, allowZipStream, asInputStream, isTypeCheckOnly, doSpecialLoad) {
var subFileList = null;
var info = (bytes == null && doSpecialLoad ? this.viewer.getModelAdapter ().specialLoad (name, "filesNeeded?") : null);
var name00 = name;
if (info != null) {
if (isTypeCheckOnly) return info;
if (info[2] != null) {
var header = info[1];
var fileData =  new java.util.Hashtable ();
if (info.length == 3) {
var name0 = this.getObjectAsSections (info[2], header, fileData);
fileData.put ("OUTPUT", name0);
info = this.viewer.getModelAdapter ().specialLoad (name, fileData.get (name0));
if (info.length == 3) {
name0 = this.getObjectAsSections (info[2], header, fileData);
fileData.put ("OUTPUT", name0);
info = this.viewer.getModelAdapter ().specialLoad (info[1], fileData.get (name0));
}}var sb =  new javax.util.StringXBuilder ();
if (fileData.get ("OUTPUT") != null) sb.append (fileData.get (fileData.get ("OUTPUT")));
var s;
for (var i = 2; i < info.length; i++) {
name = info[i];
name = this.getObjectAsSections (name, header, fileData);
org.jmol.util.Logger.info ("reading " + name);
s = fileData.get (name);
sb.append (s);
}
s = sb.toString ();
if (this.spardirCache == null) this.spardirCache =  new java.util.Hashtable ();
this.spardirCache.put (name00.$replace ('\\', '/'), s.getBytes ());
return org.jmol.viewer.FileManager.getBufferedReaderForString (s);
}}if (bytes == null) bytes = this.getCachedPngjBytes (name);
var fullName = name;
if (name.indexOf ("|") >= 0) {
subFileList = org.jmol.util.TextFormat.splitChars (name, "|");
if (bytes == null) org.jmol.util.Logger.info ("FileManager opening " + name);
name = subFileList[0];
}var t = (bytes == null ? this.getBufferedInputStreamOrErrorMessageFromName (name, fullName, true, false, null) :  new java.io.BufferedInputStream ( new java.io.ByteArrayInputStream (bytes)));
if (Clazz.instanceOf (t, String)) return t;
if (Clazz.instanceOf (t, javax.util.StringXBuilder)) return org.jmol.viewer.FileManager.getBufferedReaderForString ((t).toString ());
try {
var bis = t;
if (org.jmol.util.ZipUtil.isGzip (bis)) {
do {
bis =  new java.io.BufferedInputStream ( new java.util.zip.GZIPInputStream (bis));
} while (org.jmol.util.ZipUtil.isGzip (bis));
} else if (org.jmol.util.CompoundDocument.isCompoundDocument (bis)) {
var doc =  new org.jmol.util.CompoundDocument (bis);
return org.jmol.viewer.FileManager.getBufferedReaderForString (doc.getAllData ("Molecule", "Input").toString ());
} else {
bis = org.jmol.util.ZipUtil.checkPngZipStream (bis);
if (org.jmol.util.ZipUtil.isZipStream (bis)) {
if (allowZipStream) return  new java.util.zip.ZipInputStream (bis);
if (asInputStream) return org.jmol.util.ZipUtil.getZipFileContents (bis, subFileList, 1, true);
var s = org.jmol.util.ZipUtil.getZipFileContents (bis, subFileList, 1, false);
bis.close ();
return org.jmol.viewer.FileManager.getBufferedReaderForString (s);
}}if (asInputStream) return bis;
return  new java.io.BufferedReader ( new java.io.InputStreamReader (bis));
} catch (ioe) {
if (Clazz.exceptionOf (ioe, Exception)) {
return ioe.getMessage ();
} else {
throw ioe;
}
}
}, "~S,~A,~B,~B,~B,~B");
Clazz.defineMethod (c$, "getZipDirectory", 
function (fileName, addManifest) {
var t = this.getBufferedInputStreamOrErrorMessageFromName (fileName, fileName, false, false, null);
if (Clazz.instanceOf (t, javax.util.StringXBuilder)) t = org.jmol.viewer.FileManager.getBISForStringXBuilder (t);
return org.jmol.util.ZipUtil.getZipDirectoryAndClose (t, addManifest);
}, "~S,~B");
Clazz.defineMethod (c$, "getObjectAsSections", 
($fz = function (name, header, fileData) {
if (name == null) return null;
var subFileList = null;
var asBinaryString = false;
var name0 = name.$replace ('\\', '/');
if (name.indexOf (":asBinaryString") >= 0) {
asBinaryString = true;
name = name.substring (0, name.indexOf (":asBinaryString"));
}var sb = null;
if (fileData.containsKey (name0)) return name0;
if (name.indexOf ("#JMOL_MODEL ") >= 0) {
fileData.put (name0, name0 + "\n");
return name0;
}var fullName = name;
if (name.indexOf ("|") >= 0) {
subFileList = org.jmol.util.TextFormat.splitChars (name, "|");
name = subFileList[0];
}var bis = null;
try {
var t = this.getBufferedInputStreamOrErrorMessageFromName (name, fullName, false, false, null);
if (Clazz.instanceOf (t, String)) {
fileData.put (name0, t + "\n");
return name0;
}if (Clazz.instanceOf (t, javax.util.StringXBuilder)) t = org.jmol.viewer.FileManager.getBISForStringXBuilder (t);
bis = t;
if (org.jmol.util.CompoundDocument.isCompoundDocument (bis)) {
var doc =  new org.jmol.util.CompoundDocument (bis);
doc.getAllData (name.$replace ('\\', '/'), "Molecule", fileData);
} else if (org.jmol.util.ZipUtil.isZipStream (bis)) {
org.jmol.util.ZipUtil.getAllData (bis, subFileList, name.$replace ('\\', '/'), "Molecule", fileData);
} else if (asBinaryString) {
var bd =  new org.jmol.util.BinaryDocument ();
bd.setStream (bis, false);
sb =  new javax.util.StringXBuilder ();
if (header != null) sb.append ("BEGIN Directory Entry " + name0 + "\n");
try {
while (true) sb.append (Integer.toHexString ((bd.readByte ()) & 0xFF)).appendC (' ');

} catch (e1) {
if (Clazz.exceptionOf (e1, Exception)) {
sb.appendC ('\n');
} else {
throw e1;
}
}
if (header != null) sb.append ("\nEND Directory Entry " + name0 + "\n");
fileData.put (name0, sb.toString ());
} else {
var br =  new java.io.BufferedReader ( new java.io.InputStreamReader (org.jmol.util.ZipUtil.isGzip (bis) ?  new java.util.zip.GZIPInputStream (bis) : bis));
var line;
sb =  new javax.util.StringXBuilder ();
if (header != null) sb.append ("BEGIN Directory Entry " + name0 + "\n");
while ((line = br.readLine ()) != null) {
sb.append (line);
sb.appendC ('\n');
}
br.close ();
if (header != null) sb.append ("\nEND Directory Entry " + name0 + "\n");
fileData.put (name0, sb.toString ());
}} catch (ioe) {
if (Clazz.exceptionOf (ioe, Exception)) {
fileData.put (name0, ioe.getMessage ());
} else {
throw ioe;
}
}
if (bis != null) try {
bis.close ();
} catch (e) {
if (Clazz.exceptionOf (e, Exception)) {
} else {
throw e;
}
}
if (!fileData.containsKey (name0)) fileData.put (name0, "FILE NOT FOUND: " + name0 + "\n");
return name0;
}, $fz.isPrivate = true, $fz), "~S,~S,java.util.Map");
Clazz.defineMethod (c$, "getFileAsBytes", 
function (name, os, allowZip) {
if (name == null) return null;
var fullName = name;
var subFileList = null;
if (name.indexOf ("|") >= 0) {
subFileList = org.jmol.util.TextFormat.splitChars (name, "|");
name = subFileList[0];
allowZip = true;
}var t = this.getBufferedInputStreamOrErrorMessageFromName (name, fullName, false, false, null);
if (Clazz.instanceOf (t, String)) return "Error:" + t;
if (Clazz.instanceOf (t, javax.util.StringXBuilder)) t = org.jmol.viewer.FileManager.getBISForStringXBuilder (t);
try {
var bis = t;
var bytes = (os != null || subFileList == null || subFileList.length <= 1 || !allowZip || !org.jmol.util.ZipUtil.isZipStream (bis) && !org.jmol.util.ZipUtil.isPngZipStream (bis) ? org.jmol.viewer.FileManager.getStreamAsBytes (bis, os) : org.jmol.util.ZipUtil.getZipFileContentsAsBytes (bis, subFileList, 1));
bis.close ();
return bytes;
} catch (ioe) {
if (Clazz.exceptionOf (ioe, Exception)) {
return ioe.getMessage ();
} else {
throw ioe;
}
}
}, "~S,java.io.OutputStream,~B");
c$.getStreamAsBytes = Clazz.defineMethod (c$, "getStreamAsBytes", 
($fz = function (bis, os) {
var buf =  Clazz.newArray (1024, 0);
var bytes = (os == null ?  Clazz.newArray (4096, 0) : null);
var len = 0;
var totalLen = 0;
while ((len = bis.read (buf)) > 0) {
totalLen += len;
if (os == null) {
if (totalLen >= bytes.length) bytes = org.jmol.util.ArrayUtil.ensureLengthByte (bytes, totalLen * 2);
System.arraycopy (buf, 0, bytes, totalLen - len, len);
} else {
os.write (buf, 0, len);
}}
bis.close ();
if (os == null) {
return org.jmol.util.ArrayUtil.arrayCopyByte (bytes, totalLen);
}return totalLen + " bytes";
}, $fz.isPrivate = true, $fz), "java.io.BufferedInputStream,java.io.OutputStream");
Clazz.defineMethod (c$, "getFileDataOrErrorAsString", 
function (data, nBytesMax, doSpecialLoad, allowBinary) {
data[1] = "";
var name = data[0];
if (name == null) return false;
var t = this.getBufferedReaderOrErrorMessageFromName (name, data, false, doSpecialLoad);
if (Clazz.instanceOf (t, String)) {
data[1] = t;
return false;
}try {
var br = t;
var sb = javax.util.StringXBuilder.newN (8192);
var line;
if (nBytesMax == 2147483647) {
line = br.readLine ();
if (allowBinary || line != null && line.indexOf ('\0') < 0 && (line.length != 4 || (line.charAt (0)).charCodeAt (0) != 65533 || line.indexOf ("PNG") != 1)) {
sb.append (line).appendC ('\n');
while ((line = br.readLine ()) != null) sb.append (line).appendC ('\n');

}} else {
var n = 0;
var len;
while (n < nBytesMax && (line = br.readLine ()) != null) {
if (nBytesMax - n < (len = line.length) + 1) line = line.substring (0, nBytesMax - n - 1);
sb.append (line).appendC ('\n');
n += len + 1;
}
}br.close ();
data[1] = sb.toString ();
org.jmol.viewer.FileManager.fixUnicode (data, 1);
return true;
} catch (ioe) {
if (Clazz.exceptionOf (ioe, Exception)) {
data[1] = ioe.getMessage ();
return false;
} else {
throw ioe;
}
}
}, "~A,~N,~B,~B");
c$.fixUnicode = Clazz.defineMethod (c$, "fixUnicode", 
($fz = function (data, i) {
var s = data[i];
var encoding = org.jmol.viewer.FileManager.Encoding.NONE;
if (s.indexOf ("\357\273\277") == 0) encoding = org.jmol.viewer.FileManager.Encoding.UTF8;
 else if (s.indexOf ("\0\0\376\377") == 0) encoding = org.jmol.viewer.FileManager.Encoding.UTF_32BE;
 else if (s.indexOf ("\377\376\0\0") == 0) encoding = org.jmol.viewer.FileManager.Encoding.UTF_32LE;
 else if (s.indexOf ("\377\376") == 0) encoding = org.jmol.viewer.FileManager.Encoding.UTF_16LE;
 else if (s.indexOf ("\376\377") == 0) encoding = org.jmol.viewer.FileManager.Encoding.UTF_16BE;
if (encoding === org.jmol.viewer.FileManager.Encoding.NONE) return ;
org.jmol.util.Logger.info ("FileManager found encoding " + encoding.name ());
try {
s =  String.instantialize (s.getBytes (), encoding.name ().$replace ('_', '-'));
switch (encoding) {
case org.jmol.viewer.FileManager.Encoding.UTF8:
case org.jmol.viewer.FileManager.Encoding.UTF_16BE:
s = s.substring (1);
break;
case org.jmol.viewer.FileManager.Encoding.UTF_16LE:
s = s.substring (1, s.length - 1);
break;
default:
break;
}
} catch (e) {
if (Clazz.exceptionOf (e, java.io.UnsupportedEncodingException)) {
System.out.println (e);
} else {
throw e;
}
}
data[i] = s;
}, $fz.isPrivate = true, $fz), "~A,~N");
Clazz.defineMethod (c$, "getFileAsImage", 
function (name, retFileNameOrError) {
if (name == null) {
retFileNameOrError[0] = "";
return null;
}var names = this.classifyName (name, true);
if (names == null) {
retFileNameOrError[0] = "cannot read file name: " + name;
return null;
}var image = null;
var apiPlatform = this.viewer.apiPlatform;
var fullPathName = names[0].$replace ('\\', '/');
if (fullPathName.indexOf ("|") > 0) {
var ret = this.getFileAsBytes (fullPathName, null, true);
if (!(Clazz.instanceOf (ret, Array))) {
retFileNameOrError[0] = "" + ret;
return null;
}image = apiPlatform.createImage (ret);
} else if (org.jmol.viewer.FileManager.urlTypeIndex (fullPathName) >= 0) {
try {
image = apiPlatform.createImage ( new java.net.URL (fullPathName));
} catch (e) {
if (Clazz.exceptionOf (e, Exception)) {
retFileNameOrError[0] = "bad URL: " + fullPathName;
return null;
} else {
throw e;
}
}
} else {
image = apiPlatform.createImage (fullPathName);
}if (image == null) return null;
try {
if (!apiPlatform.waitForDisplay (this.viewer.getDisplay (), image)) {
return null;
}} catch (e) {
if (Clazz.exceptionOf (e, Exception)) {
e.printStackTrace ();
retFileNameOrError[0] = e.getMessage () + " opening " + fullPathName;
return null;
} else {
throw e;
}
}
if (apiPlatform.getImageWidth (image) < 1) {
retFileNameOrError[0] = "invalid or missing image " + fullPathName;
return null;
}retFileNameOrError[0] = fullPathName;
return image;
}, "~S,~A");
c$.urlTypeIndex = Clazz.defineMethod (c$, "urlTypeIndex", 
function (name) {
for (var i = 0; i < org.jmol.viewer.FileManager.urlPrefixes.length; ++i) {
if (name.startsWith (org.jmol.viewer.FileManager.urlPrefixes[i])) {
return i;
}}
return -1;
}, "~S");
Clazz.defineMethod (c$, "classifyName", 
($fz = function (name, isFullLoad) {
if (name == null) return [null];
var doSetPathForAllFiles = (this.pathForAllFiles.length > 0);
if (name.startsWith ("?")) {
if ((name = this.viewer.dialogAsk ("load", name.substring (1))) == null) return [isFullLoad ? "#CANCELED#" : null];
doSetPathForAllFiles = false;
}var file = null;
var url = null;
var names = null;
if (name.startsWith ("cache://")) {
names =  new Array (3);
names[0] = names[2] = name;
names[1] = org.jmol.viewer.FileManager.stripPath (names[0]);
return names;
}name = this.viewer.resolveDatabaseFormat (name);
if (name.indexOf (":") < 0 && name.indexOf ("/") != 0) name = org.jmol.viewer.FileManager.addDirectory (this.viewer.getDefaultDirectory (), name);
if (this.appletDocumentBaseURL != null) {
try {
if (name.indexOf (":\\") == 1 || name.indexOf (":/") == 1) name = "file:/" + name;
url =  new java.net.URL (this.appletDocumentBaseURL, name);
} catch (e) {
if (Clazz.exceptionOf (e, java.net.MalformedURLException)) {
return [isFullLoad ? e.getMessage () : null];
} else {
throw e;
}
}
} else {
if (org.jmol.viewer.FileManager.urlTypeIndex (name) >= 0 || this.viewer.isRestricted (org.jmol.viewer.Viewer.ACCESS.NONE) || this.viewer.isRestricted (org.jmol.viewer.Viewer.ACCESS.READSPT) && !name.endsWith (".spt") && !name.endsWith ("/")) {
try {
url =  new java.net.URL (name);
} catch (e) {
if (Clazz.exceptionOf (e, java.net.MalformedURLException)) {
return [isFullLoad ? e.getMessage () : null];
} else {
throw e;
}
}
} else {
file = this.viewer.apiPlatform.newFile (name);
names = [file.getAbsolutePath (), file.getName (), "file:/" + file.getAbsolutePath ().$replace ('\\', '/')];
}}if (url != null) {
names =  new Array (3);
names[0] = names[2] = url.toString ();
names[1] = org.jmol.viewer.FileManager.stripPath (names[0]);
}if (doSetPathForAllFiles) {
var name0 = names[0];
names[0] = this.pathForAllFiles + names[1];
org.jmol.util.Logger.info ("FileManager substituting " + name0 + " --> " + names[0]);
}if (isFullLoad && (file != null || org.jmol.viewer.FileManager.urlTypeIndex (names[0]) == 3)) {
var path = (file == null ? org.jmol.util.TextFormat.trim (names[0].substring (5), "/") : names[0]);
var pt = path.length - names[1].length - 1;
if (pt > 0) {
path = path.substring (0, pt);
org.jmol.viewer.FileManager.setLocalPath (this.viewer, path, true);
}}return names;
}, $fz.isPrivate = true, $fz), "~S,~B");
c$.addDirectory = Clazz.defineMethod (c$, "addDirectory", 
($fz = function (defaultDirectory, name) {
if (defaultDirectory.length == 0) return name;
var ch = (name.length > 0 ? name.charAt (0) : ' ');
var s = defaultDirectory.toLowerCase ();
if ((s.endsWith (".zip") || s.endsWith (".tar")) && ch.charCodeAt (0) != 124 && ch.charCodeAt (0) != 47) defaultDirectory += "|";
return defaultDirectory + (ch.charCodeAt (0) == 47 || ch.charCodeAt (0) == 47 || ((ch = defaultDirectory.charAt (defaultDirectory.length - 1))).charCodeAt (0) == 124 || ch.charCodeAt (0) == 47 ? "" : "/") + name;
}, $fz.isPrivate = true, $fz), "~S,~S");
Clazz.defineMethod (c$, "getDefaultDirectory", 
function (name) {
var names = this.classifyName (name, true);
if (names == null) return "";
name = org.jmol.viewer.FileManager.fixPath (names[0]);
return (name == null ? "" : name.substring (0, name.lastIndexOf ("/")));
}, "~S");
c$.fixPath = Clazz.defineMethod (c$, "fixPath", 
($fz = function (path) {
path = path.$replace ('\\', '/');
path = org.jmol.util.TextFormat.simpleReplace (path, "/./", "/");
var pt = path.lastIndexOf ("//") + 1;
if (pt < 1) pt = path.indexOf (":/") + 1;
if (pt < 1) pt = path.indexOf ("/");
if (pt < 0) return null;
var protocol = path.substring (0, pt);
path = path.substring (pt);
while ((pt = path.lastIndexOf ("/../")) >= 0) {
var pt0 = path.substring (0, pt).lastIndexOf ("/");
if (pt0 < 0) return org.jmol.util.TextFormat.simpleReplace (protocol + path, "/../", "/");
path = path.substring (0, pt0) + path.substring (pt + 3);
}
if (path.length == 0) path = "/";
return protocol + path;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "getFilePath", 
function (name, addUrlPrefix, asShortName) {
var names = this.classifyName (name, false);
return (names == null || names.length == 1 ? "" : asShortName ? names[1] : addUrlPrefix ? names[2] : names[0] == null ? "" : names[0].$replace ('\\', '/'));
}, "~S,~B,~B");
c$.getLocalUrl = Clazz.defineMethod (c$, "getLocalUrl", 
function (file) {
if (file.getName ().startsWith ("=")) return file.getName ();
var path = file.getAbsolutePath ().$replace ('\\', '/');
for (var i = 0; i < org.jmol.viewer.FileManager.urlPrefixPairs.length; i++) if (path.indexOf (org.jmol.viewer.FileManager.urlPrefixPairs[i]) == 0) return null;

for (var i = 0; i < org.jmol.viewer.FileManager.urlPrefixPairs.length; i += 2) if (path.indexOf (org.jmol.viewer.FileManager.urlPrefixPairs[i]) > 0) return org.jmol.viewer.FileManager.urlPrefixPairs[i + 1] + org.jmol.util.TextFormat.trim (path.substring (path.indexOf (org.jmol.viewer.FileManager.urlPrefixPairs[i]) + org.jmol.viewer.FileManager.urlPrefixPairs[i].length), "/");

return null;
}, "org.jmol.api.JmolFileInterface");
c$.getLocalDirectory = Clazz.defineMethod (c$, "getLocalDirectory", 
function (viewer, forDialog) {
var localDir = viewer.getParameter (forDialog ? "currentLocalPath" : "defaultDirectoryLocal");
if (forDialog && localDir.length == 0) localDir = viewer.getParameter ("defaultDirectoryLocal");
if (localDir.length == 0) return (viewer.isApplet () ? null : viewer.apiPlatform.newFile (System.getProperty ("user.dir", ".")));
if (viewer.isApplet () && localDir.indexOf ("file:/") == 0) localDir = localDir.substring (6);
var f = viewer.apiPlatform.newFile (localDir);
return f.isDirectory () ? f : f.getParentAsFile ();
}, "org.jmol.api.JmolViewer,~B");
c$.setLocalPath = Clazz.defineMethod (c$, "setLocalPath", 
function (viewer, path, forDialog) {
while (path.endsWith ("/") || path.endsWith ("\\")) path = path.substring (0, path.length - 1);

viewer.setStringProperty ("currentLocalPath", path);
if (!forDialog) viewer.setStringProperty ("defaultDirectoryLocal", path);
}, "org.jmol.api.JmolViewer,~S,~B");
c$.getLocalPathForWritingFile = Clazz.defineMethod (c$, "getLocalPathForWritingFile", 
function (viewer, file) {
if (file.indexOf ("file:/") == 0) return file.substring (6);
if (file.indexOf ("/") == 0 || file.indexOf (":") >= 0) return file;
var dir = org.jmol.viewer.FileManager.getLocalDirectory (viewer, false);
return (dir == null ? file : org.jmol.viewer.FileManager.fixPath (dir.toString () + "/" + file));
}, "org.jmol.api.JmolViewer,~S");
c$.setScriptFileReferences = Clazz.defineMethod (c$, "setScriptFileReferences", 
function (script, localPath, remotePath, scriptPath) {
if (localPath != null) script = org.jmol.viewer.FileManager.setScriptFileReferences (script, localPath, true);
if (remotePath != null) script = org.jmol.viewer.FileManager.setScriptFileReferences (script, remotePath, false);
script = org.jmol.util.TextFormat.simpleReplace (script, "\1\"", "\"");
if (scriptPath != null) {
while (scriptPath.endsWith ("/")) scriptPath = scriptPath.substring (0, scriptPath.length - 1);

for (var ipt = 0; ipt < org.jmol.viewer.FileManager.scriptFilePrefixes.length; ipt++) {
var tag = org.jmol.viewer.FileManager.scriptFilePrefixes[ipt];
script = org.jmol.util.TextFormat.simpleReplace (script, tag + ".", tag + scriptPath);
}
}return script;
}, "~S,~S,~S,~S");
c$.setScriptFileReferences = Clazz.defineMethod (c$, "setScriptFileReferences", 
($fz = function (script, dataPath, isLocal) {
if (dataPath == null) return script;
var noPath = (dataPath.length == 0);
var fileNames =  new java.util.ArrayList ();
org.jmol.viewer.FileManager.getFileReferences (script, fileNames);
var oldFileNames =  new java.util.ArrayList ();
var newFileNames =  new java.util.ArrayList ();
var nFiles = fileNames.size ();
for (var iFile = 0; iFile < nFiles; iFile++) {
var name0 = fileNames.get (iFile);
var name = name0;
var itype = org.jmol.viewer.FileManager.urlTypeIndex (name);
if (isLocal == (itype < 0 || itype == 3)) {
var pt = (noPath ? -1 : name.indexOf ("/" + dataPath + "/"));
if (pt >= 0) {
name = name.substring (pt + 1);
} else {
pt = name.lastIndexOf ("/");
if (pt < 0 && !noPath) name = "/" + name;
if (pt < 0 || noPath) pt++;
name = dataPath + name.substring (pt);
}}org.jmol.util.Logger.info ("FileManager substituting " + name0 + " --> " + name);
oldFileNames.add ("\"" + name0 + "\"");
newFileNames.add ("\1\"" + name + "\"");
}
return org.jmol.util.TextFormat.replaceStrings (script, oldFileNames, newFileNames);
}, $fz.isPrivate = true, $fz), "~S,~S,~B");
c$.getFileReferences = Clazz.defineMethod (c$, "getFileReferences", 
function (script, fileList) {
for (var ipt = 0; ipt < org.jmol.viewer.FileManager.scriptFilePrefixes.length; ipt++) {
var tag = org.jmol.viewer.FileManager.scriptFilePrefixes[ipt];
var i = -1;
while ((i = script.indexOf (tag, i + 1)) >= 0) {
var s = org.jmol.util.Parser.getQuotedStringAt (script, i);
if (s.indexOf ("::") >= 0) s = org.jmol.util.TextFormat.splitChars (s, "::")[1];
fileList.add (s);
}
}
}, "~S,java.util.List");
Clazz.defineMethod (c$, "createZipSet", 
function (fileName, script, scripts, includeRemoteFiles) {
var v =  new java.util.ArrayList ();
var fileNames =  new java.util.ArrayList ();
var crcValue;
var crcMap =  new java.util.Hashtable ();
var haveSceneScript = (scripts != null && scripts.length == 3 && scripts[1].startsWith ("###scene.spt###"));
var sceneScriptOnly = (haveSceneScript && scripts[2].equals ("min"));
if (!sceneScriptOnly) {
org.jmol.viewer.FileManager.getFileReferences (script, fileNames);
if (haveSceneScript) org.jmol.viewer.FileManager.getFileReferences (scripts[1], fileNames);
}var haveScripts = (!haveSceneScript && scripts != null && scripts.length > 0);
if (haveScripts) {
script = org.jmol.viewer.FileManager.wrapPathForAllFiles ("script " + org.jmol.util.Escape.escapeStr (scripts[0]), "");
for (var i = 0; i < scripts.length; i++) fileNames.add (scripts[i]);

}var nFiles = fileNames.size ();
if (fileName != null) fileName = fileName.$replace ('\\', '/');
var fileRoot = fileName;
if (fileRoot != null) {
fileRoot = fileName.substring (fileName.lastIndexOf ("/") + 1);
if (fileRoot.indexOf (".") >= 0) fileRoot = fileRoot.substring (0, fileRoot.indexOf ("."));
}var newFileNames =  new java.util.ArrayList ();
for (var iFile = 0; iFile < nFiles; iFile++) {
var name = fileNames.get (iFile);
var itype = org.jmol.viewer.FileManager.urlTypeIndex (name);
var isLocal = (itype < 0 || itype == 3);
var newName = name;
if (isLocal || includeRemoteFiles) {
var ptSlash = name.lastIndexOf ("/");
newName = (name.indexOf ("?") > 0 && name.indexOf ("|") < 0 ? org.jmol.util.TextFormat.replaceAllCharacters (name, "/:?\"'=&", "_") : org.jmol.viewer.FileManager.stripPath (name));
newName = org.jmol.util.TextFormat.replaceAllCharacters (newName, "[]", "_");
var isSparDir = (this.spardirCache != null && this.spardirCache.containsKey (name));
if (isLocal && name.indexOf ("|") < 0 && !isSparDir) {
v.add (name);
v.add (newName);
v.add (null);
} else {
var ret = (isSparDir ? this.spardirCache.get (name) : this.getFileAsBytes (name, null, true));
if (!(Clazz.instanceOf (ret, Array))) return ret;
var crc =  new java.util.zip.CRC32 ();
crc.update (ret);
crcValue = Long.$valueOf (crc.getValue ());
if (crcMap.containsKey (crcValue)) {
newName = crcMap.get (crcValue);
} else {
if (isSparDir) newName = newName.$replace ('.', '_');
if (crcMap.containsKey (newName)) {
var pt = newName.lastIndexOf (".");
if (pt > ptSlash) newName = newName.substring (0, pt) + "[" + iFile + "]" + newName.substring (pt);
 else newName = newName + "[" + iFile + "]";
}v.add (name);
v.add (newName);
v.add (ret);
crcMap.put (crcValue, newName);
}}name = "$SCRIPT_PATH$" + newName;
}crcMap.put (newName, newName);
newFileNames.add (name);
}
if (!sceneScriptOnly) {
script = org.jmol.util.TextFormat.replaceQuotedStrings (script, fileNames, newFileNames);
v.add ("state.spt");
v.add (null);
v.add (script.getBytes ());
}if (haveSceneScript) {
if (scripts[0] != null) {
v.add ("animate.spt");
v.add (null);
v.add (scripts[0].getBytes ());
}v.add ("scene.spt");
v.add (null);
script = org.jmol.util.TextFormat.replaceQuotedStrings (scripts[1], fileNames, newFileNames);
v.add (script.getBytes ());
}var sname = (haveSceneScript ? "scene.spt" : "state.spt");
v.add ("JmolManifest.txt");
v.add (null);
var sinfo = "# Jmol Manifest Zip Format 1.1\n# Created " + java.text.DateFormat.getDateInstance ().format ( new java.util.Date ()) + "\n" + "# JmolVersion " + org.jmol.viewer.Viewer.getJmolVersion () + "\n" + sname;
v.add (sinfo.getBytes ());
v.add ("Jmol_version_" + org.jmol.viewer.Viewer.getJmolVersion ().$replace (' ', '_').$replace (':', '.'));
v.add (null);
v.add ( Clazz.newArray (0, 0));
if (fileRoot != null) {
var bytes = this.viewer.getImageAsWithComment ("PNG", -1, -1, -1, null, null, null, org.jmol.viewer.JmolConstants.embedScript (script));
if (Clazz.instanceOf (bytes, Array)) {
v.add ("preview.png");
v.add (null);
v.add (bytes);
}}return this.writeZipFile (fileName, v, "OK JMOL");
}, "~S,~S,~A,~B");
c$.wrapPathForAllFiles = Clazz.defineMethod (c$, "wrapPathForAllFiles", 
function (cmd, strCatch) {
var vname = "v__" + ("" + Math.random ()).substring (3);
return "# Jmol script\n{\n\tVar " + vname + " = pathForAllFiles\n\tpathForAllFiles=\"$SCRIPT_PATH$\"\n\ttry{\n\t\t" + cmd + "\n\t}catch(e){" + strCatch + "}\n\tpathForAllFiles = " + vname + "\n}\n";
}, "~S,~S");
c$.stripPath = Clazz.defineMethod (c$, "stripPath", 
($fz = function (name) {
var pt = Math.max (name.lastIndexOf ("|"), name.lastIndexOf ("/"));
return name.substring (pt + 1);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "writeZipFile", 
($fz = function (outFileName, fileNamesAndByteArrays, msg) {
var buf =  Clazz.newArray (1024, 0);
var nBytesOut = 0;
var nBytes = 0;
org.jmol.util.Logger.info ("creating zip file " + (outFileName == null ? "" : outFileName) + "...");
var fullFilePath = null;
var fileList = "";
try {
var bos = (outFileName == null || outFileName.startsWith ("http://") ?  new java.io.ByteArrayOutputStream () : null);
var os =  new java.util.zip.ZipOutputStream (bos == null ?  new java.io.FileOutputStream (outFileName) : bos);
for (var i = 0; i < fileNamesAndByteArrays.size (); i += 3) {
var fname = fileNamesAndByteArrays.get (i);
var bytes = null;
if (fname.indexOf ("file:/") == 0) {
fname = fname.substring (5);
if (fname.length > 2 && (fname.charAt (2)).charCodeAt (0) == 58) fname = fname.substring (1);
} else if (fname.indexOf ("cache://") == 0) {
var data = this.cacheGet (fname, false);
fname = fname.substring (8);
bytes = (Clazz.instanceOf (data, Array) ? data : (data).getBytes ());
}var fnameShort = fileNamesAndByteArrays.get (i + 1);
if (fnameShort == null) fnameShort = fname;
if (bytes == null) bytes = fileNamesAndByteArrays.get (i + 2);
var key = ";" + fnameShort + ";";
if (fileList.indexOf (key) >= 0) {
org.jmol.util.Logger.info ("duplicate entry");
continue ;}fileList += key;
os.putNextEntry ( new java.util.zip.ZipEntry (fnameShort));
var nOut = 0;
if (bytes == null) {
var $in =  new java.io.FileInputStream (fname);
var len;
while ((len = $in.read (buf)) > 0) {
os.write (buf, 0, len);
nOut += len;
}
$in.close ();
} else {
os.write (bytes, 0, bytes.length);
nOut += bytes.length;
}nBytesOut += nOut;
os.closeEntry ();
org.jmol.util.Logger.info ("...added " + fname + " (" + nOut + " bytes)");
}
os.close ();
org.jmol.util.Logger.info (nBytesOut + " bytes prior to compression");
if (bos != null) {
var bytes = bos.toByteArray ();
if (outFileName == null) return bytes;
fullFilePath = outFileName;
nBytes = bytes.length;
var ret = this.postByteArray (outFileName, bytes);
if (ret.indexOf ("Exception") >= 0) return ret;
msg += " " + ret;
} else {
var f = this.viewer.apiPlatform.newFile (outFileName);
fullFilePath = f.getAbsolutePath ().$replace ('\\', '/');
nBytes = f.length ();
}} catch (e) {
if (Clazz.exceptionOf (e, java.io.IOException)) {
org.jmol.util.Logger.info (e.getMessage ());
return e.getMessage ();
} else {
throw e;
}
}
return msg + " " + nBytes + " " + fullFilePath;
}, $fz.isPrivate = true, $fz), "~S,java.util.List,~S");
Clazz.defineMethod (c$, "postByteArray", 
($fz = function (outFileName, bytes) {
var ret = this.getBufferedInputStreamOrErrorMessageFromName (outFileName, null, false, false, bytes);
if (Clazz.instanceOf (ret, String)) return ret;
if (Clazz.instanceOf (ret, javax.util.StringXBuilder)) ret = org.jmol.viewer.FileManager.getBISForStringXBuilder (ret);
try {
ret = org.jmol.viewer.FileManager.getStreamAsBytes (ret, null);
} catch (e) {
if (Clazz.exceptionOf (e, java.io.IOException)) {
try {
(ret).close ();
} catch (e1) {
if (Clazz.exceptionOf (e1, java.io.IOException)) {
} else {
throw e1;
}
}
} else {
throw e;
}
}
return  String.instantialize (ret);
}, $fz.isPrivate = true, $fz), "~S,~A");
c$.fixFileNameVariables = Clazz.defineMethod (c$, "fixFileNameVariables", 
function (format, fname) {
var str = org.jmol.util.TextFormat.simpleReplace (format, "%FILE", fname);
if (str.indexOf ("%LC") < 0) return str;
fname = fname.toLowerCase ();
str = org.jmol.util.TextFormat.simpleReplace (str, "%LCFILE", fname);
if (fname.length == 4) str = org.jmol.util.TextFormat.simpleReplace (str, "%LC13", fname.substring (1, 3));
return str;
}, "~S,~S");
Clazz.defineMethod (c$, "clearPngjCache", 
function (fileName) {
if (fileName == null || this.pngjCache != null && this.pngjCache.containsKey (this.getCanonicalName (org.jmol.viewer.FileManager.getZipRoot (fileName)))) this.pngjCache = null;
}, "~S");
Clazz.defineMethod (c$, "getCachedPngjBytes", 
($fz = function (pathName) {
if (pathName.indexOf (".png") < 0) return null;
org.jmol.util.Logger.info ("FileManager checking PNGJ cache for " + pathName);
var shortName = this.shortSceneFilename (pathName);
if (this.pngjCache == null && !this.cachePngjFile ([pathName, null])) return null;
var isMin = (pathName.indexOf (".min.") >= 0);
if (!isMin) {
var cName = this.getCanonicalName (org.jmol.viewer.FileManager.getZipRoot (pathName));
if (!this.pngjCache.containsKey (cName) && !this.cachePngjFile ([pathName, null])) return null;
if (pathName.indexOf ("|") < 0) shortName = cName;
}if (this.pngjCache.containsKey (shortName)) {
org.jmol.util.Logger.info ("FileManager using memory cache " + shortName);
return this.pngjCache.get (shortName);
}for (var key, $key = this.pngjCache.keySet ().iterator (); $key.hasNext () && ((key = $key.next ()) || true);) System.out.println (key);

System.out.println ("FileManager memory cache (" + this.pngjCache.size () + ") did not find " + pathName + " as " + shortName);
if (!isMin || !this.cachePngjFile ([pathName, null])) return null;
org.jmol.util.Logger.info ("FileManager using memory cache " + shortName);
return this.pngjCache.get (shortName);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "cachePngjFile", 
function (data) {
this.pngjCache =  new java.util.Hashtable ();
data[1] = null;
if (data[0] == null) return false;
data[0] = org.jmol.viewer.FileManager.getZipRoot (data[0]);
var shortName = this.shortSceneFilename (data[0]);
try {
data[1] = org.jmol.util.ZipUtil.cacheZipContents (org.jmol.util.ZipUtil.checkPngZipStream (this.getBufferedInputStreamOrErrorMessageFromName (data[0], null, false, false, null)), shortName, this.pngjCache);
} catch (e) {
if (Clazz.exceptionOf (e, Exception)) {
return false;
} else {
throw e;
}
}
if (data[1] == null) return false;
var bytes = data[1].getBytes ();
this.pngjCache.put (this.getCanonicalName (data[0]), bytes);
if (shortName.indexOf ("_scene_") >= 0) {
this.pngjCache.put (this.shortSceneFilename (data[0]), bytes);
bytes = this.pngjCache.remove (shortName + "|state.spt");
if (bytes != null) this.pngjCache.put (this.shortSceneFilename (data[0] + "|state.spt"), bytes);
}for (var key, $key = this.pngjCache.keySet ().iterator (); $key.hasNext () && ((key = $key.next ()) || true);) System.out.println (key);

return true;
}, "~A");
c$.getZipRoot = Clazz.defineMethod (c$, "getZipRoot", 
($fz = function (fileName) {
var pt = fileName.indexOf ("|");
return (pt < 0 ? fileName : fileName.substring (0, pt));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "getCanonicalName", 
($fz = function (pathName) {
var names = this.classifyName (pathName, true);
return (names == null ? pathName : names[2]);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "shortSceneFilename", 
($fz = function (pathName) {
pathName = this.getCanonicalName (pathName);
var pt = pathName.indexOf ("_scene_") + 7;
if (pt < 7) return pathName;
var s = "";
if (pathName.endsWith ("|state.spt")) {
var pt1 = pathName.indexOf ('.', pt);
if (pt1 < 0) return pathName;
s = pathName.substring (pt, pt1);
}var pt2 = pathName.lastIndexOf ("|");
return pathName.substring (0, pt) + s + (pt2 > 0 ? pathName.substring (pt2) : "");
}, $fz.isPrivate = true, $fz), "~S");
c$.getSceneScript = Clazz.defineMethod (c$, "getSceneScript", 
function (scenes, htScenes, list) {
var iSceneLast = 0;
var iScene = 0;
var sceneScript =  new javax.util.StringXBuilder ().append ("###scene.spt###").append (" Jmol ").append (org.jmol.api.JmolViewer.getJmolVersion ()).append ("\n{\nsceneScripts={");
for (var i = 1; i < scenes.length; i++) {
scenes[i - 1] = org.jmol.util.TextFormat.trim (scenes[i - 1], "\t\n\r ");
var pt =  Clazz.newArray (1, 0);
iScene = org.jmol.util.Parser.parseIntNext (scenes[i], pt);
if (iScene == -2147483648) return "bad scene ID: " + iScene;
scenes[i] = scenes[i].substring (pt[0]);
list.add (Integer.$valueOf (iScene));
var key = iSceneLast + "-" + iScene;
htScenes.put (key, scenes[i - 1]);
if (i > 1) sceneScript.append (",");
sceneScript.appendC ('\n').append (org.jmol.util.Escape.escapeStr (key)).append (": ").append (org.jmol.util.Escape.escapeStr (scenes[i - 1]));
iSceneLast = iScene;
}
sceneScript.append ("\n}\n");
if (list.size () == 0) return "no lines 'pause scene n'";
sceneScript.append ("\nthisSceneRoot = '$SCRIPT_PATH$'.split('_scene_')[1];\n").append ("thisSceneID = 0 + ('$SCRIPT_PATH$'.split('_scene_')[2]).split('.')[1];\n").append ("var thisSceneState = '$SCRIPT_PATH$'.replace('.min.png','.all.png') + 'state.spt';\n").append ("var spath = ''+currentSceneID+'-'+thisSceneID;\n").append ("print thisSceneRoot + ' ' + spath;\n").append ("var sscript = sceneScripts[spath];\n").append ("var isOK = true;\n").append ("try{\n").append ("if (thisSceneRoot != currentSceneRoot){\n").append (" isOK = false;\n").append ("} else if (sscript != '') {\n").append (" isOK = true;\n").append ("} else if (thisSceneID <= currentSceneID){\n").append (" isOK = false;\n").append ("} else {\n").append (" sscript = '';\n").append (" for (var i = currentSceneID; i < thisSceneID; i++){\n").append ("  var key = ''+i+'-'+(i + 1); var script = sceneScripts[key];\n").append ("  if (script = '') {isOK = false;break;}\n").append ("  sscript += ';'+script;\n").append (" }\n").append ("}\n}catch(e){print e;isOK = false}\n").append ("if (isOK) {" + org.jmol.viewer.FileManager.wrapPathForAllFiles ("script inline @sscript", "print e;isOK = false") + "}\n").append ("if (!isOK){script @thisSceneState}\n").append ("currentSceneRoot = thisSceneRoot; currentSceneID = thisSceneID;\n}\n");
return sceneScript.toString ();
}, "~A,java.util.Map,java.util.List");
Clazz.defineMethod (c$, "cachePut", 
function (key, data) {
key = key.$replace ('\\', '/');
if (org.jmol.util.Logger.debugging) org.jmol.util.Logger.info ("cachePut " + key);
if (data == null || data.equals ("")) this.cache.remove (key);
 else this.cache.put (key, data);
}, "~S,~O");
Clazz.defineMethod (c$, "cacheGet", 
function (key, bytesOnly) {
key = key.$replace ('\\', '/');
if (org.jmol.util.Logger.debugging && this.cache.containsKey (key)) org.jmol.util.Logger.info ("cacheGet " + key);
var data = this.cache.get (key);
return (bytesOnly && (Clazz.instanceOf (data, String)) ? null : data);
}, "~S,~B");
Clazz.defineMethod (c$, "cacheClear", 
function () {
this.cache.clear ();
});
Clazz.defineMethod (c$, "cacheFileByName", 
function (fileName, isAdd) {
if (fileName == null || !isAdd && fileName.equalsIgnoreCase ("")) {
this.cacheClear ();
return -1;
}var data;
if (isAdd) {
fileName = this.viewer.resolveDatabaseFormat (fileName);
data = this.getFileAsBytes (fileName, null, true);
if (Clazz.instanceOf (data, String)) return 0;
this.cachePut (fileName, data);
} else {
data = this.cache.remove (fileName.$replace ('\\', '/'));
}return (data == null ? 0 : Clazz.instanceOf (data, String) ? (data).length : (data).length);
}, "~S,~B");
Clazz.defineMethod (c$, "cacheList", 
function () {
var map =  new java.util.Hashtable ();
for (var entry, $entry = this.cache.entrySet ().iterator (); $entry.hasNext () && ((entry = $entry.next ()) || true);) map.put (entry.getKey (), Integer.$valueOf (Clazz.instanceOf (entry.getValue (), Array) ? (entry.getValue ()).length : entry.getValue ().toString ().length));

return map;
});
c$.$FileManager$DOMReader$ = function () {
Clazz.pu$h ();
c$ = Clazz.decorateAsClass (function () {
Clazz.prepareCallback (this, arguments);
this.aDOMNode = null;
this.atomSetCollection = null;
this.htParams = null;
Clazz.instantialize (this, arguments);
}, org.jmol.viewer.FileManager, "DOMReader");
Clazz.makeConstructor (c$, 
function (a, b) {
this.aDOMNode = a;
this.htParams = b;
}, "~O,java.util.Map");
Clazz.defineMethod (c$, "run", 
function () {
this.htParams.put ("nameSpaceInfo", this.b$["org.jmol.viewer.FileManager"].viewer.apiPlatform.getJsObjectInfo (this.aDOMNode, null, null));
this.atomSetCollection = this.b$["org.jmol.viewer.FileManager"].viewer.getModelAdapter ().getAtomSetCollectionFromDOM (this.aDOMNode, this.htParams);
if (Clazz.instanceOf (this.atomSetCollection, String)) return ;
this.b$["org.jmol.viewer.FileManager"].viewer.zap (false, true, false);
this.b$["org.jmol.viewer.FileManager"].fullPathName = this.b$["org.jmol.viewer.FileManager"].fileName = this.b$["org.jmol.viewer.FileManager"].nameAsGiven = "JSNode";
});
c$ = Clazz.p0p ();
};
c$.$FileManager$FileReader$ = function () {
Clazz.pu$h ();
c$ = Clazz.decorateAsClass (function () {
Clazz.prepareCallback (this, arguments);
this.fileNameIn = null;
this.fullPathNameIn = null;
this.nameAsGivenIn = null;
this.fileTypeIn = null;
this.atomSetCollection = null;
this.reader = null;
this.htParams = null;
this.isAppend = false;
this.bytes = null;
Clazz.instantialize (this, arguments);
}, org.jmol.viewer.FileManager, "FileReader");
Clazz.makeConstructor (c$, 
function (a, b, c, d, e, f, g) {
this.fileNameIn = a;
this.fullPathNameIn = b;
this.nameAsGivenIn = c;
this.fileTypeIn = d;
this.reader = (Clazz.instanceOf (e, java.io.BufferedReader) ? e : Clazz.instanceOf (e, java.io.Reader) ?  new java.io.BufferedReader (e) : null);
this.bytes = (Clazz.instanceOf (e, Array) ? e : null);
this.htParams = f;
this.isAppend = g;
}, "~S,~S,~S,~S,~O,java.util.Map,~B");
Clazz.defineMethod (c$, "run", 
function () {
if (!this.isAppend && this.b$["org.jmol.viewer.FileManager"].viewer.displayLoadErrors) this.b$["org.jmol.viewer.FileManager"].viewer.zap (false, true, false);
var a = null;
var b = null;
if (this.reader == null) {
b = this.b$["org.jmol.viewer.FileManager"].getUnzippedBufferedReaderOrErrorMessageFromName (this.fullPathNameIn, this.bytes, true, false, false, true);
if (b == null || Clazz.instanceOf (b, String)) {
a = (b == null ? "error opening:" + this.nameAsGivenIn : b);
if (!a.startsWith ("NOTE:")) org.jmol.util.Logger.error ("file ERROR: " + this.fullPathNameIn + "\n" + a);
this.atomSetCollection = a;
return ;
}}if (this.reader == null) {
if (Clazz.instanceOf (b, java.io.BufferedReader)) {
this.reader = b;
} else if (Clazz.instanceOf (b, java.util.zip.ZipInputStream)) {
var c = this.fullPathNameIn;
var d = null;
if (c.indexOf ("|") >= 0 && !c.endsWith (".zip")) {
d = org.jmol.util.TextFormat.splitChars (c, "|");
c = d[0];
}if (d != null) this.htParams.put ("subFileList", d);
var e = b;
var f = this.b$["org.jmol.viewer.FileManager"].getZipDirectory (c, true);
this.atomSetCollection = this.b$["org.jmol.viewer.FileManager"].viewer.getModelAdapter ().getAtomSetCollectionOrBufferedReaderFromZip (e, c, f, this.htParams, false, false);
try {
e.close ();
} catch (e) {
if (Clazz.exceptionOf (e, Exception)) {
} else {
throw e;
}
}
}}if (this.reader != null) {
this.atomSetCollection = this.b$["org.jmol.viewer.FileManager"].viewer.getModelAdapter ().getAtomSetCollectionReader (this.fullPathNameIn, this.fileTypeIn, this.reader, this.htParams);
if (!(Clazz.instanceOf (this.atomSetCollection, String))) this.atomSetCollection = this.b$["org.jmol.viewer.FileManager"].viewer.getModelAdapter ().getAtomSetCollection (this.atomSetCollection);
}if (this.reader != null) try {
this.reader.close ();
} catch (e) {
if (Clazz.exceptionOf (e, java.io.IOException)) {
} else {
throw e;
}
}
if (Clazz.instanceOf (this.atomSetCollection, String)) return ;
if (!this.isAppend && !this.b$["org.jmol.viewer.FileManager"].viewer.displayLoadErrors) this.b$["org.jmol.viewer.FileManager"].viewer.zap (false, true, false);
this.b$["org.jmol.viewer.FileManager"].fullPathName = this.fullPathNameIn;
this.b$["org.jmol.viewer.FileManager"].nameAsGiven = this.nameAsGivenIn;
this.b$["org.jmol.viewer.FileManager"].fileName = this.fileNameIn;
});
c$ = Clazz.p0p ();
};
c$.$FileManager$FilesReader$ = function () {
Clazz.pu$h ();
c$ = Clazz.decorateAsClass (function () {
Clazz.prepareCallback (this, arguments);
this.fullPathNamesIn = null;
this.namesAsGivenIn = null;
this.fileTypesIn = null;
this.atomSetCollection = null;
this.stringReaders = null;
this.htParams = null;
this.isAppend = false;
Clazz.instantialize (this, arguments);
}, org.jmol.viewer.FileManager, "FilesReader", null, org.jmol.api.JmolFilesReaderInterface);
Clazz.makeConstructor (c$, 
function (a, b, c, d, e, f) {
this.fullPathNamesIn = a;
this.namesAsGivenIn = b;
this.fileTypesIn = c;
this.stringReaders = d;
this.htParams = e;
this.isAppend = f;
}, "~A,~A,~A,~A,java.util.Map,~B");
Clazz.defineMethod (c$, "run", 
function () {
if (!this.isAppend && this.b$["org.jmol.viewer.FileManager"].viewer.displayLoadErrors) this.b$["org.jmol.viewer.FileManager"].viewer.zap (false, true, false);
var a = !this.b$["org.jmol.viewer.FileManager"].viewer.displayLoadErrors;
this.atomSetCollection = this.b$["org.jmol.viewer.FileManager"].viewer.getModelAdapter ().getAtomSetCollectionReaders (this, this.fullPathNamesIn, this.fileTypesIn, this.htParams, a);
this.stringReaders = null;
if (a && !(Clazz.instanceOf (this.atomSetCollection, String))) {
this.atomSetCollection = this.b$["org.jmol.viewer.FileManager"].viewer.getModelAdapter ().getAtomSetCollectionFromSet (this.atomSetCollection, null, this.htParams);
}if (Clazz.instanceOf (this.atomSetCollection, String)) {
org.jmol.util.Logger.error ("file ERROR: " + this.atomSetCollection);
return ;
}if (!this.isAppend && !this.b$["org.jmol.viewer.FileManager"].viewer.displayLoadErrors) this.b$["org.jmol.viewer.FileManager"].viewer.zap (false, true, false);
this.b$["org.jmol.viewer.FileManager"].fullPathName = this.b$["org.jmol.viewer.FileManager"].fileName = this.b$["org.jmol.viewer.FileManager"].nameAsGiven = (this.stringReaders == null ? "file[]" : "String[]");
});
Clazz.overrideMethod (c$, "getBufferedReaderOrBinaryDocument", 
function (a, b) {
if (this.stringReaders != null) return (b ? null : this.stringReaders[a].getBufferedReader ());
var c = this.fullPathNamesIn[a];
var d = null;
this.htParams.remove ("subFileList");
if (c.indexOf ("|") >= 0) {
d = org.jmol.util.TextFormat.splitChars (c, "|");
c = d[0];
}var e = this.b$["org.jmol.viewer.FileManager"].getUnzippedBufferedReaderOrErrorMessageFromName (c, null, true, b, false, true);
if (Clazz.instanceOf (e, java.util.zip.ZipInputStream)) {
if (d != null) this.htParams.put ("subFileList", d);
var f = this.b$["org.jmol.viewer.FileManager"].getZipDirectory (c, true);
e = this.b$["org.jmol.viewer.FileManager"].getBufferedInputStreamOrErrorMessageFromName (c, this.fullPathNamesIn[a], false, false, null);
var g = (Clazz.instanceOf (e, javax.util.StringXBuilder) ? org.jmol.viewer.FileManager.getBISForStringXBuilder (e) : e);
e = this.b$["org.jmol.viewer.FileManager"].viewer.getModelAdapter ().getAtomSetCollectionOrBufferedReaderFromZip (g, c, f, this.htParams, true, b);
}if (Clazz.instanceOf (e, java.io.BufferedInputStream)) return  new org.jmol.util.BinaryDocument (e);
if (Clazz.instanceOf (e, java.io.BufferedReader) || Clazz.instanceOf (e, org.jmol.util.BinaryDocument)) {
return e;
}return (e == null ? "error opening:" + this.namesAsGivenIn[a] : e);
}, "~N,~B");
c$ = Clazz.p0p ();
};
c$.$FileManager$DataReader$ = function () {
Clazz.pu$h ();
c$ = Clazz.decorateAsClass (function () {
Clazz.prepareCallback (this, arguments);
Clazz.instantialize (this, arguments);
}, org.jmol.viewer.FileManager, "DataReader", java.io.BufferedReader);
Clazz.defineMethod (c$, "getBufferedReader", 
function () {
return this;
});
Clazz.defineMethod (c$, "readBuf", 
function (a) {
var b = 0;
var c = this.readLine ();
if (c == null) return 0;
var d = 0;
var e = c.length;
for (var f = 0; f < a.length && e >= 0; f++) {
if (d >= e) {
d = 0;
a[f] = '\n';
c = this.readLine ();
e = (c == null ? -1 : c.length);
} else {
a[f] = c.charAt (d++);
}b++;
}
return b;
}, "~A");
c$ = Clazz.p0p ();
};
c$.$FileManager$ArrayDataReader$ = function () {
Clazz.pu$h ();
c$ = Clazz.decorateAsClass (function () {
Clazz.prepareCallback (this, arguments);
this.data = null;
this.pt = 0;
this.len = 0;
this.ptMark = 0;
Clazz.instantialize (this, arguments);
}, org.jmol.viewer.FileManager, "ArrayDataReader", org.jmol.viewer.FileManager.DataReader, null, Clazz.innerTypeInstance (org.jmol.viewer.FileManager.DataReader, this, null, Clazz.inheritArgs));
Clazz.makeConstructor (c$, 
function (a) {
Clazz.superConstructor (this, org.jmol.viewer.FileManager.ArrayDataReader, [ new java.io.StringReader ("")]);
this.data = a;
this.len = a.length;
}, "~A");
Clazz.defineMethod (c$, "read", 
function (a) {
return this.readBuf (a);
}, "~A");
Clazz.defineMethod (c$, "readLine", 
function () {
return (this.pt < this.len ? this.data[this.pt++] : null);
});
Clazz.defineMethod (c$, "mark", 
function (a) {
this.ptMark = this.pt;
}, "~N");
Clazz.overrideMethod (c$, "reset", 
function () {
this.pt = this.ptMark;
});
c$ = Clazz.p0p ();
};
c$.$FileManager$StringDataReader$ = function () {
Clazz.pu$h ();
c$ = Clazz.decorateAsClass (function () {
Clazz.prepareCallback (this, arguments);
Clazz.instantialize (this, arguments);
}, org.jmol.viewer.FileManager, "StringDataReader", org.jmol.viewer.FileManager.DataReader, null, Clazz.innerTypeInstance (org.jmol.viewer.FileManager.DataReader, this, null, Clazz.inheritArgs));
Clazz.makeConstructor (c$, 
function (a) {
Clazz.superConstructor (this, org.jmol.viewer.FileManager.StringDataReader, [ new java.io.StringReader (a)]);
}, "~S");
c$ = Clazz.p0p ();
};
c$.$FileManager$VectorDataReader$ = function () {
Clazz.pu$h ();
c$ = Clazz.decorateAsClass (function () {
Clazz.prepareCallback (this, arguments);
this.data = null;
this.pt = 0;
this.len = 0;
this.ptMark = 0;
Clazz.instantialize (this, arguments);
}, org.jmol.viewer.FileManager, "VectorDataReader", org.jmol.viewer.FileManager.DataReader, null, Clazz.innerTypeInstance (org.jmol.viewer.FileManager.DataReader, this, null, Clazz.inheritArgs));
Clazz.makeConstructor (c$, 
function (a) {
Clazz.superConstructor (this, org.jmol.viewer.FileManager.VectorDataReader, [ new java.io.StringReader ("")]);
this.data = a;
this.len = a.size ();
}, "java.util.List");
Clazz.defineMethod (c$, "read", 
function (a) {
return this.readBuf (a);
}, "~A");
Clazz.defineMethod (c$, "readLine", 
function () {
return (this.pt < this.len ? this.data.get (this.pt++) : null);
});
Clazz.defineMethod (c$, "mark", 
function (a) {
this.ptMark = this.pt;
}, "~N");
Clazz.overrideMethod (c$, "reset", 
function () {
this.pt = this.ptMark;
});
c$ = Clazz.p0p ();
};
Clazz.pu$h ();
c$ = Clazz.declareType (org.jmol.viewer.FileManager, "Encoding", Enum);
Clazz.defineEnumConstant (c$, "NONE", 0, []);
Clazz.defineEnumConstant (c$, "UTF8", 1, []);
Clazz.defineEnumConstant (c$, "UTF_16BE", 2, []);
Clazz.defineEnumConstant (c$, "UTF_16LE", 3, []);
Clazz.defineEnumConstant (c$, "UTF_32BE", 4, []);
Clazz.defineEnumConstant (c$, "UTF_32LE", 5, []);
c$ = Clazz.p0p ();
Clazz.defineStatics (c$,
"URL_LOCAL", 3,
"urlPrefixes", ["http:", "https:", "ftp:", "file:"],
"urlPrefixPairs", ["http:", "http://", "www.", "http://www.", "https:", "https://", "ftp:", "ftp://", "file:", "file:///"]);
c$.scriptFilePrefixes = c$.prototype.scriptFilePrefixes = ["/*file*/\"", "FILE0=\"", "FILE1=\""];
Clazz.defineStatics (c$,
"SCENE_TAG", "###scene.spt###");
});
