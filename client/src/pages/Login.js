import React from "react";
import LoginForm from "../components/Login";
import { Col, Row, Container } from "../components/Grid";
import Image from "../components/Image";
import Footer from "../components/Footer";

function Login() {
    return (
        <div>
            <Image />
            <Container>

                <Row>
                    <Col size="md-12">
                        <LoginForm />
                    </Col>

                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Login;