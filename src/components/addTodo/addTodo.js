import React from "react"
import "./addTodo.css"

export default function AddTodo({inputListTodo, setInputListTodo}){
  
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
            </div>
        </div>
    )
}
