import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import { posts } from "../../../../routes/apiRoutes";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function PostsList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function PostsListItem({
  thumbnail,
  title,
  body,
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail || "https://placehold.it/300x300"} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
             <p>{id}</p>
            <p>{body}</p>
            <a rel="noreferrer noopener" target="_blank" href={href}>
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
