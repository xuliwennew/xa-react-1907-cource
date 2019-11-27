import React from "react"
import Counter from "./components/Counter"
import CounterNewContainer from "./components/CounterNew"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import store from "./store"


ReactDOM.render((
    <Provider store={store}>
        <CounterNewContainer/>
    </Provider>
),document.querySelector("#app"))
