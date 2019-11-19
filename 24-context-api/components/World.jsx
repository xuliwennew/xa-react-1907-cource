import React,{Component} from "react"
import Hi from "./Hi"


export default class World extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <div>
            <Hi/>
        </div>  ;
    }

}
