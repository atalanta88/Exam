import React from "react";
import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Form,
  Col,
  CardDeck,
  Accordion,
  Card,
  Button,
} from "react-bootstrap";
import { API_HOUSINGS } from "../../../constants/api";
import HousingObject from "./HousingObject";
import Heading from "../../layout/Heading";
import { BookLoaderComponent } from "../../common/Loader";
import ErrorMessage from "../../common/ErrorMessage";

/*HUSK Å FORANDRE BOOK LOADER NAVNET*/

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
      {" "}
      <Container>
        {" "}
        <Heading size="1" content="Find a place to stay!" />
      </Container>
      <Container className="housing-container">
        <Row xs={1} md={2}>
          <Col xs={0} md={3}>
            {" "}
            <Form>
              <Row xs={2} md={1}>
                <Col>
                  <Form.Group
                    className="form-checkbox"
                    controlId="formGroupCheckbox"
                  >
                    <Form.Label>Property types</Form.Label>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Hotels" />
                      <Form.Check type="checkbox" label="Bed & Breakfast" />
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
                      <Form.Check type="checkbox" label="Breakfast included" />
                      <Form.Check type="checkbox" label="Parking" />
                    </Form.Group>{" "}
                  </Form.Group>{" "}
                </Col>
              </Row>
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
                const {
                  id,
                  name,
                  adress,
                  description,
                  price,
                  slug,
                  type,
                  images,
                  imageone,
                  imagetwo,
                  imagethree,
                  imagefour,
                } = housing;

                return (
                  <HousingObject
                    key={id}
                    id={id}
                    name={name}
                    adress={adress}
                    description={description}
                    price={price}
                    slug={slug}
                    type={type}
                    images={images}
                    imageone={imageone}
                    imagetwo={imagetwo}
                    imagethree={imagethree}
                    imagefour={imagefour}
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
