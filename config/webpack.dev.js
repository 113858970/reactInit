

const WebpackConfig = {
  // It suppress error shown in console, so it has to be set to false.
  // quiet: false,
  // It suppress everything except error, so it has to be set to false as well
  // to see success build.
  // noInfo: false,
  // stats: {
  //   Config for minimal console.log mess.
  //   colors: true,
  //   hash: false,
  //   version: false,
  //   timings: false,
  //   assets: false,
  //   chunks: false,
  //   chunkModules: false,
  //   modules: false,
  //   children: false,
  //   cached: false,
  //   reasons: false,
  //   source: false,
  //   errorDetails: true,
  //   chunkOrigins: false
  // }
};

Object.assign(WebpackConfig, require('./webpack.base'));

WebpackConfig.module.loaders.push(
  { test: /\.css$/, loaders: ['style', 'css?sourceMap'] },
  { test: /\.styl$/, loaders: ['style', 'css?sourceMap', 'stylus?sourceMap'] },
  { test: /\.(jpe?g|png|gif)$/i, loader: 'file?name=[name].[ext]' }
);

module.exports = WebpackConfig;
