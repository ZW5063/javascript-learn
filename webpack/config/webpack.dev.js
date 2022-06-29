const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 入口
  entry: './src/main.js',
  // 输出
  output: {
    // 文件输入路径
    path: path.resolve(__dirname, '../dist'),
    // 文件输出名字
    filename: 'main.js',
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
  // webpack 服务器配置
  devServer: {
    host: 'localhost', // 启动服务器域名
    port: '3000', // 启动端口号
    open: true // 是否自动打开浏览器
  },

  // 模式
  mode: "development",
}