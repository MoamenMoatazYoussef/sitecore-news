import React from "react";
import { Container, Navbar, Dropdown } from "react-bootstrap";
import "./Header.css";

import CustomDropDown from "./CustomDropdown/CustomDropdown";
import CustomMenu from "./CustomDropdown/CustomMenu";
import SearchModal from './SearchModal/SearchModal';

import SvgItworxLogo from "../../icons/ItworxLogo.js";

const Header = ({ dropdownLists }) => (
  <div>
    <Container className="">
      <Navbar
        expand="lg"
        className="justify-content-between align-items-stretch"
      >
        <Navbar.Brand href="#home" className="text-left">
          <SvgItworxLogo width="60%" />
        </Navbar.Brand>
        {/* TODO: What are these? */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />{" "}
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-left align-items-stretch"
        >
          {dropdownLists.map(dropdownList => (
            <Dropdown className="d-flex align-items-center">
              <Dropdown.Toggle
                as={CustomDropDown}
                id={dropdownList.id}
                className="font-weight-bold"
              >
                {dropdownList.title}
              </Dropdown.Toggle>

              <Dropdown.Menu as={CustomMenu}>
                {dropdownList.itemList.map(item => (
                  <Dropdown.Item eventKey="1" href={item.link}>
                    {item.title}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          ))}
        </Navbar.Collapse>

        <SearchModal />

      </Navbar>
    </Container>
  </div>
);

export default Header;