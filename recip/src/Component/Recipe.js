import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
function recipes(props) {
  const { recipes } = props;

  return (
    <div className="recipe">
      <Container>
        <Row>
          {recipes.map((recipe) => (
            <Col sm={3}>
              <Card>
                <Card.Img variant="top" src={recipe.recipe.image} />
                <Card.Body>
                  <Card.Title>{recipe.recipe.label}</Card.Title>
                  <Card.Text>
                    <ul className="list-group ">
                      {recipe.recipe.ingredientLines.map((ingredient) => (
                        <li className="list-group">{ingredient}</li>
                      ))}
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default recipes;
