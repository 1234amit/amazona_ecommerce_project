import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const SignInScreen = () => {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  return (
    <div>
      <Container className='small-container'>
        <h1 className='my-3'>Sign In</h1>
        <Form>
          <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' required />
          </Form.Group>
          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' required />
          </Form.Group>
          <div className='mb-3'>
            <Button type='submit'>Sign In</Button>
          </div>
          <div className='mb-3'>
            New customer?{" "}
            <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default SignInScreen;
