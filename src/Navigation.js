import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

const NavLinks = () => {
  return (
    <Navbar.Collapse>
      <Nav pullRight>
          <NavItem eventKey={1} href="#portfolio">Portfolio</NavItem>
          <NavItem eventKey={2} href="#skills">Skills</NavItem>
          <NavItem eventKey={3} href="#about">About</NavItem>
          <NavItem eventKey={4} href="#contact">Contact</NavItem>
      </Nav>
    </Navbar.Collapse>
  );
};

const Navigation = ({ title }) => {
  return (
    <Navbar fluid fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a>{title}</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <NavLinks />
    </Navbar>
  );
};

export default Navigation;
