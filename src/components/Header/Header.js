import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SvgItworxLogo from "../../icons/ItworxLogo.js";

const Header = () => (
  <Container>
    <Navbar bg="light" expand="lg" className="justify-content-between">
      <Navbar.Brand href="#home">
        <SvgItworxLogo width="60%" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <a href="#" className="search-button">
        <FontAwesomeIcon icon={faSearch} className="font-weight-light" />
      </a>
    </Navbar>
  </Container>
);

export default Header;