Clazz.declarePackage ("javax.vecmath");
Clazz.load (null, "javax.vecmath.Tuple4i", ["java.lang.InternalError"], function () {
c$ = Clazz.decorateAsClass (function () {
this.x = 0;
this.y = 0;
this.z = 0;
this.w = 0;
Clazz.instantialize (this, arguments);
}, javax.vecmath, "Tuple4i", null, [java.io.Serializable, Cloneable]);
Clazz.makeConstructor (c$, 
function (x, y, z, w) {
this.x = x;
this.y = y;
this.z = z;
this.w = w;
}, "~N,~N,~N,~N");
Clazz.makeConstructor (c$, 
function (t) {
this.x = t[0];
this.y = t[1];
this.z = t[2];
this.w = t[3];
}, "~A");
Clazz.makeConstructor (c$, 
function (t1) {
this.x = t1.x;
this.y = t1.y;
this.z = t1.z;
this.w = t1.w;
}, "javax.vecmath.Tuple4i");
Clazz.makeConstructor (c$, 
function () {
this.x = 0;
this.y = 0;
this.z = 0;
this.w = 0;
});
Clazz.defineMethod (c$, "set", 
function (x, y, z, w) {
this.x = x;
this.y = y;
this.z = z;
this.w = w;
}, "~N,~N,~N,~N");
Clazz.defineMethod (c$, "set", 
function (t) {
this.x = t[0];
this.y = t[1];
this.z = t[2];
this.w = t[3];
}, "~A");
Clazz.defineMethod (c$, "set", 
function (t1) {
this.x = t1.x;
this.y = t1.y;
this.z = t1.z;
this.w = t1.w;
}, "javax.vecmath.Tuple4i");
Clazz.defineMethod (c$, "get", 
function (t) {
t[0] = this.x;
t[1] = this.y;
t[2] = this.z;
t[3] = this.w;
}, "~A");
Clazz.defineMethod (c$, "get", 
function (t) {
t.x = this.x;
t.y = this.y;
t.z = this.z;
t.w = this.w;
}, "javax.vecmath.Tuple4i");
Clazz.defineMethod (c$, "add", 
function (t1, t2) {
this.x = t1.x + t2.x;
this.y = t1.y + t2.y;
this.z = t1.z + t2.z;
this.w = t1.w + t2.w;
}, "javax.vecmath.Tuple4i,javax.vecmath.Tuple4i");
Clazz.defineMethod (c$, "add", 
function (t1) {
this.x += t1.x;
this.y += t1.y;
this.z += t1.z;
this.w += t1.w;
}, "javax.vecmath.Tuple4i");
Clazz.defineMethod (c$, "sub", 
function (t1, t2) {
this.x = t1.x - t2.x;
this.y = t1.y - t2.y;
this.z = t1.z - t2.z;
this.w = t1.w - t2.w;
}, "javax.vecmath.Tuple4i,javax.vecmath.Tuple4i");
Clazz.defineMethod (c$, "sub", 
function (t1) {
this.x -= t1.x;
this.y -= t1.y;
this.z -= t1.z;
this.w -= t1.w;
}, "javax.vecmath.Tuple4i");
Clazz.defineMethod (c$, "negate", 
function (t1) {
this.x = -t1.x;
this.y = -t1.y;
this.z = -t1.z;
this.w = -t1.w;
}, "javax.vecmath.Tuple4i");
Clazz.defineMethod (c$, "negate", 
function () {
this.x = -this.x;
this.y = -this.y;
this.z = -this.z;
this.w = -this.w;
});
Clazz.defineMethod (c$, "scale", 
function (s, t1) {
this.x = s * t1.x;
this.y = s * t1.y;
this.z = s * t1.z;
this.w = s * t1.w;
}, "~N,javax.vecmath.Tuple4i");
Clazz.defineMethod (c$, "scale", 
function (s) {
this.x *= s;
this.y *= s;
this.z *= s;
this.w *= s;
}, "~N");
Clazz.defineMethod (c$, "scaleAdd", 
function (s, t1, t2) {
this.x = s * t1.x + t2.x;
this.y = s * t1.y + t2.y;
this.z = s * t1.z + t2.z;
this.w = s * t1.w + t2.w;
}, "~N,javax.vecmath.Tuple4i,javax.vecmath.Tuple4i");
Clazz.defineMethod (c$, "scaleAdd", 
function (s, t1) {
this.x = s * this.x + t1.x;
this.y = s * this.y + t1.y;
this.z = s * this.z + t1.z;
this.w = s * this.w + t1.w;
}, "~N,javax.vecmath.Tuple4i");
Clazz.overrideMethod (c$, "toString", 
function () {
return "(" + this.x + ", " + this.y + ", " + this.z + ", " + this.w + ")";
});
Clazz.overrideMethod (c$, "equals", 
function (t1) {
try {
var t2 = t1;
return (this.x == t2.x && this.y == t2.y && this.z == t2.z && this.w == t2.w);
} catch (e$$) {
if (Clazz.exceptionOf (e$$, NullPointerException)) {
var e2 = e$$;
{
return false;
}
} else if (Clazz.exceptionOf (e$$, ClassCastException)) {
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
var bits = 1;
bits = 31 * bits + this.x;
bits = 31 * bits + this.y;
bits = 31 * bits + this.z;
bits = 31 * bits + this.w;
return (bits ^ (bits >> 32));
});
Clazz.defineMethod (c$, "clamp", 
function (min, max, t) {
if (t.x > max) {
this.x = max;
} else if (t.x < min) {
this.x = min;
} else {
this.x = t.x;
}if (t.y > max) {
this.y = max;
} else if (t.y < min) {
this.y = min;
} else {
this.y = t.y;
}if (t.z > max) {
this.z = max;
} else if (t.z < min) {
this.z = min;
} else {
this.z = t.z;
}if (t.w > max) {
this.w = max;
} else if (t.w < min) {
this.w = min;
} else {
this.w = t.w;
}}, "~N,~N,javax.vecmath.Tuple4i");
Clazz.defineMethod (c$, "clampMin", 
function (min, t) {
if (t.x < min) {
this.x = min;
} else {
this.x = t.x;
}if (t.y < min) {
this.y = min;
} else {
this.y = t.y;
}if (t.z < min) {
this.z = min;
} else {
this.z = t.z;
}if (t.w < min) {
this.w = min;
} else {
this.w = t.w;
}}, "~N,javax.vecmath.Tuple4i");
Clazz.defineMethod (c$, "clampMax", 
function (max, t) {
if (t.x > max) {
this.x = max;
} else {
this.x = t.x;
}if (t.y > max) {
this.y = max;
} else {
this.y = t.y;
}if (t.z > max) {
this.z = max;
} else {
this.z = t.z;
}if (t.w > max) {
this.w = max;
} else {
this.w = t.z;
}}, "~N,javax.vecmath.Tuple4i");
Clazz.defineMethod (c$, "absolute", 
function (t) {
this.x = Math.abs (t.x);
this.y = Math.abs (t.y);
this.z = Math.abs (t.z);
this.w = Math.abs (t.w);
}, "javax.vecmath.Tuple4i");
Clazz.defineMethod (c$, "clamp", 
function (min, max) {
if (this.x > max) {
this.x = max;
} else if (this.x < min) {
this.x = min;
}if (this.y > max) {
this.y = max;
} else if (this.y < min) {
this.y = min;
}if (this.z > max) {
this.z = max;
} else if (this.z < min) {
this.z = min;
}if (this.w > max) {
this.w = max;
} else if (this.w < min) {
this.w = min;
}}, "~N,~N");
Clazz.defineMethod (c$, "clampMin", 
function (min) {
if (this.x < min) this.x = min;
if (this.y < min) this.y = min;
if (this.z < min) this.z = min;
if (this.w < min) this.w = min;
}, "~N");
Clazz.defineMethod (c$, "clampMax", 
function (max) {
if (this.x > max) this.x = max;
if (this.y > max) this.y = max;
if (this.z > max) this.z = max;
if (this.w > max) this.w = max;
}, "~N");
Clazz.defineMethod (c$, "absolute", 
function () {
this.x = Math.abs (this.x);
this.y = Math.abs (this.y);
this.z = Math.abs (this.z);
this.w = Math.abs (this.w);
});
Clazz.defineMethod (c$, "clone", 
function () {
try {
return Clazz.superCall (this, javax.vecmath.Tuple4i, "clone", []);
} catch (e) {
if (Clazz.exceptionOf (e, CloneNotSupportedException)) {
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
Clazz.defineMethod (c$, "getW", 
function () {
return this.w;
});
Clazz.defineMethod (c$, "setW", 
function (w) {
this.w = w;
}, "~N");
});
