package org.jmol.viewer;

import org.jmol.util.Rectangle;

class ActionManager {

	public static final int PICKING_IDENTIFY = 0;
	public static final int PICKINGSTYLE_SELECT_JMOL = 0;
	public static final int PICKING_LABEL = -11;
	public static final int PICKING_DRAW = -12;
	public static final int PICKING_ASSIGN_BOND = -13;
	public static final int PICKING_ASSIGN_ATOM = -14;

	public static int getPickingMode(String strMode) {
		// TODO Auto-generated method stub
		return 0;
	}

	public static int getPickingStyle(String style) {
		// TODO Auto-generated method stub
		return 0;
	}

	public void setPickingStyle(int pickingStyle) {
		// TODO Auto-generated method stub
		
	}

	public void startHoverWatcher(boolean b) {
		// TODO Auto-generated method stub
		
	}

	public void clear() {
		// TODO Auto-generated method stub
		
	}

	public String getBindingInfo(String qualifiers) {
		// TODO Auto-generated method stub
		return null;
	}

	public void setPickingMode(int i) {
		// TODO Auto-generated method stub
		
	}

	public void setMouseWheelFactor(float value) {
		// TODO Auto-generated method stub
		
	}

	public void setMouseDragFactor(float value) {
		// TODO Auto-generated method stub
		
	}

	public String getPickingState() {
		// TODO Auto-generated method stub
		return null;
	}

	public void setViewer(Viewer viewer, String commandOptions) {
		// TODO Auto-generated method stub
		
	}

	public void setGestureSwipeFactor(float value) {
		// TODO Auto-generated method stub
		
	}

	public Rectangle getRubberBand() {
		// TODO Auto-generated method stub
		return null;
	}

	public boolean isBound(int action, int gesture) {
		// TODO Auto-generated method stub
		return false;
	}

	public int getCurrentX() {
		// TODO Auto-generated method stub
		return 0;
	}

	public Object getAtomPickingMode() {
		// TODO Auto-generated method stub
		return null;
	}

	public int getCurrentY() {
		// TODO Auto-generated method stub
		return 0;
	}

	public Object getPickingStyle() {
		// TODO Auto-generated method stub
		return null;
	}

	public static String getPickingStyleName(Object pickingStyle) {
		// TODO Auto-generated method stub
		return null;
	}

	public static String getPickingModeName(Object atomPickingMode) {
		// TODO Auto-generated method stub
		return null;
	}

	public void setAtomPickingOption(String option) {
		// TODO Auto-generated method stub
		
	}

	public void setBondPickingOption(String option) {
		// TODO Auto-generated method stub
		
	}

}
