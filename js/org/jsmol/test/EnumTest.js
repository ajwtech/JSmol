Clazz.declarePackage ("org.jsmol.test");
Clazz.load (["java.lang.Enum"], "org.jsmol.test.EnumTest", null, function () {
c$ = Clazz.declareType (org.jsmol.test, "EnumTest", Enum);
Clazz.defineEnumConstant (c$, "ONCE", 0, []);
Clazz.defineEnumConstant (c$, "LOOP", 1, []);
Clazz.defineEnumConstant (c$, "PALINDROME", 2, []);
});
