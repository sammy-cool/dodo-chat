import React from "react";
import { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Search = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = async () => {
    console.log('username', userName)
    const q = query(collection(db, "users"),where("displayName", "==", userName));

    try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
        setUser(doc.data());
        console.log('ggggggg',doc.data())
      });
      } catch (error) {
        setErr(true);
        alert(error.message)
      }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };
  
  return (
    <div className="search">
      <div className="search-form">
        <input type="text" placeholder="Find a user" onKeyDown={handleKey} onChange={( e )=> setUserName(e.target.value) } />
      </div>
      {err && <span>User not found!</span>}
      { user && <div className="user-chat">
        <img
          src={ user.photoURL }
          alt="user-chat"
        />
        <div className="user-chat-info">
          <span>{ user.displayName }</span>
        </div>
      </div>}
    </div>
  );
};

export default Search;
