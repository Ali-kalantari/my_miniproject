import React from 'react';
import "./backdrop.css"

const Backdrop = (props) => {
    return ( <>
    {props.show ? <div onClick={props.click} className="backdrop"></div> : null}
    
    
    
    
    </> );
}
 
export default Backdrop;