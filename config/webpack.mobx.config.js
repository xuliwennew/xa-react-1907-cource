const path = require("path")


module.exports = {
    entry:[
        "@babel/polyfill",
        path.resolve(__dirname,"..","30-mobx","main.js")
    ],
    output: {
        filename: "app.bundle.js",
        path:path.resolve(__dirname,"..","30-mobx")
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
                    "plugins": [
                        ["@babel/plugin-proposal-decorators", { "legacy": true }],
                        ["@babel/plugin-proposal-class-properties", { "loose" : true }]
                        ]
                }
            },
            {
                test:/\.jsx$/,
                loaders:"babel-loader",
                query:{
                    presets:["@babel/preset-react","@babel/preset-env"],
                    "plugins": [
                        ["@babel/plugin-proposal-decorators", { "legacy": true }],
                        ["@babel/plugin-proposal-class-properties", { "loose" : true }]
                    ],

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
