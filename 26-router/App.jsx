import React, {Component} from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import NewsList from "./pages/NewsList"
import NewsDetail from "./pages/NewsDetail";
/**
 * 直接在App.jsx中添加路由规则
 * new BrowserRouter() === <BrowserRouter/>
 */
export default class App extends Component{

    render() {
        return (
             <Router>
                <Route exact={true} path={'/'} component={NewsList}/>
                <Route path={'/detail/:id'} component={NewsDetail}/>
             </Router>
        );
    }

}
