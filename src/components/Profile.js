import React, { Component } from 'react'

import withAuthorization from './withAuthorization';

class ProfilePage extends Component {
  render() {
    return (
      <div id="profilePage">
        <h4>My Profile</h4>
        <section id="profileWrap">
          <img id="profile" src="https://www.jennstrends.com/wp-content/uploads/2013/10/bad-profile-pic-2.jpeg" alt='profile' />
          <section>
            <p><h6>Name: Terrell T.</h6></p>
            <p><h6>City: San Francisco</h6></p>
            <p><h6>Date-Joined: 04/04/2018</h6></p>
            <button>Edit</button>
          </section>
        </section>
      </div>
    );
  }
}

const authCondition = (authUser) => !!authUser;
 
export default withAuthorization(authCondition)(ProfilePage);