const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: false,
  mode: 'development',
  entry: "./src/index.js",
  output:{
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins:[new HtmlWebpackPlugin({
    template:'./src/template.html',
    minify: false
  })
],
  module:{
    rules: [
        {
        test: /\.css$/,
        use:[
          "style-loader", //Injects CSS into the DOM
          "css-loader"    // COnverts out CSS into JavaScript
        ]
      },

    ]
  }
};
