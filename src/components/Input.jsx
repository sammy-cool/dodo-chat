import React from "react";
import imageGallery from "../images/image-gallery.png";
import attachement from "../images/attach-file.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="type something..." />
      <div className="send">
        <img src={attachement} alt="attachement" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={imageGallery} alt="imageGallery" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
