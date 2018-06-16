const path = require('path');

const { resolve } = path;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const nullsOut = (i) => i;

const definePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('development'),
  },
});

const loaderOptionsPlugin = new webpack.LoaderOptionsPlugin({
  minimize: false,
  options: {
    eslint: {
      emitWarning: true,
    },
    minimize: false,
  },
});

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  title: 'Test',
  filename: 'index.html',
  template: 'src/index.html',
});

const commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendors',
  filename: '[name].bundle.js',
});

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const config = {
  cache: true,
  devtool: 'cheap-module-eval-source-map',
  entry: {
    vendors: ['./src/base.js', 'react-dom', 'react'],
    bundle: ['./src/index.js'],
  },
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js|jsx/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    htmlWebpackPlugin,
    definePlugin,
    loaderOptionsPlugin,
    commonsPlugin,
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(), // 熱模塊替換插件
  ],
  resolve: {
    mainFields: ['jsnext:main', 'browser', 'module', 'main'],
    alias: {
      base: resolve(__dirname, './src/base.js'),
    },
    extensions: ['.js', '.jsx'],
    symlinks: false,
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    compress: true,
    contentBase: './',
  },
};

module.exports = config;
