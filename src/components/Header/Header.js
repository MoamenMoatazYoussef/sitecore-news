import React from "react";
import { Container, Navbar, NavDropdown } from "react-bootstrap";
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
            <NavDropdown
              bsPrefix="custom-dropdown-menu"
              title={dropdownList.title}
              className="d-flex align-items-center mx-2"
            >
              {/* <div className="custom-dropdown-menu"> */}
                {dropdownList.itemList.map(item => (
                  <NavDropdown.Item
                    bsPrefix="custom-dropdown-menu-item"
                    href={item.link}
                    className="font-weight-bold pl-3 py-2"
                  >
                    {/* bsPrefix="custom-dropdown"  */}
                    {item.title}
                  </NavDropdown.Item>
                ))}
              {/* </div> */}
            </NavDropdown>
          ))}
        </Navbar.Collapse>
        <SearchModal />
      </Navbar>
    </Container>
  </div>
);

export default Header;
