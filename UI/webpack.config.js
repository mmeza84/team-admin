const path = require("path");

module.exports = {
	entry: "./src/js/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
		filename: "app.js"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	},
	resolve: {
		modules: [ "node_modules" ],
		extensions: [ ".js", ".json", ".jsx", ".css" ]
	},
	devServer: {
		contentBase: [
			path.resolve(__dirname, "dist")
		],
		historyApiFallback: {
			verbose: true,
			logger: console.log.bind(console)
		}
	}
};