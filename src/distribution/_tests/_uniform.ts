import uniformDistribution from "../uniform.ts";
import { np, plt, sns, dict } from "../../../visualize/python.ts";

const rand = new Array(100);

for (let i = 0; i < 100; ++i) {
    rand[i] = Math.random()
}

const data = { lemonsoda: Array.from(uniformDistribution(100, 0, 1, false)), numpy: Array.from(np.random.uniform(0, 1, 100)).sort(), rand: rand.sort() }

const x = Array.from(np.random.uniform(0, 1, 100)).sort()
//console.log(data)
//sns.lineplot(data);
plt.plot(x, data.numpy)
plt.plot(x, data.lemonsoda)
plt.plot(x, data.rand)
plt.show();
