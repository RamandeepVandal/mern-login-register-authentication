import React, { useState, useEffect } from "react";
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";
import { Quote } from "../components/Quote";

export const ClientPage = () => {
  // navigation
  const navigate = useNavigate();

  // user data and authenticate token
  const [name, setName] = useState("");
  const [auth, setAuth] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const populateName = async () => {
      const req = await fetch("http://localhost:5000/api/name", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });

      const data = await req.json();

      if (data.status === "ok") {
        setName(data.name);
      } else {
        alert(data.error);
      }
    };

    if (token) {
      const user = decodeToken(token);
      if (!user) {
        localStorage.removeItem("token");
        navigate("/", { replace: true });
      } else {
        populateName();
      }
    } else {
      setAuth(false);
    }
  }, []);

  // logout and destroy the token
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  // check if auth
  auth ? null : (location.href = "/");

  return (
    <div className="container d-flex justify-content-center m-5 p-5 flex-column">
      <div className="d-flex justify-content-center mb-3">
        <h1 className="me-5">Welcome, {name}</h1>
        <button onClick={handleLogout} className="btn btn-dark">
          Logout
        </button>
      </div>
      <Quote />
    </div>
  );
};
