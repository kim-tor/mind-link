import React from "react";
import LoginForm from "../components/Login";
import { Col, Row, Container } from "../components/Grid";

function Login() {
    return (
        <div>
            <Container>

                <Row>
                    <Col size="md-8">
                        <LoginForm />
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Login;