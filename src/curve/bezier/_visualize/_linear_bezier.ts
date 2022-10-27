import {cubicBezier} from "../cubic_bezier.ts";
import linearBezier from "../linear_bezier.ts";

import { np, plt, sns } from "../../../../visualize/python.ts";
const d = linearBezier(100);
plt.plot(d.map((x) => x[0]), d.map((x) => x[1]));
plt.show();
