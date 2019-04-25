const path = require('path');

module.exports = {
                   entry: path.resolve(__dirname,"js") + "/index.js",
                   module: {
                       rules: [
                         {
                               test: /\.m?js$/,
                               exclude: /(node_modules|bower_components)/,
                               use: {
                                 loader: 'babel-loader',
                                 options: {
                                   presets: ["@babel/preset-env", "@babel/preset-react"]
                                 }
                               }
                               }
                       ]
                     },
                   output: {
                     path: path.resolve(__dirname, 'dist'),
                     filename: 'bundle.js'
                   }
                 };