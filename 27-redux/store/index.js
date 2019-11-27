import {createStore,applyMiddleware} from "redux"


//1 state shared state....
let initStates = {
    num:1
}

//2 处理state... 规则== reducer {type:"ADD"} dispatch
//reducer = actions + mutations + getters
//reducer == mutations 主要的职责，修改state
let reducer = (state,action)=>{
    let { num} = state;
   switch (action.type) {
       case "ADD":
           console.log("收到action:"+action.type)
           setTimeout(()=>{
              console.log("backend api....")
           },2000)
           //async await
           return {num:++num}
           break;
       case "SUB":
           return {num:--num}
           break;
       default:
           return state;
           break
   }
}

//使用中间件来处理reducer中的actions(side effect)操作，side effect
//side effect 副作用 ajax fs
let loggerMiddlewrare = ({getState,dispatch})=>(next)=>(action)=>{
    console.log("使用了中间件....")
    console.log(action)
    next(action)
}

let serviceMiddlewrare = ({getState,dispatch})=>(next)=>(action)=>{
    console.log("使用了中间件....serviceMiddlewrare")
    console.log(action)

    setTimeout(()=>{
        next(action)
    },2000)
}


//根据状态列表，状态的规则，来创建store
let store = createStore(reducer,initStates,applyMiddleware(loggerMiddlewrare,serviceMiddlewrare))


export default store


