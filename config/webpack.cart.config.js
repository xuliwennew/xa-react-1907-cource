const path = require("path")


module.exports = {
    entry:[
        "@babel/polyfill",
        path.resolve(__dirname,"..","23-carts-demo","main.js")
    ],
    output: {
        filename: "app.bundle.js",
        path:path.resolve(__dirname,"..","23-carts-demo")
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
                    presets:["@babel/preset-react","@babel/preset-env"]
                }
            },
            {
                test:/\.jsx$/,
                loaders:"babel-loader",
                query:{
                    presets:["@babel/preset-react","@babel/preset-env"]
                }
            },
            {
                test:/\.css$/,
                loaders:"style-loader!css-loader"
            },
            {
                test:/\.(jpg|gif|png)$/,
                loaders:'url-loader'
            }
        ]
    }
}
