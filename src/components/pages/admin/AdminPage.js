import React, { Container, Jumbotron } from "react-bootstrap";
import Heading from "../../layout/Heading";
import ContactList from "./contact/ContactList";
import EnquiriesList from "./enquiries/EnquiriesList";
import AddHousing from "./housing/AddHousing";

export default function AdminPage() {
  return (
    <>
      <Heading title="Admin inbox" />

      <Jumbotron fluid>
        <Container>
          <ContactList />
        </Container>
      </Jumbotron>
      <Jumbotron fluid>
        <Container>
          <EnquiriesList />
        </Container>
      </Jumbotron>
      <Jumbotron fluid>
        <Container>
          <AddHousing />
        </Container>
      </Jumbotron>
    </>
  );
}
