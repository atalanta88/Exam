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
      {" "}
      <Col className="card-col-object">
        <Card style={{ maxWidth: "35rem" }}>
          <Link to={`housing/${id}`}>
            <Card.Img variant="top" src={imageone.url} />
          </Link>
          <Card.Body className="top-card-body-wrapper">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{description}</p>
            <h6 class="card-title">Included</h6>
            <hr />
            <ListGroup horizontal>
              <ListGroup.Item>
                {" "}
                <div className="svg-icon">
                  <Icon.Wifi color="grey" size={20} />
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <div className="svg-icon">
                  <Icon.EggFried color="grey" size={20} />
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <div className="svg-icon">
                  <Icon.FilePpt color="grey" size={20} />
                </div>
              </ListGroup.Item>
            </ListGroup>
            <div className="card-footer-wrapper">
              <Row xs={1} lg={1}>
                <Col>
                  {" "}
                  <h6 class="card-subtitle text-muted">
                    <span>NOK {price}</span>
                  </h6>{" "}
                </Col>
                <Col>
                  {" "}
                  <Link to={`housing/${id}`}>
                    <Button className="sm-block" variant="primary-color" block>
                      View deal
                    </Button>
                  </Link>{" "}
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

HousingObject.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default HousingObject;
