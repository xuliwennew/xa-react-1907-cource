import React,{Component} from "react"
import {HelloContext} from "../context/HelloContext";


export default class Hi extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return  (
            <HelloContext.Consumer>
                {
                    value=> <h1>{value.title}</h1>
                }
            </HelloContext.Consumer>
        ) ;
    }

}
