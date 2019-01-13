const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const {
  prodPath,
  srcPath
} = require('./path')

module.exports = {
  entry: {
    main: './' + srcPath + '/index.js'
  },
  output: {
    path: path.resolve(__dirname, prodPath),
    filename: '[name].[chunkhash].js'
  },
  // devtool: 'cheap-module-source-map',
  devtool: 'source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './' + srcPath + '/index.html',
      filename: 'index.html'
    })
  ]
}
