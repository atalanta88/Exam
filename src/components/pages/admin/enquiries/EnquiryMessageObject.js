import React from "react";
import { Accordion, Card } from "react-bootstrap";

import PropTypes from "prop-types";

function EnquiryObject({ email, message, name, housingname }) {
  return (
    <>
      <Accordion>
        <Card border="light" className="inner-accordion-card">
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <Card.Header as="h6">
              To {housingname} from {name}
            </Card.Header>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="inner-accordion-card-body">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Message to {housingname}</Card.Title>
                  <Card.Text>{message} </Card.Text>
                  <Card.Text>
                    <small className="text-muted">Sent from {email}</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
}

EnquiryObject.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default EnquiryObject;
