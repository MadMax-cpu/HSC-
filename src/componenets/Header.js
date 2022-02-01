import React from "react";
import "../style.css";

const Header = () => {
  return (
    <>
      <div className="header_part">
        <img src="images/hsc_help.png" alt="hsc help" className="image" />

        <button id="btn1" className="btn">
          HOME
        </button>
        <button id="btn2" className="btn">
          TOPICS
        </button>
        <button id="btn3" className="btn">
          QUIZ
        </button>
        <button id="btn4" className="btn">
          INSTRUCTOR
        </button>
        <button id="btn5" className="btn">
          ABOUT
        </button>

        <button id="btn6" className="btn">
          CONTACT
        </button>
      </div>
    </>
  );
};

export default Header;
