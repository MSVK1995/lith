import React from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from "react-router";


import HomePage from './components/homepage/HomePage';
import SignIn from './components/auth/SignIn';


function App(props) {

  let status = false;
  const loggedIn = props.loggedIn
    if( loggedIn === 'success')
      status=true
    console.log("Logged in status",status) 

    let signInNav = (
      <div>
          <Route path="/" component={SignIn} />
          <Redirect from = "*" to = "/" />
      </div>
  );
  let homeNav = (
    <div>
      <Route path = "/" component={HomePage} />
    </div>
  )
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar />
    {status ? homeNav : signInNav}
    </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) =>{
  return {
    loggedIn : state.auth.authStatus
  }
}

export default connect(mapStateToProps)(App);
