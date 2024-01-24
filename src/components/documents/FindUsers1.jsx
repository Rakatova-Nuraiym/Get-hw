import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Inputs from "../Inputs/Inputs";
import "./style.css";

const FindUsers1 = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  const AddFunc = async () => {
    try {
      const userAdd = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const response = await userAdd.json();
      setUsers([...response]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    AddFunc();
  }, []);

  const DeleteUsers = () => {
    setUsers([]);
  };

  const AddUser = () => {
    setUsers([
      ...users,
      {
        name: name,
      },
    ]);
    console.log(name);
  };

  const delteUnic = (id) => {
    const filtered = users.filter((item) => item.id !== id);

    setUsers([...filtered]);
  };

  return (
    <div>
      <div>
        <Inputs name={name} text="add user name" setName={setName} />
        <Button name="add" onClick={() => AddUser()} />
      </div>
      <Button name="получить пользователей" onClick={() => AddFunc()} />
      <Button name="удалить пользователей" onClick={() => DeleteUsers()} />
      <div className="container">
        {users.map((item) => {
          return (
            <div key={item.id} className="cards">
              <h2>{item.name}</h2>
              <p>{item.phone}</p>
              <p>{item.email}</p>

              <Button name="delete" onClick={() => delteUnic(item.id)} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FindUsers1;
