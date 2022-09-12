import React from "react";
import addAvatar from "../images/addAvatar.png";

const Register = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">DODO | chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={addAvatar} alt="addAvatar" />
            <span>your dp</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>have account? &nbsp; Login</p>
      </div>
    </div>
  );
};

export default Register;
