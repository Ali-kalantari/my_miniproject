import React from 'react';
import{useAuth0} from "@auth0/auth0-react"
const LoginButton = () => {
    const {loginWithRedirect} = useAuth0();
    const {logout} = useAuth0();

    return (
        <> <button onClick={() =>loginWithRedirect() }>
        log in

    </button> 
    <br />
    <br/>
    <button onClick={() =>logout()} >
        log out
    </button>
     </> );
}
 export default LoginButton;
 