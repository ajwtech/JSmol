﻿Clazz.declarePackage ("javax.vecmath");
Clazz.load (null, "javax.vecmath.Tuple3d", ["java.lang.Double", "$.InternalError", "javax.vecmath.VecMathUtil"], function () {
c$ = Clazz.decorateAsClass (function () {
this.x = 0;
this.y = 0;
this.z = 0;
Clazz.instantialize (this, arguments);
}, javax.vecmath, "Tuple3d", null, [java.io.Serializable, Cloneable]);
Clazz.makeConstructor (c$, 
function (x, y, z) {
this.x = x;
this.y = y;
this.z = z;
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
}, "javax.vecmath.Tuple3d");
Clazz.makeConstructor (c$, 
function (t1) {
this.x = t1.x;
this.y = t1.y;
this.z = t1.z;
}, "javax.vecmath.Tuple3f");
Clazz.makeConstructor (c$, 
function () {
this.x = 0.0;
this.y = 0.0;
this.z = 0.0;
});
Clazz.defineMethod (c$, "set", 
function (x, y, z) {
this.x = x;
this.y = y;
this.z = z;
}, "~N,~N,~N");
Clazz.defineMethod (c$, "set", 
function (t) {
this.x = t[0];
this.y = t[1];
this.z = t[2];
}, "~A");
Clazz.defineMethod (c$, "set", 
function (t1) {
this.x = t1.x;
this.y = t1.y;
this.z = t1.z;
}, "javax.vecmath.Tuple3d");
Clazz.defineMethod (c$, "set", 
function (t1) {
this.x = t1.x;
this.y = t1.y;
this.z = t1.z;
}, "javax.vecmath.Tuple3f");
Clazz.defineMethod (c$, "get", 
function (t) {
t[0] = this.x;
t[1] = this.y;
t[2] = this.z;
}, "~A");
Clazz.defineMethod (c$, "get", 
function (t) {
t.x = this.x;
t.y = this.y;
t.z = this.z;
}, "javax.vecmath.Tuple3d");
Clazz.defineMethod (c$, "add", 
function (t1, t2) {
this.x = t1.x + t2.x;
this.y = t1.y + t2.y;
this.z = t1.z + t2.z;
}, "javax.vecmath.Tuple3d,javax.vecmath.Tuple3d");
Clazz.defineMethod (c$, "add", 
function (t1) {
this.x += t1.x;
this.y += t1.y;
this.z += t1.z;
}, "javax.vecmath.Tuple3d");
Clazz.defineMethod (c$, "sub", 
function (t1, t2) {
this.x = t1.x - t2.x;
this.y = t1.y - t2.y;
this.z = t1.z - t2.z;
}, "javax.vecmath.Tuple3d,javax.vecmath.Tuple3d");
Clazz.defineMethod (c$, "sub", 
function (t1) {
this.x -= t1.x;
this.y -= t1.y;
this.z -= t1.z;
}, "javax.vecmath.Tuple3d");
Clazz.defineMethod (c$, "negate", 
function (t1) {
this.x = -t1.x;
this.y = -t1.y;
this.z = -t1.z;
}, "javax.vecmath.Tuple3d");
Clazz.defineMethod (c$, "negate", 
function () {
this.x = -this.x;
this.y = -this.y;
this.z = -this.z;
});
Clazz.defineMethod (c$, "scale", 
function (s, t1) {
this.x = s * t1.x;
this.y = s * t1.y;
this.z = s * t1.z;
}, "~N,javax.vecmath.Tuple3d");
Clazz.defineMethod (c$, "scale", 
function (s) {
this.x *= s;
this.y *= s;
this.z *= s;
}, "~N");
Clazz.defineMethod (c$, "scaleAdd", 
function (s, t1, t2) {
this.x = s * t1.x + t2.x;
this.y = s * t1.y + t2.y;
this.z = s * t1.z + t2.z;
}, "~N,javax.vecmath.Tuple3d,javax.vecmath.Tuple3d");
Clazz.defineMethod (c$, "scaleAdd", 
function (s, t1) {
this.scaleAdd (s,  new javax.vecmath.Point3d (t1));
}, "~N,javax.vecmath.Tuple3f");
Clazz.defineMethod (c$, "scaleAdd", 
function (s, t1) {
this.x = s * this.x + t1.x;
this.y = s * this.y + t1.y;
this.z = s * this.z + t1.z;
}, "~N,javax.vecmath.Tuple3d");
Clazz.overrideMethod (c$, "toString", 
function () {
return "(" + this.x + ", " + this.y + ", " + this.z + ")";
});
Clazz.overrideMethod (c$, "hashCode", 
function () {
var bits = 1;
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.x);
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.y);
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.z);
return (bits ^ (bits >> 32));
});
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
}, "javax.vecmath.Tuple3d");
Clazz.defineMethod (c$, "equals", 
function (t1) {
try {
var t2 = t1;
return (this.x == t2.x && this.y == t2.y && this.z == t2.z);
} catch (e$$) {
if (Clazz.instanceOf (e$$, ClassCastException)) {
var e1 = e$$;
{
return false;
}
} else if (Clazz.instanceOf (e$$, NullPointerException)) {
var e2 = e$$;
{
return false;
}
} else {
throw e$$;
}
}
}, "~O");
Clazz.defineMethod (c$, "epsilonEquals", 
function (t1, epsilon) {
var diff;
diff = this.x - t1.x;
if (Double.isNaN (diff)) return false;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
diff = this.y - t1.y;
if (Double.isNaN (diff)) return false;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
diff = this.z - t1.z;
if (Double.isNaN (diff)) return false;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
return true;
}, "javax.vecmath.Tuple3d,~N");
Clazz.defineMethod (c$, "clamp", 
function (min, max, t) {
this.clamp (min, max, t);
}, "~N,~N,javax.vecmath.Tuple3d");
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
}}, "~N,~N,javax.vecmath.Tuple3d");
Clazz.defineMethod (c$, "clampMin", 
function (min, t) {
this.clampMin (min, t);
}, "~N,javax.vecmath.Tuple3d");
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
}}, "~N,javax.vecmath.Tuple3d");
Clazz.defineMethod (c$, "clampMax", 
function (max, t) {
this.clampMax (max, t);
}, "~N,javax.vecmath.Tuple3d");
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
}}, "~N,javax.vecmath.Tuple3d");
Clazz.defineMethod (c$, "absolute", 
function (t) {
this.x = Math.abs (t.x);
this.y = Math.abs (t.y);
this.z = Math.abs (t.z);
}, "javax.vecmath.Tuple3d");
Clazz.defineMethod (c$, "clamp", 
function (min, max) {
this.clamp (min, max);
}, "~N,~N");
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
}}, "~N,~N");
Clazz.defineMethod (c$, "clampMin", 
function (min) {
this.clampMin (min);
}, "~N");
Clazz.defineMethod (c$, "clampMin", 
function (min) {
if (this.x < min) this.x = min;
if (this.y < min) this.y = min;
if (this.z < min) this.z = min;
}, "~N");
Clazz.defineMethod (c$, "clampMax", 
function (max) {
this.clampMax (max);
}, "~N");
Clazz.defineMethod (c$, "clampMax", 
function (max) {
if (this.x > max) this.x = max;
if (this.y > max) this.y = max;
if (this.z > max) this.z = max;
}, "~N");
Clazz.defineMethod (c$, "absolute", 
function () {
this.x = Math.abs (this.x);
this.y = Math.abs (this.y);
this.z = Math.abs (this.z);
});
Clazz.defineMethod (c$, "interpolate", 
function (t1, t2, alpha) {
this.interpolate (t1, t2, alpha);
}, "javax.vecmath.Tuple3d,javax.vecmath.Tuple3d,~N");
Clazz.defineMethod (c$, "interpolate", 
function (t1, t2, alpha) {
this.x = (1 - alpha) * t1.x + alpha * t2.x;
this.y = (1 - alpha) * t1.y + alpha * t2.y;
this.z = (1 - alpha) * t1.z + alpha * t2.z;
}, "javax.vecmath.Tuple3d,javax.vecmath.Tuple3d,~N");
Clazz.defineMethod (c$, "interpolate", 
function (t1, alpha) {
this.interpolate (t1, alpha);
}, "javax.vecmath.Tuple3d,~N");
Clazz.defineMethod (c$, "interpolate", 
function (t1, alpha) {
this.x = (1 - alpha) * this.x + alpha * t1.x;
this.y = (1 - alpha) * this.y + alpha * t1.y;
this.z = (1 - alpha) * this.z + alpha * t1.z;
}, "javax.vecmath.Tuple3d,~N");
Clazz.defineMethod (c$, "clone", 
function () {
try {
return Clazz.superCall (this, javax.vecmath.Tuple3d, "clone", []);
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
