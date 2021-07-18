const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Caching',
		}),
	],
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
	},
	output: {
		filename: '[name].[contenthash].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
			},
		},
	},
};
