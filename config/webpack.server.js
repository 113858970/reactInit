const config = require('../config');
const chalk = require('chalk');

// webpack module
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../config/webpack.dev');

// port
const PORT = config.webpack.serverPort;
// path
const PATH = `http://${config.webpack.serverHost}:${PORT}`;

// hot module
const hotModuleForEntry = [
  `webpack-dev-server/client?${PATH}`,
  'webpack/hot/dev-server',
];
config.webpack.entry.forEach((item) => {
  if (webpackConfig.entry[item]) {
    webpackConfig.entry[item] = hotModuleForEntry.concat(webpackConfig.entry[item]);
  }
});
// add dev options
Object.assign(webpackConfig, {
  devtool: 'source-map',
  debug: true,
});
// for dev
webpackConfig.output.publicPath = `${PATH}/`;
webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
webpackConfig.plugins.push(new webpack.NoErrorsPlugin());

// compiler
const compiler = webpack(webpackConfig);

// webpack dev server options
const devServerOptions = {
  contentBase: config.path.dist,
  hot: true,
  historyApiFallback: false,
  noInfo: true,
  stats: {
    colors: true,
  },
};
// proxy config
if (config.webpack.proxy) {
  devServerOptions.proxy = config.webpack.proxy;
}

// run
const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(PORT, () => {
  const url = PATH;
  const message = `${chalk.blue('webpack-dev-server')} is running at ${chalk.yellow.underline(url)}`;
  console.log(message);
});

