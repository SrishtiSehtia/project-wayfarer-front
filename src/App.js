import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

import SignUpPage from './components/SignUp'
import SignInPage from './components/SignIn'
import ProfilePage from './components/Profile'

import { firebase } from './firebase';
import withAuthentication from './components/withAuthentication';


import * as routes from './constants/routes';
import './App.css';
import Header from './components/Header';
import CityList from './components/CityList';
import CityView from './components/CityView';

import CitiesContainer from './containers/CitiesContainer'



class App extends Component {

  render() {
    const cities = [
      {
        name: 'San Francisco',
        country: 'USA'
      },
      {
        name: 'Los Angeles',
        country: 'USA'
      },
      {
        name: 'New Delhi',
        country: 'India'
      }
    ]

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
              <Route
                exact path={routes.CITIES}
                component={() => <CitiesContainer cities={cities}/>}
              />
          </div>
          {/* <div className="App">
            <Header />

          </div> */}
        </Router>

    );
  }
}

export default withAuthentication(App);
