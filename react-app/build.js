const esbuild = require("esbuild");
require("dotenv").config();
const watch = process.argv[2] ? true : false;
const base = {
  logLevel: "info",
  bundle: true,
  outdir: "dist",
  minify: true,
  sourcemap: true,
  sourceRoot: "src",
  watch,
  define: {
    // "process.env.MY_ENV_VAR": JSON.stringify(process.env.MY_ENV_VAR),
  },
};
esbuild
  .build(
    Object.assign(
      {
        entryPoints: ["src/index.tsx"],
        loader: {
          ".svg": "file",
        },
      },
      base
    )
  )
  .catch(() => process.exit(1));

esbuild
  .build(
    Object.assign(
      {
        entryPoints: ["tmp/index.css"],
      },
      base
    )
  )
  .catch(() => process.exit(1));

console.log();
