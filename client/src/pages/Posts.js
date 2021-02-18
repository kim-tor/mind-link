import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import API from "../utils/API";
import PostListItem from "../components/Posts";
import Footer from "../components/Footer";
import Image from "../components/Image";


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
      <div>
        <Image/>
        <Container style={{ minHeight: "100%" }}>
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
