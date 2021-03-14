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
            category: "done",
          };
        }
        return item;
      })
    );
  };
  const processHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            category: "inProcess",
          };
        }
        return item;
      })
    );
  };
  const testHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            category: "test",
          };
        }
        return item;
      })
    );
  };
  return (
    <div key={todo.id} className="todo">
      <div className="deadline">
        {todo.numOfDays} {todo.numOfDays === 1 ? "day" : "days"} left
      </div>
      <li
        className={
          "todo-item " +
          (todo.category === "done"
            ? "green"
            : todo.category === "inProcess"
            ? "yellowgreen"
            : todo.category === "test"
            ? "fire"
            : "white")
        }
      >
        {todo.text}
      </li>
      <button className="todo-btn" onClick={processHandler}>
        Start Process
      </button>
      <button className="todo-btn" onClick={testHandler}>
        Test
      </button>
      <button className="todo-btn" onClick={doneHandler}>
        Done
      </button>
      <button className="todo-btn" onClick={deleteHandler}>
        Delete
      </button>
    </div>
  );
};

export default Todo;
