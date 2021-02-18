import React, { Component } from "react";
import { Container } from "../components/Grid";
import API from "../utils/API";
import Footer from "../components/Footer";
import Image from "../components/Image";
import { withRouter } from "react-router-dom";

class addPosts extends Component {
  state = {
    title: "",
    username: "",
    throughts: "",
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("submited")
    let thoughts = {
      title: this.state.title,
      thoughts: this.state.thoughts,
      username: this.state.username
    }
    API.savePost(thoughts)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
        this.props.history.push("/posts")
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <Image/>
        <Container style={{ minHeight: "100%" }}>
          <h1 className="text-center">What is on your mind?</h1>
          <form>
            <div className="mb-3">
              <input className ="form-control" value={this.state.title} name="title" placeholder="Title" onChange={this.handleInputChange} />
              <input className ="form-control" value={this.state.username} name="username" placeholder="Username" onChange={this.handleInputChange} />
              <input className ="form-control" value={this.state.thoughts} name="thoughts" placeholder="Your Thoughts" onChange={this.handleInputChange} />
            </div>
          </form>
          <button onClick={this.handleFormSubmit} className="btn btn-success" type="submit">
            Post
          </button>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default withRouter(addPosts);
