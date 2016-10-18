/**
 * webpack config
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./');
const path = require('path');
const fs = require('fs');

// webpack config
const WebpackBaseConfig = {
  entry: {
    common: [],
  },
  output: {
    path: path.join(config.path.dist),
    publicPath: '/',
    filename: `js/[name]${config.webpack.chunkhash}.js`,
  },
  resolve: {
    extensions: [
      '', '.js', '.jsx',
      '.css', '.styl',
      'png', 'jpg', 'jpeg', 'gif', 'ico'],
    alias: {
      styles: path.join(config.path.src, '/styles'),
      components: path.join(config.path.src, '/components'),
      utils: path.join(config.path.src, '/utils')
    },
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192',
        exclude: /node_modules/,
      }
    ],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  stylus: {
    import: [
      path.join(config.path.src, '/styles/helpers/index.styl'),
    ],
  },
};

// loop all entry
config.webpack.entry.forEach((item) => {
  // let entry = path.parse(item);
  const entry = {
    name: item,
  };
  // entry
  const entryUrl = path.join(config.path.src, `/pages/${entry.name}/main.jsx`);
  if (fs.existsSync(entryUrl)) {
    WebpackBaseConfig.entry[entry.name] = entryUrl;
  } else {
    return false;
  }
  // template
  const templateUrl = path.join(config.path.src, `/tmpl/${entry.name}.html`);
  if (fs.existsSync(templateUrl)) {
    const htmlPlugin = new HtmlWebpackPlugin({
      filename: `${entry.name}.html`,
      template: templateUrl,
      chunks: ['common', entry.name],
      // minify the html content when env equal 'production'
      minify: !config.is.prod ? false : {
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
      },
    });
    // add to plugins
    WebpackBaseConfig.plugins.push(htmlPlugin);
  }
});

module.exports = exports = WebpackBaseConfig;
