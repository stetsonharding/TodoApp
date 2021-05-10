import React, { useState, useEffect } from "react"
import "./addTodo.css"

export default function AddTodo(){
    const [inputTodo, setInputTodo] = useState("")
    const [todoList, setTodoList] = useState([])
  
 
  useEffect(() =>{
   console.log(todoList)
   setInputTodo("")
  }, [todoList])

    function handleSubmit(){
        setTodoList(prevTodo => [...prevTodo, inputTodo])

      console.log(inputTodo)
    }

    return(
        <div className="add-Todo__container">
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
                <button className="add-Todo__taskBtn" onClick={handleSubmit}>New Task</button>
            </div>
        </div>
    )
}
