import { API_HOUSINGS } from "../../../../constants/api";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
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
      .then((res) => {
        setHousing(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
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
                placeholder="Search"
                className="mr-sm-2"
                onChange={(e) => setSearch(e.target.value)}
              />{" "}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Table>
                {filteredHousing.map((housing, id, imageone) => (
                  <HousingDetails key={id} {...housing} image={imageone} />
                ))}
              </Table>
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
      {" "}
      <Dropdown.Item>
        <Link to={`housing/${id}`}>
          <tr>
            <th>
              {" "}
              <Image
                src={imageone.formats.thumbnail.url}
                alt={name}
                style={{ width: "30px", height: "30px" }}
                roundedCircle
              />
            </th>
            <th>{name}</th>
          </tr>
        </Link>
      </Dropdown.Item>
    </>
  );
};
export default TypeaheadArray;
