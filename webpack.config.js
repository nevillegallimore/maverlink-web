// import system dependencies
const path = require('path');

////////////////////////////////////////////////////////////////////////////////////////////////////

const configuration = {
    devtool: 'source-map',
    entry: {
        main: './src/main.react.js',
    },
    mode: 'development',
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './build/js'),
    },
    resolve: {
        alias: {
            '@self': [path.resolve(__dirname, './src')],
        },
        extensions: ['.react.js', '.js', '.json', '*'],
    },
};

////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = configuration;
