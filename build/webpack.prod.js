const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const prodConfig = {
  mode: 'production',
  // development devtool: "cheap-module-eval-source-map",
  // production devtool: "cheap-module-source-map",
  devtool: 'cheap-module-source-map',
  // devServer: {
  //   contentBase: "./bundle",
  //   open: true,
  //   port: 8090,
  //   hot: true,
  //   hotOnly: true,
  // },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          'sass-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[name].chunk.css'
  })],

  // optimization: {
  //   usedExports: true,
  // },
};

module.exports = merge(commonConfig, prodConfig);
