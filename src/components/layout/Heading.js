import React from "react";
import Container from "react-bootstrap/Container";

export default function Heading({ title }) {
  return (
    <>
      <Container>
        <h1>{title}</h1>
      </Container>
    </>
  );
}
