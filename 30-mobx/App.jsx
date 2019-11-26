import React,{Component} from "react"
import CounterStore from './counterStore.js';
import {observer} from 'mobx-react';


@observer
export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
               <h1> {CounterStore.counter}</h1>
               <button onClick={()=>{
                   CounterStore.increment()
               }}>+</button>
            </div>
        );
    }
}
