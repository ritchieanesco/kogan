const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    './source/js/index.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      { test: /\.(jsx)$/, use: 'babel-loader' },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader"
        }]
    },
    { test: /\.(woff2?|jpe?g|png|gif|ico)$/, 
        use: 'file-loader?name=./img/[name].[ext]' }
]
  },
  devServer: {
    publicPath: '/',
    contentBase: 'public',
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'source/index.html'
    }),
    new webpack.NamedModulesPlugin()
  ]
};