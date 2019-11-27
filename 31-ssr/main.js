const React = require("react")
const ReactDOMServer = require("react-dom/server")


function Hello(){
    return <h1>hello world</h1>
}

let str = ReactDOMServer.renderToStaticMarkup(<Hello/>)
console.log(str)

