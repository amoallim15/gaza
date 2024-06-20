import esbuild from "esbuild";

const baseConfig = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  sourcemap: "linked",
  format: "esm",
}

// development
await esbuild.build({
  ...baseConfig,
  outfile: "dist/gaza.js",
  logLevel: "debug",
});

// default, production
await esbuild.build({
  ...baseConfig,
  minify: true,
  outfile: "dist/gaza.min.js",
  logLevel: "info",
})