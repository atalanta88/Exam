import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

import PropTypes from "prop-types";

function ContactMessageObject({ email, message, firstname, lastname }) {
  return (
    <>
      <Accordion>
        <Card border="light" className="inner-accordion-card">
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <Card.Header
              className="card-header-remove-background-color"
              as="h6"
            >
              <div className="svg-icon">
                <Icon.Envelope color="grey" size={25} />
              </div>{" "}
              {firstname} {lastname}
            </Card.Header>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="inner-accordion-card-body">
              <Card>
                <Card.Body>
                  <Card.Text>{message} </Card.Text>
                  <Card.Text>
                    <small className="text-muted">Sent from {email}</small>
                  </Card.Text>
                  <Card.Text>
                    {" "}
                    <Button variant="primary-color">
                      <div className="svg-icon">
                        <Icon.Reply color="white" size={25} />
                      </div>{" "}
                      Reply
                    </Button>
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

ContactMessageObject.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default ContactMessageObject;
