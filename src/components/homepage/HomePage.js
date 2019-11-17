import React from 'react';
// import SignIn from '../auth/SignIn';
import { Switch, Route } from 'react-router-dom';
import {Redirect} from 'react-router';

import HomepageLinks from './HomepageLinks';
import Dashboard from '../user/Dashboard';
import Cars from '../user/Cars';

const HomePage = (props) => {
    let userNav = (<nav className="nav-wrapper green lighten-2">
    <HomepageLinks />
    <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/cars" component={Cars} />
        </Switch>
</nav>);
    return (
        <div>
            {userNav}
        </div>
    )
}


export default HomePage;