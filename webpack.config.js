const path = require('path');
module.exports ={
    entry:'./src/index.js',
    output : {
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    // https://webpack.js.org/guides/asset-management/
    module:{
        rules:[
            {
                test:/\.css$/i,
                //Finally, webpack expects JavaScript to be returned by the last loader in the chain.
                use:['style-loader','css-loader']  
            }
        ]
    }
}