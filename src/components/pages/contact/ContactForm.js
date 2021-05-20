import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAxiosNoAuth from "../../../hooks/useAxiosNoAuth";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import FormError from "../../common/FormError";
import Swal from "sweetalert2";
import * as Icon from "react-bootstrap-icons";
import Heading from "../../layout/Heading";

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
    .min(2, "Your name needs to be atleast 2 characters"),
  lastname: yup
    .string()
    .required("Please enter your last name")
    .min(2, "Your name needs to be atleast 2 characters"),

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

  const http = useAxiosNoAuth();

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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary-color" size="lg" onClick={handleShow}>
        Contact us
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <Heading size="3" content="Let's talk" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form disabled={submitting} onSubmit={handleSubmit(onSubmit)}>
              {serverError && <FormError>{serverError}</FormError>}
              <Row>
                <Col>
                  <Form.Label>First name</Form.Label>
                  <Form.Group controlId="formFirstName">
                    <Form.Control name="firstname" ref={register} autoFocus />
                    {errors.firstname && (
                      <FormError>{errors.firstname.message}</FormError>
                    )}
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Label>Last name</Form.Label>
                  <Form.Group controlId="formLastName">
                    <Form.Control name="lastname" ref={register} />
                    {errors.lastname && (
                      <FormError>{errors.lastname.message}</FormError>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Form.Label>Email address</Form.Label>
              <Form.Group controlId="formEmail">
                <Form.Control name="email" ref={register} />
                {errors.email && <FormError>{errors.email.message}</FormError>}
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  name="message"
                  as="textarea"
                  ref={register}
                  rows={3}
                />
                {errors.message && (
                  <FormError>{errors.message.message}</FormError>
                )}
              </Form.Group>
              <Form.Group name="buttonSend">
                <Button type="submit" value="Submit" variant="btn-submit">
                  {submitting ? "Submitting..." : "Submit"}
                  <Icon.ChevronRight color="white" size={20} />
                </Button>
              </Form.Group>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
