import React, { useState } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Input from "../components/Input";
import Button from "../components/Button";
import Footer from "../components/Footer";


function Search() {
    const [articlesSearch, setarticlesSearch] = useState("");
    const [articles, setArticles] = useState([]);

    const handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { value } = event.target;
        setarticlesSearch(value);
    };

    const handleFormSubmit = event => {
        // For the article 
        event.preventDefault();
        API.getStories(articlesSearch)
            .then(res => {
                console.log(res);
                setArticles(res.articles)
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col size="md-12">
                        <h1> Articles </h1>
                        <form>
                            <Container>
                                <Row>
                                    <Col size="xs-9 sm-10">
                                        <Input
                                            name="articlesSearch"
                                            value={articlesSearch}
                                            onChange={handleInputChange}
                                            placeholder="Search For an Article"
                                        />
                                    </Col>
                                    <Col size="xs-3 sm-2">
                                        <Button
                                            onClick={handleFormSubmit}
                                            type="success"
                                            className="input-lg"
                                        >
                                            Search
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </form>
                    </Col>
                </Row>
                    {articles.map((article, index) => (
                        <div className="row mb-3, mt-3" key={index}>
                            <h3>{article.title}</h3>
                            <p>{article.summary}</p>
                            <a href={article.link} >{article.link}</a>
                        </div>
                    ))}
                
            </Container>
            <Footer/>
        </div>
    );
}

export default Search;