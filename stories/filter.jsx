import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./filter.css";
import "../ui/src/index.scss";

export const Filter = ({ filters }) => {
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const [selectedFilter, setSelectedFilter] = useState();
  useEffect(() => {
    console.log("hio");
  }, []);

  const handleFilter = (item) => {
    if (selectedFilter?.[activeFilter.name]?.find((_) => _.id == item.id)) {
      setSelectedFilter({
        ...(selectedFilter || {}),
        [activeFilter.name]: selectedFilter?.[activeFilter.name]?.filter(
          (_) => _.id != item.id,
        ),
      });
      return;
    }
    if (activeFilter.type == "CHECKBOX") {
      setSelectedFilter({
        ...(selectedFilter || {}),
        [activeFilter.name]: [
          ...(selectedFilter?.[activeFilter.name] || []),
          item,
        ],
      });
    }
    if (activeFilter.type == "RADIO") {
      setSelectedFilter({
        ...(selectedFilter || {}),
        [activeFilter.name]: [item],
      });
    }
  };

  const clearAll = () => {
    setSelectedFilter(null);
  }

  const handleSelectAllFilter = () => {
    if (
      selectedFilter?.[activeFilter.name]?.length == activeFilter.options.length
    ) {
      setSelectedFilter({
        ...(selectedFilter || {}),
        [activeFilter.name]: [],
      });
      return;
    }
    setSelectedFilter({
      ...(selectedFilter || {}),
      [activeFilter.name]: activeFilter.options,
    });
  };
  return (
    <div className="filter-container">
      <div className="d-flex flex-row justify-content-between filter-header-container">
        <p>Filters</p>
        <p onClick={clearAll}>Clear all</p>
      </div>
      <div className="d-flex flex-row">
        <div className="filter-section-a-container">
          {filters.map((filter, i) => (
            <p
              key={i}
              onClick={() => {
                setActiveFilter(filter);
              }}
            >
              {filter.name}{" "}{selectedFilter?.[filter.name]?.length > 0 && selectedFilter?.[filter.name]?.length}
            </p>
          ))}
        </div>
        <div className="filter-section-b-container">
          {activeFilter.type == "CHECKBOX" && (
            <div className="d-flex flex-row justify-content-between align-items-center w-100 select-all-filter-container">
              <p>Select All</p>
              <div
                className={`filter-select-box ${selectedFilter?.[activeFilter.name]?.length == activeFilter.options.length ? "filter-select-box-active" : ""}`}
                onClick={handleSelectAllFilter}
              ></div>
            </div>
          )}

          {activeFilter.options.map((item, i) => (
            <div
              className="d-flex flex-row justify-content-between align-items-center w-100 filter-option-text-container"
              key={i}
            >
              <p>{item.name}</p>

              <div
                className={`${activeFilter.type == "CHECKBOX" ? "filter-select-box" : "filter-radio"} f ${selectedFilter?.[activeFilter.name]?.find((_) => _.id == item.id) ? "filter-select-box-active" : ""}`}
                onClick={() => {
                  handleFilter(item);
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Filter.propTypes = {
  list: PropTypes.array,
};

Filter.defaultProps = {
  list: [],
};
