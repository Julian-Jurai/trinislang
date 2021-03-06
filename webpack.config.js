const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js"
  },
  plugins: [new CleanWebpackPlugin()],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
