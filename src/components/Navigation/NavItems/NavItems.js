import React from 'react';
import Navitem from "./../NavItem/NavItem"

import "./NavItems.css"

const Navitems = props => {
    return ( 
        <ul className="nav-items">
            <Navitem link="/">  Shoping  </Navitem>
            <Navitem link="/check"> Checkout  </Navitem>
            <Navitem link="/account">  account </Navitem>
        </ul>
     );
}
 
export default Navitems;