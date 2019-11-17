import React from 'react';
import { NavLink } from 'react-router-dom';

const HomepageLinks = (props) => {
    
    return (
        <ul style={{justifyContent: 'center', display: 'flex'}}>
            <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
                <NavLink to="/cars">Cars</NavLink>
            </li>
        </ul>
    )
}

export default HomepageLinks;