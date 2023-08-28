import React from "react";
import Container from "react-bootstrap/Container";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function NavBar() {
    const cartProducts = useSelector(state => state.cart)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to="/" as={Link}>
          Redux Toolkit
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link to="/" as={Link}>
              Products
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>


        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link to="/cart" as={Link}>
              My Bag {cartProducts.length}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}
