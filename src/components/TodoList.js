import React from "react";
import "./../App.css";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo todos={todos} setTodos={setTodos} todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
