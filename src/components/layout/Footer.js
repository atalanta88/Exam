import React from "react";
import { Row, Col, Container, ListGroup, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../media/Capture.PNG";
import { SocialIcon } from "react-social-icons";

function FooterLayout() {
  return (
    <>
      <footer class="footer">
        <Container className="footer-container">
          <Row>
            <Col></Col>
            <Col>Middle line</Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <Card className="text-center footer-card ">
                <Card.Body className="footer-card footer-card-information">
                  <ListGroup>
                    <ListGroup.Item>Term & conditions</ListGroup.Item>
                    <ListGroup.Item>About</ListGroup.Item>
                    <ListGroup.Item>Privacy policy</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-center footer-card ">
                <Card.Body className="footer-card footer-card-social-media">
                  <ListGroup horizontal>
                    <ListGroup.Item>
                      <SocialIcon url="https://www.facebook.com/" />
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <SocialIcon url="https://www.instagram.com/" />
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <SocialIcon url="https://www.pinterest.co.uk/" />
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>{" "}
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
            <Col>
              <Link to="/">
                <Card.Img src={logo} />
              </Link>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col className="text-center footer">
              &copy; Copyright 2021, Jonas Blakstad Olden
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterLayout;
