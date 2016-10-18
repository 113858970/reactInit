
const path = require('path');
const ip = require('ip').address();

const ENV = process.env.NODE_ENV || 'production';
const WEBPACK_SERVER_PORT = process.env.WEBPACK_SERVER_PORT || 9999;

const Config = {
  // develop or production
  env: ENV,
  // path
  path: {
    root: path.resolve(__dirname, '../'),
    src: path.resolve(__dirname, '../src'),
    dist: path.resolve(__dirname, '../dist'),
  },
};
// is
Config.is = {
  prod: Config.env === 'production',
  dev: Config.env !== 'production',
};

// webpack config
Config.webpack = {
  entry: [
    'index',
  ],
  serverHost: ip,
  serverPort: WEBPACK_SERVER_PORT,
  proxy: {
    '/api*': {
      target: `http://api.github.com`,
      secure: false,
    },
  },
  // hash format, add hash for production env
  hash: Config.is.prod ? '.[hash:6]' : '',
  chunkhash: Config.is.prod ? '.[chunkhash:6]' : '',
};
// export config
module.exports = exports = Config;
