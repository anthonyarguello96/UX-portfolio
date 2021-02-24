const path = require("path");
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');



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


module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader', // Or `url-loader` or your other loader
          },
        ],
      },
    ],
  },
  plugins: [
    new ImageMinimizerPlugin({
      minimizerOptions: {
        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 5 }],
          [
            'svgo',
            {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          ],
        ],
      },
    }),
  ],
};
