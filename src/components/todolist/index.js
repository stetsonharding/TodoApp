import React from "react";

import "./todolist.css";

export default function TodoList({ todoList, setTodoList }) {
  const handleStartTasks = () => {
    console.log("started tasks");
  };

  const handleDeleteTask = (index) => {
    for (const [i, todo] of todoList.entries()) {
      if (i === index) {
        const deletedIndex = todoList.splice(i, 1);

        setTodoList([...todoList]);
      }
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
                  {todo}
                  <input type="checkbox" />
                  <input
                    type="button"
                    value="delete"
                    onClick={() => handleDeleteTask(index)}
                  />
                </label>
              </li>
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
