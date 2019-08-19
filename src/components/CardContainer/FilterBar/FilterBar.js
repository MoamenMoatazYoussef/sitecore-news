import React from "react";
import "./FilterBar.css";

const FilterBar = ({ filters, onFilterClick }) => (
  <div className=" my-3 d-flex justify-content-between">
    <div className="mx-5">
      {filters.map(filter => (
        <span
          className="filter-selector font-weight-bold px-1"
          onClick={() => onFilterClick(filter)}
        >
          {filter.toUpperCase()}
        </span>
      ))}
    </div>
    <div className="mx-5">
      <span
        className="filter-selector font-weight-bold px-1"
        onClick={() => onFilterClick('none')}
      >
        SHOW ALL
      </span>
    </div>
  </div>
);

export default FilterBar;
