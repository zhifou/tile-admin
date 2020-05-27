const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.base");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const webpack = require("webpack");

module.exports = merge(common, {
  // 设置为生产（production）模式
  mode: "production",
  // 在生产环境中使用"source-map"而不是"inline-source-map"
  devtool: "source-map",
  output: {
    // 这里添加contentHash
    // 由于我们的entry中没有配置入口的名称
    // webpack会默认取名为main
    // 因此这里的配置会生成"main.xxxxxx.js"
    filename: "[name].[contentHash].js",
    // 通过splitChunks抽离的js文件名格式
    chunkFilename: "[name].[contentHash].chunk.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 这里使用MiniCssExtractPlugin.loader替代style-loader
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        // 这里使用MiniCssExtractPlugin.loader替代style-loader
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: {
          // 这里使用url-loader替代file-loader
          loader: "url-loader",
          options: {
            // 当图片小于8kb时，url-loader会将图片转为base64
            // 这样可以减少http请求的数量
            // 如果大于8kb的话，url-loader会将图片交给file-loader处理
            // 所以url-loader需要依赖file-loader
            limit: 1024 * 8,
            name: "img/[name].[hash:8].[ext]"
          }
        }
      }
    ]
  },
  optimization: {
    // 抽离webpack runtime到单文件
    runtimeChunk: "single",
    // 压缩器
    minimizer: [
      // 压缩css
      new OptimizeCssAssetsWebpackPlugin(),
      // 压缩js，记得将sourceMap设为true
      // 否则会无法生成source map
      new TerserWebpackPlugin({ sourceMap: true }),
      // 该插件还能压缩html
      new HtmlWebpackPlugin({
        template: "./src/template.html",
        favicon: "./src/assets/favicon.png",
        minify: {
          // 折叠空白符
          collapseWhitespace: true,
          // 移除注释
          removeComments: true,
          // 移除属性多余的引号
          removeAttributeQuotes: true
        }
      })
    ],
    splitChunks: {
      chunks: "all",
      // 最大初始请求数
      maxInitialRequests: Infinity,
      // 80kb以上的chunk抽离为单独的js文件
      // 配合上面的 maxInitialRequests: Infinity
      // 小于80kb的所有chunk会被打包一起
      // 这样可以减少初始请求数
      // 大家可以根据自己的情况设置
      minSize: 80 * 1024,
      // 抽离多入口引用次数1以上的chunk
      minChunks: 1,
      cacheGroups: {
        // 抽离node_modules内的第三方库
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          // 根据路径获得第三方库的名称
          // 并将抽离的chunk以"vendor_thirdPartyLibrary"格式命名
          name: function(module, chunks, chacheGroupKey) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `vendor_${packageName.replace("@", "")}`;
          }
        }
      }
    }
  },
  plugins: [
    // 每次打包前，先清除输出目录
    new CleanWebpackPlugin(),
    // 抽离css
    new MiniCssExtractPlugin({
      filename: "[name].[contentHash].css",
      chunkFilename: "[id].[contentHash].css"
    }),
    // 确保在文件没发生改变时，contentHash也不会变化
    new webpack.HashedModuleIdsPlugin()
  ]
});