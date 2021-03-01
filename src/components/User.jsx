import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

export default function User(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="user">
      <h1>{props.fullName}</h1>
      <p>{props.email}</p>
      <p>{props.age}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}
