import React, { useContext } from "react";
import { Badge } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import CartScreen from "./Screens/CartScreen";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import { Store } from "./Store";

const App = () => {
  const { state } = useContext(Store);
  const { cart } = state;

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
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg='danger'>
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
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
              <Route path='/cart' element={<CartScreen />} />
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
