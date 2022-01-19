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


function App() {
  return (
      <Router>
      <Header />
        <div>
          <Routes>
            <Route path='./components/home' element={<Home />} >
            </Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
