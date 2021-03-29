import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const remove = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };
  return (
    <>
      {people.map((p) => (
        <div key={p.id} className="item">
          {p.name}
          <button className="btn" onClick={() => remove(p.id)}>
            Delete
          </button>
        </div>
      ))}
      <button className="btn" onClick={() => setPeople([])}>
        Clear People
      </button>
    </>
  );
};

export default UseStateArray;
