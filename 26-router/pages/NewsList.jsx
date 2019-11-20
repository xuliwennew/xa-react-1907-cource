import React, {Component} from 'react'
import {Link} from "react-router-dom"


export default class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            list:[
                {
                    title:"学好马克思主义理论 总书记这9大金句你需要了解"
                },
                {
                    title:"中央八项规定贯彻执行情况民意调查问卷 四中全会"
                }
            ]
        }

    }

    render() {
        return (
            <div>
                <h1>最新新闻</h1>
                <ul>
                    {
                        this.state.list.map((info,key)=>{
                            return <li key={key}>
                               <Link to={'/detail/'+key}>
                                   {
                                       info.title
                                   }
                               </Link>
                            </li>
                        })
                    }
                </ul>
            </div>
        );
    }

}
