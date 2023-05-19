import React from "react";
import mainstyle from "./mainheader.module.css";

const MainHeaderBtn = ({ text }) => {
  const handleButtonClick = () => {
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
      button.innerHTML =
        "<div><span>" +
        button.textContent.trim().split("").join("</span><span>") +
        "</span></div>";
    });
  };
  const slicedText = text
    .split("")
    .map((char, index) => <span key={index}>{char}</span>);

  return (
    <>
      {/* <button>{props.btn}</button> */}
      {/* <a
        className={`${mainstyle.button} ${mainstyle.fast} ${mainstyle.white}`}
        onClick={handleButtonClick}
      >
        Fast
      </a> */}
      <div
        className={`${mainstyle.button} ${mainstyle.fast} ${mainstyle.white}`}
        onClick={handleButtonClick}
      >
        <div>{slicedText}</div>
      </div>
    </>
  );
};

export default MainHeaderBtn;
