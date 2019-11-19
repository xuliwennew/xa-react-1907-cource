import {BASEURL} from "../commons/Config";


export default  {

    async getCartInfo(){
       let res = await  fetch(`${BASEURL}/carts`)
       let data = await res.json()
       return data;
    }
}
