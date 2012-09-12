Clazz.declarePackage ("javax.vecmath");
Clazz.load (null, "javax.vecmath.Tuple2d", ["java.lang.Double", "$.InternalError", "javax.vecmath.VecMathUtil"], function () {
c$ = Clazz.decorateAsClass (function () {
this.x = 0;
this.y = 0;
Clazz.instantialize (this, arguments);
}, javax.vecmath, "Tuple2d", null, [java.io.Serializable, Cloneable]);
Clazz.makeConstructor (c$, 
function (x, y) {
this.x = x;
this.y = y;
}, "~N,~N");
Clazz.makeConstructor (c$, 
function (t) {
this.x = t[0];
this.y = t[1];
}, "~A");
Clazz.makeConstructor (c$, 
function (t1) {
this.x = t1.x;
this.y = t1.y;
}, "javax.vecmath.Tuple2d");
Clazz.makeConstructor (c$, 
function (t1) {
this.x = t1.x;
this.y = t1.y;
}, "javax.vecmath.Tuple2f");
Clazz.makeConstructor (c$, 
function () {
this.x = 0.0;
this.y = 0.0;
});
Clazz.defineMethod (c$, "set", 
function (x, y) {
this.x = x;
this.y = y;
}, "~N,~N");
Clazz.defineMethod (c$, "set", 
function (t) {
this.x = t[0];
this.y = t[1];
}, "~A");
Clazz.defineMethod (c$, "set", 
function (t1) {
this.x = t1.x;
this.y = t1.y;
}, "javax.vecmath.Tuple2d");
Clazz.defineMethod (c$, "set", 
function (t1) {
this.x = t1.x;
this.y = t1.y;
}, "javax.vecmath.Tuple2f");
Clazz.defineMethod (c$, "get", 
function (t) {
t[0] = this.x;
t[1] = this.y;
}, "~A");
Clazz.defineMethod (c$, "add", 
function (t1, t2) {
this.x = t1.x + t2.x;
this.y = t1.y + t2.y;
}, "javax.vecmath.Tuple2d,javax.vecmath.Tuple2d");
Clazz.defineMethod (c$, "add", 
function (t1) {
this.x += t1.x;
this.y += t1.y;
}, "javax.vecmath.Tuple2d");
Clazz.defineMethod (c$, "sub", 
function (t1, t2) {
this.x = t1.x - t2.x;
this.y = t1.y - t2.y;
}, "javax.vecmath.Tuple2d,javax.vecmath.Tuple2d");
Clazz.defineMethod (c$, "sub", 
function (t1) {
this.x -= t1.x;
this.y -= t1.y;
}, "javax.vecmath.Tuple2d");
Clazz.defineMethod (c$, "negate", 
function (t1) {
this.x = -t1.x;
this.y = -t1.y;
}, "javax.vecmath.Tuple2d");
Clazz.defineMethod (c$, "negate", 
function () {
this.x = -this.x;
this.y = -this.y;
});
Clazz.defineMethod (c$, "scale", 
function (s, t1) {
this.x = s * t1.x;
this.y = s * t1.y;
}, "~N,javax.vecmath.Tuple2d");
Clazz.defineMethod (c$, "scale", 
function (s) {
this.x *= s;
this.y *= s;
}, "~N");
Clazz.defineMethod (c$, "scaleAdd", 
function (s, t1, t2) {
this.x = s * t1.x + t2.x;
this.y = s * t1.y + t2.y;
}, "~N,javax.vecmath.Tuple2d,javax.vecmath.Tuple2d");
Clazz.defineMethod (c$, "scaleAdd", 
function (s, t1) {
this.x = s * this.x + t1.x;
this.y = s * this.y + t1.y;
}, "~N,javax.vecmath.Tuple2d");
Clazz.overrideMethod (c$, "hashCode", 
function () {
var bits = 1;
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.x);
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.y);
return (bits ^ (bits >> 32));
});
Clazz.defineMethod (c$, "equals", 
function (t1) {
try {
return (this.x == t1.x && this.y == t1.y);
} catch (e2) {
if (Clazz.exceptionOf (e2, NullPointerException)) {
return false;
} else {
throw e2;
}
}
}, "javax.vecmath.Tuple2d");
Clazz.defineMethod (c$, "equals", 
function (t1) {
try {
var t2 = t1;
return (this.x == t2.x && this.y == t2.y);
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
Clazz.defineMethod (c$, "epsilonEquals", 
function (t1, epsilon) {
var diff;
diff = this.x - t1.x;
if (Double.isNaN (diff)) return false;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
diff = this.y - t1.y;
if (Double.isNaN (diff)) return false;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
return true;
}, "javax.vecmath.Tuple2d,~N");
Clazz.overrideMethod (c$, "toString", 
function () {
return ("(" + this.x + ", " + this.y + ")");
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
}}, "~N,~N,javax.vecmath.Tuple2d");
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
}}, "~N,javax.vecmath.Tuple2d");
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
}}, "~N,javax.vecmath.Tuple2d");
Clazz.defineMethod (c$, "absolute", 
function (t) {
this.x = Math.abs (t.x);
this.y = Math.abs (t.y);
}, "javax.vecmath.Tuple2d");
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
}}, "~N,~N");
Clazz.defineMethod (c$, "clampMin", 
function (min) {
if (this.x < min) this.x = min;
if (this.y < min) this.y = min;
}, "~N");
Clazz.defineMethod (c$, "clampMax", 
function (max) {
if (this.x > max) this.x = max;
if (this.y > max) this.y = max;
}, "~N");
Clazz.defineMethod (c$, "absolute", 
function () {
this.x = Math.abs (this.x);
this.y = Math.abs (this.y);
});
Clazz.defineMethod (c$, "interpolate", 
function (t1, t2, alpha) {
this.x = (1 - alpha) * t1.x + alpha * t2.x;
this.y = (1 - alpha) * t1.y + alpha * t2.y;
}, "javax.vecmath.Tuple2d,javax.vecmath.Tuple2d,~N");
Clazz.defineMethod (c$, "interpolate", 
function (t1, alpha) {
this.x = (1 - alpha) * this.x + alpha * t1.x;
this.y = (1 - alpha) * this.y + alpha * t1.y;
}, "javax.vecmath.Tuple2d,~N");
Clazz.defineMethod (c$, "clone", 
function () {
try {
return Clazz.superCall (this, javax.vecmath.Tuple2d, "clone", []);
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
});
