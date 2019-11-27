import React,{Component} from "react"
import {connect} from "react-redux"
// connect 是根据组件生成一个container组件

//木偶
class CounterNew extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.num}</h1>
                <button onClick={this.props.update}>+</button>
            </div>
        );
    }
}


//使用react-redux中的connect方法
// 1. connect连接了store
// 2. connect可以根据指定的木偶组件生成一个连接store的容器组件

//map store中的状态到CounterNew的props上 vuex mapGetters
let mapStateToProps = (state,data)=>{
   return {
       num:state.num
   }
}

//把组件中的 dipatch map 到CounterNew的props上
let mapDispatchToProps = (dispatch)=>{
   return {
       update:()=>{
           dispatch({type:"ADD"})
       }
   }
}


let CounterNewContainer = connect(mapStateToProps,mapDispatchToProps)(CounterNew)

export default CounterNewContainer

//container 模式
// export default class CounterNewContainer extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             num:store.getState().num
//         }
//     }
//
//     update(){
//         store.dispatch({type:"ADD"})
//     }
//
//     componentDidMount(){
//         //ready
//
//         // mapGetters
//         //订阅store中的状态变化 reducer - return
//         store.subscribe(()=>{
//             console.log("store中的状态发生变化了...")
//             console.log(store.getState())
//             this.setState({
//                 num:store.getState().num
//             })
//         })
//     }
//
//
//
//     render() {
//         return (
//            <CounterNew num={this.state.num} update={this.update.bind(this)}/>
//         );
//     }
//
// }
//

