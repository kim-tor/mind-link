import React, { useState } from 'react';
import { Col, Row, Container } from "../Grid";
import { useHistory } from 'react-router-dom';
import "./style.css"


function LoginForm() {
  const history = useHistory();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("password is " + password);
    history.push('/posts');

  };

  const handleSignUp = e => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("password is " + password);
    history.push("/signup");

  };

  return (
    <div>
      <div className="login">
        <h2>Log In</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="login-container">
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                onChange={e => setUsername(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={e => setPassword(e.target.value)}
              />
            </Col>
          </Row>
          <button onClick={this.handleFormSubmit} className="btn btn-success" type="submit">
            Submit
          </button>
          <button className="signupbtn btn-success" type="submit" onClick= {handleSignUp}>Sign Up</button>
        </Container>
        </form>
    </div>
   
  )
};

export default LoginForm;