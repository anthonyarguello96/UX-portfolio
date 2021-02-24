const path = require("path");


module.exports = {
    devtool: false,
  mode: 'development',
  entry: "./src/index.js",
  output:{
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },
  module:{
    rules: [
      {
       test: /\.html$/i,
       loader: 'html-loader',
     },
     {
    test: /\.(svg|png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
        options:{
          name:"[name].[hash].[ext]",
          outputPath: "imgs"
        }
      },
    ],
  }
    ]
  }
};
