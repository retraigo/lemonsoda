import { uniformRange } from "../../random/uniform_range.ts";
/**
 * Quadratic bezier is a curve defined by four points P0, P1, P2.
 * The curve begins at P0 and ends at P2.
 * P1 defines directions in which the curve travels.
 * ```ts
 * useQuadraticBezier(9999999, .5,.7)
 * ```
 * @param num_points Number of points to obtain.
 * @param coordinates Coordinates in the order p1.x, p1.y.
 */
export default function quadraticBezier(
  num_points: number,
  ...coordinates: [number, number]
): [number, number][] {
  const curve: [number, number][] = [];
  const increment = uniformRange(num_points)[1];
  let t = 0;
  do {
    curve.push([
      (2 * (1 - t) * t * coordinates[0]) + (t * t),
      (2 * (1 - t) * t * coordinates[1]) + (t * t),
    ]);
    t += increment;
  } while (t <= 1);
  return curve;
}
