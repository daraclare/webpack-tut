let path = require('path');
let webpack = require('webpack');

// const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';


let entry = PRODUCTION
  ? [ './src/index.js' ]
  : [
    './src/index.js',
    'webpack/hot/dev-server', //allow hot module replacement (HMR) by webpack dev server
    'webpack-dev-server/client?http://localhost:8080'
  ];

  let plugins = PRODUCTION
    ? []
    : [ new webpack.HotModuleReplacementPlugin() ];

module.exports = {
  devtool: 'source-map',
  entry: entry,
  plugins: plugins,
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: '/node_modules/'
    }, {
      test: /\.(png|jpg|jpeg|gif)$/,
      loaders: ['url-loader?limit=10000&name=images/[hash:12].[ext]'],
      exclude: '/node_modules/'
    }]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  }
};
