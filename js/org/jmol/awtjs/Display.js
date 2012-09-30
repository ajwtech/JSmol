Clazz.declarePackage ("org.jmol.awtjs");
c$ = Clazz.declareType (org.jmol.awtjs, "Display");
c$.getFullScreenDimensions = Clazz.defineMethod (c$, "getFullScreenDimensions", 
function (display, widthHeight) {
{
widthHeight[0] = display.style.width;
widthHeight[1] = display.style.height;
}}, "~O,~A");
c$.hasFocus = Clazz.defineMethod (c$, "hasFocus", 
function (display) {
{
System.out.println (display);
}return true;
}, "~O");
c$.requestFocusInWindow = Clazz.defineMethod (c$, "requestFocusInWindow", 
function (display) {
{
System.out.println (display);
}}, "~O");
c$.repaint = Clazz.defineMethod (c$, "repaint", 
function (display) {
System.out.println ("repaint display" + display);
}, "~O");
c$.renderScreenImage = Clazz.defineMethod (c$, "renderScreenImage", 
function (viewer, g, size) {
{
System.out.println ("" + viewer + g + size);
}}, "org.jmol.api.JmolViewer,~O,~O");
c$.setTransparentCursor = Clazz.defineMethod (c$, "setTransparentCursor", 
function (display) {
{
System.out.println (display);
}}, "~O");
c$.setCursor = Clazz.defineMethod (c$, "setCursor", 
function (c, display) {
{
System.out.println ("" + c + display);
}}, "~N,~O");
c$.prompt = Clazz.defineMethod (c$, "prompt", 
function (label, data, list, asButtons) {
return "null";
}, "~S,~S,~A,~B");
c$.convertPointFromScreen = Clazz.defineMethod (c$, "convertPointFromScreen", 
function (display, ptTemp) {
{
System.out.println ("" + display + ptTemp);
}}, "~O,javax.vecmath.Point3f");
