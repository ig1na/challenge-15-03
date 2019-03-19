const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: "./src",
    hot: true
  },
  resolve: {
    extensions: [".ts", ".js", ".vue"]
  },
  module: {
    rules: [
      // ... other rules
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              indentedSyntax: true,
              data: ["$blue: blue"]
            }
          }
        ]
      },
      {
        test: /\.js?$/,
        loader: "babel-loader"
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: { appendTsSuffixTo: [/\.vue$/] }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Vue app",
      template: "./src/index.html"
    }),
    new VueLoaderPlugin()
  ]
};
