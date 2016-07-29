var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, './app/main.js'),//entry指定了webpack的入口程序
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['babel-preset-react','babel-preset-es2015']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css')
            }, {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
};