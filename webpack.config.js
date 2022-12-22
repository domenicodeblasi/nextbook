const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
        })
    ],
    devServer: {
        port: 5000,
        static: path.resolve(__dirname, "dist"),
        open: true
    },
    mode: "development"
}