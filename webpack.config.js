const path = require('path'),
    pkg = require('./package.json'),
    webpack = require('webpack'),
    HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        lib: Object.keys(pkg.dependencies),
        app: ['./js/app.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[chunkhash:5].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'lib',
            minChunks: Infinity
        }),
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel',
                // exclude: /node_modules/,
                include: path.resolve(__dirname, 'src', 'js'),
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015'],
                    env: {
                        development: {
                            presets: ['react-hmre']
                        }
                    }
                }
            }
        ]
    }
};