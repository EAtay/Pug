const path = require('path') 
const HtmlWebpackPlugin = require('html-webpack-plugin') 
const CopyWebpackPlugin = require('copy-webpack-plugin') 
 
module.exports = { 
  mode: 'development', 
  entry: [ 
    './src/index.pug', 
    './src/index.js', 
    './src/index.scss', 
  ], 
  output: { 
    path: path.resolve(__dirname, 'dist'), 
    filename: '[name].js', 
    clean: true, 
  }, 
  devtool: 'source-map', 
  devServer: { 
    static: { 
      directory: path.resolve(__dirname, 'dist'), 
    }, 
    port: 3000, 
    open: true, 
    hot: true, 
    compress: true, 
  }, 
  module: { 
    rules: [ 
      { 
        test: /.pug$/, 
        use: ['pug-loader'], 
      }, 
      { 
        test: /\.scss$/, 
        use: ['style-loader', 'css-loader', 'sass-loader'], 
      }, 
      { 
        test: /\.(png|svg|jpg|jpeg|gif|ttf)$/i, 
        type: 'asset/resource', 
      }, 
    ], 
  }, 
  plugins: [ 
    new HtmlWebpackPlugin({ 
      title: 'Webpack App', 
      filename: 'index.html', 
      template: 'src/index.pug', 
    }), 
    new HTMLWebpackPlugin({
      filename: 'service.html',
      template: 'scr/pages/service.pug'
    })
  ], 
}