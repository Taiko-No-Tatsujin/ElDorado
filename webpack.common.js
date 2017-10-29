const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(__dirname, '/client/dist/js/app.js')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Production'
    })
  ],
  module: { 
        // apply loaders to files that meet given conditions
        loaders: [{
          test: /\.jsx?$/,
          include: path.join(__dirname, '/client/src'),
          loader: 'babel',
          query: {
            presets: ["react", "es2015"]
          }
        }],
      },
    
      // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
      watch: true,
 output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js',
  },
};