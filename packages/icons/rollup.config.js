import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";
import image from "@rollup/plugin-image";
import svgr from "@svgr/rollup";

export default [
	// UMD for browser-friendly build
	{
		input: "src/index.ts",
		output: {
			name: "fe-sds-icons",
			file: pkg.browser,
			format: "umd",
			exports: "auto",
		},
		plugins: [
			resolve(),
			commonjs(),
			typescript(),
			svgr(),
			image({
				exclude: "**/*.svg",
			}),
		],
	},
	// CommonJS for Node and ES module for bundlers build
	{
		input: "src/index.ts",
		external: ["ms"],
		plugins: [typescript(), svgr(), image({ exclude: "**/*.svg" })],
		output: [
			{ file: pkg.main, format: "cjs", exports: "auto" },
			{ file: pkg.module, format: "es", exports: "auto" },
		],
	},
];
