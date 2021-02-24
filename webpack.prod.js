const path = require("path");
const common = require('./webpack.common');
const {merge} = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = merge(common,{
    devtool: false,
  mode: 'production',
  output:{
    publicPath: '',
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new MiniCssExtractPlugin({filename: "[name].[contenthash].css"}),
    new CleanWebpackPlugin()
  ],
  module:{
    rules: [
      {
      test: /\.css$/,
      use:[
        MiniCssExtractPlugin.loader, //Extract CSS into the files
        "css-loader"    // Converts out CSS into JavaScript
      ]
    },
    ]
  },
  optimization:{
  minimizer: [
    new CssMinimizerPlugin(),
    new TerserPlugin(),
    new HtmlWebpackPlugin({
      template:'./src/template.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ]
}
});
