const path = require('path');

const SRC_DIR = 'src/client/src';
const DIST_DIR = 'src/public';

module.exports = {
  entry: path.resolve(__dirname, SRC_DIR, 'index.jsx'),
  output: {
    path: path.resolve(__dirname, DIST_DIR),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, SRC_DIR),
        ],
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: { extensions: ['.js', '.jsx'] },
};
