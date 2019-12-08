import React from 'react';
// import SignIn from '../auth/SignIn';
import { Switch, Route, useHistory } from 'react-router-dom';
import {Redirect} from 'react-router';

import HomepageLinks from './HomepageLinks';
import Dashboard from '../user/Dashboard';
import Cars from '../user/Cars';
import Drivers from '../user/Drivers';
import AddDriver from '../user/AddDriver';
import EditDriver from '../user/EditDriver';
import DriverStatus from '../user/DriverStatus'
import DriverShift from '../user/DriverShift';

const HomePage = (props) => {
    let userNav = (<><nav className="nav-wrapper green lighten-2">
    <HomepageLinks /></nav>
    <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/cars" component={Cars} />
        <Route path="/drivers"  component={Drivers} />
        </Switch>
</>
);
let history = useHistory();
    return (
        <div>
            {userNav}
            {history.location.pathname === "/" ? <Dashboard /> : null}
        </div>
    )
}


export default HomePage;