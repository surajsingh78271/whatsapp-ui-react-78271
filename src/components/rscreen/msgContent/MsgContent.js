import React from "react";
import "./msgContent.css";
import MsgContentMsg from "./msgContentMsg/MsgContentMsg";
import MsgNavigation from "./msgNavigation/MsgNavigation";
function MsgContent() {
  return (
    <div className="msg">
      <MsgNavigation />

      <MsgContentMsg />
    </div>
  );
}

export default MsgContent;
