import React from "react";

import { FiVideo } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { VscSearch } from "react-icons/vsc";
import "./msgNavigation.css";
function MsgNavigation() {
  return (
    <div className="msg-nav">
      {/* <h4>Alice Whiteman</h4> */}
      {/* <p>Alice Whiteman</p> */}
      <div className="msg-nav-heading">
        <span id="msg-nav-heading">Alice Whiteman</span>
        <span id="status">online</span>
      </div>

      <div className="msg-nav-feature">
        <p>
          <FiVideo />
        </p>

        <p>
          <IoCallOutline />
        </p>
        <p>|</p>
        <p>
          <VscSearch />
        </p>

        <p id="chat-box-image-div">
          <img
            src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Mast-Dp-For-Whatsapp-Pics-Images.jpg"
            alt="hel"
          />
        </p>
      </div>
    </div>
  );
}

export default MsgNavigation;
