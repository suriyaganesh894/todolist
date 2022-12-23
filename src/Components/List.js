import React, { useContext } from "react";
import Listitem from "./Listitem";
import { DataContext } from "./DataProvider";

export default function List() {
  const [todos, settodos] = useContext(DataContext);

  const switchComplete = (id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.complete = !todo.complete;
      }
    });
    settodos(newTodos);
  };

  const handleEditTodos = (editvalue, id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.name = editvalue;
      }
    });
    settodos(newTodos);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <Listitem
          todo={todo}
          id={index}
          key={index}
          checkComplete={switchComplete}
          handleEditTodos={handleEditTodos}
        />
      ))}
    </ul>
  );
}
