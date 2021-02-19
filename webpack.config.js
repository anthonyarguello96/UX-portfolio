const path = require("path");
module.exports = {
    devtool: false,
  mode: 'development',
  entry: "./src/index.js",
  output:{
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
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
