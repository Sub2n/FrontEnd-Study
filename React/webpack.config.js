const path = require('path');

module.exports = {
  name: 'word-relay-setting',
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
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties'],
      }
    }],
  },

  output: {
    path: path.join(__dirname, 'dist'), //현재 폴더 내의 dist로 경로 조정
    filename: 'app.js'
  } //출력
};