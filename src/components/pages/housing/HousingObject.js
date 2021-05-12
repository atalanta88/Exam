import React from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";

import Button from "react-bootstrap/Button";
import * as Icon from "react-bootstrap-icons";

import { Container } from "react-bootstrap";

function HousingObject({
  id,
  name,
  adress,
  description,
  price,
  type,
  images,
  imageone,
  imagetwo,
  imagethree,
  imagefour,
}) {
  return (
    <>
      <Col className="housing-col">
        <hr />
        <Card className="border-0">
          <Container>
            <Row>
              <Col sm="4" md="">
                <Link to={`housing/${id}`}>
                  <Card.Img fluid src={imageone.url} />
                  <Card.ImgOverlay>
                    <h4 className="hotel-type">
                      <span>{type}</span>
                    </h4>
                  </Card.ImgOverlay>
                </Link>
              </Col>
              <Col sm="8" md="">
                <Row xs={1} md={2}>
                  <Col>
                    <Card.Body>
                      <Link to={`housing/${id}`}>
                        <Card.Title>{name}</Card.Title>{" "}
                      </Link>
                      <Card.Title>
                        <span>NOK {price}</span>
                      </Card.Title>
                      <Link to={`housing/${id}`}>
                        <Button className="sm-block" variant="primary-color">
                          View deal
                        </Button>
                      </Link>
                    </Card.Body>
                  </Col>
                  <Col>
                    <Card.Body>
                      <Card.Text>{description}</Card.Text>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <div className="svg-icon">
                            <Icon.Wifi color="black" size={16} />
                          </div>
                          Internet
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <div className="svg-icon">
                            <Icon.EggFried color="black" size={16} />
                          </div>
                          Breakfast
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <div className="svg-icon">
                            <Icon.FilePpt color="black" size={16} />
                          </div>
                          Parking
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Card>
      </Col>
    </>
  );
}

HousingObject.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default HousingObject;
