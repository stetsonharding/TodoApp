import React, { useEffect, useContext} from "react";
import SelectTodo from "../selectTodo/index";
import { Context } from "../../Context"

import "./todolist.css";

export default function TodoList() {
const {
  todoList, 
  setTodoList, 
  todosSelected, 
  setTodosSelected,
} = useContext(Context)



 useEffect(() => {
   console.log(todosSelected)
  }, [todosSelected]);

  

  const handleStartTasks = () => {

    console.log(todosSelected)
  };



  const handleDeleteTask = (index) => {
    todoList.forEach((task, i) => {
      if (i === index) {
        todoList.splice(i, 1);
        setTodoList([...todoList]);
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
                <SelectTodo todo={todo} />
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
          <div>
            <h2 style={{color: "white"}}>Select task to begin</h2>
          </div>
        </div>
      ) : null}
    </div>
  );
}
