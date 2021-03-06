import React from 'react';
import Wrapper from "./../../hoc/Wrapper"
import Navbar from "./../../components/Navigation/Navbar/Navbar"

import "./layout.css"

const Layout = props => {
    return ( <Wrapper>

            <Navbar />

    <main className="content">{props.children}</main>
    </Wrapper> );
}
 
export default Layout;