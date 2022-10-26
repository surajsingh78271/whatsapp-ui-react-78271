import React from "react";
import "./closeWindow.css";
import {BiMinus} from 'react-icons/bi'
import {BiRectangle} from 'react-icons/bi'
import {MdClose} from "react-icons/md"

function CloseWindow() {
  return (
    <div className="close-nav">
      <div className="close-nav-content">
        <span><BiMinus /></span>
        <span><BiRectangle /></span>
        <span><MdClose /></span>
      </div>
    </div>
  );
}

export default CloseWindow;
