import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
// import AddPosts from "../components/AddPosts";
// import PostListItem from ".../components/Posts";
import API from "../utils/API";
import { PostList } from "../components/Posts";

class Posts extends Component {
  state = {
    title: "",
    username: "",
    throughts: "",
  };

  // When the component mounts, get a list of all available past posts
  componentDidMount() {
    // API.getPostsList()
    //   .then(res => this.setState({ posts: res.data.message }))
    //   .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getDogsOfBreed(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Posts</h1>
          <form>
            <input value={this.state.title} name="title" placeholder="Title" onChange={this.handleInputChange}/>
            {/* <input value={this.state.username} name="username" placeholder="Username" onChange={this.handleInputChange}/>  */}
            <input value={this.state.thoughts} name="thoughts" placeholder="What is on your mind?" onChange={this.handleInputChange}/> 
          </form>
          <button on Click={this.handleFormSubmit} className="btn btn-success" type="submit">
            Post
          </button>
          {/* <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert> */}
        </Container>
        <Container>
          <PostList/>
        </Container>
      </div>
    );
  }
}

export default Posts;
