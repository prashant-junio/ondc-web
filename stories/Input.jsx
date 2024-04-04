import React from "react";
import PropTypes from "prop-types";
import "./input.css";

export const Input = ({ placeholder, type, label }) => {
  if (type == "MOBILE_NUMBER") {
    return (
      <div>
        <p className="input-label">{label}</p>
        <div className="input-field-mobile-container d-flex flex-row ">
          <div className="d-flex flex-row align-items-center">
            <p>+91</p>
            <div className="country-code-seprator" />
          </div>
          <input placeholder={placeholder} className="input-field" />
        </div>
      </div>
    );
  }
  return (
    <div>
      <p className="input-label">{label}</p>
      <div className="input-field-mobile-container">
        <input placeholder={placeholder} className="input-field" />
      </div>
    </div>
  );
};

Input.propTypes = {};

Input.defaultProps = {};
