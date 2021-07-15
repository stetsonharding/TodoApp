import React, { useContext } from 'react'
import "./StartedTask.css"
import { Context } from "../../Context"

export default function StartedTask(props){
    const{completedTasks, setCompletedTasks, startedTasks, setStartedTasks} = useContext(Context)
    const { startedItem  } = props




    // const TaskCompleted = (id) => {
    //    const allCompletedTasks = startedTasks.filter(item => item.id == id)
    //    setCompletedTasks(prevTasks =>[
    //        ...prevTasks,
    //        {title: allCompletedTasks.title, id:completedTasks.id}
    //    ])
    //     setStartedTasks(startedTasks.filter(task => task.id !== id))
    // }

   
    return(
        <div className="startedTask__container">
            <div className="startedTask__task-container">
            <h3>{startedItem.title}</h3>
            <button className="startedTask__button">Complete</button>
            </div>
        </div>
    )
}