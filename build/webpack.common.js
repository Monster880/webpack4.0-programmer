const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// plugin可以在webpack运行到某个时刻的时候，帮你做一些事情

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: { // lodash.js
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 2,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          filename: 'vendor.js'
        },
        default: {
          priority: -20,
          reuseExistingChunk: true,
          filename:'common.js'
        }
      }
    }
  },
  output: {
    // publicPath: "/",
    filename: "[name].js",
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, "..", "bundle"),
  },
};
