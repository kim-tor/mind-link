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

                        <p style={{ textAlign: "center", padding: "25px" }}> Welcome to a place where it is okay to NOT be okay. <br /> <br />
                         You can connect with a support form by sharing daily experiences and the way they have impacted you. <br /> <br />
                         Check out other people's posts if you need a little encouragement to share your own. <br /> <br />
                         Remember we are all human, our mind are another part of us that needs to be taken care of <br /> <br />
                         Please refer to our Helpful Resources for additional support.</p>
                    </Col>

                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default About;