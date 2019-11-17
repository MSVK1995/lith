import React from 'react';
import {Link} from 'react-router-dom';
import lithium_logo from "../../assets/lithium_cabs_logo.png";
import SignedinLinks from './SignedinLinks';
import SignedoutLinks from './SignedoutLinks';


const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div style={{marginLeft: '100px', marginRight: '100px'}}>
            <Link to="/" className="brand-logo">
            <img style={{width: '85px', height: '64px'}} src={lithium_logo} alt="Not Found"/>
            </Link>
            <SignedinLinks />
            <SignedoutLinks />
        </div>
        </nav>
    )
}

export default Navbar;
