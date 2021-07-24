// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
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
        extensions: ['.ts', '.tsx', '.js', '.jsx','less'],
        alias:{
            '@':path.resolve(__dirname,'src/'),
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
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                    },
                }, 'postcss-loader', {
                    loader: 'less-loader',
                    options:{
                        
                        // javascriptEnabled: true
                        
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
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react',
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html',
        }),
        new friendlyErrorsWebpackPlugin(),
        new CleanWebpackPlugin(),
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