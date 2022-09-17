import React from "react";
import addFreind from "../images/add-user.png";
import menu from "../images/option.png";
import vCall from "../images/video-camera.png";
import Messages from "./Messages";
import Input from "./Input";

const Chater = () => {
  return (
    <div className="chater">
      <div className="chaterInfo">
        <span>Jane</span>
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
