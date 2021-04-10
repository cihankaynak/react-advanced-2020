import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const person = { id: new Date().getTime(), firstName, email };
    setPeople([...people, person]);
    setFirstName("");
    setEmail("");
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={(event) => handleSubmit(event)}>
          <div className="form-control">
            <label htmlFor="firstName">Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              required={true}
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required={true}
            ></input>
          </div>
          <button type="submit">Add Person</button>
        </form>
        {people.map((person) => {
          return (
            <div className="item" key={person.id}>
              <h4>{person.firstName}</h4>
              <p>{person.email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
