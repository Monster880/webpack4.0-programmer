// plugin可以在webpack运行到某个时刻的时候，帮你做一些事情
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const devConfig = {
  mode: "development",
  // development devtool: "cheap-module-eval-source-map",
  // production devtool: "cheap-module-source-map",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: "./bundle",
    open: true,
    port: 8080,
    hot: true,
    hotOnly: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  optimization: {
    usedExports: true,
  },
};

module.exports = merge(commonConfig, devConfig);