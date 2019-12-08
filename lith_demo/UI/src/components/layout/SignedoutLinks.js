import React from 'react';
import {NavLink} from 'react-router-dom';


const SignedoutLinks = () => {
    return (
        <ul className="right">
        <li>
            <NavLink to ="/">Login</NavLink>
        </li>
        </ul>
    )
}

export default SignedoutLinks;