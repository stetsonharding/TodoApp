import React, { useState, useContext } from "react";
import { Context } from "../../Context";
import "./TaskInput.css";

import uuid from "react-uuid";

export default function TaskInput() {
  const [isInputDisplayed, setIsInputDisplayed] = useState(false);
  const [task, setTask] = useState("");

  const { setAllTasks } = useContext(Context);

  function addTodo(e) {
    e.preventDefault();
    setAllTasks((prevTask) => [...prevTask, { title: task, id: uuid() }]);

    setTask("");
  }

  return (
    <div className="add-Todo__container">
      {isInputDisplayed ? (
        <>
          <div className="add-Todo__inputWrapper">
            <input
              className="add-Todo__input"
              type="text"
              placeholder="Add Task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </div>

          <div className="add-Todo__taskButtonContainer">
            <button className="add-Todo__taskBtn" onClick={(e) => addTodo(e)}>
              {isInputDisplayed ? "Submit Task" : "Add Task"}
            </button>
          </div>
        </>
      ) : (
        <div className="add-Todo__taskButtonContainer">
          <button
            className="add-Todo__taskBtn"
            onClick={() => setIsInputDisplayed(true)}
          >
            Add Task
          </button>
        </div>
      )}
    </div>
  );
}
