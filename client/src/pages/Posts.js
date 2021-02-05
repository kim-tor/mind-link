import React from "react";
import { Col, Row, Container } from "../components/Grid";

function Posts() {
    return (
        <Container>
            <Row>
                <Col size="xs-12">
                <h1 className="text-center">No Posts to Display</h1>
                    {/* {!posts.length ? (
                        <h1 className="text-center">No Posts to Display</h1>
                    ) : (
                            <PostsList>
                                {posts.map(posts => {
                                    return (
                                        <PostsListItem
                                            title={posts.title}
                                            body={posts.body}
                                        />
                                    );
                                })}
                            </PostsList>
                        )} */}
                </Col>
            </Row>
        </Container>
    );
}

export default Posts;