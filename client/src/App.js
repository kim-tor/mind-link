import React, { useState } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { PostsList, PostsListItem } from "./components/PostsList";
import { Container, Row, Col } from "./components/Grid";

function App() {

  const [posts, setPosts] = useState([]);
  const [articlesSearch, setarticlesSearch] = useState("");

  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setRecipeSearch(value);
  };

  const handleFormSubmit = event => {
    // For the article 
    event.preventDefault();
    API.getRecipes(recipeSearch)
      .then(res => setRecipes(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Nav />
      <Jumbotron />
      <Container>
        <Row>
          <Col size="md-12">
            <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <Input
                      name="RecipeSearch"
                      value={recipeSearch}
                      onChange={handleInputChange}
                      placeholder="Search For a Recipe"
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
        <Row>
          <Col size="xs-12">
            {!recipes.length ? (
              <h1 className="text-center">No Recipes to Display</h1>
            ) : (
              <RecipeList>
                {posts.map(recipe => {
                  return (
                    <RecipeListItem
                      key={recipe.title}
                      title={recipe.title}
                      href={recipe.href}
                      ingredients={recipe.ingredients}
                      thumbnail={recipe.thumbnail}
                    />
                  );
                })}
              </RecipeList>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
