import React, {useEffect, useState } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";


function About() {
    const [quote, setQuote] = useState ("");

    useEffect(() =>{
        API.getQuotes()
        .then(data => setQuote(data));

    }, [] );


    return (
        <div>
            <Container fluid>
              
                <Jumbotron quote={quote}/>
                
           
                <Row>
                    <Col size="md-12">
                        <h1 style={{ textAlign: "center" }}>Mind-Link</h1>

                        <p>People can connect with a support form with sharing their daily experience with their well being. There should resources readily available to them.</p>
                    </Col>

                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default About;