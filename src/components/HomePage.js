import React, { Component } from 'react';

class HomePage extends Component {
  render(){
    return (
      <div>
        <h2>HOMEPAGE</h2>
        <img id='sunset'src="https://images.unsplash.com/photo-1512930366077-deb21fed7bc4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=79cf09e2a06efb0b3cf5344e638bbe94&auto=format&fit=crop&w=1814&q=80" alt='water' />

        <div class="row container">

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
