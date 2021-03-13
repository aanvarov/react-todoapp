import React from "react";

const Todo = ({ todo, setTodos, todos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((e) => e.id !== todo.id));
  };
  const doneHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      })
    );
  };
  return (
    <div key={todo.id} className="todo">
      <li className={"todo-item " + (todo.done ? "green" : "white")}>
        {todo.text}
      </li>
      <button className="done-btn" onClick={doneHandler}>
        {todo.done ? "ReAdd" : "Done"}
      </button>
      <button className="delete-btn" onClick={deleteHandler}>
        Delete
      </button>
    </div>
  );
};

export default Todo;
