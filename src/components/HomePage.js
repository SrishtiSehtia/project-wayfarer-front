import React, { Component } from 'react';

class HomePage extends Component {
  render(){
    return (
      <div>
        <h2 id="homeH">Find your city...</h2>
        <center><img id='homepageImg'src="../images/city.gif" alt='water' /></center>
        <div class="row container" id="homeDes">

          <div class="center-align col s4">
            <i class="fa fa-bolt fa-4x"></i>
            <h4>Speeds up development</h4>
            <p>We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components.</p>
          </div>
          <div class="center-align col s4">
            <i class="fa fa-users fa-4x"></i>
            <h4>User Experience Focused</h4>
            <p>By utilizing elements and principles of Material Design, we were able to create a framework that focuses on User Experience.</p>
          </div>
          <div class="center-align col s4">
            <i class="fa fa-cogs fa-4x"></i>
            <h4>Easy to work with</h4>
            <p>We have provided detailed documentation as well as specific code examples to help new users get started.</p>
          </div>

        </div>
      </div>
    );
  }
}

export default HomePage;
