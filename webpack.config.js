const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: { bundle: path.resolve(__dirname, "src/index.js") },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename:'[name][ext]',
  },
  devtool: "source-map",
  devServer: {
    static:{
        directory:path.resolve(__dirname, "dist")
    },
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
    compress:true,  
  },
  module: {
    rules: [
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      {test:/\.js$/, exclude: /node_modules/, use:{loader:"babel-loader", options:{presets:["@babel/preset-env"]}}},
      {test:/\(.png|.jpg|.svg|.jpeg|.gif$/, type:"asset/resource", use:"file-loader"},
    ],
  },
  plugins:[
    new HtmlWebpackPlugin({
        title: "Joke Generator",
        filename: "index.html",
        template: "src/index.html",
    }),
    // new BundleAnalyzerPlugin(),
  ]
};
