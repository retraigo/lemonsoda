import { normalDistribution } from "../normal_distribution.ts";
import { np, plt, sns } from "../../../visualize/python.ts";
const d = normalDistribution(100000, 13, 0.03);

sns.histplot({ lemonsoda: d, numpy: np.random.normal(13, 0.03, 100000) });
plt.show();
