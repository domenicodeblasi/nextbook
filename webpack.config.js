const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
// const webpack = require("webpack");

module.exports = {
    entry: {
        index: "./src/js/index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [['@babel/preset-env', { 'modules': false, 'targets': { 'node': 4 } }]],
                        plugins: ["lodash"]
                    }
                }
            },
            {
                test: /\.(css|scss)$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(svg|png|jpe?g|webp)$/i,
                type: "asset/resource"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            favicon: "./src/imgs/logo/logo.svg"
        }),
        new LodashModuleReplacementPlugin({
            collections: true,
            paths: true
        }),
        // new webpack.optimize.UglifyJsPlugin
    ],
    devServer: {
        port: 5000,
        static: path.resolve(__dirname, "dist"),
        open: true
    },
    mode: "development"
}