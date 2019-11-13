const path = require("path")


module.exports = {
    entry:{
        app:path.resolve(__dirname,"..","single-component","main.js")
    },
    output: {
        filename: "app.bundle.js",
        path:path.resolve(__dirname,"..","single-component")
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
            }
        ]
    }
}
