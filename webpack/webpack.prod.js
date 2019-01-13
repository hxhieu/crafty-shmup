const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackMd5Hash = require('webpack-md5-hash')
const CleanWebpackPlugin = require('clean-webpack-plugin')

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
  // devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(path.resolve(__dirname, prodPath), {
      root: process.cwd()
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './' + srcPath + '/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash()
  ]
}
