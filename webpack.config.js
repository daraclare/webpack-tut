let path = require('path');
let webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js',
    'webpack/hot/dev-server', //allow hot module replacement (HMR) by webpack dev server
    'webpack-dev-server/client?http://localhost:8080'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  }
};
