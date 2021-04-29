import React from 'react';
import{Link} from "react-router-dom"
import "./NavItem.css"

const Navitem = props => {
    return ( 
        <li className="nav-itemi">
            <Link  to={props.link}>{props.children}</Link>

        </li>
     );
}
 
export default Navitem;