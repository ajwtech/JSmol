package org.jmol.viewer;

import java.util.BitSet;
import java.util.List;
import java.util.Map;

import javax.vecmath.Point3f;

import org.jmol.api.JmolCallbackListener;
import org.jmol.api.JmolStatusListener;

class StatusManager {

	public boolean syncingMouse;
	public boolean syncingScripts;
	public boolean stereoSync;

  final static int SYNC_OFF = 0;
  final static int SYNC_DRIVER = 1;
  final static int SYNC_SLAVE = 2;
  final static int SYNC_DISABLE = 3;
  final static int SYNC_ENABLE = 4;
  final static int SYNC_STEREO = 5;
	public StatusManager(Viewer viewer) {
		// TODO Auto-generated constructor stub
	}
	public boolean doSync() {
		// TODO Auto-generated method stub
		return false;
	}
	public void setSync(String string) {
		// TODO Auto-generated method stub
		
	}
	public void setAllowStatusReporting(boolean value) {
		// TODO Auto-generated method stub
		
	}
	public void setCallbackFunction(String key, Object object) {
		// TODO Auto-generated method stub
		
	}
	public void notifyMinimizationStatus(String parameter, Integer integer,
			Float parameter2, Float parameter3, String ff) {
		// TODO Auto-generated method stub
		
	}
	public int getSyncMode() {
		// TODO Auto-generated method stub
		return 0;
	}
	public void syncSend(String peak, String string, int i) {
		// TODO Auto-generated method stub
		
	}
	public void setStatusFrameChanged(int frameNo, int fileNo, int modelNo,
			int i, int j) {
		// TODO Auto-generated method stub
		
	}
	public void setStatusAppletReady(String htmlName, boolean b) {
		// TODO Auto-generated method stub
		
	}
	public void setScriptStatus(String strStatus, String statusMessage,
			int msWalltime, String strErrorMessageUntranslated) {
		// TODO Auto-generated method stub
		
	}
	public void setStatusResized(int width, int height) {
		// TODO Auto-generated method stub
		
	}
	public void setFileLoadStatus(String fullPathName, String fileName,
			String modelName, String strError, int code, boolean doCallback) {
		// TODO Auto-generated method stub
		
	}
	public void setJmolCallbackListener(JmolCallbackListener jmolCallbackListener) {
		// TODO Auto-generated method stub
		
	}
	public void setJmolStatusListener(JmolStatusListener jmolStatusListener,
			Object object) {
		// TODO Auto-generated method stub
		
	}
	public void setScriptEcho(String strEcho, boolean isScriptQueued) {
		// TODO Auto-generated method stub
		
	}
	public void setStatusAtomHovered(int atomIndex, String info) {
		// TODO Auto-generated method stub
		
	}
	public void setStatusAtomMoved(BitSet bs) {
		// TODO Auto-generated method stub
		
	}
	public String getStatusList() {
		// TODO Auto-generated method stub
		return null;
	}
	public void setSyncDriver(int mode) {
		// TODO Auto-generated method stub
		
	}
	public int setStatusClicked(int x, int i, int action, int clickCount, int mode) {
		// TODO Auto-generated method stub
		return 0;
	}
	public void clearConsole() {
		// TODO Auto-generated method stub
		
	}
	public Object createImage(String fileName, String type, Object textOrBytes,
			int quality) {
		// TODO Auto-generated method stub
		return null;
	}
	public Object dialogAsk(String type, String fileName) {
		// TODO Auto-generated method stub
		return null;
	}
	public float[][] functionXY(String functionName, int nX, int nY) {
		// TODO Auto-generated method stub
		return null;
	}
	public float[][][] functionXYZ(String functionName, int nX, int nY, int nZ) {
		// TODO Auto-generated method stub
		return null;
	}
	public Object getJspecViewProperties(String string) {
		// TODO Auto-generated method stub
		return null;
	}
	public void showUrl(String urlString) {
		// TODO Auto-generated method stub
		
	}
	public void setStatusObjectHovered(String id, String info, Point3f pt) {
		// TODO Auto-generated method stub
		
	}
	public void setStatusMeasuring(String status, int intInfo, String strMeasure,
			float value) {
		// TODO Auto-generated method stub
		
	}
	public void setStatusAtomPicked(int atomIndex, String info) {
		// TODO Auto-generated method stub
		
	}
	public void notifyError(String errType, String errMsg,
			String errMsgUntranslated) {
		// TODO Auto-generated method stub
		
	}
	public List<List<List<Object>>> getStatusChanged(String statusNameList) {
		// TODO Auto-generated method stub
		return null;
	}
	public Map<String, List<List<Object>>> getMessageQueue() {
		// TODO Auto-generated method stub
		return null;
	}
	public Object getRegistryInfo() {
		// TODO Auto-generated method stub
		return null;
	}
	public String jsEval(String strEval) {
		// TODO Auto-generated method stub
		return null;
	}
  

}
