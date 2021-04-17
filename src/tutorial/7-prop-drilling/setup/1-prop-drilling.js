import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <section>
      <h3>Prop Drilling</h3>
      <List people={people} onRemove={removePerson} />
    </section>
  );
};

const List = ({ people, onRemove }) => {
  return (
    <>
      {people.map((person) => (
        <Person key={person.id} person={person} onRemove={onRemove} />
      ))}
    </>
  );
};

const Person = ({ person, onRemove }) => {
  return (
    <div className="item">
      <h4>{person.name}</h4>
      <button onClick={() => onRemove(person.id)}>Remove</button>
    </div>
  );
};
export default PropDrilling;
