const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry : './src/index.js', // will create bundle with name main.bundle.js
    // entry: {
    //     index: './src/index.js' // will create bundle with name -> index.bundle.js
    // },
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
    plugins: [new HtmlWebpackPlugin({ title: 'Output Management' })]
}