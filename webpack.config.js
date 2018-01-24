const path = require('path')
const SRC_DIR = path.join(__dirname, '/src')
const DIST_DIR = path.join(__dirname, '/dist')

module.exports = {
  entry: `${SRC_DIR}/index.js`,

  output: {
    path: `${DIST_DIR}/js`,
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: DIST_DIR
  },

  module: {
    loaders : [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'stage-0']
        }
      }
    ]
  }
}
