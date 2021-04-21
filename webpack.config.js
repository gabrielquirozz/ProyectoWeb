const path = require('path')

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        use: ['babel-loader', { loader: 'babel-loader' },
          {
            loader: '@linaria/webpack-loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          }, 'eslint-loader'],
      },
      {
        test: /.(png|jpe?g|gif)$/i,
        use: 'file-loader?name=[name].[ext]&outputPath=img/',
      },
    ],
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
}
