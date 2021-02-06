import React, { useState } from 'react';
import { Col, Row, Container } from "../Grid";
import "./style.css"


function LoginForm() {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("password is " + password);
    window.location.replace("/posts");

  };

  const handleSignUp = e => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("password is " + password);
    window.location.replace("/signup");

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
          <button className="btn btn-success" type="submit">
            Submit
          </button>
          <button className="signupbtn btn-success" type="submit" onClick= {handleSignUp}>Sign Up</button>
        </Container>
        </form>
    </div>
   
  )
};

export default LoginForm;