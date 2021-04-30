import React, { useState, useEffect } from "react";

const User = ({ match }) => {
  const [items, setitems] = useState([]);
  const [item, setitem] = useState();

  useEffect(() => {
    // Getitem();

    console.log(match.params);
    // console.log(items);
  }, []);

  // const Getitem = async () => {
  //   const data = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const items = await data.json();
  //   console.log("data", items);
  //   setitems(items);
  // };

  return (
    <div>
      <h1>User</h1>
      <h2>{match.params.id} _ {match.params.name}</h2>
    <h3 style={{color:'red'}}>Email : {match.params.email}</h3>
    <h3 style={{color:'green'}}>Work in  : {match.params.company}</h3>
    </div>
  );
};

export default User;
