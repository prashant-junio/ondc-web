import React from "react";
import PropTypes from "prop-types";
import "./store-list-item.css";

export const StoreListItem = ({}) => {
  return (
    <div className="store-item-container d-flex flex-row justify-content-start">
      <div className="store-item-main-img"></div>
      <div>
        <p>Nutty Gritties</p>
        <p>Organic & Dry Fruits</p>
        <div className="d-flex flex-row justify-content-between">
          <p className="me-5">4.2</p>
          <p>4000+ Shoppers</p>
        </div>

        <div className="d-flex flex-row justify-content-between">
          <p className="me-5">12.2km</p>
          <p>Phase 1, Delhi</p>
        </div>
      </div>
    </div>
  );
};

StoreListItem.propTypes = {};

StoreListItem.defaultProps = {};
