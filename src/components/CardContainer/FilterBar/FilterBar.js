import React from "react";
import "./FilterBar.css";

const FilterBar = ({ filters, onFilterClick }) => (
  <div className="my-3 px-5 d-flex justify-content-lg-between justify-content-md-center">
    <div className="order-lg-2">
      <span
        className="filter-selector font-weight-bold px-1"
        onClick={() => onFilterClick("none")}
      >
        SHOW ALL
      </span>
    </div>
    <div className="order-lg-1">
      {filters.map(filter => (
        <span
          className="filter-selector font-weight-bold px-1"
          onClick={() => onFilterClick(filter)}
        >
          {filter.toUpperCase()}
        </span>
      ))}
    </div>
  </div>
);

export default FilterBar;
