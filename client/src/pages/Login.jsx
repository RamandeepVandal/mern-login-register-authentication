import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  // user inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // register user
  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:5000/api/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    // add token to local storage if user exists
    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("Login Success");
      location.href = "/client";
    } else {
      alert("Please check your username and password");
    }
  };

  // navigate to register page
  const navigate = useNavigate();
  const navigateRegister = () => {
    navigate("/register");
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center p-5 ms-5 me-5 mb-5">
      <h1>Login</h1>
      <form className="card ms-5 me-5 mb-5 p-5" onSubmit={loginUser}>
        <div className="d-flex flex-column mt-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="d-flex flex-column mt-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="mt-3 btn btn-dark">
          Login
        </button>
        <a href="#" className="mt-2" onClick={navigateRegister}>
          Need an account? Register here.
        </a>
      </form>
    </div>
  );
};
