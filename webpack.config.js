const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ROOT_PATH = path.resolve(__dirname, 'src');

const eslintConfig = require('./.eslintrc.js');
module.exports = {
    entry: './src/main.js',

    output: {
        filename: 'js/[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true,
        open: true,
        inline: true,
        hot: false
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.js/,
                enforce: 'pre',
                use: {
                    loader: 'eslint-loader',
                    options: {
                        fix: true,
                        
                        failOnWarning: false,

                        failOnError: true,

                        formatter: require('./node_modules/eslint-friendly-formatter')
                    }
                },
                include: ROOT_PATH,
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                },
                include: ROOT_PATH, 
                exclude: /node_modules/
            },

        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
}