import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h2>GitHub Users</h2>
      <ul className="users">
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar_url} />
            <a href={user.html_url}>{user.login}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
