const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
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
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
      },
    ],
  },

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "bundle"),
  },
};
