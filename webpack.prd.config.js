const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].[contenthash:10].js',
        assetModuleFilename: 'images/[hash:10][ext]',
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
                // use:{
                //     loader:'url-loader', //依赖file-loader
                //     options:{
                //         limit:1 * 1024, //小于这么大的打包成base64的字符串
                //         // url-loader模式使用es6模块化解析，html-loader映入图片是common.js
                //         // 关闭url-loaderes6模块化解析 使用common.js解析
                //         esModule:false,
                //         // 区hash的前10位 ext 原来的扩展名
                //         name:'[hash:5][name].[ext]',
                //         outputPath:'imgs',
                //         publicPath: "imgs",
                //     }
                // }
            },
            {
                test:/\.html$/,
                //处理html的image文件 负责引入img 从而倍url-loader 处理
                loader:'html-loader'
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
                            publicPath: '../'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    'postcss-loader', 
                    {
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
         //压缩css
        new OptimizeCssAssetsWebpackPlugin(),
        new friendlyErrorsWebpackPlugin(),
        // 
        new CleanWebpackPlugin(),
        // x限制js 文件大小
        new webpack.optimize.AggressiveSplittingPlugin({
            minSize: 30720, // 字节，分割点。默认：30720
            maxSize: 51200, // 字节，每个文件最大字节。默认：51200
            chunkOverhead: 0, // 默认：0
            entryChunkMultiplicator: 1, // 默认：1
        }),
        // 抽离css
        new MiniCssExtractPlugin({
            filename:'css/main.[contenthash:10].css',
        }),
        // media下面的文件不需要打包直接应用
        new CopyWebpackPlugin({
            patterns:[
                {
                    from:path.join(__dirname,'/public/media'),//打包的静态资源目录地址
                    to:'./media' //打包到dist下面的public
                }
            ]
            
        }),
        // 生成配serviceWorker置文件
        new WorkboxWebpackPlugin.GenerateSW({
            clientsClaim:true, //删除旧的serviceWorker
            skipWaiting:true, //快速启动 跳过等待
        }),
    ],
    devtool: 'source-map',
}