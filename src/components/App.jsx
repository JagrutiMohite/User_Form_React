import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import User from "./User";

export default function App() {
  const [userData, setUserData] = useState([]);

  function addUser(content) {
    setUserData((preValue) => {
      return [...preValue, content];
    });
  }

  function deleteUser(id) {
    setUserData((preValue) => {
      return preValue.filter((userItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <div className="flex-container">
        <Form onAdd={addUser} />
        {userData.map((data, index) => {
          return (
            <User
              key={index}
              id={index}
              fullName={data.fullName}
              email={data.email}
              age={data.age}
              onDelete={deleteUser}
            />
          );
        })}
      </div>
    </div>
  );
}
