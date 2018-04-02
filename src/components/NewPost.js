import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { auth } from '../firebase';
import * as routes from '../constants/routes';


class NewPost extends Component {
  render() {
    return (
      <div>
        <h4 id="postListTitle">Posts</h4><img id="cityPic" src="../images/city.png" alt='city' />

      </div>
    );
  }
}

export default NewPost;
