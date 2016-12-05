var path = require('path')

module.exports = {
  entry: "./javascripts/entry.jsx",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react')
    }
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(woff|woff2)$/,
        use: 'url',
        loader: 'file-loader',
        options: {
          name: 'fonts/[hash].[ext]',
          limit: 5000,
          mimetype: 'application/font-woff'
        }
      },
      {
        test: /\.(ttf|eot|svg)$/,
        use: 'file',
        loader: 'url-loader',
        options: {
          name: 'fonts/[hash].[ext]',
        },
      }
    ]
  }
};
