import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import API from "../utils/API";
import PostListItem from "../components/Posts";
import Footer from "../components/Footer";


class Posts extends Component {
  state = {
    posts: []
  };

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
            <ul className="list-group">
              {this.state.posts.map(post => (
                <PostListItem {...post}/>
              ))}
            </ul>
          </Row>
        </Container>
        <Footer/>
      </div>
    );
  }
}
export default Posts;
