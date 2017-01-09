const path = require('path');

const srcPath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'dist');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: srcPath,
  entry: path.join(srcPath, 'js', 'client.js'),
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(path.join(buildPath, 'main.scss'), {
        allChunks: true
    })
   ]
};
