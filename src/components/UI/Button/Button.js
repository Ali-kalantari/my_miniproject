import React from 'react';
import "./Button.css"

const Button = (props) => {
  
  return ( <button className={`btn ${props.btntype|| null}`} onClick={props.clicked}>
    {props.children}
  </button> );
}
 
export default Button;