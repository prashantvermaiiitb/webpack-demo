const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // https://webpack.js.org/guides/asset-management/
    module: {
        rules: [
            {
                test: /\.css$/i,
                //Finally, webpack expects JavaScript to be returned by the last loader in the chain.
                use: ['style-loader', 'css-loader']
            },
            //loading and processing images in the output directory
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            //loading and processing fonts in the output directory
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            //loading CSV or TSV
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            //loading xml data
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            }
        ]
    }
}