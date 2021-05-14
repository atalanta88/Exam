import { API_HOUSINGS } from "../../../../constants/api";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

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
    return <p>Loading housing...</p>;
  }

  return (
    <>
      <Table hover></Table>
      <Container>
        <Form>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={(e) => setSearch(e.target.value)}
          />{" "}
          <Table>
            {filteredHousing.map((housing, id, imageone) => (
              <HousingDetails key={id} {...housing} image={imageone} />
            ))}
          </Table>
        </Form>
      </Container>
    </>
  );
}

const HousingDetails = (props) => {
  const { name, imageone } = props;

  return (
    <>
      {" "}
      <tr>
        <th>
          {" "}
          <Image
            src={imageone.formats.thumbnail.url}
            alt={name}
            style={{ width: "40px", height: "40px" }}
            roundedCircle
          />
        </th>
        <th>{name}</th>
      </tr>
    </>
  );
};
export default TypeaheadArray;

/*import { API_HOUSINGS } from "../../../../constants/api";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Container from "react-bootstrap/Container";
import Container from "react-bootstrap/Container";


//import { Typeahead } from "react-bootstrap-typeahead";

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
    return <p>Loading housing...</p>;
  }

  return (
    <div className="search-results">
      <input
        type="text"
        placeholder="Find housing"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredHousing.map((housing, id, imageone) => (
        <HousingDetails key={id} {...housing} image={imageone} />
      ))}
    </div>
  );
}

const HousingDetails = (props) => {
  const { name, imageone } = props;

  return (
    <>
      {" "}
      <p>
        <img
          src={imageone.formats.thumbnail.url}
          alt={name}
          style={{ width: "24px", height: "24px" }}
        />
      </p>
      <p>{name}</p>
    </>
  );
};
export default TypeaheadArray;*/

/*      <Typeahead
        filterBy={setFilteredHousing}
        id="custom-filtering-example"
        labelKey="name"
        HousingDetails={props}
        placeholder="Search for housing..."
        renderMenuItemChildren={(props) => (
          <>
            <img
              alt={props.name}
              src={props.imageone.formats.thumbnail.url}
              style={{
                height: "24px",
                marginRight: "10px",
                width: "24px",
              }}
            />
            <span>{props.name}</span>
          </>
        )}
      />*/

/*
      <p>
        <img
          src={imageone.formats.thumbnail.url}
          alt={name}
          style={{ width: "24px", height: "24px" }}
        />
      </p>
      <p>{name}</p>


import { API_HOUSINGS } from "../../../../constants/api";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Typeahead() {
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
    return <p>Loading housing...</p>;
  }

  return (
    <div className="search-results">
      <input
        type="text"
        placeholder="Find housing"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredHousing.map((housing, id, imageone) => (
        <HousingDetails key={id} {...housing} image={imageone} />
      ))}
    </div>
  );
}

const HousingDetails = (props) => {
  const { name, imageone } = props;

  return (
    <>
      <p>
        <img
          src={imageone.formats.thumbnail.url}
          alt={name}
          style={{ width: "24px", height: "24px" }}
        />
      </p>
      <p>{name}</p>
    </>
  );
};
export default Typeahead;*/
