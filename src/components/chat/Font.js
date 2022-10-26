import React from "react";
import { RiCheckDoubleFill } from "react-icons/ri";
function Font({ value }) {
  if (value === "send") {
    return <RiCheckDoubleFill />;
  } else if (value === "typing") {
    return (
      <span style={{ color: "rgb(9, 245, 95)", fontSize: 18 }}>typing...</span>
    );
  }
  //   return (
  //     <RiCheckDoubleFill />
  //   )
}

export default Font;
