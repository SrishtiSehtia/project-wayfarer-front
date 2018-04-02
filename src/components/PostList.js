import React, { Component } from 'react';
import Post from './Post';
import {Button, Icon, Modal} from 'react-materialize'
import NewPost from './NewPost'

class PostList extends Component {
  render() {
    const postArray = this.props.posts.map((post, key) => {
      return <Post title={post.title} description={post.description} key={key} />
    })
    return (
      <div>
        <h4 id="postListTitle">Posts</h4><img id="cityPic" src="../images/city.png" alt='city' />

        <Modal className="modalNewPost"
        trigger={<Button waves='light'>New Post</Button>}>
        <NewPost />
        </Modal>


        {postArray}
      </div>
    );
  }
}

export default PostList;
