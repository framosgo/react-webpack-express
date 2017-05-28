const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
  // whatwg-fetch is need for fetch fuction in safari
  entry: path.join(__dirname, 'client', 'src', 'entry.js'),

  output: {
    path: path.join(__dirname, 'client', 'dist'),
    publicPath: '/',
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
          presets: ['react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader?url=false'
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'css/bundle.css',
      disable: false,
      allChunks: true
    })
  ]
}
