import React, {useContext} from 'react'
import {Context} from "../../Context"



export default function TaskButtons(props){
    const {todo, setEditedTask, setIsEditInputShown} = props

    const {allTasks, setAllTasks, setStartedTasks, startedTasks} = useContext(Context)

    //delete
    const deleteTask = (id) => {
     setAllTasks(allTasks.filter(task => task.id !== id))
    }

    //start
    const startTask = (id) => {
    if(todo.id === id){
        setStartedTasks(prevTask => [
            ...prevTask,
            todo
        ])
    }else{
        setStartedTasks([])
    }
    deleteTask(todo.id);
    }

   console.log(startedTasks)
   console.log(allTasks)

   //edit
  const editTask = (id) => {
   setIsEditInputShown(prevTask => !prevTask)
  }

    return(
    <>
    <button className="task__task-btn" onClick={() => startTask(todo.id)}>Start</button>
    <button className="task__task-btn" onClick={() => editTask(todo.id)}>Edit</button>
    <button className="task__task-btn" onClick={() => deleteTask(todo.id)}>X</button> 
    </>
    )
}