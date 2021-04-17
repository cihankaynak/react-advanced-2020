import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const [name, setName] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const person = data.find((person) => person.id == id);
    if (person) {
      setName(person.name);
    }
  }, []);
  return (
    <div>
      <h2>{name}</h2>
      <Link to="/people">People</Link>
    </div>
  );
};

export default Person;
