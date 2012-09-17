package org.jsmol.test;

import java.util.Hashtable;
import java.util.Map;

public class Test_bool {

  // Main application
  public static void main(String[] args) {
   new Test_bool();
 }

	public Test_bool() {
		Boolean bTrue = Boolean.TRUE;
		Boolean bFalse = Boolean.FALSE;
		System.out.println("bTrue.booleanValue() is " + bTrue.booleanValue());
		System.out.println("bFalse.booleanValue() is " + bFalse.booleanValue());
		Map<String, Object>ht = new Hashtable<String, Object>();
		ht.put("True", bTrue);
		ht.put("False", bFalse);
		System.out.println("bTrue in ht is " + ht.get("True"));
		System.out.println("bTrue.booleanValue() in ht is " + ((Boolean)ht.get("True")).booleanValue());
		System.out.println("bFalse in ht is " + ht.get("False"));
		System.out.println("bFalse.booleanValue() in ht is " + ((Boolean)ht.get("False")).booleanValue());
	}

}

