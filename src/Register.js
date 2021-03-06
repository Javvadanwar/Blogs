import React from "react";
import { Button, Form } from "react-bootstrap";
const Register = ({onRouteChange} ) => {
  return (
    <Form>
         <Form.Group >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={() => onRouteChange("home")}>
        Register
      </Button>
    </Form>
  );
};
export default Register;
