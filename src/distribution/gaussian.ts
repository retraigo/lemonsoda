const TWO_PI = Math.PI * 2;

/**
 * A **Normal** or **Gaussian** distribution is a type of 
 * continuous probability distribution dependent on two
 * parameters:
 * 
 * **μ** - The **mean** 
 * **σ** - The **standard deviation**
 * 
 * This implementation makes use of the popular Box-Muller transform.
 */

/**
 * Generate one element in a Gaussian distribution.
 * @param mean Mean of the distribution μ.
 * @param variance Variance of the distribution σ^2.
 * @returns A Gaussian distribution.
 */
export function generateGaussianPoint(
  mean: number,
  variance: number,
): number {
  const stddev = Math.sqrt(variance);
  const u = [Math.random(), Math.random()];

  const m = Math.sqrt(-2.0 * Math.log(u[0]));
  let res = (stddev * m * Math.cos(TWO_PI * u[1])) + (stddev * m * Math.sin(TWO_PI * u[1]));
  res = res / 20
  return res + mean;

}

/**
 * Generate a Gaussian array.
 * @param mean Mean of the distribution μ.
 * @param variance Variance of the distribution σ^2.
 * @returns A Gaussian distribution.
 */

export default function gaussianDistribution(num: number, mean: number, variance: number): Float32Array {
  const result = new Float32Array(num);
  let i = 0;
  while (i < num) {
    result[i] = generateGaussianPoint(mean, variance)//.reduce((acc, val) => (acc + val), 0) / 2;
    ++i;
  }
  return result;
}