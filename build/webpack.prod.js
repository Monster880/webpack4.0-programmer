const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const prodConfig = {
  mode: "production",
  // development devtool: "cheap-module-eval-source-map",
  // production devtool: "cheap-module-source-map",
  devtool: "cheap-module-source-map",
  // devServer: {
  //   contentBase: "./bundle",
  //   open: true,
  //   port: 8090,
  //   hot: true,
  //   hotOnly: true,
  // },

  // optimization: {
  //   usedExports: true,
  // },
};

module.exports = merge(commonConfig, prodConfig);
