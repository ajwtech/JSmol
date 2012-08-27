Clazz.declarePackage ("javax.vecmath");
Clazz.load (null, "javax.vecmath.Tuple3b", ["java.lang.InternalError"], function () {
c$ = Clazz.decorateAsClass (function () {
this.x = 0;
this.y = 0;
this.z = 0;
Clazz.instantialize (this, arguments);
}, javax.vecmath, "Tuple3b", null, [java.io.Serializable, Cloneable]);
Clazz.makeConstructor (c$, 
function (b1, b2, b3) {
this.x = b1;
this.y = b2;
this.z = b3;
}, "~N,~N,~N");
Clazz.makeConstructor (c$, 
function (t) {
this.x = t[0];
this.y = t[1];
this.z = t[2];
}, "~A");
Clazz.makeConstructor (c$, 
function (t1) {
this.x = t1.x;
this.y = t1.y;
this.z = t1.z;
}, "javax.vecmath.Tuple3b");
Clazz.makeConstructor (c$, 
function () {
this.x = 0;
this.y = 0;
this.z = 0;
});
Clazz.overrideMethod (c$, "toString", 
function () {
return ("(" + (this.x & 0xff) + ", " + (this.y & 0xff) + ", " + (this.z & 0xff) + ")");
});
Clazz.defineMethod (c$, "get", 
function (t) {
t[0] = this.x;
t[1] = this.y;
t[2] = this.z;
}, "~A");
Clazz.defineMethod (c$, "get", 
function (t1) {
t1.x = this.x;
t1.y = this.y;
t1.z = this.z;
}, "javax.vecmath.Tuple3b");
Clazz.defineMethod (c$, "set", 
function (t1) {
this.x = t1.x;
this.y = t1.y;
this.z = t1.z;
}, "javax.vecmath.Tuple3b");
Clazz.defineMethod (c$, "set", 
function (t) {
this.x = t[0];
this.y = t[1];
this.z = t[2];
}, "~A");
Clazz.defineMethod (c$, "equals", 
function (t1) {
try {
return (this.x == t1.x && this.y == t1.y && this.z == t1.z);
} catch (e2) {
if (Clazz.instanceOf (e2, NullPointerException)) {
return false;
} else {
throw e2;
}
}
}, "javax.vecmath.Tuple3b");
Clazz.defineMethod (c$, "equals", 
function (t1) {
try {
var t2 = t1;
return (this.x == t2.x && this.y == t2.y && this.z == t2.z);
} catch (e$$) {
if (Clazz.instanceOf (e$$, NullPointerException)) {
var e2 = e$$;
{
return false;
}
} else if (Clazz.instanceOf (e$$, ClassCastException)) {
var e1 = e$$;
{
return false;
}
} else {
throw e$$;
}
}
}, "~O");
Clazz.overrideMethod (c$, "hashCode", 
function () {
return (((this.x & 0xff) << 0) | ((this.y & 0xff) << 8) | ((this.z & 0xff) << 16));
});
Clazz.defineMethod (c$, "clone", 
function () {
try {
return Clazz.superCall (this, javax.vecmath.Tuple3b, "clone", []);
} catch (e) {
if (Clazz.instanceOf (e, CloneNotSupportedException)) {
throw  new InternalError ();
} else {
throw e;
}
}
});
Clazz.defineMethod (c$, "getX", 
function () {
return this.x;
});
Clazz.defineMethod (c$, "setX", 
function (x) {
this.x = x;
}, "~N");
Clazz.defineMethod (c$, "getY", 
function () {
return this.y;
});
Clazz.defineMethod (c$, "setY", 
function (y) {
this.y = y;
}, "~N");
Clazz.defineMethod (c$, "getZ", 
function () {
return this.z;
});
Clazz.defineMethod (c$, "setZ", 
function (z) {
this.z = z;
}, "~N");
});
