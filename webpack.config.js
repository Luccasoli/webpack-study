const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		index: {
			import: './src/index.js',
			dependOn: 'shared',
		},
		another: {
			import: './src/another-module.js',
			dependOn: 'shared',
		},
		shared: 'lodash',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Development',
		}),
	],
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		publicPath: '/',
	},
	optimization: {
		runtimeChunk: 'single',
	},
};
