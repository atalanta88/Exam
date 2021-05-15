import React from "react";
import { useState, useEffect, useContext } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { API_ENQUIRIES } from "../../../../constants/api";
import EnquiryMessageObject from "./EnquiryMessageObject";
import { Loader } from "../../../common/Loader";
import ErrorMessage from "../../../common/ErrorMessage";
import AuthContext from "../../../../context/AuthContext";

const url = API_ENQUIRIES;

function EnquiriesList() {
  const [auth, setAuth] = useContext(AuthContext);
  const [enquiries, setEnquiryList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleClose = () => setLgShow(false);
  const [lgShow, setLgShow] = useState(false);

  const token = auth.jwt;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(url, config);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setEnquiryList(json);
        } else {
          setError("A server error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={`Error: ${error}`} />;
  }

  return (
    <>
      <Button variant="primary-color" onClick={() => setLgShow(true)}>
        Enquiries
      </Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Enquiry messages
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Card>
            <Card.Header></Card.Header>
            <Card.Body className="accordion-card-body">
              {enquiries.map(function (enquiry) {
                const { message, name, email, housingname } = enquiry;

                return (
                  <EnquiryMessageObject
                    message={message}
                    email={email}
                    name={name}
                    housingname={housingname}
                  />
                );
              })}
            </Card.Body>
          </Card>
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

export default EnquiriesList;
