import React from "react";
import { Col, Card, Row } from "react-bootstrap";

function Tags({ articles }) {
  const tag = articles?.articles.map((article) => {
    return article.taxonomy.tags;
  });

  return (
    <Row className="justify-content-center">
      {tag
        .sort(function (a, b) {
          return b.length - a.length;
        })
        .map((tagcito) => (
          <Col md={3} sm={12} className="card__separation" key={articles._id}>
            <Card className="card_tags">
              {tagcito.map((todos) => (
                <Card>
                  <b>Slug:</b> {todos?.slug}
                  <br />
                  <b>Text:</b> {todos?.text}
                </Card>
              ))}
              <Card.Text>
                <b>Count:</b> {tagcito.length}
              </Card.Text>
            </Card>
          </Col>
        ))}
    </Row>
  );
}

export default Tags;
