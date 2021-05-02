import PropTypes from "prop-types";
import React from "react";

const SearchResultMenuItem = ({ item }) => (
  <div>
    <img
      style={{
        height: "24px",
        marginRight: "10px",
        width: "24px",
      }}
    />
    <span>{item.original_title}</span>
  </div>
);

SearchResultMenuItem.propTypes = {
  item: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
  }).isRequired,
};

export default SearchResultMenuItem;
