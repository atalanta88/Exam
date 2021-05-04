import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import FormError from "../../common/FormError";
import axios from "axios";
import AuthContext from "../../../context/AuthContext";
import { API_HOUSINGS } from "../../../constants/api";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your first name")
    .min(2, "Your name needs to be atleast 3 characters"),
  adress: yup
    .string()
    .required("Please enter your last name")
    .min(2, "Your name needs to be atleast 4 characters"),

  type: yup
    .string()
    .required("Please enter your first name")
    .min(2, "Your name needs to be atleast 3 characters"),

  price: yup
    .number()
    .required("Enter a price")
    .integer("Enter a price without commas"),

  description: yup
    .string()
    .required("Please enter your message")
    .min(10, "The message must be at least 10 characters"),
});

export default function AddHousing() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);

  //const http = useAxios();
  const [auth, setAuth] = useContext(AuthContext);
  const url = API_HOUSINGS;

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);

    const token = auth.jwt;

    console.log(data);

    try {
      axios.defaults.headers.common = { Authorization: `bearer ${token}` };
      await axios.post(url, data);
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
              <Form.Label>Housing name</Form.Label>
              <Form.Group controlId="formName">
                <Form.Control name="name" ref={register} />
                {errors.name && <span>{errors.name.message}</span>}
              </Form.Group>
            </Col>

            <Col>
              <Form.Label>Housing adress</Form.Label>
              <Form.Group controlId="formAdress">
                <Form.Control name="adress" ref={register} />
                {errors.adress && <span>{errors.adress.message}</span>}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Type</Form.Label>
              <Form.Group controlId="formType">
                <Form.Control name="type" ref={register} />
                {errors.type && <span>{errors.type.message}</span>}
              </Form.Group>
            </Col>

            <Col>
              <Form.Label>Price</Form.Label>
              <Form.Group controlId="formPrice">
                <Form.Control name="price" ref={register} />
                {errors.price && <span>{errors.price.message}</span>}
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              as="textarea"
              ref={register}
              rows={3}
            />
          </Form.Group>
          {errors.description && <span>{errors.description.message}</span>}
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
