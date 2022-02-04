import React from "react";
import { Container, Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhoneAlt, FaHome, FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg">
      <div className="container">
        {/* <Container fluid> */}
        <Navbar.Brand href="/"><h1>Awadh Medicare Clinic</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link><FaHome /><Link to="/" style={{ textDecoration: 'none', color: 'grey' }}> Home</Link> </Nav.Link>
          <Nav.Link><FaRegCalendarAlt/><Link to="/bookAppointment" style={{ textDecoration: 'none', color: 'grey' }}> Book Appointment</Link> </Nav.Link>
          <Nav.Link><FaMapMarkerAlt/><Link to="/clinicLocator" style={{ textDecoration: 'none', color: 'grey' }}> Clinic Locator</Link> </Nav.Link>
          <Nav.Link><FaPhoneAlt /><Link to="/contactUs" style={{ textDecoration: 'none', color: 'grey' }}> Contact Us</Link> </Nav.Link>
        </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </div>
      </Navbar>
      <Outlet />
    </>
  );
}
export default Header;