import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText
} from "reactstrap";

import { NavLink } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="#0e101c" dark expand="md" className="mb-5">
        <NavLink className="navbar-brand" to="/forms">
          Form React
        </NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/forms/"
              >
                Sign up
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/lists/"
              >
                List
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>{""}</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
