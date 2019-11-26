const path = require("path")


module.exports = {
    entry:[
        "@babel/polyfill",
        path.resolve(__dirname,"..","29-hooks-api","main.js")
    ],
    output: {
        filename: "app.bundle.js",
        path:path.resolve(__dirname,"..","29-hooks-api")
    },
    resolve: {
        extensions: [".css",".js",".jsx"]
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                loaders:"babel-loader",
                query:{
                    presets:["@babel/preset-react","@babel/preset-env"],
                    plugins:["@babel/plugin-proposal-class-properties"]
               }
            },
            {
                test:/\.jsx$/,
                loaders:"babel-loader",
                query:{
                    presets:["@babel/preset-react","@babel/preset-env"],
                    plugins:["@babel/plugin-proposal-class-properties"]
                }
            },
            {
                test:/\.css$/,
                loaders:"style-loader!css-loader"
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'less-loader' ,
                    options: {
                        javascriptEnabled:true
                    }
                }]
            },
            {
                test:/\.(jpg|gif|png)$/,
                loaders:'url-loader'
            }
        ]
    }
}
