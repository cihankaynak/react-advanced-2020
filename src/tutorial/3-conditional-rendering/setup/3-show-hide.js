import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <WindowItem />}
    </>
  );
};

const WindowItem = () => {
  const [size, setSize] = useState(window.innerWidth);
  const resize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  return (
    <>
      <h1>Window</h1>
      <h2>Size:{size}</h2>
    </>
  );
};
export default ShowHide;
