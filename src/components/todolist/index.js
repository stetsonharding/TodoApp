import React from "react"

import "./todolist.css"

export default function TodoList({todoList}){

const handleItemClick = () => {
    console.log("item is clicked")
}

    return(
        <div className="todo-List__Container">
            <h1 className="todo-List__title">Tasks to start</h1>
            <ol>
         {todoList.map(todo =>{
             return (
             <div className="todo-List__itemsContainer">
                
                <h2 className="todo-list__item"><li>{todo}</li></h2>
              
            </div>)
            
         })}
              </ol>
        </div>
    )
}