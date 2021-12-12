const CopyPlugin = require('copy-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: './src/index.html',
          to: `${__dirname}/dist/index.html`,
        },
        {
          from: './src/style.css',
          to: `${__dirname}/dist/style.css`,
        },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new HtmlMinimizerPlugin(), new CssMinimizerPlugin(), new TerserPlugin()],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  mode: 'production',
  module: {},
};
