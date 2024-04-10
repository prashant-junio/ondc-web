import React from "react";
import "./search-field.scss";
import PropTypes from "prop-types";
import { images } from "../../assets/images";

export const SearchField = ({ overrideStyles }) => {
  return (
    <div
      className={`search-field-container h_48 w-100 border_radius_12 d-flex flex-row justify-content-start align-items-center padding_12 ${overrideStyles.containerClass}`}
    >
      <img src={images.SEARCH_MAGNIFY} className="h_18 w_18 margin_right_8" />
      <input className="search-field-input w-100" placeholder="Search store" />
    </div>
  );
};

SearchField.propTypes = {
  overrideStyles: PropTypes.object,
};
SearchField.defaultProps = {
  overrideStyles: {
    containerClass: "",
  },
};
