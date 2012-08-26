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

import javax.vecmath.Point3f;


//import java.util.BitSet;

//import javax.vecmath.Point3f;

//import org.openscience.jmol.app.jmolpanel.JmolPanel;
//import org.openscience.jmol.app.jmolpanel.Splash;

public class JSTest extends JSmol {

	public static void main(String[] args) {	
    JSTest jmolApp = new JSTest(args);
    jmolApp.sayHello("...second time...");
    jmolApp = new JSTest(args);
    jmolApp.sayHello("...third time...");
    jmolApp = new JSTest(args);
  }
	
	private static Point3f pt2 = new Point3f(2,3,4);
  
	private JSTest(String[] args) {
  	super();
  	sayHello("JSTest contstructor -- after super()");
  	testStatic();
		bs.set((int)(12 + pt2.x));
		pt.x = -1;
  	sayHello("OK-JSTest pt2.x = " + pt2);
		pt2.x -= 1;
	}

}
