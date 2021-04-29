import React, { useState, useEffect } from "react";

const User = ({ match }) => {
  const [items, setitems] = useState([]);
  const [item, setitem] = useState();

  useEffect(() => {
    Getitem();

    console.log(match.params);
  }, []);

  const Getitem = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const items = await data.json();
    console.log("data", items);
    setitems(items);
  };

  return (
    <div>
      <h1>User</h1>
      <h2>{match.params.id} _ {match.params.name}</h2>
    </div>
  );
};

export default User;
