import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => setValue((current) => current + 1), 2000);
  };
  return (
    <>
      <section>
        <h2>Counter</h2>
        <h2>{value}</h2>
        <button className="btn" onClick={() => setValue(value + 1)}>
          +
        </button>
        <button className="btn" onClick={() => setValue(value - 1)}>
          -
        </button>
        <button className="btn" onClick={() => reset()}>
          reset
        </button>
      </section>
      <br />
      <section>
        <h2>Complex Counter</h2>
        <h2>{value}</h2>
        <button className="btn" onClick={() => complexIncrease()}>
          +
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
