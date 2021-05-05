import React from "react";
import { useState, useEffect } from "react";
import { Container, Carousel, Row, Col, ListGroup } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import Loader from "../common/Loader";
import { useParams, useHistory } from "react-router-dom";
import Heading from "../Heading";
import DatePicker from "./functions/DatePicker";
import ErrorMessage from "../common/ErrorMessage";
import { API_HOUSING_DETAILS } from "../../constants/api";
import AddEnquiry from "./functions/AddEnquiry";

function HousingDetails() {
  const [housing, setHousingObject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useHistory();

  const { id } = useParams();

  if (!id) {
    history.push("/");
  }
  const url = API_HOUSING_DETAILS + "/" + id;

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(url);
          console.log(response);

          if (response.ok) {
            const json = await response.json();
            console.log(json);
            setHousingObject(json);
          } else {
            setError("An error occured");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    },
    [url]
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={`Error: ${error}`} />;
  }
  return (
    <>
      <div className="housing-name-type">
        <Heading title={housing.name} />
        <Container>
          <p>{housing.name}</p>
        </Container>
      </div>

      <DatePicker />

      <Container>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={housing.imageone.url}
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={housing.imagetwo.url}
              alt="Second slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={housing.imagethree.url}
              alt="Third slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={housing.imagefour.url}
              alt="Fourth slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container>
        <div className="housing-description">
          <h2>Housing description</h2>
          <p className="housing-type">{housing.type}</p>
          <p>{housing.description}</p>
        </div>
        <div className="housing-info">
          <h3>About us</h3>
          <Row xs={1} lg={3}>
            <Col>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Icon.Wifi color="cyan" size={30} />
                  Free internet
                </ListGroup.Item>
                <ListGroup.Item>
                  <Icon.Egg color="cyan" size={30} />
                  Breakfast included
                </ListGroup.Item>
                <ListGroup.Item>
                  <Icon.Key color="cyan" size={30} />
                  Car rental
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Icon.Check color="cyan" size={30} />
                  Roomservice
                </ListGroup.Item>
                <ListGroup.Item>
                  <Icon.Droplet color="cyan" size={30} />
                  Cleaning
                </ListGroup.Item>
                <ListGroup.Item>
                  <Icon.ShieldLock color="cyan" size={30} />
                  Safe
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Icon.Star color="cyan" size={30} />
                  4-Stars
                </ListGroup.Item>
                <ListGroup.Item>
                  <Icon.Building color="cyan" size={30} />
                  Historical
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </div>
        <div className="housing-enquiries">
          <h2>Anything on your mind?</h2>
          <p>
            Find more information under Q&A. If you cant find an answer there,
            please send a question to the establishement.
          </p>
        </div>
        <div className="mb-2"></div>
        <AddEnquiry />
      </Container>
    </>
  );
}

export default HousingDetails;
