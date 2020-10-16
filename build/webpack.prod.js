const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.js');

process.env.NODE_ENV = 'production';

module.exports = merge(webpackCommonConfig, {
  devtool: 'cheap-source-map',
  mode: "production",
  entry: {
    main: path.resolve(__dirname, '../src/index.js')  // 将src下的index.js 作为入口点
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/lib/',
    filename: 'tmx-ui.min.js',  // 改成自己的类库名
    library: 'tmx-ui', // 类库导出
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: { // 外部化对vue的依赖
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ]
});
