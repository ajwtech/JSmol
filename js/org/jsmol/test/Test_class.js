Clazz.declarePackage ("org.jsmol.test");
Clazz.load (null, ["org.jsmol.test.LimitedLineReader", "$.Test_class"], ["java.lang.StringBuffer"], function () {
c$ = Clazz.declareType (org.jsmol.test, "Test_class");
c$.main = Clazz.defineMethod (c$, "main", 
function (args) {
 new org.jsmol.test.Test_class ();
}, "~A");
Clazz.makeConstructor (c$, 
function () {
try {
var x =  new org.jsmol.test.LimitedLineReader (null, 1000);
} catch (e) {
if (Clazz.exceptionOf (e, Exception)) {
e.printStackTrace ();
} else {
throw e;
}
}
});
c$ = Clazz.decorateAsClass (function () {
this.buf = null;
this.cchBuf = 0;
this.ichCurrent = 0;
Clazz.instantialize (this, arguments);
}, org.jsmol.test, "LimitedLineReader");
Clazz.makeConstructor (c$, 
function (bufferedReader, readLimit) {
if (bufferedReader == null) return;
bufferedReader.mark (readLimit);
this.buf =  Clazz.newCharArray (readLimit, '\0');
this.cchBuf = Math.max (bufferedReader.read (this.buf, 0, readLimit), 0);
this.ichCurrent = 0;
bufferedReader.reset ();
}, "java.io.BufferedReader,~N");
Clazz.defineMethod (c$, "readLineWithNewline", 
function () {
while (this.ichCurrent < this.cchBuf) {
var ichBeginningOfLine = this.ichCurrent;
var ch = String.fromCharCode (0);
while (this.ichCurrent < this.cchBuf && (ch = this.buf[this.ichCurrent++]) != '\r' && ch != '\n') {
}
if (ch == '\r' && this.ichCurrent < this.cchBuf && this.buf[this.ichCurrent] == '\n') ++this.ichCurrent;
var cchLine = this.ichCurrent - ichBeginningOfLine;
if (this.buf[ichBeginningOfLine] == '#') continue;
var sb =  new StringBuffer (cchLine);
sb.append (this.buf, ichBeginningOfLine, cchLine);
return sb.toString ();
}
return "";
});
});
