import React,{Component} from "react"
import store from "../store"

export default class Counter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            num:store.getState().num
        }
    }

    update(){
        // this.setState({
        //     num:++this.state.num
        // })
        store.dispatch({type:"ADD"})
    }


    componentDidMount(){
        //ready

        // mapGetters
        //订阅store中的状态变化 reducer - return
        store.subscribe(()=>{
            console.log("store中的状态发生变化了...")
            console.log(store.getState())
            this.setState({
                num:store.getState().num
            })
        })
    }



    render() {
        return (
            <div>
                <h1>{this.state.num}</h1>
                <button onClick={this.update.bind(this)}>+</button>
            </div>
        );
    }

}
