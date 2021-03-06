/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/* eslint-enable @typescript-eslint/no-var-requires*/

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx'),
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
  },
  resolve: {
    modules: ['node_modules', path.join(__dirname, '/')],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
              modules: {
                localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
              },
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './static/index.html',
    }),
  ],
  devServer: {
    host: 'localhost',
    port: '4200',
    contentBase: path.join(__dirname, '/static'),
    historyApiFallback: true,
    hot: true,
    compress: true,
    stats: {
      colors: true,
    },
  },
};
