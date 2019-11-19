import React,{Component} from "react"
import World from "./World"
import {HelloContext} from "../context/HelloContext";


export default class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"global data!"
        }

    }

    render() {
        return (
            <HelloContext.Provider value={{title:this.state.title}}>
                <World/>
            </HelloContext.Provider>
            )
        ;
    }

}
