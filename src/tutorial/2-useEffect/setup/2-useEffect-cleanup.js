import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const setWindowSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setWindowSize);
    return () => window.removeEventListener("resize", setWindowSize);
  });
  return <h2>{size}</h2>;
};

export default UseEffectCleanup;
