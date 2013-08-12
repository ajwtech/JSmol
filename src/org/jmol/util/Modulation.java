package org.jmol.util;

/**
 * A class to allow for more complex vibrations and associated phenomena, such
 * as modulated crystals, including Fourier series, Crenel functions, and
 * sawtooth functions
 * 
 * @author Bob Hanson hansonr@stolaf.edu 8/8/2013
 * 
 */

public class Modulation {

  private static final double TWOPI = 2 * Math.PI;

  private double a1;
  private double a2;
  private double center;
  private double left, right;

  private V3 nq; // wave vector
  private double nqlen;

  private int fn; // power
  private char axis;
  private final int type;

  private String utens;

  public static final int TYPE_DISP_FOURIER = 0;
  public static final int TYPE_DISP_SAWTOOTH = 1;
  public static final int TYPE_OCC_FOURIER = 2;
  public static final int TYPE_OCC_CRENEL = 3;
  public static final int TYPE_U_FOURIER = 4;

  public V3 getWaveVector() {
    return nq;
  }

  /**
   * Each atomic modulation involves a fractional coordinate wave vector q, a
   * Fourier power n, a modulation axis (x, y, or, z), and specified parameters
   * that depend upon the type of function.
   * 
   * 
   * @param nq
   * @param axis
   * @param type
   * @param fn
   * @param params
   * @param utens TODO
   */
  public Modulation(P3 nq, char axis, int type, int fn, P3 params, String utens) {
    this.nq = V3.newV(nq);
    nqlen  = nq.length();
    this.axis = axis;
    this.type = type;
    this.fn = fn;
    this.utens = utens;
    switch (type) {
    case TYPE_DISP_FOURIER:
    case TYPE_OCC_FOURIER:
    case TYPE_U_FOURIER:
      a1 = params.x;
      a2 = params.y;
      break;
    case TYPE_DISP_SAWTOOTH:
    case TYPE_OCC_CRENEL:
      center = params.x;
      float width = params.y;
      if (width > 1)
        width = 1; // http://b-incstrdb.ehu.es/incstrdb/CIFFile.php?RefCode=Bi-Sr-Ca-Cu-O_rNdCbetq
      left = center - width / 2;
      right = center + width / 2;
      if (left < 0)
        left += 1;
      if (right > 1)
        right -= 1;
      if (left >= right && left - right < 0.01f)
        left = right + 0.01f;
      a1 = 2 * params.z / width;
      break;
    }
  }

  /**
   * 
   * In general, we have:
   * 
   * u_axis(x) = sum[A1 cos(theta) + B1 sin(theta)]
   * 
   * where axis is x, y, or z, and theta = 2n pi x
   * 
   * However, for symmetry-related atoms, we need to do a 4D transformation, not
   * just a 3D one. We need to operate on x first BEFORE applying u(x):
   * 
   * u(x4') = Ru(x4)
   * 
   * where we need to express x4 in terms of a "transformed" x4', because x4' is
   * for our rotated point.
   * 
   * x4' = epsilon x4 + delta
   * 
   * where epsilon = +/-1, so
   * 
   * x4 = epsilon (x4' - delta)
   * 
   * More generally, we might have something like:
   * 
   * x4' = x5 + 1/2; x5' = x4 - 1/2
   * 
   * Will have to work on that later!
   * 
   * 
   * @param ms
   * 
   */
   void apply(ModulationSet ms) {

    // TODO: must be adapted for d > 1 modulation

    double v = 0;
    //if (type == TYPE_OCC_CRENEL)
    //delta = 0;
    
    double x4 = ms.epsilon * (nq.dot(ms.r) - fn * ms.delta + nqlen * ms.t);

    switch (type) {
    case TYPE_DISP_FOURIER:
    case TYPE_OCC_FOURIER:
    case TYPE_U_FOURIER:
      double theta = TWOPI * x4;
      if (a1 != 0)
        v += a1 * Math.cos(theta);
      if (a2 != 0)
        v += a2 * Math.sin(theta);
      if (Logger.debuggingHigh)
        Logger.debug("MOD v " + v + " a1 a2 " + a1 + " " + a2 + " / " + theta + " " +  ms.t);
      break;
    case TYPE_OCC_CRENEL:

      //  An occupational crenel function along the internal space is
      //  defined as follows:
      //
      //           p(x4)=1   if x4 belongs to the interval [c-w/2,c+w/2]
      //           p(x4)=0   if x4 is outside the interval [c-w/2,c+w/2],

      x4 -= Math.floor(x4);
      ms.v = (range(x4) ? 1 : 0);
      return;
    case TYPE_DISP_SAWTOOTH:

      //  _atom_site_displace_special_func_sawtooth_ items are the
      //  adjustable parameters of a sawtooth function. A displacive sawtooth
      //  function along the internal space is defined as follows:
      //
      //    u_x = 2a_x[(x4 − c)/w] 
      //             
      //  for x4 belonging to the interval [c − (w/2), c + (w/2)], where ax,
      //  ay and az are the amplitudes (maximum displacements) along each
      //  crystallographic axis, w is its width, x4 is the internal coordinate
      //  and c is the centre of the function in internal space. ux, uy and
      //  uz must be expressed in relative units.

      // here we have set a1 = 2a_xyz/w 

      x4 -= Math.floor(x4);
      if (!range(x4))
        return;

      // x < L < c
      //
      //           /|
      //          / |
      //         / x------------->
      //         |  |   L     /|
      // --------+--|---|----c-+------
      //         0  R   |   /  1       
      //                |  /         
      //                | /
      //                |/

      // becomes

      //                         /|
      //                        / |
      //                       / x|
      //                L     /   |
      // --------+------|----c-+--|----
      //         0      |   /  1  R     
      //                |  /         
      //                | /
      //                |/

      // x > R > c
      //
      //              /|
      //             / |
      //            /  |
      //           /   |         L
      // --------+c----|---------|---+-------
      //         0     R         |   1
      //        <-----------------x / 
      //                         | /
      //                         |/

      // becomes

      //              /|
      //             / |
      //            /  |
      //     L     /   |
      // ----|---+c----|-------------+--------
      //     |   0     R             1
      //     |x /                  
      //     | /
      //     |/

      if (left > right) {
        if (x4 < left && left < center)
          x4 += 1;
        else if (x4 > right && right > center)
          x4 -= 1;
      }
      v = a1 * (x4 - center);
      break;
    }
    switch (axis) {
    case 'x':
      ms.x += v;
      break;
    case 'y':
      ms.y += v;
      break;
    case 'z':
      ms.z += v;
      break;
    case 'U':
      ms.addUTens(utens, (float) v, fn);
      break;
    default:
      if (Float.isNaN(ms.v))
        ms.v = 0;
      ms.v += (float) v;
    }
  }

  /**
   * Check that left < x4 < right, but allow for folding
   * 
   * @param x4
   * @return true only if x4 is in the (possibly folded) range of left and right
   * 
   */
  private boolean range(double x4) {
    return (left < right ? left <= x4 && x4 <= right : left <= x4
        || x4 <= right);
  }

  
}