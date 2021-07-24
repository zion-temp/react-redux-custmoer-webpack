const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].[contenthash:10].js',
        publicPath: './'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx','less'],
        alias:{
            '@':path.resolve(__dirname,'src/'),
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        cacheDirectory: true
                    }
                },'ts-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            {
                test: /\.(less|css)$/,
                use: [
                    {
                        loader:MiniCssExtractPlugin.loader,//提取css 成单独文件
                        options:{
                            // 这里可以指定一个 publicPath
                            // 默认使用 webpackOptions.output中的publicPath
                            // publicPath: '../'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    }, 'postcss-loader', {
                        loader: 'less-loader',
                        options:{
                            modifyVars:{
                                'primary-color': '#1DA57A',
                                'link-color': '#1DA57A',
                                'border-radius-base': '2px',
                            }
                        }
                    }]
            },
           
        ]
    },
    mode: 'production',
    optimization:{
        splitChunks:{
            chunks:'all'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react',
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html',
        }),
        new friendlyErrorsWebpackPlugin(),
        new CleanWebpackPlugin(),
        new webpack.optimize.AggressiveSplittingPlugin({
            minSize: 2048, // 字节，分割点。默认：30720
            maxSize: 5120, // 字节，每个文件最大字节。默认：51200
            chunkOverhead: 0, // 默认：0
            entryChunkMultiplicator: 1, // 默认：1
        }),
        new MiniCssExtractPlugin({
            filename:'css/main.[contenthash:10].css',
        }),
    ],
    devtool: 'source-map',
}