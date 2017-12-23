const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
  entry: './app.js',
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    host: '0.0.0.0',
    port: 3000,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['eslint-loader'],
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
    ],
  },
  devtool: '#inline-source-map',
},
{
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
  plugins: [
    new ExtractTextPlugin('app.css'),
  ],
}];
