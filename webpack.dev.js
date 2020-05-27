const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.base");

// 使用webpack-merge将webpack.common.js合并进来
module.exports = merge(common, {
  // 设置为开发（development）模式
  mode: "development",
  // 设置source map,方便debugger
  devtool: "inline-source-map",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  devServer: {
    // 单页应用的前端路由使用history模式时，这个配置很重要
    // webpack-dev-server服务器接受的请求路径没有匹配的资源时
    // 他会返回index.html而不是404页面
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        // loader是从后往前加载的，postcss-loader得在sass-loader前面
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: "file-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      favicon: "./src/assets/favicon.png"
    })
  ]
});