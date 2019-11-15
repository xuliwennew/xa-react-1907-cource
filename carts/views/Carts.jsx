import React, {Component} from "react"
import Header from "../components/carts/Header"
import Footer from "../components/carts/Footer"
import Shop from "../components/carts/Shop"
import "../assets/carts.css"
import CartsApi from "../apis/CartsApi"
import {MyLoading} from "../components/common/Loading";

export class Carts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartInfo: {}
        }
    }


    async componentWillMount() {
        this._initPageData()
    }

    async _initPageData() {
        let data = await CartsApi.getCartInfo()
        let total = this._countTotalPrice(data);
        data.totalPrice = total
        this.setState({
            cartInfo: data
        })
        console.log(this.state.cartInfo)
    }

    /**
     * 计算总价格
     * @private
     */
    _countTotalPrice(cartInfo) {
        let total = 0;
        cartInfo.shops.forEach((shop, sid) => {
            shop.products.forEach((product, pid) => {
                if (product.checked) {
                    total += product.num * product.price
                }
            })
        })
        return total;
    }

    /**
     * 给子组调用 ，全选
     */
    cartCheckAll() {

        // copy
        let oldCart = this.state.cartInfo;
        //cartinfo 的状态
        let checked = !this.state.cartInfo.checked;
        oldCart.checked = checked
        oldCart.shops.forEach((shop, sid) => {
            shop.checked = checked
            shop.products.forEach((product, pid) => {
                product.checked = checked;
            })
        })
        let total = this._countTotalPrice(oldCart)
        oldCart.totalPrice = total;
        this.setState({
            cartInfo: oldCart //不能不样
        })
        console.log(this.state.cartInfo)

    }

    /**
     * 根据店铺的编号，选择状态
     * @param sid
     */
    singleProductChecked(sid,pid){
        console.log(sid) //
        // copy
        let oldCart = this.state.cartInfo;
        let pChcked = ! oldCart.shops[sid].products[pid].checked;
        oldCart.shops[sid].products[pid].checked = pChcked

        let isCheck = oldCart.shops[sid].products.every((product,pid)=>{
            return product.checked == true
        })
        oldCart.shops[sid].checked = isCheck

        let aChecked = oldCart.shops.every((shop,sid)=>{
            return shop.checked == true
        })

        oldCart.checked = aChecked;
        let total = this._countTotalPrice(oldCart)
        oldCart.totalPrice = total;
        this.setState({
            cartInfo:oldCart
        })
    }

    render() {
        if (this.state.cartInfo.shops) {
            return <React.Fragment>
                <Header/>
                <div className="shopping">
                    {
                        this.state.cartInfo.shops.map((shop, key) => {
                            return <Shop pck={this.singleProductChecked.bind(this)} key={key} data={shop} sid={key}/>
                        })
                    }
                </div>
                <Footer cAll={this.cartCheckAll.bind(this)} ck={this.state.cartInfo.checked}
                        total={this.state.cartInfo.totalPrice}/>
            </React.Fragment>
        } else {
            return <MyLoading/>
        }

    }

}
