const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    //入口路径配置
    entry: "./src/js/index.js",
    //出口路径配置
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: "./js/build.js",
        publicPath: "/"
    },
    //打包环境
    mode: "production",
    //loader的配置
    module: {
        rules: [{
            test: /\.less$/i,
            use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                },
                {
                    loader: 'less-loader',
                },
            ],
        }, {
            test: /\.(png|jpg|gif)$/i,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 3 * 1024,
                    name: 'imgs/[hash:10].[ext]'
                },
            }, ],
        }, {
            test: /\.html$/i,
            loader: 'html-loader',
        }, ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    }), new MiniCssExtractPlugin({
        filename: "css/[name].css"
    })],

    devServer: {
        port: 8888,
        host: "127.0.0.1",
        open: true,
        compress: true,
        quiet: true
    },

    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
}