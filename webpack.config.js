const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// plugin可以在webpack运行到某个时刻的时候，帮你做一些事情
const webpack = require("webpack");

module.exports = {
  mode: "development",
  // development devtool: "cheap-module-eval-source-map",
  // production devtool: "cheap-module-source-map",
  devtool: "cheap-module-eval-source-map",
  entry: {
    main: "./src/index.js",
  },
  devServer: {
    contentBase: "./bundle",
    open: true,
    port: 8090,
    hot: true,
    hotOnly: true,
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            // placeholder 占位符
            name: "[name]_[hash].[ext]",
            outputPath: "images/",
            limit: 20480,
          },
        },
      },
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader",
        },
      },
      {
        test: /\.(eot|ttf|svg|woff)$/,
        use: {
          loader: "file-loader",
        },
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          "sass-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    // new CleanWebpackPlugin(["bundle"]),
    new webpack.HotModuleReplacementPlugin(),
  ],

  output: {
    // publicPath: "/",
    filename: "[name].js",
    path: path.resolve(__dirname, "bundle"),
  },
};
