import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, done: false, id: Math.floor(Math.random() * 1000) },
    ]);
    setInputText("");
  };
  return (
    <div className="App">
      <h1 className="heading">Todo List</h1>
      <form className="form">
        <input
          className="form-input"
          value={inputText}
          onChange={inputHandler}
          type="text"
        />
        <button className="form-btn" onClick={submitHandler} type="submit">
          +
        </button>
      </form>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
