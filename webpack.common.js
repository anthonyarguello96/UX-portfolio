const path = require("path");
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');



//
// module.exports = {
//     devtool: false,
//   mode: 'development',
//   entry: "./src/index.js",
//   output:{
//     filename: "main.[contenthash].js",
//     path: path.resolve(__dirname, "dist")
//   },
//   module:{
//     rules: [
//       {
//        test: /\.html$/i,
//        loader: 'html-loader',
//      },
//      {
//     test: /\.(svg|png|jpe?g|gif)$/i,
//     use: [
//       {
//         loader: 'file-loader',
//         options:{
//           name:"[name].[hash].[ext]",
//           outputPath: "imgs"
//         }
//       },
//     ],
//   }
//     ]
//   }
// };
//

module.exports = {
  devtool: false,
  entry: "./src/index.js",
  module: {
    rules: [
      // {
      //   test: /\.html$/,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: '[name][ext]',
      //   },
      // },
      // {
      //   test: /\.html$/i,
      //   use: ['extract-loader', 'html-loader'],
      // },
      {
     test: /\.(svg|png|jpe?g|gif)$/i,
     use: [
       {
         loader: 'file-loader',
         options:{
           name:"[name].[hash].[ext]",
           outputPath: "imgs",
           esModule: false
         }
       },
     ],
   },
    ],
  },
//   plugins: [
//     new ImageMinimizerPlugin({
//       minimizerOptions: {
//         // Lossless optimization with custom option
//         // Feel free to experiment with options for better result for you
//         plugins: [
//           ['gifsicle', { interlaced: true }],
//           ['jpegtran', { progressive: true }],
//           ['optipng', { optimizationLevel: 5 }],
//           [
//             'svgo',
//             {
//               plugins: [
//                 {
//                   removeViewBox: false,
//                 },
//               ],
//             },
//           ],
//         ],
//       },
//     }),
//   ],
};
