const path = require("path");

/**@type {import('webpack').Configuration} */
module.exports = {
	mode: "production",
	entry: "./src/index.js",
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "dist"),
	},
	devtool: "hidden-source-map",
};