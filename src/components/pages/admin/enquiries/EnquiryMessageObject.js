import React from "react";
import * as Icon from "react-bootstrap-icons";

import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import PropTypes from "prop-types";

function EnquiryObject({ email, message, name, housingname, id }) {
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
                <Icon.House color="grey" size={25} />
              </div>{" "}
              To {housingname} from {name}
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

EnquiryObject.propTypes = {
  name: PropTypes.string.isRequired,
};

export default EnquiryObject;
