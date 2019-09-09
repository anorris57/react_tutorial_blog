import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

//use life cycle method componentDidMount to make call to api
export class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    console.log(this.props.posts);
    return (
      <div>
        Post List
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
}

export default connect (mapStateToProps, {fetchPosts: fetchPosts})(PostList);
