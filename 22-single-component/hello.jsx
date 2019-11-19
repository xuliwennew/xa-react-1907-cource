import React from "react"
import {World} from "./World"

export class Hello extends React.Component{
    render(){
        return <div>
            <h1>hello world component</h1>
            <World/>
        </div>
    }
}
