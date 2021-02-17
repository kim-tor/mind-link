import React, {useEffect, useState } from "react";
import Login from "../components/Login";
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
                    <Col size="md-8">
                        <Login />
                    </Col>

                </Row>
                <Row>
                    <Col size="md-12">
                        <h1 style={{ textAlign: "center" }}>Mind-Link</h1>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et turpis ante. Mauris gravida congue metus, cursus viverra turpis maximus iaculis. Aenean luctus at diam vel imperdiet. Nullam in diam mauris. Praesent tellus odio, scelerisque in dictum sit amet, eleifend eu felis. Aliquam erat volutpat. Donec sollicitudin ligula vestibulum eleifend mattis. Fusce lectus lacus, laoreet finibus turpis nec, maximus aliquam nisl. Proin ante purus, dapibus ut ex eget, pellentesque ultricies velit. Ut sed eros vitae purus laoreet gravida. Phasellus lacinia, ex vel sagittis tristique, lorem nulla vestibulum nisi, non aliquam sem orci vel quam. Nam rhoncus dui nec arcu venenatis finibus.

                        Donec eu lorem vitae eros ullamcorper mattis. Donec quis ante et lacus consectetur posuere eu vel magna. Vestibulum venenatis suscipit eleifend. Nullam varius eros lacus, et convallis elit gravida et. Fusce aliquet quam id mollis tempor. Maecenas dignissim efficitur ex, eget volutpat ex imperdiet eget. Nunc finibus posuere molestie. Cras nec lacus quis ipsum accumsan faucibus vitae vehicula sapien. Curabitur mollis, purus eu dignissim vehicula, nunc neque tristique mauris, nec elementum justo lorem quis erat. Donec dictum porta justo, mollis vehicula nulla condimentum vel. Sed ultrices ante quis lorem iaculis, sed ornare odio consequat. Mauris accumsan velit a velit sodales eleifend. Donec vitae dui libero.

Proin accumsan elementum ex aliquam posuere. Proin posuere euismod accumsan. Integer venenatis rutrum libero, vitae euismod elit sagittis non. Nulla facilisi. Duis euismod malesuada lectus elementum euismod. Suspendisse non nisi cursus, cursus diam in, condimentum sem. Vestibulum pretium molestie nunc, sit amet tempor ligula volutpat auctor. Morbi aliquam tincidunt facilisis. Vestibulum sodales a dolor sed fringilla. Mauris et est at erat posuere tempor. Curabitur justo urna, cursus vel semper at, luctus suscipit augue. Vivamus scelerisque sapien non sodales semper. Vestibulum laoreet massa nisl, ut lobortis ante vestibulum varius. Sed mattis ligula mi, non bibendum nunc bibendum vitae.</p>
                    </Col>

                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default About;