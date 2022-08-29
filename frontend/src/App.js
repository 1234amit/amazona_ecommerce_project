import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import data from "./data";

const App = () => {
  return (
    <div>
      <header>
        <Navbar bg='dark' variant='dark' expand='lg'>
          <Container>
            <Navbar.Brand href='#home'>Amazona</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link href='#home'>Home</Nav.Link>
                <Nav.Link href='#link'>Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <main>
        <h1 className='text-center'>Featured Product</h1>
        <div className='products'>
          {data.products.map((product) => (
            <div className='product' key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className='product-info'>
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>${product.price}</strong>
                </p>
                <button>Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
