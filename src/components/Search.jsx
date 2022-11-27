import React from "react";
import { useState } from "react";
import { collection, query, where, getDocs, setDoc, updateDoc, serverTimestamp, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(collection(db, "users"),where("displayName", "==", userName));

    try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
        setUser(doc.data());
      });
      } catch (error) {
        setErr(true);
        alert(error.message)
      }
  };

  const handleSubmit = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      
      if(!res.exists()) {
        await setDoc(doc(db,"chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db,"userChats", currentUser.uid), {
          [combinedId+".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId+".date"]: serverTimestamp()
        });

        await updateDoc(doc(db,"userChats", user.uid), {
          [combinedId+".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId+".date"]: serverTimestamp()
        });
      }

    } catch (error) {}

    setUser(null);
    setUserName("");
  };
  
  return (
    <div className="search">
      <div className="search-form">
        <input type="text" value={userName} placeholder="Find a user" onKeyDown={handleSubmit} onChange={( e )=> setUserName(e.target.value) } />
      </div>
      {err && <span>User not found!</span>}
      { user && <div className="user-chat" onClick={handleSelect}>
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
