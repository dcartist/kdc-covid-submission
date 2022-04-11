import React from 'react'
import {Navbar, Nav, Container } from "react-bootstrap"
import { Link } from 'react-router-dom';
export default function Navigation() {
  return (
    <>
    
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className="text-white">
    <Container>
    <Navbar.Brand to="/" className="logo" as={Link} >ABC Schools</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link to="/about" as={Link} eventKey={2}>About</Nav.Link>
        <Nav.Link to="/exposure" as={Link} eventKey={2}>Report Covid Case</Nav.Link>
        <Nav.Link to="/dashboard" as={Link} eventKey={2}>Case Dashboard</Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
    </>
  )
}
