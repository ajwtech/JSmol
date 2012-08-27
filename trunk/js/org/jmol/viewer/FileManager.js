Clazz.declarePackage ("org.jmol.viewer");
Clazz.load (["java.io.BufferedReader", "java.lang.Enum", "org.jmol.api.JmolFilesReaderInterface"], "org.jmol.viewer.FileManager", ["java.io.BufferedInputStream", "$.ByteArrayInputStream", "$.File", "$.FileInputStream", "$.InputStreamReader", "$.StringReader", "java.lang.StringBuffer", "java.net.URL", "$.URLEncoder", "java.util.ArrayList", "org.jmol.util.Logger", "$.Parser", "$.TextFormat", "org.jmol.viewer.DataManager", "$.Viewer"], function () {
c$ = Clazz.decorateAsClass (function () {
this.viewer = null;
this.pathForAllFiles = "";
this.nameAsGiven = "zapped";
this.fullPathName = null;
this.fileName = null;
this.appletDocumentBase = null;
this.appletCodeBase = null;
this.appletProxy = null;
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
Clazz.instantialize (this, arguments);
}, org.jmol.viewer, "FileManager");
if (!Clazz.isClassDefined ("org.jmol.viewer.FileManager")) {
org.jmol.viewer.FileManager.$FileManager$ ();
}
if (!Clazz.isClassDefined ("org.jmol.viewer.FileManager")) {
org.jmol.viewer.FileManager.$FileManager$ ();
}
Clazz.makeConstructor (c$, 
function (viewer) {
this.viewer = viewer;
this.clear ();
}, "org.jmol.viewer.Viewer");
Clazz.defineMethod (c$, "clear", 
function () {
this.fullPathName = this.fileName = this.nameAsGiven = this.viewer.getZapName ();
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
return (this.appletDocumentBase == null ? "" : this.appletDocumentBase.toString ());
});
Clazz.defineMethod (c$, "setAppletContext", 
function (documentBase, codeBase, jmolAppletProxy) {
this.appletDocumentBase = documentBase;
this.appletCodeBase = codeBase;
this.appletProxy = jmolAppletProxy;
org.jmol.util.Logger.info ("appletDocumentBase=" + this.appletDocumentBase + "\nappletCodeBase=" + this.appletCodeBase);
}, "java.net.URL,java.net.URL,~S");
Clazz.defineMethod (c$, "setAppletProxy", 
function (appletProxy) {
this.appletProxy = (appletProxy == null || appletProxy.length == 0 ? null : appletProxy);
}, "~S");
Clazz.defineMethod (c$, "getState", 
function (sfunc) {
var commands =  new StringBuffer ();
if (sfunc != null) {
sfunc.append ("  _setFileState;\n");
commands.append ("function _setFileState() {\n\n");
}if (commands.indexOf ("append") < 0 && this.viewer.getModelSetFileName ().equals ("zapped")) commands.append ("  zap;\n");
this.viewer.appendLoadStates (commands);
if (sfunc != null) commands.append ("\n}\n\n");
return commands.toString ();
}, "StringBuffer");
Clazz.defineMethod (c$, "getFileTypeName", 
function (fileName) {
var pt = fileName.indexOf ("::");
if (pt >= 0) return fileName.substring (0, pt);
if (fileName.startsWith ("=")) return "pdb";
var br = this.getUnzippedBufferedReaderOrErrorMessageFromName (fileName, true, false, true, true);
if (Clazz.instanceOf (br, java.io.BufferedReader)) return this.viewer.getModelAdapter ().getFileTypeName (br);
if (Clazz.instanceOf (br, Array)) {
return (br)[0];
}return null;
}, "~S");
c$.getBufferedReaderForString = Clazz.defineMethod (c$, "getBufferedReaderForString", 
function (string) {
return  new java.io.BufferedReader ( new java.io.StringReader (string));
}, "~S");
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
}, "~S,StringBuffer,java.util.Map,~B,~B");
Clazz.defineMethod (c$, "createAtomSeCollectionFromStrings", 
function (arrayModels, loadScript, htParams, isAppend) {
if (!htParams.containsKey ("isData")) {
var oldSep = "\"" + this.viewer.getDataSeparator () + "\"";
var tag = "\"" + (isAppend ? "append" : "model") + " inline\"";
var sb =  new StringBuffer ("set dataSeparator \"~~~next file~~~\";\ndata ");
sb.append (tag);
for (var i = 0; i < arrayModels.length; i++) {
if (i > 0) sb.append ("~~~next file~~~");
sb.append (arrayModels[i]);
}
sb.append ("end ").append (tag).append (";set dataSeparator ").append (oldSep);
loadScript.append (sb);
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
}, "~A,StringBuffer,java.util.Map,~B");
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
var fileReader = Clazz.innerTypeInstance (org.jmol.viewer.FileManager.FileReader, this, null, name, fullPathName, name, null,  new java.io.BufferedReader (reader), htParams, false);
fileReader.run ();
return fileReader.atomSetCollection;
}, "~S,~S,java.io.Reader,java.util.Map");
Clazz.defineMethod (c$, "getBufferedInputStream", 
function (fullPathName) {
var ret = this.getBufferedReaderOrErrorMessageFromName (fullPathName,  new Array (2), true, true);
return (Clazz.instanceOf (ret, java.io.BufferedInputStream) ? ret : null);
}, "~S");
Clazz.defineMethod (c$, "getBufferedInputStreamOrErrorMessageFromName", 
function (name, fullName, showMsg, checkOnly, bytes) {
var cacheBytes = null;
var errorMessage = null;
var iurl;
for (iurl = org.jmol.viewer.FileManager.urlPrefixes.length; --iurl >= 0; ) if (name.startsWith (org.jmol.viewer.FileManager.urlPrefixes[iurl])) break;

var isURL = (iurl >= 0);
var isApplet = (this.appletDocumentBase != null);
var bis = null;
try {
if (cacheBytes != null) bis =  new java.io.BufferedInputStream ( new java.io.ByteArrayInputStream (cacheBytes));
 else if (isApplet || isURL) {
if (isApplet && isURL && this.appletProxy != null) name = this.appletProxy + "?url=" + java.net.URLEncoder.encode (name, "utf-8");
var url = (isApplet ?  new java.net.URL (this.appletDocumentBase, name) :  new java.net.URL (name));
name = url.toString ();
if (showMsg && !checkOnly && name.toLowerCase ().indexOf ("password") < 0) org.jmol.util.Logger.info ("FileManager opening " + name);
var conn = url.openConnection ();
if (bytes != null && !checkOnly) {
conn.setRequestProperty ("Content-Type", "application/octet-stream;");
conn.setDoOutput (true);
conn.getOutputStream ().write (bytes);
conn.getOutputStream ().flush ();
}bis =  new java.io.BufferedInputStream (conn.getInputStream ());
} else {
if (showMsg) org.jmol.util.Logger.info ("FileManager opening " + name);
var file =  new java.io.File (name);
bis =  new java.io.BufferedInputStream ( new java.io.FileInputStream (file));
}if (checkOnly) {
bis.close ();
bis = null;
}return bis;
} catch (e) {
if (Clazz.instanceOf (e, Exception)) {
try {
if (bis != null) bis.close ();
} catch (e1) {
if (Clazz.instanceOf (e1, java.io.IOException)) {
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
var names = this.classifyName (name, true);
if (names == null) return "cannot read file name: " + name;
if (fullPathNameReturn != null) fullPathNameReturn[0] = names[0].$replace ('\\', '/');
return this.getUnzippedBufferedReaderOrErrorMessageFromName (names[0], false, isBinary, false, doSpecialLoad);
}, "~S,~A,~B,~B");
Clazz.defineMethod (c$, "getEmbeddedFileState", 
function (fileName) {
return "";
}, "~S");
Clazz.defineMethod (c$, "getUnzippedBufferedReaderOrErrorMessageFromName", 
function (name, allowZipStream, asInputStream, isTypeCheckOnly, doSpecialLoad) {
var subFileList = null;
var bytes = this.getCachedPngjBytes (name);
var fullName = name;
if (name.indexOf ("|") >= 0) {
subFileList = org.jmol.util.TextFormat.split (name, "|");
if (bytes == null) org.jmol.util.Logger.info ("FileManager opening " + name);
name = subFileList[0];
}var t = (bytes == null ? this.getBufferedInputStreamOrErrorMessageFromName (name, fullName, true, false, null) :  new java.io.BufferedInputStream ( new java.io.ByteArrayInputStream (bytes)));
if (Clazz.instanceOf (t, String)) return t;
try {
var bis = t;
if (asInputStream) return bis;
return  new java.io.BufferedReader ( new java.io.InputStreamReader (bis));
} catch (ioe) {
if (Clazz.instanceOf (ioe, Exception)) {
return ioe.getMessage ();
} else {
throw ioe;
}
}
}, "~S,~B,~B,~B,~B");
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
var sb =  new StringBuffer (8192);
var line;
if (nBytesMax == 2147483647) {
line = br.readLine ();
if (allowBinary || line != null && line.indexOf ('\0') < 0 && (line.length != 4 || (line.charAt (0)).charCodeAt (0) != 65533 || line.indexOf ("PNG") != 1)) {
sb.append (line).append ('\n');
while ((line = br.readLine ()) != null) sb.append (line).append ('\n');

}} else {
var n = 0;
var len;
while (n < nBytesMax && (line = br.readLine ()) != null) {
if (nBytesMax - n < (len = line.length) + 1) line = line.substring (0, nBytesMax - n - 1);
sb.append (line).append ('\n');
n += len + 1;
}
}br.close ();
data[1] = sb.toString ();
org.jmol.viewer.FileManager.fixUnicode (data, 1);
return true;
} catch (ioe) {
if (Clazz.instanceOf (ioe, Exception)) {
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
if (Clazz.instanceOf (e, java.io.UnsupportedEncodingException)) {
System.out.println (e);
} else {
throw e;
}
}
data[i] = s;
}, $fz.isPrivate = true, $fz), "~A,~N");
c$.urlTypeIndex = Clazz.defineMethod (c$, "urlTypeIndex", 
($fz = function (name) {
for (var i = 0; i < org.jmol.viewer.FileManager.urlPrefixes.length; ++i) {
if (name.startsWith (org.jmol.viewer.FileManager.urlPrefixes[i])) {
return i;
}}
return -1;
}, $fz.isPrivate = true, $fz), "~S");
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
name = this.viewer.resolveDatabaseFormat (name);
if (name.indexOf (":") < 0 && name.indexOf ("/") != 0) name = org.jmol.viewer.FileManager.addDirectory (this.viewer.getDefaultDirectory (), name);
if (this.appletDocumentBase != null) {
try {
if (name.indexOf (":\\") == 1 || name.indexOf (":/") == 1) name = "file:/" + name;
url =  new java.net.URL (this.appletDocumentBase, name);
} catch (e) {
if (Clazz.instanceOf (e, java.net.MalformedURLException)) {
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
if (Clazz.instanceOf (e, java.net.MalformedURLException)) {
return [isFullLoad ? e.getMessage () : null];
} else {
throw e;
}
}
} else {
file =  new java.io.File (name);
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
if ((s.endsWith (".zip") || s.endsWith (".tar")) && (ch).charCodeAt (0) != ('|').charCodeAt (0) && (ch).charCodeAt (0) != ('/').charCodeAt (0)) defaultDirectory += "|";
return defaultDirectory + ((ch).charCodeAt (0) == ('/').charCodeAt (0) || (ch).charCodeAt (0) == ('/').charCodeAt (0) || ((ch = defaultDirectory.charAt (defaultDirectory.length - 1))).charCodeAt (0) == ('|').charCodeAt (0) || (ch).charCodeAt (0) == ('/').charCodeAt (0) ? "" : "/") + name;
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
}, "java.io.File");
c$.getLocalDirectory = Clazz.defineMethod (c$, "getLocalDirectory", 
function (viewer, forDialog) {
var localDir = viewer.getParameter (forDialog ? "currentLocalPath" : "defaultDirectoryLocal");
if (forDialog && localDir.length == 0) localDir = viewer.getParameter ("defaultDirectoryLocal");
if (localDir.length == 0) return (viewer.isApplet () ? null :  new java.io.File (System.getProperty ("user.dir")));
if (viewer.isApplet () && localDir.indexOf ("file:/") == 0) localDir = localDir.substring (6);
var f =  new java.io.File (localDir);
return f.isDirectory () ? f : f.getParentFile ();
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
var s = org.jmol.util.Parser.getNextQuotedString (script, i);
if (s.indexOf ("::") >= 0) s = org.jmol.util.TextFormat.split (s, "::")[1];
fileList.add (s);
}
}
}, "~S,java.util.List");
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
}, "~S");
Clazz.defineMethod (c$, "getCachedPngjBytes", 
($fz = function (pathName) {
return null;
}, $fz.isPrivate = true, $fz), "~S");
c$.getZipRoot = Clazz.defineMethod (c$, "getZipRoot", 
($fz = function (fileName) {
var pt = fileName.indexOf ("|");
return (pt < 0 ? fileName : fileName.substring (0, pt));
}, $fz.isPrivate = true, $fz), "~S");
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
this.htParams.put ("nameSpaceInfo", this.b$["org.jmol.viewer.FileManager"].viewer.getApiPlatform ().getJsObjectInfo (this.aDOMNode, null, null));
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
Clazz.instantialize (this, arguments);
}, org.jmol.viewer.FileManager, "FileReader");
Clazz.makeConstructor (c$, 
function (a, b, c, d, e, f, g) {
this.fileNameIn = a;
this.fullPathNameIn = b;
this.nameAsGivenIn = c;
this.fileTypeIn = d;
this.reader = e;
this.htParams = f;
this.isAppend = g;
}, "~S,~S,~S,~S,java.io.BufferedReader,java.util.Map,~B");
Clazz.defineMethod (c$, "run", 
function () {
if (!this.isAppend && this.b$["org.jmol.viewer.FileManager"].viewer.displayLoadErrors) this.b$["org.jmol.viewer.FileManager"].viewer.zap (false, true, false);
var a = null;
var b = null;
if (this.reader == null) {
b = this.b$["org.jmol.viewer.FileManager"].getUnzippedBufferedReaderOrErrorMessageFromName (this.fullPathNameIn, true, false, false, true);
if (b == null || Clazz.instanceOf (b, String)) {
a = (b == null ? "error opening:" + this.nameAsGivenIn : b);
if (!a.startsWith ("NOTE:")) org.jmol.util.Logger.error ("file ERROR: " + this.fullPathNameIn + "\n" + a);
this.atomSetCollection = a;
return ;
}}if (this.reader == null) {
if (Clazz.instanceOf (b, java.io.BufferedReader)) {
this.reader = b;
}}if (this.reader != null) {
this.atomSetCollection = this.b$["org.jmol.viewer.FileManager"].viewer.getModelAdapter ().getAtomSetCollectionReader (this.fullPathNameIn, this.fileTypeIn, this.reader, this.htParams);
if (!(Clazz.instanceOf (this.atomSetCollection, String))) this.atomSetCollection = this.b$["org.jmol.viewer.FileManager"].viewer.getModelAdapter ().getAtomSetCollection (this.atomSetCollection);
}if (this.reader != null) try {
this.reader.close ();
} catch (e) {
if (Clazz.instanceOf (e, java.io.IOException)) {
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
d = org.jmol.util.TextFormat.split (c, "|");
c = d[0];
}var e = this.b$["org.jmol.viewer.FileManager"].getUnzippedBufferedReaderOrErrorMessageFromName (c, true, b, false, true);
if (Clazz.instanceOf (e, java.io.BufferedReader)) {
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
c$.$FileManager$ = function () {
Clazz.pu$h ();
c$ = Clazz.declareType (org.jmol.viewer, "FileManager", Enum);
Clazz.defineEnumConstant (c$, "NONE", 0, []);
Clazz.defineEnumConstant (c$, "UTF8", 1, []);
Clazz.defineEnumConstant (c$, "UTF_16BE", 2, []);
Clazz.defineEnumConstant (c$, "UTF_16LE", 3, []);
Clazz.defineEnumConstant (c$, "UTF_32BE", 4, []);
Clazz.defineEnumConstant (c$, "UTF_32LE", 5, []);
c$ = Clazz.p0p ();
};
c$.$FileManager$ = function () {
Clazz.pu$h ();
c$ = Clazz.decorateAsClass (function () {
this.code = 0;
Clazz.instantialize (this, arguments);
}, org.jmol.viewer, "FileManager", Enum);
Clazz.defineMethod (c$, "getCode", 
function () {
return this.code;
});
Clazz.makeConstructor (c$, 
function (a) {
this.code = a;
}, "~N");
Clazz.defineEnumConstant (c$, "DELETED", 0, [5]);
Clazz.defineEnumConstant (c$, "CREATED", 1, [3]);
Clazz.defineEnumConstant (c$, "CREATING_MODELSET", 2, [2]);
Clazz.defineEnumConstant (c$, "ZAPPED", 3, [0]);
Clazz.defineEnumConstant (c$, "NOT_LOADED", 4, [-1]);
c$ = Clazz.p0p ();
};
Clazz.defineStatics (c$,
"URL_LOCAL", 3,
"urlPrefixes", ["http:", "https:", "ftp:", "file:"],
"urlPrefixPairs", ["http:", "http://", "www.", "http://www.", "https:", "https://", "ftp:", "ftp://", "file:", "file:///"]);
c$.scriptFilePrefixes = c$.prototype.scriptFilePrefixes = ["/*file*/\"", "FILE0=\"", "FILE1=\""];
});
