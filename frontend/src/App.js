import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";

const App = () => {
  return (
    <BrowserRouter>
      <div className='d-flex flex-column site-container'>
        <header>
          <Navbar bg='dark' variant='dark' expand='lg'>
            <Container>
              <Navbar.Brand as={NavLink} to='/'>
                Amazona
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto right-nav'>
                  <Nav.Link as={NavLink} to='/cart'>
                    <i className='fas fa-shopping-cart'></i>
                    Cart
                  </Nav.Link>

                  <Nav.Link as={NavLink} to='/login'>
                    <i className='fas fa-sign-in-alt'></i>
                    Login
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>

        <main>
          <Container className='mt-3'>
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route path='/product/:slug' element={<ProductScreen />} />
            </Routes>
          </Container>
        </main>

        <footer>
          <div className='text-center'>
            © 2022 Amit Goswami All Rights Reserved
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
