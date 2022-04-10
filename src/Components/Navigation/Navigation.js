import React from 'react'
import {Navbar, Nav, Container } from "react-bootstrap"
export default function Navigation() {
  return (
    <>
    
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/" className="logo">ABC Schools</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/exposure">Report Covid Case</Nav.Link>
        <Nav.Link href="/dashboard">Case Dashboard</Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
    </>
  )
}
