import React, { Component, useState } from "react";
import { Col, Row, Container } from "../components/Grid";
// import AddPosts from "../components/AddPosts";
// import PostListItem from ".../components/Posts";
import API from "../utils/API";
import { PostList, PostListItem } from "../components/Posts";
// import addPosts from "./addPosts";
import { Link } from "react-router-dom";

class Posts extends Component {
  state = {
    posts: []
  };

  // When the component mounts, get a list of all available past posts
  componentDidMount() {
    API.getPosts()
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container mb-5 mt-5">
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Posts</h1>
          <Row>
            <PostList>
              {this.state.posts.map(post => (
                <PostListItem {...post}/>
              ))}
            </PostList>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Posts;
