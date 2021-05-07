import React, {useState} from "react"
import "./addTodo.css"

export default function AddTodo({inputListTodo, setInputListTodo}){
    // const [inputListTodo, setInputListTodo] = useState([{todo: ""}])
   

    const handleInputChange = (e, i) =>{
        const {name, value} = e.target
        const list = [...inputListTodo]
        list[i][name] = value
        setInputListTodo(list)
    }

    const handleAddClick = () =>{
        setInputListTodo([...inputListTodo, {todo: ""}])
    }

    const handleRemoveInput = (i) =>{
        const list = [...inputListTodo]
        list.splice(i, 1)
        setInputListTodo(list)
    }

    return(
        <div className="addTodo container">
            <div className="todo-input-container">
                {inputListTodo.map((item, i) =>{
                  return( 
                  <div>
                  <input
                    key={i}
                    name="todo"
                    className="todo-input"
                    type="text"
                    placeholder="ADD TODO"
                    value={item.todo}
                    onChange={(e) =>handleInputChange(e, i)}
                    />
                      <button className="delete-button" onClick={() =>handleRemoveInput(i)}>delete</button>
                    </div>
                  
                )})}
              
               
                   
           
            
            </div>
           <div>
            <button className="add-task-button" onClick={handleAddClick}>New Task</button>
            </div>
        </div>
    )
}
