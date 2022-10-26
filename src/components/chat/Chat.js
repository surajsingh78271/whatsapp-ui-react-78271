import React from "react";

// import {RiCheckDoubleFill} from "react-icons/ri"
import "./chat.css";
import Font from "./Font";

function Chat({ items }) {
  console.log(items);
  return (
    // <div className='chat-content'>
    <div className={items.checkedd ? "chat-content-focus" : "chat-content"}>
      {/* {
        <div className={items.checkedd?'chat-content-focus':'chat-content'}     >
      } */}

      <div className="chat-content-image">
        {/* <span>images</span> */}
        <img src={items.image} alt="hel" className="cover" />
      </div>
      <div className="chat-content-right">
        <div className="chat-content-right-first">
          <span className="person-name">{items.name}</span>
          {items.count > 0 ? (
            <span id="time">{items.time}</span>
          ) : (
            <span style={{ color: "grey" }}>{items.time}</span>
          )}
          {/* <span id='time'>{items.time}</span> */}
        </div>
        <div className="chat-content-right-second">
          {items.seen ? (
            <span className="msg-color">
              <Font value={items.statues} />
              {items.msg}
            </span>
          ) : (
            <span className="msg-color">{items.msg}</span>
          )}
          {/* <span>{items.msg}</span> */}
          <span id="count">{items.count}</span>
        </div>
      </div>
    </div>
  );
}

export default Chat;
