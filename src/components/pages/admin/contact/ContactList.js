import React from "react";
import { useState, useEffect, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { API_CONTACTS } from "../../../../constants/api";
import ContactMessageObject from "./ContactMessageObject";
import ErrorMessage from "../../../common/ErrorMessage";
import AuthContext from "../../../../context/AuthContext";

const url = API_CONTACTS;

function ContactList() {
  const [auth, setAuth] = useContext(AuthContext);
  const [contacts, setContactList] = useState([]);
  const [error, setError] = useState(null);
  const handleClose = () => setLgShow(false);
  const [lgShow, setLgShow] = useState(false);

  const token = auth.jwt;
  const authorizer = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(url, authorizer);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setContactList(json);
        } else {
          setError("A server error occured");
        }
      } catch (error) {
        setError(error.toString());
      }
    }
    fetchData();
    setInterval(fetchData, 9000);
  }, []);

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
        animation={false}
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
                const { id, message, firstname, lastname, email, created_at } =
                  contact;

                return (
                  <ContactMessageObject
                    key={id}
                    message={message}
                    email={email}
                    firstname={firstname}
                    lastname={lastname}
                    id={id}
                    created_at={created_at}
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
