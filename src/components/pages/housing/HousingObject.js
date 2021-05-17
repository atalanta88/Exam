import React from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
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
          <div className="card-background-image-wrapper">
            <Link to={`housing/${id}`}>
              <Card.Img variant="top" src={imageone.url} />
            </Link>
            <div className="card-col-object-overlay-right">
              {" "}
              <Icon.Wifi color="grey" size={20} />
            </div>
            <div className="card-col-object-overlay-center">
              {" "}
              <Icon.FilePpt color="grey" size={20} />
            </div>
          </div>

          <Card.Body className="top-card-body-wrapper">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{description}</p>
            <div className="card-footer-wrapper">
              <Row xs={1} lg={1}>
                <Col>
                  {" "}
                  <h6 class="card-subtitle text-muted">
                    <div className="card-col-object">
                      {" "}
                      <Icon.CreditCard color="violet" size={20} />
                    </div>{" "}
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
