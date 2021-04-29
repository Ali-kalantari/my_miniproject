import React from 'react';
import "bootstrap/dist/css/bootstrap.css";


const CounterControl = (props) => {
    return ( <div className="success mb-2" onClick={props.click}>
            {props.label}
    </div> );
}
 
export default CounterControl;