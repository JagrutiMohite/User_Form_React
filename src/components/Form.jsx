import React, { useState } from "react";

export default function Form(props) {
  const [content, setContent] = useState({
    fullName: "",
    email: "",
    age: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContent((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    props.onAdd(content);
    setContent({
      fullName: "",
      email: "",
      age: ""
    });
    event.preventDefault();
  }

  return (
    <div className="formCont">
      <form>
        <h1>Enter Your Details</h1>
        <input
          name="fullName"
          type="text"
          placeholder="Enter your Full name.."
          className="formTxt"
          value={content.fullName}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Enter your Email.."
          className="formTxt"
          value={content.email}
          onChange={handleChange}
        />
        <input
          name="age"
          type="number"
          placeholder="Enter your Age.."
          className="formTxt"
          value={content.age}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add User</button>
      </form>
    </div>
  );
}
