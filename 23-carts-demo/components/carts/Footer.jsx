import React,{Component} from "react"

export default class Footer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let {total,ck,cAll} = this.props;
        return (
            <div className="payment-bar">
                <div className="all-checkbox">
                    <input type="checkbox"
                           defaultValue={true}
                           defaultChecked={true}
                           onChange={cAll}
                           className={[ck?'checked':'unchecked']}/>
                    全选
                </div>
                <div className="shop-total">
                    <strong>
                        总价：
                        <i id="AllTotal" className="total">{total}</i>
                    </strong>
                    <span>减免：100</span>
                </div>
                <a href="#" className="settlement">结算</a>
            </div>
        );
    }

}
