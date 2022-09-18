import uniformDistribution from "../../distribution/uniform.ts";

/**
 * Cubic bezier is a curve defined by four points P0, P1, P2, P3.
 * The curve begins at P0 and ends at P3.
 * P1 and P2 define directions in which the curve travels.
 * ```ts
 * useCubicBezier(9999999, .5,.7,.19,.96)
 * ```
 * @param num_points Number of points to obtain.
 * @param coordinates Coordinates in the order p1.x, p1.y, p2.x, p2.y.
 * @returns Array of num_points points of the cubic bezier curve.
 */
export default function cubicBezier(
  num_points: number,
  ...coordinates: [number, number, number, number]
): [number, number][] {
  const curve: [number, number][] = [];
  const increment = uniformDistribution(num_points)[1];
  let t = 0;
  do {
    curve.push([
      //        Math.pow(1 - t, 3) * POINT_0[0] +
      3 * Math.pow(1 - t, 2) * t * coordinates[0] +
      3 * (1 - t) * Math.pow(t, 2) * coordinates[2] +
      Math.pow(t, 3), /* * POINT_3[0]*/

      //        Math.pow(1 - t, 3) * POINT_0[1] +
      3 * Math.pow(1 - t, 2) * t * coordinates[1] +
      3 * (1 - t) * Math.pow(t, 2) * coordinates[3] +
      Math.pow(t, 3), /* * POINT_3[1]*/
    ]);
    t += increment;
  } while (t <= 1);
  return curve;
}
