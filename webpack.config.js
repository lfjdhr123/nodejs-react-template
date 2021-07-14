const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = async () => {
  return {
    entry: "./react/components/index.js",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist")
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: { outputPath: "images" }
            }
          ]
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: "svg-url-loader",
              options: {
                limit: 1024 * 1024, //1mb
                encoding: "base64"
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: "main.css" }),
      new HtmlWebpackPlugin(
        {
          hash: false,
          title: "Webpack set up",
          template: "./react/index.html",
          filename: "./index.html" //relative to root of the application
        },
        new webpack.HotModuleReplacementPlugin()
      )
    ],
    resolve: {
      extensions: ["*", ".js", ".jsx"]
    },
    devServer: {
      contentBase: "./assets",
      hot: true
    }
  };
};
