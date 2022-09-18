export default function roots(a: number, b: number, c: number): [number, number] {
  const i = Math.sqrt((b ** 2) - (4 * a * c));
  return [(-b + i) / (2 * a), (-b - i) / (2 * a)];
}
