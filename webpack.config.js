require('dotenv').config();
const path = require('path');
const version = require('./package.json').version;

module.exports = {
  devtool: 'source-map',
  context: path.resolve(__dirname),
  target: 'web',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: `wayke.in-location.v${version}.js`,
    library: 'Wayke',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
};
