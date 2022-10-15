import { normalDistribution } from "../src/random/normal_distribution.ts";
import { uniformRange } from "../src/random/uniform_range.ts";
import { linearRegression } from "../src/regression/linear_regression.ts";

const __dirname = new URL(".", import.meta.url).pathname;

const linregress = Deno.dlopen(
  `${__dirname}/../dylibs/liblinear_regression.so`,
  {
    linear_regression: {
      parameters: ["buffer", "buffer", "u32", "u32"],
      result: "pointer",
    },
    no_op: {
      parameters: [],
      result: "void",
    },
    another_no_op: {
      parameters: [],
      callback: true,
      result: "void",
    },
    get_slope: {
      parameters: ["pointer"],
      result: "f32",
    },
    get_intercept: {
      parameters: ["pointer"],
      result: "f32",
    },
    get_r2: {
      parameters: ["pointer"],
      result: "f32",
    },
    predict_x: {
      parameters: ["pointer", "f32"],
      result: "f32",
    },
    predict_y: {
      parameters: ["pointer", "f32"],
      result: "f32",
    },
    free_res: {
      parameters: ["pointer"],
      result: "void",
    },
  },
);

const lin = linregress.symbols;

const x = uniformRange(1e7, 17, 0.087);
const y = uniformRange(1e7, 765, 0.0698);

const data_x = Float32Array.from(x);
const data_y = Float32Array.from(y);

//const ptr = lin.linear_regression(x, y, 10000, 10000);

//console.log("T1", lin.get_slope(ptr), lin.get_intercept(ptr), lin.get_r2(ptr));

//const pt2 = linearRegression(data_x, data_y);

//console.log("T2", pt2.slope, pt2.intercept, pt2.r2)

//console.log(lin.get_intercept_f32(ptr))

const x_for_ffi = new Uint8Array(data_x.buffer);
const y_for_ffi = new Uint8Array(data_y.buffer);

const ptr = lin.linear_regression(
  x_for_ffi,
  y_for_ffi,
  x.length,
  y.length,
);
const [slope, intercept] = [lin.get_slope(ptr), lin.get_intercept(ptr)];
console.log(slope, intercept);

const res = linearRegression(x, y);
const [slope2, intercept2] = [res.slope, res.intercept];
console.log(slope2, intercept2);

Deno.bench({
  name: "Deno No-op",
  fn() {
  },
});

Deno.bench({
  name: "Rust FFI",
  baseline: true,
  group: "linregress",
  fn() {
    const ptr = lin.linear_regression(
      x_for_ffi,
      y_for_ffi,
      x.length,
      y.length,
    );
    //const ptr = lin.no_op();
    //    const [slope, intercept] = [lin.get_slope(ptr), lin.get_intercept(ptr)];
    //    lin.free_res(ptr);
  },
});

Deno.bench({
  name: "Deno",
  group: "linregress",
  //  ignore: true,
  fn() {
    const res = linearRegression(x, y);
    //    const [slope, intercept] = [res.slope, res.intercept];
  },
});
