import { Typeahead } from "react-bootstrap-typeahead";
import { useState, useEffect } from "react";
import { API_HOUSINGS } from "../../../../constants/api";

const SearchDropDown = () => {
  const [options, setOptions] = useState([]);

  //fetch function

  useEffect(function () {
    async function getHotels() {
      try {
        const response = await fetch(API_HOUSINGS);
        const result = await response.json();
        const options = result.map((hotel) => ({
          avatar_url: hotel.imageone.formats.thumbnail.url,
          id: hotel.id,
          name: hotel.name,
        }));
        setOptions(options);
      } catch (error) {}
    }
    getHotels();
  }, []);

  //filter function
  const filterByCallback = (option, props) =>
    option.name.toLowerCase().indexOf(props.text.toLowerCase()) !== -1;

  return (
    <>
      <Typeahead
        filterBy={filterByCallback}
        id="custom-filtering-example"
        labelKey="name"
        options={options}
        placeholder="Search for housing..."
        renderMenuItemChildren={(option) => (
          <>
            <img
              alt={option.name}
              src={option.avatar_url}
              style={{
                height: "24px",
                marginRight: "10px",
                width: "24px",
              }}
            />
            <span>{option.name}</span>
          </>
        )}
      />
    </>
  );
};

export default SearchDropDown;

/*import fetch from "isomorphic-fetch";
import React, { useState } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { API_HOUSINGS } from "../../../../constants/api";

const SearchDropDown = () => {
  const [options, setOptions] = useState([]);

  fetch(`${API_HOUSINGS}`)
    .then((resp) => resp.json())
    .then(({ items }) => {
      const options = items.map((housing) => ({
        avatar_url: housing.imageone.formats.thumbnail.url,
        id: housing.id,
        name: housing.name,
      }));
      setOptions(options);
      console.log(options.id);
    });
  // Bypass client-side filtering by returning `true`. Results are already
  // filtered by the search endpoint, so no need to do it again.
  //const filterBy = () => true;
  const filterBy = (option, props) =>
    option.name.toLowerCase().indexOf(props.text.toLowerCase()) !== -1;

  return (
    <AsyncTypeahead
      filterBy={filterBy}
      id="async-example"
      labelKey="name"
      options={options}
      placeholder="Search for housing..."
      renderMenuItemChildren={(option) => (
        <>
          <img
            alt={option.name}
            src={option.avatar_url}
            style={{
              height: "24px",
              marginRight: "10px",
              width: "24px",
            }}
          />
          <span>{option.name}</span>
        </>
      )}
    />
  );
};

export default SearchDropDown;*/
/*import { Typeahead } from "react-bootstrap-typeahead";
import { useState, useEffect } from "react";
import { API_HOUSINGS } from "../../../../constants/api";

const SearchDropDown = () => {
  const [options, setOptions] = useState([]);

  useEffect(function () {
    async function getHotels() {
      try {
        const response = await fetch(API_HOUSINGS);
        const result = await response.json();
        const options = result.map((hotel) => ({
          avatar_url: hotel.imageone.formats.thumbnail.url,
          id: hotel.id,
          name: hotel.name,
        }));
        setOptions(options);
      } catch (error) {}
    }
    getHotels();
  }, []);

  const filterByCallback = (option, props) =>
    option.name.toLowerCase().indexOf(props.text.toLowerCase()) !== -1;

  return (
    <>
      <Typeahead
        filterBy={filterByCallback}
        id="custom-filtering-example"
        labelKey="name"
        options={options}
        placeholder="Search for housing..."
        renderMenuItemChildren={(option) => (
          <>
            <img
              alt={option.name}
              src={option.avatar_url}
              style={{
                height: "24px",
                marginRight: "10px",
                width: "24px",
              }}
            />
            <span>{option.name}</span>
          </>
        )}
      />
    </>
  );
};

export default SearchDropDown;*/
/* import fetch from "isomorphic-fetch";
import React, { useState } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { API_HOUSINGS } from "../../../../constants/api";

const SearchDropDown = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const handleSearch = (query) => {
    setIsLoading(true);

    fetch(`${API_HOUSINGS}/?name="${query}"`)
      .then((resp) => resp.json())
      .then(({ items }) => {
        const options = items.map((housing) => ({
          avatar_url: housing.imageone.formats.thumbnail.url,
          id: housing.id,
          name: housing.name,
        }));
        setOptions(options);
        setIsLoading(false);
        console.log(options.id);
      });
  };
  // Bypass client-side filtering by returning `true`. Results are already
  // filtered by the search endpoint, so no need to do it again.
  const filterBy = () => true;

  return (
    <AsyncTypeahead
      filterBy={filterBy}
      id="async-example"
      isLoading={isLoading}
      labelKey="name"
      minLength={1}
      onSearch={handleSearch}
      options={options}
      placeholder="Search for housing..."
      renderMenuItemChildren={(option, props) => (
        <>
          <img
            alt={option.name}
            src={option.avatar_url}
            style={{
              height: "24px",
              marginRight: "10px",
              width: "24px",
            }}
          />
          <span>{option.name}</span>
        </>
      )}
    />
  );
};

export default SearchDropDown;*/

/*import { Typeahead } from "react-bootstrap-typeahead";
import { useState, useEffect } from "react";
import { API_HOUSINGS } from "../../../../constants/api";

const SearchDropDown = () => {
  const [options, setOptions] = useState([]);

  useEffect(function () {
    async function getHotels() {
      try {
        const response = await fetch(API_HOUSINGS);
        const result = await response.json();
        const options = result.map((hotel) => ({
          avatar_url: hotel.imageone.formats.thumbnail.url,
          id: hotel.id,
          name: hotel.name,
        }));
        setOptions(options);
      } catch (error) {}
    }
    getHotels();
  }, []);

  const filterByCallback = (option, props) =>
    option.name.toLowerCase().indexOf(props.text.toLowerCase()) !== -1;

  return (
    <>
      <Typeahead
        filterBy={filterByCallback}
        id="custom-filtering-example"
        labelKey="name"
        options={options}
        placeholder="Search for a hotel..."
        renderMenuItemChildren={(option) => (
          <>
            <img
              alt={option.name}
              src={option.avatar_url}
              style={{
                height: "24px",
                marginRight: "10px",
                width: "24px",
              }}
            />
            <span>{option.name}</span>
          </>
        )}
      />
    </>
  );
};

export default SearchDropDown;*/
/*
import fetch from "isomorphic-fetch";
import React, { useState } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { API_HOUSINGS } from "../../../../constants/api";

const SearchDropDown = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const handleSearch = (query) => {
    setIsLoading(true);

    fetch(API_HOUSINGS)
      .then((resp) => resp.json())
      .then(({ items }) => {
        const options = items.map((i) => ({
          avatar_url: i.imageone.formats.thumbnail.url,
          id: i.id,
          name: i.name,
        }));
        setOptions(options);
        setIsLoading(false);
        console.log(options.id);
      });
  };
  // Bypass client-side filtering by returning `true`. Results are already
  // filtered by the search endpoint, so no need to do it again.
  const filterBy = () => true;

  return (
    <AsyncTypeahead
      filterBy={filterBy}
      id="async-example"
      isLoading={isLoading}
      labelKey="name"
      minLength={1}
      onSearch={handleSearch}
      options={options}
      placeholder="Search for a Github user..."
      renderMenuItemChildren={(option, props) => (
        <>
          <img
            alt={option.name}
            src={option.avatar_url}
            style={{
              height: "24px",
              marginRight: "10px",
              width: "24px",
            }}
          />
          <span>{option.name}</span>
        </>
      )}
    />
  );
};

export default SearchDropDown;
*/
/*
import fetch from "isomorphic-fetch";
import React, { Fragment, useState, useEffect } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { SEARCH_URL } from "../../../constants/api";
//const SEARCH_URI = "https://api.github.com/search/users";
/*
const SearchDropDown = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);
  
    const handleSearch = (query) => {
      setIsLoading(true);
  
      fetch(`${SEARCH_URL}housings?${query}`)
        .then((resp) => resp.json())
  
        .then(({ items }) => {
          const options = items.map((i) => ({
            imageone: i.imageone.url,
            id: i.id,
            name: i.name,
          }));
          setOptions(options);
          setIsLoading(false);
          console.log(options.id);
        });
    };
  
    // Bypass client-side filtering by returning `true`. Results are already
    // filtered by the search endpoint, so no need to do it again.
    const filterBy = () => true;
  
    return (
      <AsyncTypeahead
        filterBy={filterBy}
        id="async-example"
        isLoading={isLoading}
        labelKey="name"
        minLength={1}
        onSearch={handleSearch}
        options={options}
        placeholder="Search for a Github user..."
        renderMenuItemChildren={(option, props) => (
          <Fragment>
            <img
              alt={option.name}
              src={option.imageone.url}
              style={{
                height: "24px",
                marginRight: "10px",
                width: "24px",
              }}
            />
            <span>{option.name}</span>
          </Fragment>
        )}
      />
    );
  };

  export default SearchDropDown;




import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Typeahead, withAsync } from "react-bootstrap-typeahead";
const AsyncTypeahead = withAsync(Typeahead);

export default function SearchDropDown() {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  return (
    <>
      <Container>
        <AsyncTypeahead
          isLoading={this.state.isLoading}
          labelKey={(option) => `${option.login}`}
          onSearch={(query) => {
            this.setState({ isLoading: true });
            fetch(
              `https://cryptic-reaches-17096.herokuapp.com/housings?q=${query}`
            )
              .then((resp) => resp.json())
              .then((json) =>
                this.setState({
                  isLoading: false,
                  options: json.slug,
                })
              );
          }}
          options={this.state.options}
        />
      </Container>
    </>
  );
}
*/
