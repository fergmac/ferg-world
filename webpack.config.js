const webpack = require('webpack');

module.exports = {
  entry: './js/main.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }, {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
      }, {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?']

      }, {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=public/fonts/[name].[ext]'
      }, {
        test: /\.(jpe?g|png)$/,
        loader: 'file-loader'
      }
    ]
  },
  devServer: {
    // watch:true,
    inline: true,
    host: '0.0.0.0',
    port: '4000',
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    }
  }

};


