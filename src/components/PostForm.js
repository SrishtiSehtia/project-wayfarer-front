import React, { Component } from 'react';

const INITIAL_STATE = {
  title: '',
  description: ''
}

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE};
  }

  onSubmit = (event) => {
    const {
      title,
      description
    } = this.state
    let newPost = {
      title: title,
      description: description
    }
    this.props.createPost(newPost, this.props.cityID)
    event.preventDefault();
  }
  render() {
    const {
      title,
      description
    } = this.state;

    const isInvalid =
      title === '' ||
      description === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={title}
          onChange={event => this.setState({title: event.target.value})}
          type="text"
          placeholder="Title"
        />
        <input
          value={description}
          onChange={event => this.setState({description: event.target.value})}
          type="description"
          placeholder="Description"
        />
        <button disabled={isInvalid} type="submit">
          Create Post
        </button>
      </form>
    );
  }
}

export default PostForm;
