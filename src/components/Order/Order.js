import React from 'react';
import Wrapper from "./../../hoc/Wrapper"
import Button from "./../UI/Button/Button"

const Order = (props) => {
   const sumury =  Object.keys(props.products).map((item,index)=>{
        return(
            <li key={index}>
                {item} : {props.products[item]}

            </li>
        )
    })
    return ( <Wrapper>
        <h3>Orders : </h3>
        <ul>
            {sumury}
        </ul>
        
           <p>Total Price : {props.tot}</p> 
           <p>do you want continue?</p>
           <Button clicked={props.ok} btntype="success">yes</Button>
           <Button clicked={props.cancel} btntype="danger">no</Button>



    </Wrapper> );
}
 
export default Order;