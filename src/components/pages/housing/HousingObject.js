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
        <Card className="border-0">
          <Container>
            <Row>
              <Col md="5">
                <Link to={`housing/${id}`}>
                  <Card.Img fluid src={imageone.url} roundedCircle />
                </Link>
              </Col>
              <Col md="7">
                <Row xs={1} md={2}>
                  <Col>
                    <Card.Body>
                      <Card.Title>{name}</Card.Title>
                      <p className="hotel-type">{type}</p>
                      <Card.Title>NOK {price}</Card.Title>
                      <Link to={`housing/${id}`}>
                        <Button variant="primary-color">View deal</Button>
                      </Link>
                    </Card.Body>
                  </Col>
                  <Col>
                    <Card.Body>
                      <Row xs={2} md={1}>
                        <Col>
                          <ListGroup variant="flush">
                            <ListGroup.Item>
                              <div className="svg-icon">
                                <Icon.Wifi color="black" size={20} />
                              </div>
                              Free internet
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="svg-icon">
                                <Icon.EggFried color="black" size={20} />
                              </div>
                              Breakfast included
                            </ListGroup.Item>
                          </ListGroup>
                        </Col>
                        <Col>
                          <ListGroup variant="flush">
                            <ListGroup.Item>
                              <div className="svg-icon">
                                <Icon.CheckCircle color="black" size={20} />
                              </div>
                              Roomservice
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <div className="svg-icon">
                                <Icon.FilePpt color="black" size={20} />
                              </div>
                              Free parking
                            </ListGroup.Item>
                          </ListGroup>
                        </Col>
                      </Row>
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

/*
      <Col>
        <Card>
          <Link to={`housing/${id}`}>
            <Card.Img variant="top" src={imageone.url} />
          </Link>
          <Card.Body>
            <p className="hotel-type">{type}</p>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Average cost per night {price} NOK
            </small>
          </Card.Footer>
        </Card>
      </Col>
*/

/*  return (
    <>
      <Col>
        <Card>
          <Link to={`housing/${id}`}>
            <Card.Img variant="top" src={imageone.url} />
          </Link>
          <Card.Body>
            <p className="hotel-type">{type}</p>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Average cost per night {price} NOK
            </small>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );*/
