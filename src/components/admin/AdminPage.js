import React, { Container, Jumbotron } from "react-bootstrap";
import Heading from "../Heading";
import PostList from "./contact/PostList";
import EnquiriesList from "./enquiries/PostList";
import AddHousing from "./housings/AddHousing";

export default function AdminPage() {
  return (
    <>
      <Heading title="Admin inbox" />

      <Jumbotron fluid>
        <Container>
          <PostList />
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
