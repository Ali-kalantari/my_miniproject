import React from 'react';
import {useSelector ,useDispatch} from "react-redux"
import CounterControl from './CounterControl';
import CounterOutput from './CounterOutput';
import * as action from './../action/index'



const Counter = (props) => {
    const counter = useSelector(state => state.reducer.counter)
    const dispatch = useDispatch();

    const add = ()=>{
        return {
            type : 'add'
        }
    } 

    
    return ( <div className="m-3">
    <CounterOutput value={counter}/>

    <CounterControl label="+" click={()=> dispatch(action.increment())} />
    <CounterControl label="-" click={()=> dispatch(action.decrement())} />
    <CounterControl label="+2" click={()=> dispatch(add())} />
    <CounterControl label="-2" click={()=> dispatch(action.sub())} />
    
    
    </div> );
}
//  const mapstatetoprops =(state)=>{
//      return{
//          ctr: state.counter
//      }

//  }
//  const mapdispatchtoprops = (dispatch) =>{
//     return{
//         increment : () => dispatch ({ type : "inc"}),
//         decrement : () => dispatch ({ type : "dec"}),
//         add : () => dispatch ({ type : "add"}),
//         sub : () => dispatch ({ type : "sub"})
//     }

//  }


export default Counter;