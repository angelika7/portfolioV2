const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'docs'),
      filename: 'bundle.js',
      chunkFilename: '[id].js',
      publicPath: ''
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                /*  {
                    loader: "style-loader"
                }, */ 
              {
                loader: MiniCssExtractPlugin.loader,
                 /* options: {
                  hmr: process.env.NODE_ENV === 'development',
                },  */
              }, 
              {
                loader: "css-loader", options: {
                    sourceMap: true,
                    importLoaders: 1,
                    modules: true,
                    localIdentName: '[name]__[local]__[hash:base64:5]',
                }
            }, {
                loader: "sass-loader", options: {
                    sourceMap: true
                }
            }
            ],
          },        
        {
            test: /\.(png|jpe?g|gif|svg)$/,
            loader: 'url-loader?limit=8000&name=images/[name].[ext]',
            options: {
              esModule: false
      }
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file-loader?name=images/[name].[ext]',
          options: {
            esModule: false
            }
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-url-loader',
              options: {
                limit: 10000,
              },
            },
          ],
        },
    ]   
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: __dirname + '/docs/index.html',
        filename: 'index.html',
        inject: 'body'
  }),

  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: devMode ? '[name].css' : '[name].[hash].css',
    chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
  }),

  ]
};

