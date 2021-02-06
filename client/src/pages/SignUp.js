import React from "react";
import SignUpForm from "../components/SignUp";
import { Col, Row, Container } from "../components/Grid";

function SignUp() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <SignUpForm />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SignUp;