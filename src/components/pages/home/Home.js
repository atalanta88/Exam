import React from "react";
import TypeaheadArray from "./components/TypeAheadSearchBar";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

export default function HomePage() {
  return (
    <>
      <div className="background-wrapper-home">
        <Jumbotron>
          <Container className="text-container-home">
            <h1>
              <span>Find</span> a place to stay with <span>Holidaze</span>.
            </h1>
            <p>
              With us you can find any you can find any place, anywhere,
              anytime!
            </p>
            <p>
              <LinkContainer to="/housing">
                <Button variant="primary-color">Book stay</Button>
              </LinkContainer>
            </p>
          </Container>
        </Jumbotron>
        <Container>
          <TypeaheadArray />
        </Container>
      </div>
    </>
  );
}
