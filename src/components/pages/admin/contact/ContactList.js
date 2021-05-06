import React from "react";
import { useState, useEffect } from "react";
import { Accordion, Card, Button, Table } from "react-bootstrap";
import { API_CONTACTS } from "../../../../constants/api";
import ContactMessageObject from "./ContactMessageObject";
import { Loader } from "../../../common/Loader";
import ErrorMessage from "../../../common/ErrorMessage";

function ContactList() {
  const [contacts, setContactList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(API_CONTACTS);

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
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Contact messages
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="accordion-card-body">
              <Table bordered>
                <thead>
                  <tr>
                    <th>Sender Name</th>
                  </tr>
                </thead>
              </Table>
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
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
}

export default ContactList;
