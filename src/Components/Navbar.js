import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import cart from "../cart.png";
import { Link } from "react-router-dom";
const LinkStyle = { textDecoration: "none" };

function CustomNavbar({ shop }) {
  return (
    <Navbar bg="light" variant="light">
      <Container className="container">
        <Nav className="me-auto">
          <Nav.Link href="#home">
            <Link to="/" style={LinkStyle}>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link href="#features">
            <Link to="/about" style={LinkStyle}>
              about
            </Link>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <Link to="/list" style={LinkStyle}>
              Product
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/shop" style={LinkStyle}>
              <img src={cart} alt="cart" style={{ width: "50px" }} />
              {shop.length}
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
