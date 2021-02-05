import React from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";

function Search() {
    const [articlesSearch, setarticlesSearch] = useState("");

    const handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { value } = event.target;
        setarticlesSearch(value);
    };

    const handleFormSubmit = event => {
        // For the article 
        event.preventDefault();
        // API.getRecipes(recipeSearch)
        //   .then(res => setarticlesSearch(res.data))
        //   .catch(err => console.log(err));
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col size="md-12">
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
                
            </Container>
        </div>
    );
}

export default Search;