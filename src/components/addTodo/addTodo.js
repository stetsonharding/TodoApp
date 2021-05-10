import React, { useState, useEffect } from "react"
import "./addTodo.css"

export default function AddTodo({todoList, setTodoList}){
    const [inputTodo, setInputTodo] = useState("")
    const [isInputDisplayed, setIsInputDisplayed] = useState(false)
  
  useEffect(() =>{
   console.log(todoList)
   setInputTodo("")
  }, [todoList])

    function handleSubmit(){
        setTodoList(prevTodo => [...prevTodo, inputTodo])
      console.log(inputTodo)
    }
    
    return(
<<<<<<< HEAD
      <div className="add-Todo__container">
            {isInputDisplayed ?
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
            <button className="add-Todo__taskBtn" onClick={handleSubmit}>Submit</button>
=======
        <div className="addTodo__container">
            {/* <div className="addTodo-input-container"> */}
                {inputListTodo.map((item, i) =>{
                  return( 
                <div className="add-Todo__inputWrapper" key={i}>
                  <input
                    className="add-Todo__input"
                    name="todo"
                    type="text"
                    placeholder="ADD TODO"
                    value={item.todo}
                    onChange={(e) =>handleInputChange(e, i)}
                    />
                      <button className="add-Todo__deleteBtn" onClick={() =>handleRemoveInput(i)}>delete</button>
                </div>
                  
                )})}
            {/* </div> */}
           <div className="add-Todo__taskButtonContainer">  
            <button className="add-Todo__taskBtn" onClick={handleAddClick}>New Task</button>
>>>>>>> 2a5ac67695166e95b38da66e295f2b6f74b2b368
            </div>
            </>
            : 
        <div className="add-Todo__taskButtonContainer">  
            <button className="add-Todo__taskBtn" onClick={() => setIsInputDisplayed(true)} >Add Task</button>
        </div>}
      </div>
    )
}
