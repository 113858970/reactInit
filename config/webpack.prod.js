
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

const config = require('./');

const WebpackConfig = {};

Object.assign(WebpackConfig, require('./webpack.base'));

// add loader
WebpackConfig.module.loaders.push(
  { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
  { test: /\.styl$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader') }
);

// add plugins
WebpackConfig.plugins.push(
  new CleanWebpackPlugin(config.path.dist, { root: config.path.root }),
  new WebpackMd5Hash(),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'common',
    filename: `js/common${config.webpack.hash}.js`,
  }),
  new ExtractTextPlugin('css/[name].[contenthash:6].css'),
  // uglify js
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      drop_debugger: true,
      drop_console: true,
      warnings: false,
    },
    comments: false,
  })
);

module.exports = WebpackConfig;
