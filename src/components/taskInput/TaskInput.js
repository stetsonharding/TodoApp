import React, { useState, useContext, useRef } from "react";
import { Context } from "../../Context";
import "./TaskInput.css";

import uuid from "react-uuid";

export default function TaskInput() {
  const [isInputDisplayed, setIsInputDisplayed] = useState(false);
  const [task, setTask] = useState("");
  const focusInput = useRef(null);

  const { setAllTasks } = useContext(Context);

  function addTodo(e) {
    e.preventDefault();
    //grab all previous tasks, add the new task from input to AllTasks array,
    //call uuid function to generate a random unique id for each task.
    setAllTasks((prevTask) => [...prevTask, { title: task, id: uuid() }]);

    //reset input
    setTask("");
  }

  return (
    <div className="add-Todo__container">
      {/* display input onClick, otherwise display "add task" */}
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
            <button
              disabled={task.length > 0 ? false : true}
              className="add-Todo__taskBtn"
              onClick={(e) => addTodo(e)}
            >
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
