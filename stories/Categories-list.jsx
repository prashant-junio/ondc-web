import React from "react";
import PropTypes from "prop-types";
import "./category-list.css";
import "../ui/src/index.scss";

export const CategoryList = ({ list }) => {
  return (
    <div className="category-container">
      <p className="category-list-header">Find stores by category</p>

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
      </div>
    </div>
  );
};

CategoryList.propTypes = {
  list: PropTypes.array,
};

CategoryList.defaultProps = {
  list: [],
};
