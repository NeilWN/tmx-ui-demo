const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackCommonConfig = require('./webpack.common.js')
const Components = require('../components.json')
process.env.NODE_ENV = 'production'

const basePath = path.resolve(__dirname, '../')
// let entries = {}
// Object.keys(Components).forEach((key) => {
//   entries[key] = path.join(basePath, 'src', Components[key])
// })

module.exports = merge(webpackCommonConfig, {
  devtool: 'cheap-module-eval-source-map',
  mode: 'production',
  entry: Components,
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/lib/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'umd',
    // umdNamedDefine: true,
  },
  optimization: {
    minimize: false
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
  ],
})
