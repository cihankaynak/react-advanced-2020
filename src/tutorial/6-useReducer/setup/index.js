import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import { reducer } from "./reducer";

const defaultState = {
  people: data,
  isModalOpen: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const deletePerson = (id) => {
    dispatch({ type: "DELETE_PERSON", payload: id });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newPerson = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_PERSON", payload: newPerson });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };
  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <button type="submit">Add</button>
      </form>
      {state.people.map((person) => (
        <div key={person.id} className="item">
          <h4>{person.name}</h4>
          <button onClick={() => deletePerson(person.id)}>Remove</button>
        </div>
      ))}
    </>
  );
};

export default Index;
