import moment from "moment/moment";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {

  const [timeAgo, setTimeAgo] = useState("");
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    const time =   moment.unix(message.date.seconds).fromNow();
    setTimeAgo(time);
    ref.current?.scrollIntoView({
      behavior: "smooth"
    })
  }, [message]);

  return (
    <div ref={ref} className={ `message ${message.senderId === currentUser.uid && "owner"}` }>
      <div className="messageInfo">
        <img
          src= { message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL }
          alt="msngr-profile"
        />
        <span>{timeAgo}</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        { message.img && <img
          src={message.text}
          alt="rcvr-profile"
        /> }
      </div>
    </div>
  );
};

export default Message;
