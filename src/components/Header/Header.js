import React from "react";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";
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
        {/* <a className="search-button d-flex align-items-center" href="#home">
          <FontAwesomeIcon icon={faSearch} className="font-weight-light" />
        </a> */}

        <SearchModal />
      </Navbar>
    </Container>
  </div>
);

export default Header;

// const Header = ({dropdownLists }) => (
//   <Container>
//     <Navbar bg="light" expand="lg" className="justify-content-between">
//       <Navbar.Brand href="#home">
//         <SvgItworxLogo width="60%" />
//       </Navbar.Brand>

//       {/* TODO: What are these? */}
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />{" "}
//       <Navbar.Collapse id="basic-navbar-nav">

//         {/* <Nav className="mr-auto">
//           {dropdownLists.map(headerItem => (
//             <NavDropdown className="inherit-padding" title={headerItem.title} id={headerItem.id}>
//               {headerItem.itemList.map(item => (
//                 <NavDropdown.Item href={item.link} className="custom-dropdown-item">
//                   {item.title}
//                 </NavDropdown.Item>
//               ))}
//             </NavDropdown>
//           ))}
//         </Nav> */}

//       </Navbar.Collapse>

//       <a href="#home" className="search-button">
//         <FontAwesomeIcon icon={faSearch} className="font-weight-light" />
//       </a>
//     </Navbar>
//   </Container>
// );
