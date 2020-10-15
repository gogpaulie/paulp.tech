const Webpack = require('webpack');
module.exports = {
  entry: {
    vendor: './src/vendor.js',
    main: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(pdf|jpg|jpeg|png|gif|svg)$/,
        use: 'file-loader?name=[path][name].[ext]',
        include: paths,
      },
    ],
  },
  // This config allows to use jQuery $ sign
  plugins: [
    new Webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
};
