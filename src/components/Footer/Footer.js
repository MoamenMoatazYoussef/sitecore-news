// © 2019 ITWorx All rights reserved  | Privacy Policy
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => (
  <div className="Footer w-100 black-background py-4">
    <Container>
      <Row>
        <Col lg={6}>
          <div className="d-flex justify-content-lg-start justify-content-center py-lg-0 py-3">
            <span className="text-white small-text">
              © 2019 ITWorx All rights reserved |{" "}
              <a className="small-text custom-link" href="#">
                Privacy Policy
              </a>
            </span>
          </div>
        </Col>
        <Col lg={6}>
          <div className="d-flex justify-content-lg-end justify-content-center py-lg-0 py-3">
            <a className="custom-link small-text mx-3" href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a className="custom-link small-text mx-3" href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className="custom-link small-text mx-3" href="#">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
