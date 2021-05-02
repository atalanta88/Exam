import Container from "react-bootstrap/Container";

export default function HotelInformation({ headline }) {
  return (
    <>
      <Container>
        <h2>{headline}</h2>
      </Container>
    </>
  );
}
