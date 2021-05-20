import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../Context"
import "./addTodo.css";

export default function AddTodo() {
  
  const {
    todoList, 
    setTodoList, 
    inputTodo, 
    setInputTodo
  } = useContext(Context)
  const [isInputDisplayed, setIsInputDisplayed] = useState(false);

  useEffect(() => {
    // console.log(todoList);
    setInputTodo("");
  }, [todoList]);

  function handleAddTask() {
    setTodoList((prevTodo) => [...prevTodo, inputTodo]);
  }

  return (
    <div className="add-Todo__container">
      {isInputDisplayed ? (
        <>
          <div className="add-Todo__inputWrapper">
            <input
              className="add-Todo__input"
              name="todo"
              type="text"
              placeholder="ADD TODO"
              value={inputTodo}
              onChange={(e) => setInputTodo(e.target.value)}
            />
          </div>

          <div className="add-Todo__taskButtonContainer">
            <button
              className="add-Todo__taskBtn"
              disabled={!inputTodo}
              onClick={handleAddTask}
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
