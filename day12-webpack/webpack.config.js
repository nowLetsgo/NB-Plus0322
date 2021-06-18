const path = require("path");

module.exports = {
    //入口路径配置
    entry: "./src/js/index.js",
    //出口路径配置
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "./js/build.js"
    },
    //打包环境
    mode: "development",
    //loader的配置
    module: {
        rules: [{
            test: /\.less$/i,
            use: [{
                    loader: 'style-loader',
                },
                {
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
                    name: './imgs/[hash:10].[ext]'
                },
            }, ],
        }, ],
    }
}