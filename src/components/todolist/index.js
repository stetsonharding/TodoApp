import React, { useState } from "react";

import "./todolist.css";

export default function TodoList({ todoList, setTodoList }) {
  const [checkboxChecked, setCheckboxChecked] = useState([]);

  const handleStartTasks = () => {
    console.log("started tasks");
  };

  const handleDeleteTask = (index) => {
    todoList.forEach((task, i) => {
      if (i === index) {
        todoList.splice(i, 1);
        setTodoList([...todoList]);
      }
    });
  };

  const handleInputChange = (e) => {
    const target = e.target;
    let value = e.target.value;

    if (target.checked) {
      setCheckboxChecked((prevChecked) => [...prevChecked, value]);
      console.log(checkboxChecked);
    } else {
      console.log("skrt");
    }
  };

  return (
    <div className="todo-list__Container">
      <h1 className="todo-list__title">Tasks to start</h1>
      <ol>
        {todoList.map((todo, index) => {
          return (
            <div key={index} className="todo-list__taskContainer">
              <li className="todo-list__listItem">
                <label className="todo-list__label">
                  {/* {todo} */}
                  {/* <input type="checkbox" /> */}

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="task"
                      id="inlineCheckboxh1"
                      value={todo}
                      onChange={handleInputChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckboxh1"
                    >
                      {todo}
                    </label>
                  </div>
                </label>
              </li>
              <input
                className="todo-list__deleteBtn"
                type="button"
                value="X"
                onClick={() => handleDeleteTask(index)}
              />
            </div>
          );
        })}
      </ol>
      {todoList.length > 0 ? (
        <div className="todo-list__startBtnContainer">
          <button className="todo-list__startBtn" onClick={handleStartTasks}>
            Start Tasks
          </button>
        </div>
      ) : null}
    </div>
  );
}
