import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import './Navs.css';
const Navs = () => {
  return (
    <div>
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            <img src='/images/logo.png' alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">abous us</Nav.Link>
              <Nav.Link href="#home">explore food</Nav.Link>
              <Nav.Link href="#link">Review</Nav.Link>
              <Nav.Link href="#home">faq</Nav.Link>
              
            </Nav>
            <Nav>
            <Nav.Link id="lastnav">235648210</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

export default Navs
