import React,{Component} from "react"


export class Product extends Component {
    constructor(props) {
        super(props);

    }

    productCheck(sid,pid){
        let {pck} = this.props
        pck(sid,pid)
    }

    render() {
        let {data,pid,sid} = this.props
        return (
            <li>
                <div className="shop-info">
                    <input type="checkbox"
                           defaultValue={data.checked}
                           defaultChecked={data.checked}
                           onChange={this.productCheck.bind(this,sid,pid)}
                           className={[data.checked?'checked':'unchecked']}/>
                    <div className="shop-info-img">
                        <a href="#">
                            <img src={data.pic}/>
                        </a>
                    </div>
                    <div className="shop-info-text">
                        <h4>
                            {data.title}
                        </h4>
                        <div className="shop-brief">
                            <span>重量:3.3kg | true</span>
                            <span>颜色:标配版</span>
                            <span>版本:13.3英寸</span>
                        </div>
                        <div className="shop-price">
                            <div className="shop-pices">
                                ￥<b className="price">{data.price}</b>
                            </div>
                            <div className="shop-arithmetic">
                                <a className="minus">-</a>
                                <span className="num">{data.num}</span>
                                <a className="plus">+</a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    }

}
