const path = require("path");

module.exports = {
  // 入口文件改为 .jsx文件
  entry: "./src/index.js",
  resolve: {
    extensions: [".js", ".json", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // include告诉webpack只对src下的
        // js、jsx文件进行babel转译
        // 加快webpack的打包速度
        include: path.resolve(__dirname, "src"),
        use: "babel-loader"
      }
    ]
  }
};