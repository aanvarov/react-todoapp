import React from "react";
import "./../App.css";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filterTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterTodos.length > 0
          ? filterTodos.map((todo) => (
              <Todo
                filterTodos={filterTodos}
                todos={todos}
                setTodos={setTodos}
                todo={todo}
                key={todo.id}
              />
            ))
          : "NO TODOS"}
      </ul>
    </div>
  );
};

export default TodoList;
