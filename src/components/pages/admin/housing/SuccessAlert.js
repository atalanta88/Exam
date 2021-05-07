import { Container, Alert } from "react-bootstrap";

export default function SuccessAlert() {
  return (
    <>
      <Container>
        <Alert variant="success">
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>Aww yeah</p>
        </Alert>
      </Container>
    </>
  );
}
