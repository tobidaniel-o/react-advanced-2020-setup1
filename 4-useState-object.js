import React, { useState } from "react";

const UseStateObject = () => {
  // const [person, setPerson] = useState({
  //   name: "peter",
  //   age: 24,
  //   message: "random message",
  // });
  // const changeMessage = () => {
  //   setPerson({ ...person, message: "hello world" });};

  // Working with Multiple State Values, you get the same result as above using an object
  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("random message");

  const changeMessage = () => {
    setMessage("hello world");
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
