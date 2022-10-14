import { plt, scipy } from "../../../visualize/python.ts";
import { linearRegression } from "../linear_regression.ts";
import { normalDistribution } from "../../random/normal_distribution.ts";
// import { uniformRange } from "../../random/uniform_range.ts";

const x = normalDistribution(99999, 13, 0.03).sort();
const y = normalDistribution(99999, 69, 0.09).sort();

console.log(x, y);

const reg = linearRegression(Array.from(x), Array.from(y));
const regpy = scipy.stats.linregress(Array.from(x), Array.from(y));

//sns.histplot({ lemonsoda: reg., numpy: np.random.default_rng().gamma(2, 2, 100) });
plt.scatter(Array.from(x), Array.from(y));
plt.plot(
  Array.from(x),
  Array.from(x).map((n) => reg.intercept + (reg.slope * n)),
);
plt.plot(
  Array.from(x),
  Array.from(x).map((n) => Number(regpy.intercept) + (Number(regpy.slope) * n)),
);

console.log(reg);
console.log(reg.predict(27.72));
plt.show();
