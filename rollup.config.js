//import { terser as minifier } from 'rollup-plugin-terser'

export default [
	{
		input: 'src/main-node.js',
		plugins: [
			//minifier()
		],
		output: {
			intro: '\nlet source = "", position = 0;',

			// target : Node
			format: 'cjs',
			file: 'dist/node/fast-toml.js',
		}
	},
	{
		input: 'src/main-umd.js',
		plugins: [
			//minifier()
		],
		output: {
			intro: '\nlet source = "", position = 0;',

			// target : Browser
			format: 'umd',
			file: 'dist/browser/fast-toml.js',
			name: 'TOML'
		}
	}
]
