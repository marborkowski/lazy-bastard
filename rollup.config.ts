import typescript from "@rollup/plugin-typescript";
import scss from "rollup-plugin-scss";
import { uglify } from "rollup-plugin-uglify";

export default {
  input: "./src/LazyBastard/index.ts",
  output: {
    file: "./dist/dist.min.js",
    format: "umd",
    name: "lazy-bastard",
  },
  plugins: [typescript({ tsconfig: "./tsconfig.json" }), scss(), uglify()],
};
