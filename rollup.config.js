import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

export default [
  {
    input: "src/index.js",
    output: {
      name: "@sajtempler/react-hooks",
      file: pkg.browser,
      format: "umd",
    },
    plugins: [terser()],
  },
  {
    input: "src/index.js",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
    plugins: [terser()],
  },
];
