import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';

import { signOut } from '../store/actions/authActions';

const SignedinLinks = (props) => {
    return (
        <ul className="right">
        <li>
            <a onClick = {props.signOut}>Logout</a>
        </li>
        <li>
            <NavLink to ="/" className="btn btn-floating green lighten-2">MM</NavLink>
        </li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedinLinks);