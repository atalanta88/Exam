import React from "react";
import { Accordion, Card } from "react-bootstrap";

import PropTypes from "prop-types";

function PostItem({ email, message, firstname, lastname }) {
  return (
    <>
      <Accordion>
        <Card border="light" className="inner-accordion-card">
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <Card.Header as="h6">
              {firstname} {lastname}
            </Card.Header>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="inner-accordion-card-body">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Message</Card.Title>
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

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default PostItem;
