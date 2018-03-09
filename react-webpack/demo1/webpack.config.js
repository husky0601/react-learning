var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'src/main.js')],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2016','react']
                }
            }
        ],
        // devServer: {
        //     contentBase: "./public",//本地服务器所加载的页面所在的目录
        //     historyApiFallback: true,//不跳转
        //     inline: true,//实时刷新
        //     port: 8080,//设置默认监听端口，如果省略，默认为"8080"
        // }
    }
        
}