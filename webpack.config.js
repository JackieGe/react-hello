let path = require('path');
let webpack = require('webpack');
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'app': './src/app.js',
        'vendor': ['react','react-dom']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2016']
                }
            },
            {
                test: /\.html/,
                loader: 'html-loader'
            },
            {
                test:/\.css/,
                loader: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor',
            filename: 'js/[name].bundle.js',
            minChunks: Infinity
        }),
        new ExtractTextWebpackPlugin('css/[name].css'),
        new HtmlWebpackPlugin({
            template:path.join(__dirname, 'src/index.html'),
            filename:'index.html',
            inject:'body',
            hash:true,
            chunks:['app', 'vendor']
        })
    ],
    devServer: {
        inline: true
    }
}