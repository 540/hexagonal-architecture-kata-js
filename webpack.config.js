const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractCSS = new ExtractTextPlugin('[name].[chunkhash].css');

module.exports = {
  entry: {
    app: [
      './src/document-files-finder.js',
      './src/document-files-finder.scss'
    ]
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'document-files-finder.[chunkhash].js'
  },
  module: {
    rules: [
      {test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: [{loader: 'url-loader?limit=100000'}]},
      {test: /\.scss$/, use: extractCSS.extract(['css-loader', 'sass-loader'])}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: path.resolve(__dirname, 'src/index.ejs')}),
    extractCSS
  ],
  mode: 'development'
};