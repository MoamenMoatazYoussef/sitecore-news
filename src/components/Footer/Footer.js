// © 2019 ITWorx All rights reserved  | Privacy Policy
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => (
  <div className="Footer w-100 black-background py-4">
    <Container>
      <Row>
        <Col lg={6}>
          <div className="d-flex justify-content-lg-start">
            <span className="text-white small-text">
              © 2019 ITWorx All rights reserved |{" "}
              <a className="small-text custom-link" href="#">
                Privacy Policy
              </a>
            </span>
          </div>
        </Col>
        <Col lg={6}>
          <div className="d-flex justify-content-lg-end">
            <span>
              <a className="custom-link small-text" href="#">F </a>
              <a className="custom-link small-text" href="#">in </a>
              <a className="custom-link small-text" href="#">twitter </a>
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
