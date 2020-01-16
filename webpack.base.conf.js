const path = require('path');
const MiniCssExtranctPlagin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATH = {
    src: path.join(__dirname,'./src'),
    dist: path.join(__dirname,'./dist'),
    public: 'public/',
}

module.exports = {
    externals: {
        paths: PATH
    },
    entry: {
        app: `${PATH.src}/index.js`
    },
    output: {
        filename: `${PATH.public}js/[name].js`,
        path: `${PATH.dist}`,
        publicPath: './',
    },
    module: {
        rules: [{
            test: /\.js(x)?$/,
            loader: 'babel-loader',
            exclude: '/node_modules/',
        },{
            test: /\.css$/,
            loader: [
                'style-loader',
                MiniCssExtranctPlagin.loader,
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path:'./postcss.config.js'
                        }
                    }
                }
            ]
        },{
            test: /\.sass$/,
            loader: [
                'style-loader',
                MiniCssExtranctPlagin.loader,
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path: './postcss.config.js'
                        }
                    }
                },
                'sass-loader'
            ]
        },{
            test: /\.(img|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
            }
        }
    ]},
    plugins: [
        new MiniCssExtranctPlagin({
            filename: `${PATH.public}css/[name].css`,
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `./public/index.html`,
            filename: `./index.html`
        }),
        new CopyWebpackPlugin([
            {
                from: `${PATH.src}/img`,
                to: `./img`
            }
        ])
    ]
}