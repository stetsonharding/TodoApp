import React from "react"

import "./TaskProgress.css"
export default function TaskProgress(props){
    return(
    <div className="taskProgress__container">
        <div className="taskProgress__title-container">
           <h1 className="taskProgress__title">{props.title} ({props.taskNumber})</h1>
        </div>
        {props.children}
    </div>
  )
}