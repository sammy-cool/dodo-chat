import React from "react";
import addFreind from "../images/add-user.png";
import menu from "../images/option.png";
import vCall from "../images/video-camera.png";
import Messages from "./Messages";
import Input from "./Input";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const Chater = () => {

  const { data } = useContext(ChatContext);

  return (
    <div className="chater">
      <div className="chaterInfo">
        <h3>{data.user?.displayName}</h3>
        <div className="chaterIcons">
          <img src={vCall} alt="vCall" />
          <img src={addFreind} alt="addFreind" />
          <img src={menu} alt="menu" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chater;
