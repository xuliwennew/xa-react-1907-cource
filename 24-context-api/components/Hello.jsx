import React,{Component} from "react"
import {HelloContext} from "../context/HelloContext";
import MyLoading from "./Loading";
const World = React.lazy(() => import('././World'));

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
                <React.Suspense fallback={<MyLoading />}>
                   <World/>
                </React.Suspense>
            </HelloContext.Provider>
            )
        ;
    }

}
