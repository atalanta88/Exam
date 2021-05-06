import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form, Col, Container, Alert } from "react-bootstrap";
import FormError from "../../../common/FormError";
import axios from "axios";
import AuthContext from "../../../../context/AuthContext";
import { API_HOUSINGS } from "../../../../constants/api";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Enter your first name")
    .min(2, "Your name needs to be atleast 3 characters"),
  adress: yup
    .string()
    .required("Enter the housing adress")
    .min(2, "Your name needs to be atleast 4 characters"),

  type: yup
    .string()
    .required("Enter housing type")
    .min(2, "Your name needs to be atleast 3 characters"),

  price: yup
    .number()
    .required("Enter a price")
    .integer("Enter a price without commas"),

  description: yup
    .string()
    .required("Enter the housing description")
    .min(10, "The message must be at least 10 characters"),

  imageone: yup
    .mixed()
    .test("fileExists", "Please upload a file", (value) => !!value.length),
  imagetwo: yup
    .mixed()
    .test("fileExists", "Please upload a file", (value) => !!value.length),
  imagethree: yup
    .mixed()
    .test("fileExists", "Please upload a file", (value) => !!value.length),
  imagefour: yup
    .mixed()
    .test("fileExists", "Please upload a file", (value) => !!value.length),
});

export default function AddHousing() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [file, setFile] = useState([]);
  const handleInputChange = (event) => {
    setFile([...file, event.target.files[0]]);
  };

  const [auth, setAuth] = useContext(AuthContext);
  const url = API_HOUSINGS;

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);

    //Below code must be in this order(delete data on top), or else the code will return a server 500 error(internal server error)

    delete data["imageone"];
    delete data["imagetwo"];
    delete data["imagethree"];
    delete data["imagefour"];

    let formData = new FormData();
    formData.append(`files.imageone`, file[0], file[0].name);
    formData.append(`files.imagetwo`, file[1], file[1].name);
    formData.append(`files.imagethree`, file[2], file[2].name);
    formData.append(`files.imagefour`, file[3], file[3].name);

    formData.append("data", JSON.stringify(data));

    const token = auth.jwt;

    try {
      axios.defaults.headers.common = { Authorization: `bearer ${token}` };
      const response = await axios.post(url, formData);
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  /*    try {
      axios.defaults.headers.common = { Authorization: `bearer ${token}` };
      const response = await axios.post(url, formData);
      console.log("response", response);
      if (response.status === 200)
        return (
          <>
            <Alert variant="success">
              <Alert.Heading>Hey, nice to see you</Alert.Heading>
              <p>Aww yeah</p>
            </Alert>
          </>
        );
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }*/

  /*    try {
      axios.defaults.headers.common = { Authorization: `bearer ${token}` };
      const response = await axios.post(url, formData);
      console.log("response", response.formData);
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }*/

  console.log(errors);

  return (
    <>
      <Container>
        <Form disabled={submitting} onSubmit={handleSubmit(onSubmit)}>
          {serverError && <FormError>{serverError}</FormError>}
          <Form.Row>
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
          </Form.Row>
          <Form.Row>
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
          </Form.Row>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              as="textarea"
              ref={register}
              rows={3}
            />
            {errors.description && <span>{errors.description.message}</span>}
          </Form.Group>
          <Form.Row>
            <Col>
              <Form.Group controlId="formImage.one">
                <Form.Label className="imageone">Housing exterior</Form.Label>
                <Form.Control
                  name="imageone"
                  type="file"
                  ref={register}
                  onChange={handleInputChange}
                />
                {errors.imageone && (
                  <span className="text-danger">{errors.imageone.message}</span>
                )}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formImage.two">
                <Form.Label className="imagetwo">Housing interior</Form.Label>
                <Form.Control
                  name="imagetwo"
                  type="file"
                  ref={register}
                  onChange={handleInputChange}
                />
                {errors.imagetwo && (
                  <span className="text-danger">{errors.imagetwo.message}</span>
                )}
              </Form.Group>{" "}
            </Col>{" "}
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group controlId="formImage.three">
                <Form.Label className="imagethree">Housing interior</Form.Label>

                <Form.Control
                  name="imagethree"
                  type="file"
                  ref={register}
                  onChange={handleInputChange}
                />
                {errors.imagethree && (
                  <span className="text-danger">
                    {errors.imagethree.message}
                  </span>
                )}
              </Form.Group>{" "}
            </Col>
            <Col>
              <Form.Group controlId="formImage.four">
                <Form.Label className="imagefour">Housing interior</Form.Label>

                <Form.Control
                  name="imagefour"
                  type="file"
                  ref={register}
                  onChange={handleInputChange}
                />
                {errors.imagefour && (
                  <span className="text-danger">
                    {errors.imagefour.message}
                  </span>
                )}
              </Form.Group>
            </Col>
          </Form.Row>
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

/*import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAxios from "../../../hooks/useAxios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import FormError from "../../common/FormError";

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

  const http = useAxios();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);

    console.log(data);

    try {
      const response = await http.post("/housings", data);
      console.log("response", response.data);
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
}*/

/**/
