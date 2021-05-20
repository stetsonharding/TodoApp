import React, { useEffect, useContext} from "react";
import SelectTodo from "../selectTodo/index";
import { Context } from "../../Context"

import "./todolist.css";

export default function TodoList() {
const {
  todoList, 
  setTodoList, 
  checkboxChecked, 
  setCheckboxChecked
} = useContext(Context)

 useEffect(() => {
   console.log(checkboxChecked)
  }, [checkboxChecked]);

  const handleStartTasks = () => {
    console.log(checkboxChecked)
  };

  const handleDeleteTask = (index) => {
    todoList.forEach((task, i) => {
      if (i === index) {
        todoList.splice(i, 1);
        checkboxChecked.splice(i,1)
        setTodoList([...todoList]);
        setCheckboxChecked([...checkboxChecked])
      }
    });
  };

  return (
    <div className="todo-list__Container">
      <h1 className="todo-list__title">Tasks to start</h1>
      <ol>
        {todoList.map((todo, index) => {
          return (
            <div key={index} className="todo-list__taskContainer">
              <li className="todo-list__listItem">
                <SelectTodo todo={todo} checkboxChecked={checkboxChecked} setCheckboxChecked={setCheckboxChecked} />
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
