import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import styles from "rollup-plugin-styles";

const packageJson = require("./package.json");

export default {
  input: "./src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: false,
      name: "react-lib",
      assetFileNames: "[name]-[hash][extname]",
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: false,
      assetFileNames: "[name]-[hash][extname]",
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    terser(),
    styles(),
  ],
};
