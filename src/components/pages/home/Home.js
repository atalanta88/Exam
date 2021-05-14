import React from "react";
//import SearchDropDown from "../housing/functions/SearchDropDown";
import Typeahead from "../housing/functions/test";

import Heading from "../../layout/Heading";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export default function HomePage() {
  return (
    <>
      <Heading size="1" content="Support" />
      <Container>
        <Typeahead />
      </Container>
    </>
  );
}
