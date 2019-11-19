import React,{Component} from "react"
import {Product} from "./Product";

export class ProductList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let { data , sid,pck} = this.props
        return (
            <ul>
                {
                    data.map((product,pid)=>{
                        return <Product pck={pck} data={product} sid={sid} pid={pid} key={pid}/>
                    })
                }
            </ul>
        );
    }

}
