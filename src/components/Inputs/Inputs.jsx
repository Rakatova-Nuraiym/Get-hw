import React, { useEffect } from "react";

import "../documents/style.css";

const Inputs = ({ name, text, setName }) => {
  const checkUpdate = (text) => {
    console.log(`${name.length},${name}`);
    localStorage.setItem("name_length", JSON.stringify(name.length));
    localStorage.setItem("name", JSON.stringify(name));
    setName(text);
  };
  useEffect(() => {
    // localStorage.removeItem("name");
  }, [name]);
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("name"));
    JSON.parse(localStorage.getItem("name_length"));
    console.log(storage);

    if (storage) {
      setName(storage);
    }
  }, []);

  return (
    <input
      value={name}
      placeholder={text}
      onChange={(e) => checkUpdate(e.target.value)}
    />
  );
};

export default Inputs;
