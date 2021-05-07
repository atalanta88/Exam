import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAxios from "../../../hooks/useAxios";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import FormError from "../../common/FormError";

import Swal from "sweetalert2";

const Toast = Swal.mixin({
  showConfirmButton: false,
  timer: 3000,
  showConfirmButton: true,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const schema = yup.object().shape({
  firstname: yup
    .string()
    .required("Please enter your first name")
    .min(2, "Your name needs to be atleast 3 characters"),
  lastname: yup
    .string()
    .required("Please enter your last name")
    .min(2, "Your name needs to be atleast 4 characters"),

  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),

  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "The message must be at least 10 characters"),
});

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);

  const http = useAxios();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);

    console.log(data);

    try {
      const response = await http.post("/Contacts", data);
      console.log("response", response.data);
      if (response.data) {
        return Toast.fire({
          icon: "success",
          title: "Message sent",
        });
      }
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  console.log(errors);

  return (
    <>
      <Container>
        <Form disabled={submitting} onSubmit={handleSubmit(onSubmit)}>
          {serverError && <FormError>{serverError}</FormError>}

          <Row>
            <Col>
              <Form.Label>First name</Form.Label>
              <Form.Group controlId="formFirstName">
                <Form.Control name="firstname" ref={register} />
                {errors.firstname && <span>{errors.firstname.message}</span>}
              </Form.Group>
            </Col>

            <Col>
              <Form.Label>Last name</Form.Label>
              <Form.Group controlId="formLastName">
                <Form.Control name="lastname" ref={register} />
                {errors.lastname && <span>{errors.lastname.message}</span>}
              </Form.Group>
            </Col>
          </Row>
          <Form.Label>Email address</Form.Label>
          <Form.Group controlId="formEmail">
            <Form.Control name="email" ref={register} />
            {errors.email && <span>{errors.email.message}</span>}
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              name="message"
              as="textarea"
              ref={register}
              rows={3}
            />
          </Form.Group>
          {errors.message && <span>{errors.message.message}</span>}
          <Form.Group name="buttonSend">
            <Button type="submit" value="Submit" variant="primary">
              {submitting ? "Submitting..." : "Submit"}
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}
