const path = require('path');

// https://webpack.js.org/guides/asset-management/
// Custom parser for the different JSON formats
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');


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
            },
            //Custom JSON parser
            {
                test: /\.toml$/i,
                type: 'json',
                parser: {
                  parse: toml.parse,
                },
              },
              {
                test: /\.yaml$/i,
                type: 'json',
                parser: {
                  parse: yaml.parse,
                },
              },
              {
                test: /\.json5$/i,
                type: 'json',
                parser: {
                  parse: json5.parse,
                },
              },
        ]
    }
}