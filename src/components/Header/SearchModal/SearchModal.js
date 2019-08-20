import React from "react";
import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchModal.css";

function SearchModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex align-items-center">
      <a className="search-button" href="#home" onClick={handleShow}>
        <FontAwesomeIcon icon={faSearch} className="font-weight-light" />
      </a>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="full-transparent"
      >
        <div className="full-transparent d-flex justify-content-stretch align-item-stretch custom-form-div">
          <input
            type="text"
            placeholder="Search..."
            className="custom-form w-100 d-inline full-transparent text-white large-text px-4 py-4"
          />
          <button type="submit" className="full-transparent custom-form text-white px-4 py-4">
            <FontAwesomeIcon icon={faSearch} className="font-weight-light" />
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default SearchModal;
