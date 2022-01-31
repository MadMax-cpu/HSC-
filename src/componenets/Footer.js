import React from "react";
import "../style.css";

const Footer = () => {
  const color = {
    color: "red",
  };
  return (
    <>
      <div className="footer">
        <h1 style={color}>CLICK HERE TO GET BUETIAN TUTOR</h1>

        <button className="tutorbutton">TUTOR</button>
      </div>
    </>
  );
};

export default Footer;
