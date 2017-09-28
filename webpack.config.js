const path = require('path');

// path uses an absolute path, so we must use node path and __dirname, public is a folder in our project to put
// bundle.js in
module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: '/node_modules/'
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map ', // makes debugging slightly easier
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
