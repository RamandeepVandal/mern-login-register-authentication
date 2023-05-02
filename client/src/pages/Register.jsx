import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  // user input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // register user
  const registerUser = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:5000/api/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await res.json();

    // if the registration was successful
    if (data.status === "ok") {
      navigate("/", { replace: true });
    }
  };

  // navigate to login
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/");
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center p-5 ms-5 me-5 mb-5">
      <h1>Register</h1>
      <form className="card ms-3 me-3 mb-3 p-5" onSubmit={registerUser}>
        <div className="d-flex flex-column mt-2">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="d-flex flex-column mt-2">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="d-flex flex-column mt-2">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="mt-3 btn btn-dark">
          Register
        </button>
        <a href="#" className="mt-2" onClick={navigateLogin}>
          Have an account? Login here.
        </a>
      </form>
    </div>
  );
};
