import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
function Newacc() {
  return (
    <>
      <div className="img-sign">
        <img
          className="mx-3"
          src="./imgs/Ecommerce-logo.png"
          alt=""
          width={100}
        />
      </div>
      <h2 className="text-sign">Create account</h2>

      <div className="sign">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your name</Form.Label>
          <Form.Control type="name" placeholder="First and last name" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Mobile number or email</Form.Label>
          <Form.Control type="Email" placeholder="" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Re-enter Password</Form.Label>
          <Form.Control type="password" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Continue
        </Button>
      </div>

      <div className="rights-sign">
        <p>© House Shop . All Rights Reserved</p>
        <a className="mx-2" href="/">
          Privacy
        </a>
        <p>|</p>
        <a href="/" className="mx-2">
          {" "}
          Policy{" "}
        </a>
        <p>|</p>
        <a href="/" className="mx-2">
          Copyright
        </a>
      </div>
    </>
  );
}

export default Newacc;
