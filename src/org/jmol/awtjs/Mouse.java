/* $RCSfile$
 * $Author: hansonr $
 * $Date: 2011-10-16 09:20:47 -0500 (Sun, 16 Oct 2011) $
 * $Revision: 16358 $
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
package org.jmol.awtjs;

import org.jmol.viewer.ActionManager;
import org.jmol.viewer.Viewer;

/**
 * formerly org.jmol.viewer.MouseManager14
 * 
 * methods required by Jmol that access java.awt.event
 * 
 * private to org.jmol.awt
 * 
 */

class Mouse {

	private Viewer viewer;
	private ActionManager actionManager;

	Mouse(Viewer viewer, ActionManager actionManager) {
		this.viewer = viewer;
		this.actionManager = actionManager;
		// Component display = (Component) viewer.getDisplay();
		// display.addKeyListener(this);
		// display.addMouseListener(this);
		// display.addMouseMotionListener(this);
		// display.addMouseWheelListener(this);
	}

	void clear() {
		// nothing to do here now -- see ActionManager
	}

	void dispose() {
		// Component display = (Component) viewer.getDisplay();
		actionManager.dispose();
		// display.removeMouseListener(this);
		// display.removeMouseMotionListener(this);
		// display.removeMouseWheelListener(this);
		// display.removeKeyListener(this);
	}

	boolean handleOldJvm10Event(int id, int x, int y, int modifiers, long time) {
		return false;
	}
/*
	public void mouseClicked(MouseEvent e) {
		// not implemented
	}

	public void mouseEntered(MouseEvent e) {
		// not implemented
	}

	public void mouseExited(MouseEvent e) {
		// not implemented
	}

	public void mousePressed(MouseEvent e) {
		// not implemented
	}

	public void mouseReleased(MouseEvent e) {
		// not implemented
	}

	public void mouseDragged(MouseEvent e) {
		// not implemented
	}

	public void mouseMoved(MouseEvent e) {
		// not implemented
	}

	public void mouseWheelMoved(MouseWheelEvent e) {
		// not implemented
	}

	public void keyTyped(KeyEvent ke) {
		// not implemented
	}

	public void keyPressed(KeyEvent ke) {
		// not implemented
	}

	public void keyReleased(KeyEvent ke) {
		// not implemented
	}
*/
}
