import React from "react";
import TypeaheadArray from "./components/TypeAheadSearchBar";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
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
            <hr />
            <LinkContainer to="/housing">
              <Button variant="primary-color" size="lg">
                Book stay
              </Button>
            </LinkContainer>
          </Container>
        </Jumbotron>
        <Container>
          <TypeaheadArray />
        </Container>
      </div>
    </>
  );
}
