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

      <Modal show={show} onHide={handleClose} centered className="transparent" >
        {/* <Modal.Header closeButton>
        </Modal.Header> */}
        <Modal.Body className="transparent">
          <Form.Group className="transparent d-flex justify-content-stretch align-item-stretch">
            <Form.Control type="text" placeholder="Search..." className="w-100 d-inline"/>
            <Button variant="primary" type="submit">
              <FontAwesomeIcon icon={faSearch} className="font-weight-light" />
            </Button>
          </Form.Group>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SearchModal;
