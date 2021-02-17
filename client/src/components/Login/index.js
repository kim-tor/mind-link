import React, { useState } from 'react';
import { Col, Row, Container } from "../Grid";
import { useHistory } from 'react-router-dom';
import "./style.css"
import axios from "axios";


function LoginForm() {
  const history = useHistory();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("/api/login", {username, password})
    .then(response => {
      console.log(response);
      history.push('/posts');
    })
    .catch(err => {
      console.log(err);
    })
    console.log("username is " + username);
    console.log("password is " + password);
    

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
        
        </Container>
        </form>
    </div>
   
  )
};

export default LoginForm;