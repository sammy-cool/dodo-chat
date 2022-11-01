import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <h1 className="logo">DODO | chat</h1>
      <div className="user">
        <img src={currentUser.photoURL} alt="dp" />
        <h2>{currentUser.displayName}</h2>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
