import React from "react";
import PropTypes from "prop-types";
import "./search.css";
import "../ui/src/index.scss";

const SearchItem = () => {
  return (
    <div className="search-item-container mt-2">
      <div>
        <div className="search-item-header d-flex flex-row justify-content-start">
          <div className="search-item-header-img"></div>
          <div className="search-item-header-label">
            <p>ITC Store</p>
            <p>1 item in cart</p>
          </div>
        </div>
        <div className="search-item-info-section d-flex flex-row justify-content-center">
          <div>
            <p>Bingo! Hashtags cream & Onion Potato Chips</p>
            <p>22.5g</p>
            <p>$10</p>

            <div>
              <p>View all stores selling this</p>
              <div></div>
            </div>
          </div>
          <div className="search-item-product-img"></div>
        </div>
      </div>
    </div>
  );
};

export const Search = ({ list }) => {
  return (
    <div className="search-container">
      <div className="search-input-container d-flex flex-row justify-content-between">
        <div className="search-back-icon"></div>
        <input type="text" className="search-input" />
        <div className="search-cross-icon"></div>
      </div>
      <div className="search-type-container d-flex flex-row justify-content-between">
<p>Product</p>
<p>Store</p>
      </div>
      <SearchItem />
      <SearchItem />
      <SearchItem />
      <SearchItem />
      <SearchItem />
    </div>
  );
};

Search.propTypes = {
  list: PropTypes.array,
};

Search.defaultProps = {
  list: [],
};
