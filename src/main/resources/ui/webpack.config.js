const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, "js") + "/index.js",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"]
					}
				}
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'My App',
			template: path.resolve(__dirname + '/template/index.html')
		})
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	}
};