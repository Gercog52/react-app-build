//dev
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.conf');

const devWebpackConfig = merge(base,{
    output: {
        publicPath: '/'
    },
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: base.externals.paths.src + '/public',
        port: 9008,
        overlay: {
            warnings: false,
            errors: false,
        }
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
        })
    ],
    watch: true
})

module.exports = new Promise ((res,rej) => {
    res(devWebpackConfig)
})