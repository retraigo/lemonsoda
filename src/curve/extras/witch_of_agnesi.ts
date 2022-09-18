import uniformDistribution from "../../distribution/uniform.ts";

export default function witchOfAgnesi(
  num_points = 100,
    radius = 0.5,
): [number, number][] {
  if (radius > 1) radius = 0.5;
  const res: [number, number][] = Array.from(uniformDistribution(num_points, -1, 1))
    .map((t) => [t, t]);
  let i = 0;
  while (i < num_points) {
        res[i][1] = (8 * (radius ** 3)) /
          ((res[i][0] ** 2) + (4 * radius * radius));
//    res[i][1] = 1 / (Math.pow(res[i][0], 2) + 1);
    i += 1;
  }
  return res;
}
