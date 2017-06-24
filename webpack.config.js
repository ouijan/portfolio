var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Contants used in this file
 * @type {Object}
 */
var config = {
  src: './src',
  dist: './dist',
  name: 'ouijan',
  entry: 'module.js',
};

/**
 * Sass Extract Plugin
 * @type {ExtractTextPlugin}
 */
var extractSass = new ExtractTextPlugin({
    filename: config.dist + '/' + config.name + '.css',
});

/**
 * Sass Loader
 * @type {WebpackRule}
 */
var sassLoader = {
  test: /\.scss$/,
  use: extractSass.extract({
    use: [
      { loader: 'css-loader' },
      { loader: 'sass-loader'},
    ],
  })
};

/**
 * Babel ES6 Loader
 * @type {WebpackRule}
 */
var babelLoader = {
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  use: [
    { loader: 'ng-annotate-loader' },
    { 
      loader: 'babel-loader',
      options: {
        presets: ['env']
      }
    }
  ]
};

/**
 * Template loader
 * @type {WebpackRule}
 */
var templateLoader = {
  test: /\.html$/,
  use: [
    {
      loader: 'ngtemplate-loader',
      options: {
        relativeTo: path.resolve(__dirname, config.src),
        prefix: 'ouijan/'
      }
    },
    { loader: 'html-loader' }
  ],
 };

/**
 * Exported Webpack Config
 * @type {Object}
 */
module.exports = {
  entry: config.src + '/' + config.entry,
  output: {
    filename: config.dist + '/' + config.name + '.js'
  },
  module: {
    rules: [ 
      babelLoader,
      sassLoader,
      templateLoader,
    ]
  },
  plugins: [
    extractSass
  ]
};