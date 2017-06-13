var path = require('path');
var webpack = require('webpack');

module.exports = {
    // devServer: {
    //     inline: true,
    //     contentBase: './src',
    //     port: 5001
    // },
    devtool: 'cheap-module-eval-source-map',
    entry: './dev/js/mat.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'src'),
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
