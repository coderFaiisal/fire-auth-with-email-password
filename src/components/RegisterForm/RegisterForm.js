import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import app from "../../firebase/firebase.init";
import { Link } from "react-router-dom";

const auth = getAuth(app);

const RegisterForm = () => {
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setPasswordError("Pls, provide at least two uppercase");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Pls, provide at least 6 digits");
      return;
    }
    if (!/(?=.*[!@#$&*])/.test(password)) {
      setPasswordError("Pls, provide at least one special character");
      return;
    }

    setPasswordError("");

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setSuccess(true);
        form.reset();
        updateUserName(name);
        varifyEmail();
      })
      .catch((error) => {
        setPasswordError(error.message);
        console.error(error);
      });
  };

  const varifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      alert("Pls, varify your email address from your account");
    });
  };

  const updateUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log("Profile Updated");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="w-50 mx-auto border p-3 rounded">
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <h4 className="text-danger">{passwordError}</h4>
        {success && <p className="text-success">User Created Successfully</p>}
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p>
          Already have an account? Please <Link to="/login">Login</Link>
        </p>
      </Form>
    </div>
  );
};

export default RegisterForm;
