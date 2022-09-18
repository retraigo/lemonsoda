import { np, plt, sns, NamedArgument } from "../../../../visualize/python.ts";
import witchOfAgnesi from "../witch_of_agnesi.ts";
const d = witchOfAgnesi(100, 0.5);
const data = [...d.slice().reverse().map(x => [-x[0], x[1]]), ...d]
plt.plot(d.map((x) => x[0]), d.map((x) => x[1]));


const angle = Array.from(np.linspace(0 , 2 * Math.PI , 150 ))
 
 
const x = angle.map(a => 0.5 * Math.cos( a as number )) 
const y = angle.map(a => 0.5 * Math.sin( a as number ))  
plt.plot(x, y)

plt.show();
