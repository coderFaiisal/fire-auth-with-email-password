import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import app from "../../firebase/firebase.init";

const auth = getAuth(app);

const Login = () => {
  const [success, setSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleEmailBlur = (e) => {
    const email = e.target.value;
    setUserEmail(email);
  };

  const handleForgetPassword = () => {
    if (!userEmail) {
      alert("pls, provide your email address");
      return;
    }
    sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        alert("Password reset mail send your account. Pls, check");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="w-50 mx-auto border p-3 rounded">
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            name="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        {success && <p className="text-success">User successfully login</p>}
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p>
          New to this website? Pls, <Link to="/register">Register</Link>
        </p>
        <p>
          Forget Password?{" "}
          <Button onClick={handleForgetPassword} className="info">
            Reset
          </Button>
        </p>
      </Form>
    </div>
  );
};

export default Login;
