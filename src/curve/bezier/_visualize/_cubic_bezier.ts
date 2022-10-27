import { cubicBezier } from "../cubic_bezier.ts";

import { np, plt, sns } from "../../../../visualize/python.ts";
const d = cubicBezier(100, .17, .67, -.83, .67);
plt.plot(d.map((x) => x[0]), d.map((x) => x[1]));
plt.show();
