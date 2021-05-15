import React from "react";
import { useState, useEffect, useContext } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { API_CONTACTS } from "../../../../constants/api";
import ContactMessageObject from "./ContactMessageObject";
import { Loader } from "../../../common/Loader";
import ErrorMessage from "../../../common/ErrorMessage";
import AuthContext from "../../../../context/AuthContext";

const url = API_CONTACTS;

function ContactList() {
  const [auth, setAuth] = useContext(AuthContext);
  const [contacts, setContactList] = useState([]);
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
          setContactList(json);
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
        Contact
      </Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Contact messages
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Card>
            <Card.Body className="accordion-card-body">
              {contacts.map(function (contact) {
                const { message, firstname, lastname, email } = contact;

                return (
                  <ContactMessageObject
                    message={message}
                    email={email}
                    firstname={firstname}
                    lastname={lastname}
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

export default ContactList;
