import React from "react";
import { Container, Navbar, Nav, NavDropdown, Dropdown } from "react-bootstrap";
import "./Header.css";

import SearchModal from "./SearchModal/SearchModal";

import SvgItworxLogo from "../../icons/ItworxLogo.js";

const Header = ({ dropdownLists }) => (
  <div className="w-100 fixed-top zindex-fixed white-background">
    <Container className="">
      <Navbar
        expand="lg"
        className="justify-content-between align-items-stretch"
      >
        <Navbar.Brand href="#home" className="text-left">
          <SvgItworxLogo width="60%" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />{" "}
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-left align-items-stretch"
        >
          {dropdownLists.map(dropdownList => (
            <NavDropdown title={dropdownList.title} className="custom-dropdown d-flex align-items-center">
                {dropdownList.itemList.map(item => (
                  <NavDropdown.Item href={item.link}>{item.title}</NavDropdown.Item>
                ))}
            </NavDropdown>
          ))}
        </Navbar.Collapse>
        <SearchModal />
      </Navbar>
    </Container>
  </div>
);

export default Header;
