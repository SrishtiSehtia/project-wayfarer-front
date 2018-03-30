import React, { Component } from 'react';
import City from './City';
import PostList from './PostList';

class CityView extends Component {
  render(){
    return (
      <div class="col s12 m8 l9">

          <h2>City View</h2>

        <PostList posts={this.props.posts}/>
      </div>
    );
  }
}

export default CityView;
