const path = require('path')
const SRC_DIR = path.join(__dirname, '/src')
const DIST_DIR = path.join(__dirname, '/dist')

module.exports = {
  entry: `${SRC_DIR}/index.js`,

  output: {
    path: `${DIST_DIR}/js`,
    filename: 'bundle.js'
  },

  watch: true,

  devServer: {
    contentBase: DIST_DIR,
    port: 9009,
    inline: true,
    open: true
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'stage-3']
        }
      }
    ]
  }
}
