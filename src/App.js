import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterTodos, setFilterTodos] = useState([]);
  const [selectState, setSelectState] = useState("");
  const [deadline, setDeadline] = useState(0);
  const [time, setTime] = useState(new Date());

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };
  const deadlineHandler = (e) => {
    let dayOffSet = 24 * 60 * 60 * 1000;
    console.log(Math.ceil((e - new Date()) / dayOffSet));
    setDeadline(Math.ceil((e - new Date()) / dayOffSet));
    setTime(e);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputText === "") {
      alert("please enter a task name and set deadline");
    } else {
      setTodos([
        ...todos,
        {
          text: inputText,
          category: "new",
          id: Math.floor(Math.random() * 1000),
          numOfDays: deadline,
        },
      ]);
      setInputText("");
      //setDeadline(0);
    }
  };

  const selectHandler = (e) => {
    console.log(e.target.value);
    setSelectState(e.target.value);
  };

  //useEffect
  useEffect(() => {
    if (!localStorage.getItem("tasks")) {
      localStorage.setItem("tasks", JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem("tasks")));
    }
  }, []);

  // sorting function
  const sort = (a, b) => {
    if (a.numOfDays > b.numOfDays) {
      return 1;
    }
    if (a.numOfDays < b.numOfDays) {
      return -1;
    }
    // a должно быть равным b
    return 0;
  };

  // do not repeat yourself
  const filter = (text) => {
    return todos.filter((e) => e.category === text).sort(sort);
  };

  useEffect(() => {
    const filterHandler = () => {
      switch (selectState) {
        case "new":
          setFilterTodos(filter("new"));
          break;
        case "inProcess":
          setFilterTodos(filter("inProcess"));
          break;
        case "test":
          setFilterTodos(filter("test"));
          break;
        case "completed":
          setFilterTodos(filter("done"));
          break;
        default:
          setFilterTodos(todos.sort(sort));
      }
    };
    filterHandler();
    localStorage.setItem("tasks", JSON.stringify(todos));
  }, [selectState, todos]);

  return (
    <div className="App">
      <h1 className="heading">Todo List</h1>
      <form className="form">
        <input
          className="form-input"
          value={inputText}
          onChange={inputHandler}
          type="text"
          placeholder="Enter a task name"
        />
        <button className="form-btn" onClick={submitHandler} type="submit">
          +
        </button>
        <DatePicker
          onChange={deadlineHandler}
          className="datepicker"
          selected={time}
        />

        <select className="form-select" onChange={selectHandler}>
          <option value="all">All</option>
          <option value="new">New Tasks</option>
          <option value="inProcess">Tasks in Process</option>
          <option value="test">Tasks in Test</option>
          <option value="completed">Completed Tasks</option>
        </select>
      </form>
      <TodoList filterTodos={filterTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
