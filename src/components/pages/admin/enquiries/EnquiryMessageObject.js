import React from "react";
import * as Icon from "react-bootstrap-icons";

import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import PropTypes from "prop-types";
import Moment from "react-moment";

function EnquiryObject({ email, message, name, housingname, id, created_at }) {
  const dateToFormat = `${created_at}`;

  return (
    <>
      <Accordion key={id}>
        <Card border="light" className="inner-accordion-card">
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <Card.Header
              className="card-header-remove-background-color"
              as="h6"
            >
              <div className="svg-icon">
                <Icon.ChatRightText color="grey" size={22} />
              </div>{" "}
              {housingname}
              <Card.Text>
                <small className="text-muted">
                  {" "}
                  <Moment format="YYYY/MM/DD">{dateToFormat}</Moment>
                </small>
              </Card.Text>
            </Card.Header>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="inner-accordion-card-body">
              <Card>
                <Card.Body>
                  <Card.Text>
                    <small className="text-muted">Sender: {name}</small>
                  </Card.Text>
                  <Card.Text>{message} </Card.Text>
                  <Card.Text>
                    <small className="text-muted">Email: {email}</small>
                  </Card.Text>
                  <Card.Text>
                    {" "}
                    <Button variant="primary-color">
                      <div className="svg-icon">
                        <Icon.Reply color="white" size={20} />
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
  id: PropTypes.number.isRequired,
  housingname: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  email: PropTypes.any.isRequired,
};

export default EnquiryObject;
