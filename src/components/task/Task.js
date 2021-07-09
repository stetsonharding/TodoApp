import React, {useContext, useState} from 'react'
import EditTask from "../editTask/EditTask"
// import {Context} from "../../Context"
import TaskButtons from "../taskButtons/TaskButtons"

import "./Task.css"

export default function Task(props){
  const {todo} = props
  const [editedTask, setEditedTask] = useState(todo.title)
  const [isEditInputShown, setIsEditInputShown] = useState(false)
 

 
    
    return(
        <>
        
        <div className="task__container">
        <div className="task">
          {isEditInputShown ?  <EditTask todo={todo} setEditedTask={setEditedTask}  setIsEditInputShown={ setIsEditInputShown} editedTask={editedTask}/> : <p><span>Task:</span> {todo.title} </p>} 
           </div>
        <div className="task__buttons-container">
            <TaskButtons todo={todo} setIsEditInputShown={setIsEditInputShown} setEditedTask={setEditedTask}/>
          </div>
        </div>
        
       </>
    )
}