import React from "react";

import PropTypes from "prop-types";
import { LinkContainer } from "react-router-bootstrap";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import * as Icon from "react-bootstrap-icons";

function HousingObject({ id, name, adress, description, price, imageone }) {
  return (
    <>
      {" "}
      <Col className="card-col-object">
        <Card style={{ maxWidth: "35rem" }}>
          <div className="card-background-image-wrapper">
            <LinkContainer to={`housing/${id}`}>
              <Card.Img variant="top" src={imageone.url} />
            </LinkContainer>
            <div className="card-col-object-overlay-right">
              {" "}
              <Icon.Wifi color="white" size={22} />
            </div>
            <div className="card-col-object-overlay-center">
              {" "}
              <Icon.FilePpt color="white" size={22} />
            </div>
          </div>

          <Card.Body className="top-card-body-wrapper">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <div className="card-footer-wrapper">
              <Row xs={1} lg={1}>
                <Col>
                  {" "}
                  <h6 className="card-subtitle text-muted">
                    <div className="card-col-object">
                      {" "}
                      <Icon.CreditCard color="#dd1bd0" size={25} />
                    </div>{" "}
                    <span>NOK {price}</span>
                  </h6>{" "}
                </Col>
                <Col>
                  {" "}
                  <LinkContainer to={`housing/${id}`}>
                    <Button className="sm-block" variant="primary-color" block>
                      View deal
                    </Button>
                  </LinkContainer>
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
