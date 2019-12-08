import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';

import { signOut } from '../store/actions/authActions';

const SignedinLinks = (props) => {

    let initials = props.user ? (props.user['name'].split(' ').map(name => name[0])).join('') : ''

    return (
        <ul className="right">
        <li>
            <a onClick = {props.signOut}>Logout</a>
        </li>
        <li>
            <NavLink to ="/" className="btn btn-floating green lighten-2">{initials}</NavLink>
        </li>
        </ul>
    )
}

const mapStateToProps = (state) =>{
    return {
        user: state.user.user_info
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedinLinks);