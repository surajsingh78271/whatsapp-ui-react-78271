import React from "react";
import { VscSmiley } from "react-icons/vsc";
import { IoMdAttach } from "react-icons/io";
import { AiOutlineSend } from "react-icons/ai";
import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <span>
        <VscSmiley />
      </span>
      <span>
        <IoMdAttach />
      </span>
      <input type="text" placeholder="Type a message" />
      <span>
        <AiOutlineSend />
      </span>
    </div>
  );
}

export default Footer;
