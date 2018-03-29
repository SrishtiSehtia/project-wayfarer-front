import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SignInForm from './SignIn'
import SignOutButton from './SignOut'
import SignUpForm from './SignUp'
import ProfilePage from './Profile'
import * as routes from '../constants/routes';
import {Button, Icon, Modal} from 'react-materialize'

const Navigation = (props, {authUser}) =>
  <div>
    { authUser
      ? <NavigationAuth/>
      : <NavigationNonAuth />
    }
  </div>

Navigation.contextTypes = {
  authUser: PropTypes.object,
};

const NavigationAuth = () =>
    <ul>
      <li><Link to={routes.HOME}>Home</Link></li>
      <li><Link to={routes.ACCOUNT}>Account</Link></li>
      <li><Link to={routes.PROFILE}>Profile</Link></li>
      <li><SignOutButton /></li>
    </ul>

const NavigationNonAuth = () =>
    <div>
      <Modal className="modalSignIn"
      trigger={<Button waves='light'>Sign In!</Button>}>
      <SignInForm />
      </Modal>
      <Modal className="modalSignUp"
      trigger={<Button waves='light'>Sign Up!</Button>}>
      <SignUpForm />
      </Modal>
    </div>

export default Navigation;
