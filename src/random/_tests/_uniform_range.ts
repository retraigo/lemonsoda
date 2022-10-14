import { uniformRange } from "../uniform_range.ts";
import { dict, np, plt, sns } from "../../../visualize/python.ts";

const rand = new Array(100);

for (let i = 0; i < 100; ++i) {
  rand[i] = Math.random();
}

const data = {
  lemonsoda: Array.from(uniformRange(100, 0, 1)),
  numpy: Array.from(np.random.uniform(0, 1, 100)).sort(),
  rand: rand.sort(),
};

const x = Array.from(np.random.uniform(0, 1, 100)).sort();
//console.log(data)
//sns.lineplot(data);
plt.plot(x, data.numpy);
plt.plot(x, data.lemonsoda);
plt.plot(x, data.rand);
plt.show();
