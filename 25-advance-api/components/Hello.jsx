import React,{Component} from "react"
import ReactDOM from "react-dom"

export default class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag:false
        }
    }

    render() {
        if(!this.state.flag){
            return (
                <h1 onClick={this.show.bind(this)}>hello</h1>
            );
        }else{
            return ReactDOM.createPortal(<h1>show me!</h1>,document.querySelector("#app2"))
        }
    }

    show(){
        this.setState({
            flag:true
        })
    }

}
