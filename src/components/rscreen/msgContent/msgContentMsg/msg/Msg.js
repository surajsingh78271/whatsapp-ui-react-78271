import React from "react";
import "./msg.css";
function Msg(props) {
  // const [num, setNum] = useState(1);
  return (
    // <div className="msg-box">
    <div className={props.id ? "msg-box-mymsg" : "msg-box"}>
      {/* <div className="msg-box-content"> */}
      <div className={props.id ? "msg-box-content" : "msg-box-content-1"}>
        {/* {
          <div className={props.id?"msg-box-content":"msg-box-content-1"}  >
        } */}

        {/* {
          props.imgcount?(<img src="https://external-preview.redd.it/rEwFriCkfAtjOb5b-23b4tGGVcuvfaBqamYNJrgxnLM.png?auto=webp&s=f3bf0b5c90e4c5fda12ff2139781c854554fd198" alt="" id="chatting-image" />):(<span></span>)
        } */}
        {/* <div className="msg-box-content-1">
        <p>{props.content}</p>
        <span>{props.time}</span>

        </div> */}
        <p>{props.content}</p>
        <span>{props.time}</span>
      </div>
    </div>
  );
}

export default Msg;
