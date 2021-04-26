'use strict';
const path = require('path');

module.exports = {
    // entry: './src/index.js',
    entry: {
        index: './src/index.js',
        haha: './src/search.js',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
        ]
    }
}