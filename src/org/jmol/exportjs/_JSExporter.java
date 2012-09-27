/* $RCSfile$
 * $Author: hansonr $
 * $Date: 2007-05-18 15:41:42 -0500 (Fri, 18 May 2007) $
 * $Revision: 7752 $

 *
 * Copyright (C) 2003-2005  The Jmol Development Team
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

package org.jmol.exportjs;


import javax.vecmath.Point3f;
import javax.vecmath.Tuple3f;

import org.jmol.util.J2SRequireImport;

@J2SRequireImport({org.jmol.exportjs.___Exporter.class, org.jmol.exportjs.__CartesianExporter.class, org.jmol.exportjs.Export3D.class})
public class _JSExporter extends __CartesianExporter {

  public _JSExporter() {
  }

	@Override
	protected void outputCircle(Point3f pt1, Point3f pt2, float radius,
			short colix, boolean doFill) {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected void outputCone(Point3f ptBase, Point3f ptTip, float radius,
			short colix) {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected boolean outputCylinder(Point3f ptCenter, Point3f pt1, Point3f pt2,
			short colix1, byte endcaps, float radius, Point3f ptX, Point3f ptY,
			boolean checkRadius) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	protected void outputEllipsoid(Point3f center, Point3f[] points, short colix) {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected void outputFace(int[] is, int[] coordMap, int faceVertexMax) {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected void outputSphere(Point3f ptAtom2, float f, short colix,
			boolean checkRadius) {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected void outputTextPixel(Point3f pt, int argb) {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected void outputTriangle(Point3f pt1, Point3f pt2, Point3f pt3,
			short colix) {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected void output(Tuple3f pt) {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected void outputHeader() {
		// TODO Auto-generated method stub
		
	}
  
}


