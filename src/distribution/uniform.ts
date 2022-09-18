/**
 * Get n evenly distributed numbers in a range.
 * @param n Number of numbers to generate.
 * @param min Lower limit of range.
 * @param max Upper limit of range.
 * @returns Array of n evenly distributed numbers.
 */
 export default function uniformDistribution(n: number, min = 0, max = 1, inclusive = true): Float32Array {
    const res = new Float32Array(n);
    let i = 1;
    while (i < (inclusive ? n : n + 1)) {
      res[i - 1] = min + ((i * (max - min)) / (inclusive ? n+1 : n+2));
      i += 1;
    } 
    if(inclusive) res[i-1] = max;
    return res;
  }
  