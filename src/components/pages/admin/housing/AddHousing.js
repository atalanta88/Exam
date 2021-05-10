import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form, Col, Container } from "react-bootstrap";
import FormError from "../../../common/FormError";
import axios from "axios";
import AuthContext from "../../../../context/AuthContext";
import { API_HOUSINGS } from "../../../../constants/api";
import Swal from "sweetalert2";
import * as Icon from "react-bootstrap-icons";

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
      if (response.status === 200) {
        return Toast.fire({
          icon: "success",
          title: "Housing added successfully",
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
          <Form.Row>
            <Col>
              <Form.Label>Housing name</Form.Label>
              <Form.Group controlId="formName">
                <Form.Control name="name" ref={register} />
                {errors.name && <FormError>{errors.name.message}</FormError>}
              </Form.Group>
            </Col>

            <Col>
              <Form.Label>Housing adress</Form.Label>
              <Form.Group controlId="formAdress">
                <Form.Control name="adress" ref={register} />
                {errors.adress && (
                  <FormError>{errors.adress.message}</FormError>
                )}
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Label>Type</Form.Label>
              <Form.Group controlId="formType">
                <Form.Control name="type" ref={register} />
                {errors.type && <FormError>{errors.type.message}</FormError>}
              </Form.Group>
            </Col>

            <Col>
              <Form.Label>Price</Form.Label>
              <Form.Group controlId="formPrice">
                <Form.Control name="price" ref={register} />
                {errors.price && <FormError>{errors.price.message}</FormError>}
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
            {errors.description && (
              <FormError>{errors.description.message}</FormError>
            )}
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
                  <FormError>{errors.imageone.message}</FormError>
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
                  <FormError>{errors.imagetwo.message}</FormError>
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
                  <FormError>{errors.imagethree.message}</FormError>
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
                  <FormError>{errors.imagefour.message}</FormError>
                )}
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Group name="buttonSend">
            <Button type="submit" value="Submit" variant="btn-submit">
              {submitting ? "Submitting..." : "Submit"}
              <Icon.ChevronRight color="white" size={20} />
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}
