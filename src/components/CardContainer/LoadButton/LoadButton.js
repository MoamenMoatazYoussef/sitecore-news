import React from "react";
// import { Button } from "react-bootstrap";
import "./LoadButton.css";

export const LoadButton = ({ onClick }) => (
  <button className="custom-button px-4 py-2 font-weight-bold" onClick={() => onClick()}>
    Load More
  </button>
);
export const LoadingButton = () => (
  <button className="custom-button px-4 py-2 font-weight-bold" disabled={true}>
    Loading...
  </button>
);
