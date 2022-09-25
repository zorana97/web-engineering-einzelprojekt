const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // 1
  // Use the src/index.js file as entry point to bundle it.
  // If the src/index.js file imports other JS files,
  // bundle them as well
  entry: {
    index: path.resolve(__dirname, "./src/index.js"),
    about: path.resolve(__dirname, "./src/about.js"),
    signUp: path.resolve(__dirname, "./src/signUp.js"),
  },

  // 2
  // The bundles source code files shall result in a bundle.js file
  // in the /dist folder
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    assetModuleFilename: "[name][ext]",
  },

  //devTool
  devtool: "source-map",
  // 3
  // The /dist folder will be used to serve our application
  // to the browser
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    port: 3000,
    open: true,
    hot: true,
  },
  // 4
  // Add plugins for webpack here
  plugins: [
    new ESLintPlugin(),
    new CleanWebpackPlugin(),
    // new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: "Web engineering Einzelprojekt",
      inject: true,
      chunks: ["index"],
      template: path.resolve(__dirname, "./src/index.html"),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/about.html"),
      inject: true,
      chunks: ["about"],
      filename: "about.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/signUp.html"),
      inject: true,
      chunks: ["signUp"],
      filename: "signUp.html",
    }),
  ],

  // 5
  // Integrate Babel in the build process
  // Define which files to use the loader
  module: {
    // configuration regarding modules
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/, // files to exclude
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader", // or MiniCssExtractPlugi.loader
          "css-loader",
        ],
      },
      {
        test: /\.(svg|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    // options for resolving module requests
    extensions: ["*", ".js"], // files to load
  },
};
