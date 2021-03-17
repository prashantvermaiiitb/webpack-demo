const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: {
            import: './src/index.js',
            dependOn: 'shared'
        },
        print: {
            import: './src/print.js',
            dependOn: 'shared'
        },
        another: {
            import: './src/another-module.js',
            dependOn: 'shared'
        },
        shared: 'lodash'
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
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    // optimization: {
    //     runtimeChunk: 'single',
    // },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [new HtmlWebpackPlugin({ title: 'Output Management' })]
}