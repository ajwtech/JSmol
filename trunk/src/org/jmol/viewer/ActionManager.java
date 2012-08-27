package org.jmol.viewer;

import org.jmol.util.Rectangle;

public class ActionManager {

	// just placeholders here
	
  public final static int PICKING_OFF       = 0;
  public final static int PICKING_IDENTIFY  = 1;
  public final static int PICKING_LABEL     = 2;
  public final static int PICKING_DRAW      = 4;
  public final static int PICKING_ASSIGN_ATOM      = 32;
  public final static int PICKING_ASSIGN_BOND      = 33;

  public final static int PICKINGSTYLE_SELECT_JMOL = 0;
  public final static int PICKINGSTYLE_SELECT_CHIME = 0;
  public final static int PICKINGSTYLE_SELECT_RASMOL = 1;
  public final static int PICKINGSTYLE_SELECT_PFAAT = 2;
  public final static int PICKINGSTYLE_SELECT_DRAG = 3;
  public final static int PICKINGSTYLE_MEASURE_ON = 4;
  public final static int PICKINGSTYLE_MEASURE_OFF = 5;

  public final static int ACTION_pickIsosurface = 38;

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
