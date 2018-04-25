const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = [
  {
    mode: 'production',
    entry: './client.js',
    context: path.resolve(__dirname, 'src'),
    output: {
      filename: 'client.js',
      path: path.resolve(__dirname, 'build'),
    },
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      host: '0.0.0.0',
      port: 9000,
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'eslint-loader',
        },
      ],
    },
    devtool: '#inline-source-map',
    plugins: [new UglifyJsPlugin()],
    performance: { hints: false },
  },
  {
    mode: 'production',
    entry: './app.scss',
    context: path.resolve(__dirname, 'style'),
    output: {
      filename: 'app.css',
      path: path.resolve(__dirname, 'build'),
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
          }),
        },
      ],
    },
    plugins: [new ExtractTextPlugin('app.css')],
  },
];
