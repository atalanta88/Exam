import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import * as Icon from "react-bootstrap-icons";
import Heading from "../../../../components/layout/Heading";

export default function Features() {
  return (
    <>
      <div className="background-wrapper-features">
        <Container>
          <Heading size="2" content="Holidaze features" />
          <p>
            We know Bergen and can help you find a perfect place for you to
            visit.
          </p>
          <hr />
          <Row xs={1} md={3}>
            <Col>
              {" "}
              <div className=""></div>
              <Icon.Award color="#484848" size={50} />
              <Heading size="3" content="Easy to use" />
              <p>
                Find a beautiful place to visit on our intuitive housing page.
                Look, search and choose what suit your needs
              </p>
            </Col>
            <Col>
              {" "}
              <Icon.Tags color="#484848" size={50} />
              <Heading size="3" content="Lowest Price Guarantee" />
              <p>
                With us you can make sure you're living the best for the best
                price.
              </p>
            </Col>
            <Col>
              {" "}
              <Icon.EmojiLaughing color="#484848" size={50} />
              <Heading size="3" content="Happiness guarantee" />
              <p>
                Our number #1 priority is your happiness. We stand by our
                housing offers 100%, and if you have a problem we will solve it.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
