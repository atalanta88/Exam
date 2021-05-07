import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosNoAuth from "../../../../hooks/useAxiosNoAuth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal, Button, Form } from "react-bootstrap";
import FormError from "../../../common/FormError";
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
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Your name needs to be atleast 3 characters"),
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  housingname: yup
    .string()
    .required("The establishment is required")
    .min(3, "The establishment name needs to be atleast 5 characters"),
  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "Your message needs to be atleast 10 characters"),
});

export default function AddEnquiry() {
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
      const response = await http.post("/Enquiries", data);
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Send us a message
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enquiry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form disabled={submitting} onSubmit={handleSubmit(onSubmit)}>
            {serverError && <FormError>{serverError}</FormError>}
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" ref={register} />
              {errors.name && <FormError>{errors.name.message}</FormError>}
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" ref={register} />
              {errors.email && <span>{errors.email.message}</span>}
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Establishment</Form.Label>
              <Form.Control name="housingname" ref={register} />

              {errors.housingname && (
                <FormError>{errors.housingname.message}</FormError>
              )}
            </Form.Group>
            <Form.Group controlId="textarea">
              <Form.Label>Your message</Form.Label>
              <Form.Control
                name="message"
                ref={register}
                as="textarea"
                rows={3}
              />
              {errors.message && (
                <FormError>{errors.message.message}</FormError>
              )}
            </Form.Group>
            <Button type="submit" value="Submit" variant="primary">
              {submitting ? "Submitting..." : "Submit"}
            </Button>
          </Form>
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
