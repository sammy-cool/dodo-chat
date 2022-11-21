import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";
import brandLogo from "../images/dodo-chat-logo1.png"

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <a href="/">
      <img className="logo" src={brandLogo} alt="brandLogo" />
      </a>
      <div className="user">
        <img src={currentUser.photoURL} alt="dp" />
        <h2>{currentUser.displayName}</h2>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
