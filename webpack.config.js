require("dotenv").config();

const path = require("path");
const webpack = require('webpack');
const srcDir = path.join(__dirname, '/client/src');
const distDir = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${srcDir}/index.jsx`,
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: distDir
  },
  module: {
    rules : [
      {
        test: /\.(jsx||js)?/,
        include: srcDir,
        loader: 'babel-loader'
      }
    ]
  }
};
