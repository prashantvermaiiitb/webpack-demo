const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'development',
    //Approach #1
    //should go for the single entry point where feasible
    //!even if we have 2 entry in JSON then also we are going to have 1
    //? This results in a better optimization and consistent execution order when using async script tags.
    // entry: {
    //     page: ['./src/print.js', './src/another-module.js', './src/index.js']
    // },

    entry: {

        //Approach #2
        index: './src/index.js', //! even we are not using lodash it will be inserted here
        print: './src/print.js', //! even we are not using lodash it will be inserted here
        another: './src/another-module.js',

        //Approach #3
        //! this will give issues when we are going to to 'ASYNC' script tags.
        // index: {
        //     import: './src/index.js', //! even with this index is getting lodash in that
        //     //! because dependOn is not there, it's size is 557KB
        //     //! even if you enable optimization : runtime but do not include shared no benefit 557KB
        //     dependOn: 'shared' //? the moment that you have written this it will be moved to separate chunk the lodash code. and now the chunksize drops to 15.9Kb
        // },
        // print: {
        //     import: './src/print.js',
        //     dependOn: 'shared'
        // },
        // another: {
        //     import: './src/another-module.js',
        //     dependOn: 'shared'
        // },
        // shared: 'lodash'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    // https://webpack.js.org/guides/asset-management/
    module: {
        rules: [
            {
                test: /\.css$/i,
                //Finally, webpack expects JavaScript to be returned by the last loader in the chain.
                //Approach #1
                // use: ['style-loader', 'css-loader'],
                //Approach #2
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ]
    },
    //Approach #3
    // optimization: {
    //     runtimeChunk: 'single',
    // },
    // Approach#2
    //!remove the duplicated entries in the chunks and move it out to the 3rd one
    //!vendors-node_modules_lodash_lodash_js.bundle.js
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    }, 
    plugins: [new HtmlWebpackPlugin({ title: 'Output Management' }), new MiniCssExtractPlugin()]
}