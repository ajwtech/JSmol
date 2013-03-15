/* $RCSfile$
 * $Author: hansonr $
 * $Date: 2013-02-24 15:52:13 -0600 (Sun, 24 Feb 2013) $
 * $Revision: 17949 $

 *
 * Copyright (C) 2002-2005  The Jmol Development Team
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
 *  Lesser General License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public
 *  License along with this library; if not, write to the Free Software
 *  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 */

package org.jmol.shape;

import org.jmol.util.BS;


public class Stars extends AtomShape {
  // differences are in renderer
  
  @Override
  public void setProperty(String propertyName, Object value, BS bs) {
    setPropAS(propertyName, value, bs);
  }
  
}
