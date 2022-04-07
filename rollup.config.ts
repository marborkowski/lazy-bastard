import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";
import scss from "rollup-plugin-scss";

export default {
  input: "./src/index.ts",
  output: {
    file: "./dist/dist.min.js",
    format: "cjs",
    name: "lazy-bastard",
  },
  plugins: [
    scss(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    terser(),
  ],
};
