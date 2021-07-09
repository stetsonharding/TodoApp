import React, { useContext } from 'react'
import {Context} from "../../Context"

export default function EditTask(props){

    const {todo, setEditedTask, editedTask,  setIsEditInputShown} = props
    const {allTasks, setAllTasks} = useContext(Context)


    const submitEdit = (e, id, newTask) => {
        e.preventDefault();
    
            setAllTasks((prevState) =>
              prevState.map((n) => {
                if (n.id === id) {
                  return { ...n, title: newTask };
                }
                return n;
              })
            );
        
            setIsEditInputShown(false)
          }

    console.log(allTasks)

    return(
        <>
        <form onSubmit={(e) => submitEdit(e, todo.id, editedTask)}>
        <input 
        type="text" 
        value={editedTask} 
        onChange={(e) => setEditedTask(e.target.value)} placeholder="texts" 
        />
        <button>Ok</button>
        </form>
        </>
    )
}