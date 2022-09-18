import uniformDistribution from "../../distribution/uniform.ts";

/**
 * A linear bezier is a curve, or rather a straight line, between two given points P0 and P1.
 * @param num_points Number of points to obtain.
 * @returns Array of num_points points of the linear bezier curve (more like line).
 */
export default function linearBezier(num_points: number): [number, number][] {
  return Array.from(uniformDistribution(num_points)).map((t) => [t, t]);
}
