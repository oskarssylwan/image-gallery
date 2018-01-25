var path = require('path');
var webpack = require('webpack');

module.exports = {
     entry: './src/js/app.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'app.min.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['env']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };
