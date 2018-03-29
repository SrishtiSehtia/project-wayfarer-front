import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

import SignUpPage from './components/SignUp'
import SignInPage from './components/SignIn'
import ProfilePage from './components/Profile'

import { firebase } from './firebase';
import withAuthentication from './components/withAuthentication';


import * as routes from './constants/routes';

class App extends Component {
 
  render() {
    return (
        <Router>
          <div>
            <Navigation />
              <hr/>
              <Route
              exact path={routes.SIGN_UP}
              component={() => <SignUpPage />}
              />
              <Route
              exact path={routes.SIGN_IN}
              component={() => <SignInPage />}
              />
              <Route
              exact path={routes.PROFILE}
              component={() => <ProfilePage />}
              />
          </div>
        </Router>
    );
  }
}

export default withAuthentication(App);
