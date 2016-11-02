var webpack = require('webpack');

module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "window.Tether": "tether"
    })
  ],
  module: {
    loaders: [
      { test: /\.scss$/, loader: "style!css!sass" },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['es2015', 'es2016', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      }
    ],
  },
  devtool: '#inline-source-map'
};