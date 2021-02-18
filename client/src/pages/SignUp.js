import React from "react";
import SignUpForm from "../components/SignUp";
import { Col, Row, Container } from "../components/Grid";
import Image from "../components/Image";
import Footer from "../components/Footer";

function SignUp() {
    return (
        <div>
            <Image />
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <SignUpForm />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default SignUp;