import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import MetaData from "../metaData";
import brandLogo from "../images/dodo-chat-logo1.png"

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
        <img className="logo" src={brandLogo} alt="brandLogo" />
        <h2 className="title">Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
          {error && <span>Something went wrong</span>}
        </form>
        <p>
          no account?no worry! &nbsp; <Link to="/register">Register</Link>&nbsp; here!
        </p>
      </div>
    </div>
    </>
  );
};

export default Login;
