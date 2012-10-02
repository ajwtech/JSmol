Clazz.declarePackage ("javax.util");
c$ = Clazz.decorateAsClass (function () {
this.sb = null;
this.s = null;
Clazz.instantialize (this, arguments);
}, javax.util, "StringXBuilder");
Clazz.makeConstructor (c$, 
function () {
{
this.s = "";
}});
c$.newN = Clazz.defineMethod (c$, "newN", 
function (n) {
{
return new javax.util.StringXBuilder();
}}, "~N");
c$.newS = Clazz.defineMethod (c$, "newS", 
function (s) {
{
var sb = new javax.util.StringXBuilder();
sb.s = s;
return sb;
}}, "~S");
Clazz.defineMethod (c$, "appendC", 
function (c) {
{
this.s += c;
}return this;
}, "~S");
Clazz.defineMethod (c$, "appendI", 
function (i) {
{
this.s += i
}return this;
}, "~N");
Clazz.defineMethod (c$, "appendB", 
function (b) {
{
this.s += b
}return this;
}, "~B");
Clazz.defineMethod (c$, "appendF", 
function (f) {
{
this.s += f
}return this;
}, "~N");
Clazz.defineMethod (c$, "append", 
function (s) {
{
this.s += s
}return this;
}, "~S");
Clazz.overrideMethod (c$, "toString", 
function () {
{
return this.s;
}});
Clazz.defineMethod (c$, "appendSB", 
function (buf) {
{
this.s += buf.s;
}return this;
}, "javax.util.StringXBuilder");
Clazz.defineMethod (c$, "appendO", 
function (data) {
{
this.s += data.toString();
}return this;
}, "~O");
Clazz.defineMethod (c$, "length", 
function () {
{
return this.s.length;
}});
Clazz.defineMethod (c$, "indexOf", 
function (s) {
{
return this.s.indexOf(s);
}}, "~S");
Clazz.defineMethod (c$, "charAt", 
function (i) {
{
return this.s.charAt(i);
}}, "~N");
Clazz.defineMethod (c$, "setLength", 
function (n) {
{
this.s = this.s.substring(0, n);
}}, "~N");
Clazz.defineMethod (c$, "lastIndexOf", 
function (s) {
{
return this.s.lastIndexOf(s);
}}, "~S");
Clazz.defineMethod (c$, "indexOf", 
function (s, i) {
{
return this.s.indexOf(s, i);
}}, "~S,~N");
Clazz.defineMethod (c$, "substring", 
function (i) {
{
return this.s.substring(i);
}}, "~N");
Clazz.defineMethod (c$, "substring", 
function (i, j) {
{
return this.s.substring(i, j);
}}, "~N,~N");
