import React, { Container, Row, Col, Card, CardDeck } from "react-bootstrap";
import Heading from "../../layout/Heading";
import ContactList from "./contact/ContactList";
import EnquiriesList from "./enquiries/EnquiriesList";

import AddHousing from "./housing/AddHousing";

export default function AdminPage() {
  return (
    <>
      <Container className="admin-page-wrapper">
        <Heading size="1" content="Admin Dashboard" />

        <CardDeck>
          <Card border="warning">
            <Card.Body>
              <Card.Title>Contact messages</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                To site administrator
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <ContactList />
            </Card.Body>
          </Card>{" "}
          <Card border="warning">
            <Card.Body>
              <Card.Title>Enquiry messages</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                To housing locale
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <EnquiriesList />
            </Card.Body>
          </Card>{" "}
          <Card border="success">
            <Card.Body>
              <Card.Title>Add housing</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Add new housing locale
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <AddHousing />
            </Card.Body>
          </Card>{" "}
        </CardDeck>
      </Container>
    </>
  );
}
