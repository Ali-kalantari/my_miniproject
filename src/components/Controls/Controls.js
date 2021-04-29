import React from 'react';
import Builder from "./Builder/Builder"

import "./controls.css"

const products =[
    {title:"product1" , type:"product1"},
    {title:"product2" , type:"product2"},
    {title:"product3" , type:"product3"},
    {title:"product4" , type:"product4"}
]
const Controls = props => {
    return ( <>
    <div className="controls">
    <div className="price">TOTALPRICE = {props.total}</div>
        {products.map((item,index)=>{
            return <Builder 
            key={index}
             title={item.title} 
             add={props.addproduct.bind(this,item.type)}
             remove={props.removeproduct.bind(this,item.type)}
              />
        })}
        <button onClick={props.order} className="order-btn">order</button>

    </div>
    
    </> );
}
 
export default Controls;