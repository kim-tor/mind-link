import React, { Component } from "react";
import { Container, Row, Col } from "../Grid";
import Confetti from 'react-confetti';

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
            <Col size="xs-18 sm-20">
              <h3>{this.props.title}</h3>
              <p> by {this.props.username}</p>
              <p>{this.props.thoughts}</p>
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