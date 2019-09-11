const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx']
  },

  entry: {
    app: ['./client.jsx'],
  }, //입력

  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1% in KR']
            },
            debug: true,
          }], '@babel/preset-react'
        ],
        plugins: ['@babel/plugin-proposal-class-properties'],
      }
    }],
  },
  plugins: [],
  output: {
    path: path.join(__dirname, 'dist'), //현재 폴더 내의 dist로 경로 조정
    filename: 'app.js',
    publicPath: '/dist'
  } //출력
}