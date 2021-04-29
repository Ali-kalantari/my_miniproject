import React, { useState, useEffect } from "react";
import { useHistory, useLocation, useParams,Link } from "react-router-dom";

import './Checkout.css'

const Checkout = () => {
    
  const history = useHistory();
//   const location = useLocation();
//   const params = useParams();
  // location.pathname === "/account" ? "folan shart" : bahman shart

  const [items, setitems] = useState([]);
  const[state,setstate] = useState({
    first:"",
    last:""
  })

  const Getitem = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const items = await data.json();
    setitems(items);
  };

  useEffect(() => {
    Getitem();
  }, []);

  const handleclick = () => {
    // history.goForward();
    // history.goBack()
    // history.push("/account")
    history.replace("/account/xklfmgxklxkfkl");}



   const handle = e =>{
      const value = e.target.value;
    setstate({
     ...state,
     [e.target.name]: value
  });

    };




  // };
  return (
    <>
    <input type="text" name="first"  value={state.first} onChange={handle}/>
    <input type="text" name="last"  value={state.last} onChange={handle}/>
    <div>
      <h1>
        this is Checkout
      </h1>
        <br />
      {items.map((item ,index)=>{
            return(
                <Link  className='a' key={index} to={`/user/${item.id}/${item.name}`}> {item.name}</Link>
            )

        })}
      </div>
      <button onClick={handleclick}> to aaa</button>
    </>
  );
};

export default Checkout;