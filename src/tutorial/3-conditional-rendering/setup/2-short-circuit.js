import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  const toggleError = () => {
    setIsError(!isError);
  };

  return (
    <>
      <h1>{isError ? "Error" : "Not Error"}</h1>
      <button className="btn" onClick={toggleError}>
        Toggle Error
      </button>
      {text || <h1>If text is empty, then...</h1>}
      {text && <h1>If text is not empty, then...</h1>}
      <h1>{text || "some default"}</h1>
      <h2>{`First: ${firstValue}`}</h2>
      <h2>{`Second: ${secondValue}`}</h2>
    </>
  );
};

export default ShortCircuit;
