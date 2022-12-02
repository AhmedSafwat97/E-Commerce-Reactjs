import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState } from "react";

function Sign() {
  const [Email, setEmail] = useState();
  const [password, setpassword] = useState();

  function Login(e) {
    console.log(Email, password);
  }

  return (
    <div className="all-sign">
      <div className="img-sign">
        <img
          className="mx-3"
          src="./imgs/Ecommerce-logo.png"
          alt=""
          width={100}
        />
      </div>
      <h2 className="text-sign">Sign In</h2>

      <div className="sign">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={() => {
            Login();
          }}>
          Submit
        </Button>
      </div>
      <div className="New">
        <Link to="/newaccount" className="link">
          <button className="btn btn-danger">Create Your Account Now</button>
        </Link>
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
    </div>
  );
}

export default Sign;
