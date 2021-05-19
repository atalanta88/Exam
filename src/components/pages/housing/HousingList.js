import React from "react";
import { useState, useEffect } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";

import { API_HOUSINGS } from "../../../constants/api";
import HousingObject from "./HousingObject";
import Heading from "../../layout/Heading";
import { BookLoaderComponent } from "../../common/Loader";
import ErrorMessage from "../../common/ErrorMessage";

function HousingList() {
  const [housing, setHousingList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(API_HOUSINGS);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setHousingList(json);
        } else {
          setError("A server error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <BookLoaderComponent />;
  }

  if (error) {
    return <ErrorMessage message={`Error: ${error}`} />;
  }

  return (
    <>
      <div className="housing-header-background">
        {" "}
        <Container>
          <Heading size="1" content="Explore beautiful Bergen!" />
        </Container>
      </div>

      <Container className="housing-container">
        <Row xs={1} md={2}>
          <Col xs={0} md={3}>
            <Form>
              <Accordion defaultActiveKey="1">
                <Card className="accordion-card-border-none">
                  <Accordion.Toggle
                    as={Button}
                    variant="secondary-color"
                    eventKey="0"
                  >
                    Show filter
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      {" "}
                      <Row xs={2} md={1}>
                        <Col>
                          <Form.Group
                            className="form-checkbox"
                            controlId="formGroupCheckbox"
                          >
                            <Form.Label>Property types</Form.Label>
                            <Form.Group controlId="formBasicCheckbox">
                              <Form.Check type="checkbox" label="Hotels" />
                              <Form.Check
                                type="checkbox"
                                label="Bed & Breakfast"
                              />
                              <Form.Check type="checkbox" label="Apartments" />
                            </Form.Group>{" "}
                          </Form.Group>{" "}
                        </Col>
                        <Col>
                          <Form.Group
                            className="form-checkbox"
                            controlId="formGroupCheckbox"
                          >
                            <Form.Label>Amenities</Form.Label>
                            <Form.Group controlId="formBasicCheckbox">
                              <Form.Check type="checkbox" label="Wifi" />
                              <Form.Check
                                type="checkbox"
                                label="Breakfast included"
                              />
                              <Form.Check type="checkbox" label="Parking" />
                            </Form.Group>{" "}
                          </Form.Group>{" "}
                        </Col>
                      </Row>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>{" "}
              <Form.Control as="select" custom>
                <option>Popular</option>
                <option>Price high to low</option>
                <option>Price low to high</option>
                <option>Name</option>
                <option>Offer</option>
              </Form.Control>
            </Form>
          </Col>
          <Col xs={12} md={9}>
            <Row xs={1} md={1} lg={2}>
              {housing.map(function (housing) {
                const { id, name, adress, description, price, type, imageone } =
                  housing;

                return (
                  <HousingObject
                    key={id}
                    id={id}
                    name={name}
                    adress={adress}
                    description={description}
                    price={price}
                    type={type}
                    imageone={imageone}
                  />
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HousingList;
