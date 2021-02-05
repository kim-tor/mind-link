import React from "react";
import Login from "../components/Login";
import {Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function About () {
    return (
        <div>
            <Container fluid>
                <Jumbotron /> 
                <Row>
                    <Col size = "md-12">
                        <h1>Mind-Link</h1>
                        <Login />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;