import React, { Component } from 'react';


class Post extends Component {
  render() {
    return (
      <div key={this.props.key}>
        <h3>{this.props.title}</h3>
        <h4>{this.props.description}</h4>
      </div>
    );
  }
}

export default Post;
