import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import lithium_logo from "../../assets/lithium_cabs_logo.png";
import SignedinLinks from './SignedinLinks';
import SignedoutLinks from './SignedoutLinks';



const Navbar = (props) => {

    let loginLink = false
    const status = props.loggedIn;
    if(status === 'success')
    loginLink = true
    return (
        <div className="navbar-fixed">
            <nav className="nav-wrapper grey darken-3 z-depth-0">
            <div style={{marginLeft: '100px', marginRight: '100px'}}>
            <Link to="/" className="brand-logo">
            <img style={{width: '85px', height: '64px'}} src={lithium_logo} alt="Not Found"/>
            </Link>
            {loginLink ? <SignedinLinks /> : <SignedoutLinks />}
        </div>
        </nav>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        loggedIn: state.auth.authStatus
    }
}

export default connect(mapStateToProps)(Navbar);
