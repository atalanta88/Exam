import React from "react";
import { useState, useEffect } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import ListGroup from "react-bootstrap/ListGroup";
import * as Icon from "react-bootstrap-icons";

import { BookLoaderComponent } from "../../common/Loader";
import { useParams, useHistory } from "react-router-dom";
import Heading from "../../layout/Heading";
import DatePicker from "./functions/DatePicker";
import ErrorMessage from "../../common/ErrorMessage";
import { API_HOUSING_DETAILS } from "../../../constants/api";
import AddEnquiry from "./functions/AddEnquiry";
import Map from "../../../components/pages/housing/functions/Map";

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
    return <BookLoaderComponent />;
  }

  if (error) {
    return <ErrorMessage message={`Error: ${error}`} />;
  }
  return (
    <>
      <Container className="housing-details-container">
        <Heading size="1" content={housing.name} />
        <Heading size="6" content={housing.adress} />

        <Row xs={1} lg={2}>
          <Col className="carousel-column" xs={12} lg={8}>
            {" "}
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={housing.imageone.url}
                  alt={housing.imageone.name}
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={housing.imagetwo.url}
                  alt={housing.imagetwo.name}
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={housing.imagethree.url}
                  alt={housing.imagethree.name}
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={housing.imagefour.url}
                  alt={housing.imagefour.name}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col className="about-us-column" xs={12} lg={4}>
            {" "}
            <div className="housing-description">
              <Heading size="2" content="About us" />
              <p className="housing-type">{housing.type}</p>
              <p>{housing.description}</p>
              <h5 className="card-text-price">
                NOK <span>{housing.price}</span>
              </h5>{" "}
            </div>
            <div className="housing-info">
              <Row xs={2}>
                <Col>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <div className="svg-icon">
                        <Icon.Wifi color="#00beaf" size={23} />
                      </div>
                      Free internet
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <div className="svg-icon">
                        <Icon.EggFried color="#00beaf" size={23} />
                      </div>
                      Breakfast included
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <div className="svg-icon">
                        <Icon.CheckCircle color="#00beaf" size={23} />
                      </div>
                      Roomservice
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <div className="svg-icon">
                        <Icon.FilePpt color="#00beaf" size={23} />
                      </div>
                      Free parking
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <DatePicker />

        <Container className="map-container">
          <Map />
        </Container>
        <div className="housing-enquiries">
          <Heading size="3" content="Anything on your mind?" />
          <p>
            Find more information under <a href="#">Q&amp;A.</a>
            If you cant find an answer there, please send a question to the
            establishement.
          </p>
          <AddEnquiry />
        </div>
      </Container>
    </>
  );
}

export default HousingDetails;
