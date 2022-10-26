import React from "react";
import Msg from "./msg/Msg";
import "./msgContentMsg.css";
function MsgContentMsg() {
  return (
    <div className="msg-content-msg">
      <Msg id={0} content="Hey!" time={"5:50 PM"} />
      <Msg id={1} content="Hello!" time={"5:52 PM"} />
      <Msg id={0} content="How are you?" time={"5:53 PM"} />
      <Msg id={1} content="I am Fine. What about you?" time={"5:54 PM"} />
      <Msg id={0} content="I am very well!" time={"5:58 PM"} />
      <Msg id={0} content="Ok!" time={"6:01 PM"} />
      <Msg
        id={1}
        content="Here are all the backgrounds. Let me know your favourite!"
        time={"6:04 PM"}
      />
      <Msg id={0} content="This is a beautiful" time={"6:07 PM"} />
      <Msg id={1} content="Yes that's my fave too" time={"6:13 PM"} />
    </div>
  );
}

export default MsgContentMsg;
