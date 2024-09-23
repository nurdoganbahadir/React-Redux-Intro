import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { gorevler } = useSelector((state) => state.todoReducer);
  return (
    <div>
      {gorevler.map((gorev) => (
        <TodoItem gorev={gorev}/>
      ))}
    </div>
  );
};

export default TodoList;
