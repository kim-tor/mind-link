import React, { Component } from "react";
import { Container, Row, Col } from "../Grid";
import Confetti from 'react-confetti';
import "./style.css";

class PostListItem extends Component {
  constructor(params) {
    super(params)
    this.state = {
      hide: true
    }
    this.encourage = this.encourage.bind(this)
  }
  encourage() {
    this.countdown();
  }
  countdown() {
    this.setState({
      hide: false
    })
   
    window.setTimeout(() => {
      this.setState({
        hide: true
      })
      console.log("test")
    }, 5000)
  }

  render() {
    let confetti;
    if (this.state.hide) {
      confetti = ""
    } else {
      confetti = <Confetti/>
    }
    return (
      <li className="list-group-item">
        <Container>
          <Row>
            <Col size="100">
              <h3>Title: {this.props.title}</h3>
              <h4> Username: {this.props.username}</h4>
              <p>My thoughts: {this.props.thoughts}</p>
              <button className="btn" onClick={this.encourage}>Encouragement</button>
              {confetti}
            </Col>
          </Row>
        </Container>
      </li>
    );
  }
}
export default PostListItem;