/* $RCSfile$
 * $Author: hansonr $
 * $Date: 2012-05-19 09:56:08 -0500 (Sat, 19 May 2012) $
 * $Revision: 17160 $
 *
 * Copyright (C) 2000-2005  The Jmol Development Team
 *
 * Contact: jmol-developers@lists.sf.net
 *
 *  This library is free software; you can redistribute it and/or
 *  modify it under the terms of the GNU Lesser General Public
 *  License as published by the Free Software Foundation; either
 *  version 2.1 of the License, or (at your option) any later version.
 *
 *  This library is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 *  Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public
 *  License along with this library; if not, write to the Free Software
 *  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 */
package org.jsmol.test;

import java.util.BitSet;
import javax.vecmath.Point3f;

public class JSmol {

  public JSmol() {
  	sayHello("JSmol contstructor");
  	testEnum();
  	sayHello("OK-JSmol");
	}

  protected int testing = 22;
	protected static BitSet bs = new BitSet();
	static {
		bs.set(5);
		bs.set(6);
	}

	protected static Point3f pt = new Point3f(2,3,4);
  
	protected void testStatic() {
		sayHello("testing = " + testing + " pt = " + pt + " bs = " + bs);
		bs.clear(5);
		bs.set(11);
	}


	//private String test = EnumTest.LOOP.toString();
  // THIS DOES NOT WORK:  
	private enum TT {A, B, C, D}; // -- bug in Java2JavaScript compiler
  private void testEnum() {  	
		sayHello(" EnumTest.ONCE = " + EnumTest.ONCE + "; TT.A = " + TT.A);
	}

	void sayHello(String s) {
		/**
		 * @j2sNative alert("Hello, JavaScript -- " + s);
		 */
		{
			System.out.println("Hello Java -- " + s);
		}

	}

}
