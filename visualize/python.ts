import { python, NamedArgument } from "https://deno.land/x/python@0.2.2/mod.ts";
export const plt = python.import("matplotlib.pyplot");
export const sns = python.import("seaborn");
export const np = python.import("numpy");
export const scipy = python.import("scipy");
export const dict = python.dict;
export const list = python.list;
export {NamedArgument}