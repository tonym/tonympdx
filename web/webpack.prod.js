const dev = require('./webpack.dev.js');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(dev, {
  mode: 'production',
  watch: false,
  devtool: 'source-map',
  output: { filename: '[hash].js' }
});
