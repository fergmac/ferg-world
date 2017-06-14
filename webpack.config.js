const webpack = require('webpack');

module.exports = {
  entry: './js/main.js',
  output: {
    filename: './build/bundle.js'
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
        loaders: ['style-loader', 'css-loader', 'sass-loader?sourceMap']
      }, {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?', 'postcss-loader']

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


