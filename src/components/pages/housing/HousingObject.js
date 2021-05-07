import React from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

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
  );
}

HousingObject.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default HousingObject;

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
