import React, { useState} from "react";
import "./addTodo.css";

import uuid from 'react-uuid'

export default function AddTodo() {
  const [isInputDisplayed, setIsInputDisplayed] = useState(false);
  const [todo, setTodo] = useState({title: "", id: uuid()})
  // const [allTodos, setAllTodos] = useState([])
  

// function handleChange(e){
//   const {name, value} = e.target
// setTodo(prevTodo =>({
//   ...prevTodo,
//   [name]: value
// }))
// }

// console.log(allTodos)

// function handleSubmit(e){
 
//   e.preventDefault();
//   setAllTodos(prevAllTodos =>[
//     ...prevAllTodos,
//     todo
//   ])

// setTodo({title: "", id:uuid()})
// }
// setTodo('')

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
              value={todo.title}
              onChange={ (e) => setTodo({...todo, title: e.target.value})}
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
