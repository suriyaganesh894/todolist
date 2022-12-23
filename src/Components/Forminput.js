import React, { useState, useContext } from "react";
import { DataContext } from "./Components/DataProvider";

export default function Forminput() {
  const [todos, settodos] = useContext(DataContext);
  const [todoName, settodoName] = useState("");

  const addtodo = (e) => {
    e.preventDefault();
    settodos([...todos, { name: todoName, complete: false }]);
    settodoName("");
    console.log("Suriya ganesh");
    console.log(todos);
  };

  return (
    <form autoComplete="off">
      <input
        type="text"
        name="todos"
        id="todos"
        required
        placeholder="What needs to be done?"
        value={todoName}
        onChange={(e) => settodoName(e.target.value.toLowerCase())}
      />
      <button type="submit" onClick={addtodo}>
        Create
      </button>
    </form>
  );
}
