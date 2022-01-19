import React from "react";
import { Container, Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhoneAlt, FaHome, FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function Header() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container fluid>
      <Navbar.Brand href="/"><h1>Awadh Medicare</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="/components/home"><FaHome /> Home</Nav.Link>
        <Nav.Link href="/"><FaRegCalendarAlt/> Book Appointment</Nav.Link>
        <Nav.Link href="/"><FaMapMarkerAlt/> Clinic Locator</Nav.Link>
        <Nav.Link href="/components/contact"><FaPhoneAlt /> Contact Us</Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Container>
      </Navbar>
  );
}
export default Header;