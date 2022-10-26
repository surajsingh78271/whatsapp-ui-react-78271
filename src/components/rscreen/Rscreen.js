import React from "react";
import CloseWindow from "./closeWindow/CloseWindow";
import Footer from "./footer/Footer";
import MsgContent from "./msgContent/MsgContent";
import "./rscreen.css";
function Rscreen() {
  return (
    <div className="right-screen">
      <CloseWindow />
      <MsgContent />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Rscreen;
