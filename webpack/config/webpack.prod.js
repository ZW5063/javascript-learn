const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 入口
  entry: './src/main.js',
  // 输出
  output: {
    // 文件输入路径
    path: undefined,
    // 文件输出名字
    filename: 'main.js',
    clean: true
  },

  // 加载器
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  // 插件
  plugins: [
    // eslint
    new ESLintPlugin({
      // 检查内容 检查的文件夹
      context: path.resolve(__dirname, '../src')
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    })
  ],
  

  // 模式
  mode: "production",
}