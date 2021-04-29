import React from 'react';
import "./Navbar.css"
import Navitems from "./../NavItems/NavItems"
const Navbar = props => {
    return ( <header className="navbarian">
        <nav>
            <Navitems></Navitems>
        </nav>
    </header> );
}
 
export default Navbar;