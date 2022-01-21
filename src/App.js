import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Header from './components/header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home';
import BookAppointment from './components/bookAppointment';
import Contact from './components/contact';
import Location from './components/location';

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Header />} >
              <Route index element={<Home />} />
              <Route path="bookAppointment" element = {<BookAppointment />} />
              <Route path="clinicLocator" element = {<Location />} />
              <Route path="contactUs" element = {<Contact />} />
            </Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
