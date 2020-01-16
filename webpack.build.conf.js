//build
//dev
const merge = require('webpack-merge');
const base = require('./webpack.base.conf.js');

const buildWebpackConfig = merge(base,{
    mode: 'production',
    plugins: [],
    watch: false
})

module.exports = new Promise ((res,rej) => {
    res(buildWebpackConfig)
})