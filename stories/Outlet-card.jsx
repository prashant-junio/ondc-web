import React from "react";
import PropTypes from "prop-types";
import "./outlet-card.css";
import "../ui/src/index.scss";

export const OutletCard = ({ list }) => {
  return (
    <div className="outlet-card-container">
      <div className="outlet-card-header d-flex flex-row align-items-center justify-content-between">
        <div className=" d-flex flex-row align-items-center justify-content-between">
          <div className="outlet-card-icon me-2"></div>
          <div className="outlet-card-label">
            <p>Nutty Gritties</p>
            <div className="d-flex flex-row">
              <p className="me-2">4.2</p>
              <p>4000+ Shoppers</p>
            </div>
          </div>
        </div>

        <div className="outlet-card-button">
          <p>Shop Now</p>
        </div>
      </div>
      {/* <p className="category-list-header">Find stores by category</p>

      <div className="d-flex flex-row justify-content-start overflow-scroll">
        {list.map((item, i) => {
          return (
            <div
              key={i}
              className="category-item flex-shrink-0 d-flex flex-column justify-content-between align-items-center"
            >
              <div className="category-img"></div>
              <p className="category-item-label">{item.label}</p>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

OutletCard.propTypes = {
  list: PropTypes.array,
};

OutletCard.defaultProps = {
  list: [],
};
