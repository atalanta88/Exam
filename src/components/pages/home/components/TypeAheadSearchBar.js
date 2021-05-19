import { API_HOUSINGS } from "../../../../constants/api";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import { LinkContainer } from "react-router-bootstrap";
import { Loader } from "../../../common/Loader";

function TypeaheadArray() {
  const [housing, setHousing] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredHousing, setFilteredHousing] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(API_HOUSINGS)
      .then((response) => {
        setHousing(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setFilteredHousing(
      housing.filter((housing) =>
        housing.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, housing]);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <>
      <Container className="typeahead-search-wrapper">
        <Dropdown>
          <Form>
            <Dropdown.Toggle variant="typeahead" id="dropdown-basic">
              <FormControl
                type="text"
                placeholder="Find housing..."
                className="mr-sm-2"
                onChange={(event) => setSearch(event.target.value)}
              />{" "}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {filteredHousing.map((housing, id, imageone) => (
                <HousingDetails key={id} {...housing} image={imageone} />
              ))}
            </Dropdown.Menu>
          </Form>
        </Dropdown>
      </Container>
    </>
  );
}

const HousingDetails = (props) => {
  const { name, imageone, id } = props;

  return (
    <>
      <Dropdown.Item>
        <Image
          src={imageone.formats.thumbnail.url}
          alt={name}
          style={{ width: "40px", height: "40px" }}
          rounded
        />
        <LinkContainer to={`housing/${id}`}>
          <p>{name}</p>
        </LinkContainer>
      </Dropdown.Item>
    </>
  );
};
export default TypeaheadArray;
