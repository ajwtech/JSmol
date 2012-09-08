package org.jmol.awtjs;

import javax.vecmath.Point3f;

import org.jmol.api.JmolViewer;
import org.jmol.util.TextFormat;
import org.jmol.viewer.JmolConstants;

/**
 * methods required by Jmol that access java.awt.Component
 * 
 * private to org.jmol.awt
 * 
 */

class Display {

	/**
	 * @param display
	 * @param widthHeight
	 * 
	 */
	static void getFullScreenDimensions(Object display, int[] widthHeight) {
	}

	static boolean hasFocus(Object display) {
		return true;
	}

	static void requestFocusInWindow(Object display) {
	}

	static void repaint(Object display) {
	}

	static void renderScreenImage(JmolViewer viewer, Object g, Object size) {
	}

	static void setTransparentCursor(Object display) {
	}

	static void setCursor(int c, Object display) {
	}

	public static String prompt(String label, String data, String[] list,
			boolean asButtons) {
		return "null";
	}

	public static void convertPointFromScreen(Object display, Point3f ptTemp) {
	}

}
