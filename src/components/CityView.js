import React, { Component } from 'react';
import City from './City';
import PostList from './PostList';

class CityView extends Component {
  render(){
    return (
      <div class="col s12 m8 l9">
        <h2>{this.props.city.name}</h2>
        <h4>{this.props.city.country}</h4>
        <PostList posts={this.props.posts}/>
      </div>
    );
  }
}

export default CityView;
