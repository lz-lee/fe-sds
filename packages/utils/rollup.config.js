import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";

export default [
	// UMD for browser-friendly build
	{
		input: "src/index.ts",
		output: {
			name: "fe-sds-utils",
			file: pkg.browser,
			format: "umd",
			exports: "auto",
		},
		plugins: [
			resolve(),
			commonjs(),
			typescript({ tsconfig: "./tsconfig.json" }),
		],
	},
	// CommonJS for Node and ES module for bundlers build
	{
		input: "src/index.ts",
		external: ["ms"],
		plugins: [typescript({ tsconfig: "./tsconfig.json" })],
		output: [
			{ file: pkg.main, format: "cjs", exports: "auto" },
			{ file: pkg.module, format: "es", exports: "auto" },
		],
	},
];
