import React, { Component } from 'react';


class Post extends Component {
  render() {
    return (
      <div id="postWrap" key={this.props.key}>
        <img id="thumbnail" src="../images/thumbnail.jpg" alt='thumnail' />
        <section id="eachPost">
          <p id="postTitle">{this.props.title}</p>
          <p id="postDes">{this.props.description}</p>
        </section>
      </div>
    );
  }
}

export default Post;
