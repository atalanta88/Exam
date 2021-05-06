import React, { useState } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import axios from "axios";
import SearchResultMenuItem from "./SearchResultMenuItem";

//Needs to be a class based component, as we have to handle state
function SearchDropDown() {
  state = {
    term: "",
    options: [],
    isLoading: false,
  };

  onFormSubimit = (event) => {
    //Arrow function makes sure the value of 'this' is always the instance of the search bar
    event.preventDefault(); //Stops browser from submitting form automatically and refreshing the pagee
    this.props.onSubmit(this.state.term);
  };

  onHandleSearch = async (term) => {
    this.setState({ isLoading: true });
    const response = await axios.get(
      "https://api.themoviedb.org/3/search/movie?api_key=c055530078ac3b21b64e0bf8a0b3b9e1&language=en-US&page=1&include_adult=false",
      {
        params: { query: term },
      }
    );

    //Extract details from the search
    const searchResults = response.data.results.map((i) => ({
      title: i.original_title,
      id: i.id,
    }));

    this.setState({
      isLoading: false,
      options: searchResults,
    });
  };

  {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubimit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <AsyncTypeahead
              {...this.state}
              labelKey="original_title"
              isLoading={this.state.isLoading}
              onSearch={this.onHandleSearch}
              placeholder="Enter a Movie Title..."
              renderMenuItemChildren={(option, props) => (
                <SearchResultMenuItem key={option.id} item={option} />
              )}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchDropDown();

/*
import fetch from "isomorphic-fetch";
import React, { Fragment, useState } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { SEARCH_URL } from "../../../constants/api";
//const SEARCH_URI = "https://api.github.com/search/users";

const SearchDropDown = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const handleSearch = (query) => {
    setIsLoading(true);

    fetch(`${SEARCH_URL}housings/:name?${query}`)
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
