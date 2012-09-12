Clazz.declarePackage ("org.jmol.awtjs");
Clazz.load (["org.jmol.api.FileAdapterInterface"], "org.jmol.awtjs.FileAdapter", ["java.io.BufferedInputStream", "$.File", "$.FileInputStream", "$.OutputStreamWriter"], function () {
c$ = Clazz.declareType (org.jmol.awtjs, "FileAdapter", null, org.jmol.api.FileAdapterInterface);
Clazz.overrideMethod (c$, "getBufferedURLInputStream", 
function (url, outputBytes, post, checkOnly) {
var conn;
try {
conn = url.openConnection ();
if (outputBytes != null && !checkOnly) {
conn.setRequestProperty ("Content-Type", "application/octet-stream;");
conn.setDoOutput (true);
conn.getOutputStream ().write (outputBytes);
conn.getOutputStream ().flush ();
} else if (post != null && !checkOnly) {
conn.setRequestProperty ("Content-Type", "application/x-www-form-urlencoded");
conn.setDoOutput (true);
var wr =  new java.io.OutputStreamWriter (conn.getOutputStream ());
wr.write (post);
wr.flush ();
}return  new java.io.BufferedInputStream (conn.getInputStream ());
} catch (e) {
if (Clazz.exceptionOf (e, java.io.IOException)) {
return e.getMessage ();
} else {
throw e;
}
}
}, "java.net.URL,~A,~S,~B");
Clazz.overrideMethod (c$, "getBufferedFileInputStream", 
function (name) {
var file =  new java.io.File (name);
try {
return  new java.io.BufferedInputStream ( new java.io.FileInputStream (file));
} catch (e) {
if (Clazz.exceptionOf (e, java.io.IOException)) {
return e.getMessage ();
} else {
throw e;
}
}
}, "~S");
});
