import React, { Component } from 'react';
import axios from "./../../axios-orders"
import Wrapper from "./../../hoc/Wrapper"
import Controls from "./../../components/Controls/Controls"
import MAD from './../../components/UI/Modal/Modal'
import Order from "./../../components/Order/Order"
import Loader from "./../../components/UI/Loader/Loader"

const prices ={
    product1 :15,
    product2 :35,
    product3 :55,
    product4 :95,

}

class Shoppnig extends Component {

    state = { 
        products :{
            product1 :0,
            product2 :0,
            product3 :0,
            product4 :0,
        },
        Total :0,
        purchsed : false,
        loading : false
    }
    addproducthandler = type =>{
        const{Total, products} = this.state

        const prevCount = products[type]
        const updatedCount = prevCount + 1
        const updatedproducts = {...products}
        updatedproducts[type] = updatedCount

        const priceadd = prices[type] 
        const prevprice = Total 
        const newprice = prevprice + priceadd

        this.setState({products : updatedproducts , Total:newprice})

        
    }
    

      removeproducthandler = type =>{
        const{Total, products} = this.state

        if(products[type] > 0){
        const prevCount = products[type]
        const updatedCount = prevCount - 1
        const updatedproducts = {...products}
        updatedproducts[type] = updatedCount
        this.setState({products : updatedproducts})

        }
        
        
        if(products[type] > 0){
        const pricesub = prices[type] 
        const prevprice = Total 
        const newprice = prevprice - pricesub

        this.setState({ Total:newprice})}

        
    }
    purchsedhandler = ()=>{
        this.setState({purchsed : true})
    }
    modalclose = () =>{
        this.setState({purchsed : false})
    }
    purchsedcontinue =()=>{
        this.setState({loading:true})
        const{products ,Total} =this.state
        const order ={
            products: products,
            total : Total,
           customer:{ name: "should be dynamic from data base",
           email: "like name"}
        }
        axios.post("/orders" , order).then(res =>{
            this.setState({loading:false , purchsed:false})
        })
        .catch(err=>{
            this.setState({loading:false , purchsed:false})
            
        })
        this.props.history.push('/check')
        
    }
    


    render() { 
        const{Total, products,purchsed} = this.state
        
        let order =<Order products={products} 
        tot={Total} cancel={this.modalclose} 
        ok={this.purchsedcontinue}
        />    
        if(this.state.loading){
            order = <Loader/>
        }
        return ( <Wrapper>
            <MAD show={purchsed} modalclose={this.modalclose}>
                {order}
            </MAD>
            <Controls
             addproduct={this.addproducthandler}
             removeproduct={this.removeproducthandler}
             total={Total}
             order={this.purchsedhandler}
              />
        </Wrapper> );
    }
}
 
export default Shoppnig;