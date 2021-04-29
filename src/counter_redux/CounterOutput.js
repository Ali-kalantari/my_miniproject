import React from 'react';
import "bootstrap/dist/css/bootstrap.css";


const CounterOutput = (props) => {
    return (<div className ="danger mb-5 mt-2">

       <p> counter : {props.value>=0 ? props.value : 'عدد منفی است'}</p> 
    </div>  );
}
 
export default CounterOutput;