import React from "react";
import { Container } from "react-bootstrap";
import Heading from "../../layout/Heading";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <>
      <div className="hero-wrapper-contact">
        <Container className="contact-container">
          <h1 className="contact-header">
            Support<span>.</span>
          </h1>
          <p className="contact-paragraph">
            You got questions, we got answers.
          </p>
          <hr />

          <ContactForm />
        </Container>
      </div>
    </>
  );
}
