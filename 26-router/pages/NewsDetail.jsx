import React, {Component} from 'react'


export default class NewsDetail extends Component{

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
            ],
            newsInfo:{}
        }
        console.log(props.match.params)
    }

    componentDidMount(){
        this.setState({
            newsInfo:this.state.list[this.props.match.params.id]
        })
    }

    render() {
        // this.state.newsInfo =this.state.list[this.props.match.params.id]
        return (
            <div>
               <h1>详情:{this.state.newsInfo.title}</h1>
            </div>
        );
    }

}
