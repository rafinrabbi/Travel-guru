import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./ImageCart.css";
import { Link } from "react-router-dom";

const Destination = (props) => {

  const { image, name, id } = props.destination;
  
    
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Link to={"/destination/" + id}>
                {

                  <Card className="bg-dark text-white">
                    <Card.Img
                      className="cardImage"
                      src={image}
                      alt="Card image"
                    />
                    <Card.ImgOverlay>
                      <Card.Title>{name}</Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                }
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Destination;
