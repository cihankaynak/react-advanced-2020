import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarsonx";
const MultipleReturns = () => {
  const LOADING = "Loading...";
  const FAILED = "Loading user failed!";
  const SUCCESS = "Success!";

  const [status, setStatus] = useState(LOADING);
  const [user, setUser] = useState({});

  const loadUser = () => {
    fetch(url)
      .then((response) => response.json())
      .then((gitHubUser) => userLoaded(gitHubUser))
      .catch((error) => onError(error));
  };

  const userLoaded = (gitHubUser) => {
    setStatus(SUCCESS);
    setUser(gitHubUser);
  };

  const onError = (error) => {
    setStatus(FAILED);
    console.error(FAILED, error);
  };

  useEffect(loadUser, []);
  return <h2>{status === SUCCESS ? user.login : status}</h2>;
};

export default MultipleReturns;
