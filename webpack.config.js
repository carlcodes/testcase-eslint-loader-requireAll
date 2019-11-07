const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'built.js'
	},
	module: {
		rules: [
			{
				test: /.*\.js/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
				options: {
					baseConfig: {
						extends: 'eslint:recommended',
					}
				},
			},
		],
	},
};
