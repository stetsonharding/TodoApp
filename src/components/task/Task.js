import React from 'react'


import TaskButtons from "../taskButtons/TaskButtons"

import "./Task.css"

export default function Task(props){
  const {todo} = props
    
    return(
        <>
        
        <div className="task__container">
        <div className="task">
           <p><span>Task:</span> {todo.title} </p>
           </div>
        <div className="task__buttons-container">
            <TaskButtons todo={todo} />
          </div>
        </div>
        
       </>
    )
}