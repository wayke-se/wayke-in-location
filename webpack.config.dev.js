const { merge } = require('webpack-merge');
const base = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = merge(base, {
  entry: './src/index-dev.ts',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: ['./src/**/*.{ts,js}'],
      },
    }),
  ],
  devServer: {
    hot: true,
    port: 5000,
  },
});
