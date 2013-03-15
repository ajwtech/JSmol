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

import org.jmol.util.P3;

import org.jmol.util.Logger;
import org.jmol.viewer.JC;

public class JSTest extends JSmol {

	public static void main(String[] args) {	
    JSTest jmolApp = new JSTest(args);
    jmolApp.sayHello("...second time...");
    jmolApp = new JSTest(args);
    jmolApp.sayHello("...third time...");
    jmolApp = new JSTest(args);
  }
	
	private static P3 pt2 = P3.new3(2,3,4);
  
	private JSTest(String[] args) {
  	super();
  	System.out.println("testing123");
  	sayHello("JSTest constructor -- after super()");
  	testStatic();
		bs.set((int)(12 + pt2.x));
		pt.x = -1;
  	sayHello("OK-JSTest pt2.x = " + pt2);
		pt2.x -= 1;
		TestInner ti = new TestInner();
		ti.say("ok - ti");
		Logger.info("test log info");
		Logger.debug("test log debug");
		Logger.error("test log error");
		Logger.info(testArray[3]);
		Logger.info(JC.getShapeClassName(JC.SHAPE_HOVER, false));
	}
	
	static String[] testArray = {"a", "b", "c", "d"};
	class TestInner {
		void say(String msg) {
			char a = '@';
			int x = 2 + a;
			int y = 2;
			String x1 = "3" + a;
			char x2 = (char) (a + y);
      System.out.println("x,x1,x2=" + x + "," + x1 + "," + x2);			
			sayHello(checkMap('K'));
			sayHello(myTest("test"));
			sayHello(checkMap((String) getObj("string")));
			sayHello(checkMap(((Boolean) getObj("boolean")).booleanValue()));
//			sayHello(checkMap(true));
			sayHello(msg);
		}
		String myTest(String s) { 
			return s; 
		}
		String checkMap(char c) {
			return "OK-checkMapchar-" + c;
		}
		String checkMap(String s) {
			return "OK-checkMapchar-" + s;
		}
		String checkMap(boolean b) {
			return "OK-checkMapbool-" + b;
		}
		Object getObj(String type) {
			if (type.equalsIgnoreCase("string"))
				return "testing";
			return Boolean.TRUE;
		}
	}

}
