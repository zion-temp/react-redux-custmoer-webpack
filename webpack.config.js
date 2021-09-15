// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')

const CopyWebpackPlugin = require('copy-webpack-plugin');
// const { getThemeVariables } = require('antd/dist/theme');
const AntDesignThemePlugin = require('antd-theme-webpack-plugin');
module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', 'less'],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        }
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    cacheDirectory: true
                }
            }, 'ts-loader'],
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
            use: ['style-loader', {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                },
            }, 'postcss-loader', {
                    loader: 'less-loader',
                    options: {

                        javascriptEnabled: true,

                        // modifyVars: {
                        //     'primary-color': '#1DA57A',
                        //     'link-color': '#1DA57A',
                        //     'border-radius-base': '2px',
                        // }
                        // modifyVars: getThemeVariables({
                        //     dark: true, // 开启暗黑模式
                        //     compact: true, // 开启紧凑模式
                        //     'primary-color': '#1DA57A',
                        // })
                    }
                }]
        },

        ]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react-custom',
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html',
        }),
        new friendlyErrorsWebpackPlugin(),
        new CleanWebpackPlugin(),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(__dirname, '/public/media'),//打包的静态资源目录地址
                    to: './media' //打包到dist下面的public
                }
            ]

        }),
        new AntDesignThemePlugin({
            antDir: path.join(__dirname, './node_modules/antd'),//antd包位置
            stylesDir: path.join(__dirname, './src/styles/theme'),//指定皮肤文件夹
            varFile: path.join(__dirname, './src/styles/theme/variables.less'),//自己设置默认的主题色
            indexFileName: './public/index.html',
            mainLessFile: path.join(__dirname, './src/styles/theme/index.less'),
            themeVariables: [//这里写要改变的主题变量
                '@primary-color',
            ],
            // generateOnce: false,
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, './dist'),
        open: true,
        hot: true,
        quiet: true,
        port: 8080,
    },
}