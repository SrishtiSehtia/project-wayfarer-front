import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
  render() {
    const postArray = this.props.posts.map((post, key) => {
      return <Post title={post.title} description={post.description} key={key} />
    })
    return (
      <div>
        <h2>Posts</h2>
        {postArray}
      </div>
    );
  }
}

export default PostList;
