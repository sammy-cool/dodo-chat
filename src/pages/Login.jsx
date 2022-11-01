import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import MetaData from "../metaData";

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
    <MetaData title="Login with" />

    <div className="form-container" id="randomDashImage">
      <div className="form-wrapper">
        <h1 className="logo">DODO | chat</h1>
        <h2 className="title">Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
          {error && <span>Something went wrong</span>}
        </form>
        <p>
          no account?no worry! &nbsp; <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
    </>
  );
};

export default Login;
