import React, { useContext } from 'react'
import { Context } from "../../Context"
import "./InProgress.css"


export default function InProgress(){
    const {todosSelected} = useContext(Context)
    return(
        <div className="inprogress__Container">
        <h1 className="inProgress_title"> In Progress</h1>
        {todosSelected.map(todo =>{
            return(
                <>
                 <h1>{todo}</h1> 
                </>
            )
        })}
        </div>
    )
}
