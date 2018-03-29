import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize'


class Header extends Component {
  render() {
    return (
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Wayfarer</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="badges.html">Sign In</a></li>
        <li><a href="collapsible.html">Sign Up</a></li>
      </ul>
    </div>
  </nav>
    );
  }
}

export default Header;
