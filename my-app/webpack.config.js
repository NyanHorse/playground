module.exports = {
  module: {
  // configuration regarding modules
    rules: [
    // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ],
  },
}
