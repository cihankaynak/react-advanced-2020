import React, { useState } from "react";

const UseStateBasics = () => {
  const texts = ["Random Title", "Hello World!"];
  const [text, setText] = useState(texts[0]);
  const [click, setClick] = useState(0);

  const handleClick = () => {
    setClick(click + 1);
    setText(texts[click % 2]);
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
