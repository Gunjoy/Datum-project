import React from "react";
import { Button, Nav, Link, Navbar, NavDropdown } from "react-bootstrap";

export default function NaviBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>DATUM PROJECT</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>ГЛАВНАЯ</Nav.Link>
            <Nav.Link>УСЛУГИ</Nav.Link>
            <NavDropdown title="ПРОЕКТЫ" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ростов</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Ингушетия</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Саратов</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Мурманск</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Адыгея</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Калмыкия</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Курган</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                + Добавить проект
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
