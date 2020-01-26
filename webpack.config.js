require('dotenv').config()
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
require('@babel/register')

module.exports = env => ({
  entry: ['@babel/polyfill', './src/index.js'],
  mode: env.NODE_ENV,
  output: {
    path: path.resolve(__dirname),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname),
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      inject: false,
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitError: true,
          failOnError: true
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(woff2?|ttf|gif|svg|eot|otf|png|jpg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      }
    ]
  },
  optimization: {
    minimizer: [new TerserPlugin()]
  },

  watch: env.NODE_ENV === 'development',
  watchOptions: {
    poll: true
  },
  devtool: 'inline-cheap-module-source-map'
})
