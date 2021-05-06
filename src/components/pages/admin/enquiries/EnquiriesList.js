import React from "react";
import { useState, useEffect } from "react";
import { Accordion, Card, Button, Table } from "react-bootstrap";
import { API_ENQUIRIES } from "../../../../constants/api";
import EnquiryMessageObject from "./EnquiryMessageObject";
import { Loader } from "../../../common/Loader";
import ErrorMessage from "../../../common/ErrorMessage";

function EnquiriesList() {
  const [enquiries, setEnquiryList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(API_ENQUIRIES);

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
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Enquiries messages
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="accordion-card-body">
              <Table bordered>
                <thead>
                  <tr>
                    <th>Housing name</th>
                  </tr>
                </thead>
              </Table>
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
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
}

export default EnquiriesList;
