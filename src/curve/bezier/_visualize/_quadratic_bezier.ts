import quadraticBezier from "../quadratic_bezier.ts";

import { np, plt, sns } from "../../../../visualize/python.ts";
const d = quadraticBezier(100, .67, .17);
plt.plot(d.map((x) => x[0]), d.map((x) => x[1]));
plt.show();
