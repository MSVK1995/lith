import React from 'react';
import { NavLink } from 'react-router-dom';

const HomepageLinks = (props) => {
    
    return (
        <ul style={{justifyContent: "space-around", display: "flex" }}>
            <li>
                <NavLink to="/dashboard"><span className="hplinks">Dashboard</span></NavLink>
            </li>
            <li>
                <NavLink to="/cars"><span className="hplinks">Cars</span></NavLink>
            </li>
           
            <li>
                <NavLink to="/drivers"><span className="hplinks">Drivers</span></NavLink>
            </li>
        </ul>
    )
}

export default HomepageLinks;