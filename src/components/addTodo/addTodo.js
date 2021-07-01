import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../Context";
import "./addTodo.css";

export default function AddTodo() {
  const [isInputDisplayed, setIsInputDisplayed] = useState(false);

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
              value={""}
              onChange={""}
            />
          </div>

          <div className="add-Todo__taskButtonContainer">
            <button className="add-Todo__taskBtn" onClick={""}>
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
