import React, { useState, useContext } from "react";
import { DataContext } from "./DataProvider";
export default function Footer() {
  const [checkAll, setCheckAll] = useState(false);
  const [todos, settodos] = useContext(DataContext);

  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.complete = !checkAll;
    });
    settodos(newTodos);
    setCheckAll(!checkAll);
  };

  const deleteTodo = () => {
    const newTodos = todos.filter((todo) => {
      return todo.complete === false;
    });
    settodos(newTodos);
    setCheckAll(false);
  };

  return (
    <>
      {todos.length === 0 ? (
        <h1>Congratulations!!! You have Completed your Work</h1>
      ) : (
        <div className="row">
          <label>
            <input
              type="checkbox"
              name="all"
              id="all"
              onClick={handleCheckAll}
              checked={checkAll}
            />
            All
          </label>
          <p>You have {todos.length} to do</p>
          <button id="delete" onClick={deleteTodo}>
            Delete
          </button>
        </div>
      )}
    </>
  );
}
