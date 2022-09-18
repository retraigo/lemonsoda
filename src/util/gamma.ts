import factorial from "./factorial.ts";

export default function gamma(n: number) {
  return factorial(n - 1);
}
