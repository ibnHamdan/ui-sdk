module.exports = {
  devtool: "source-map",
  entry: './build/main.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  module : {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: "/node_modules",
        use: 'babel-loader'
      }
    ]
  }
}