import React from "react";

import Heading from "../../layout/Heading";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <>
      <div className="hero-wrapper">
        <Heading title="Contact" />
        <ContactForm />
      </div>
    </>
  );
}
