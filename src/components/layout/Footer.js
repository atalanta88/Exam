import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";
import logo from "../../media/Capture.png";
import { SocialIcon } from "react-social-icons";

function FooterLayout() {
  return (
    <>
      <footer className="footer">
        <Container className="footer-container">
          <Row xs={1} md={3}>
            <Col>
              <Card className="text-center footer-card ">
                <Card.Body className="footer-card footer-card-social-media">
                  <Row>
                    <Col>
                      <SocialIcon url="https://www.facebook.com/" />
                    </Col>

                    <Col>
                      <SocialIcon url="https://www.instagram.com/" />
                    </Col>

                    <Col>
                      <SocialIcon url="https://www.pinterest.co.uk/" />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>{" "}
            </Col>
            <Col md={{ order: "first" }}>
              <Card className="text-center footer-card ">
                <Card.Body className="footer-card footer-card-information">
                  <ListGroup>
                    <Link to="/home">
                      <ListGroup.Item>Term & conditions</ListGroup.Item>
                    </Link>

                    <Link to="/home">
                      <ListGroup.Item>About</ListGroup.Item>
                    </Link>

                    <Link to="/home">
                      <ListGroup.Item>Privacy policy</ListGroup.Item>
                    </Link>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="text-center footer-card ">
                <Card.Body className="footer-card footer-card-site-map">
                  <ListGroup>
                    <Link to="/Contact">
                      {" "}
                      <ListGroup.Item>Contact</ListGroup.Item>
                    </Link>
                    <Link to="/Login">
                      {" "}
                      <ListGroup.Item>Login</ListGroup.Item>
                    </Link>
                    <Link to="/Housing">
                      {" "}
                      <ListGroup.Item>Housing</ListGroup.Item>
                    </Link>{" "}
                  </ListGroup>
                </Card.Body>
              </Card>{" "}
            </Col>
          </Row>

          <Row>
            <Col></Col>
            <Col className="footer-image-column">
              <Link to="/home">
                <Card.Img src={logo} />
              </Link>
            </Col>
            <Col></Col>
          </Row>
        </Container>
        <Col className="footer-copyright">
          <p className="text-center">
            &copy; Copyright 2021, Jonas Blakstad Olden
          </p>
        </Col>
      </footer>
    </>
  );
}

export default FooterLayout;
