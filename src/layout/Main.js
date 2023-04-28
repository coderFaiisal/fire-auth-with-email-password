import React from "react";
import { Link, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <nav className="text-center mb-5 bg-info p-2  ">
        <Link
          className="text-decoration-none bg-success text-white p-2 rounded"
          to="/register"
        >
          Register
        </Link>
        <Link
          className="text-decoration-none m-4 bg-success text-white p-2 rounded"
          to="login"
        >
          Login
        </Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
