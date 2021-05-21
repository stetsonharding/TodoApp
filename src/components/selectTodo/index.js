import React, { useContext }from "react";
import { Context } from "../../Context"

import "./selectTodo.css"

export default function SelectTodo({todo}) {
 
 const {
  //  todosSelected, 
   setTodosSelected,
   todoList, 
   setTodoList,
  } = useContext(Context)


  const handleInputChange = (e) => {
    const selected = e.target.checked 
    let value = e.target.value;
    if (selected) {
      setTodosSelected((prevSelected) => [...prevSelected, value])
      const index = todoList.indexOf(value)

      todoList.splice(index, 1)
      setTodoList((prevTodo => [...prevTodo]))   
    }


    // }
    // } else if (selected === false) {
    //   const array = [...todosSelected]
    //   const index = array.indexOf(value)
    //   array.splice(index, 1)
    //   setTodosSelected([...array])
    // }
  };

  return (
    <label className="todo-list__label">
      <div className="form-check form-check-inline">
     
      <label className="form-check-label" htmlFor="todoCheckbox">
        <input
          className="form-check-input"
          type="checkbox"
          name="task"
          id="todoCheckbox"
          value={todo}
          onChange={handleInputChange}
        />
          {todo}
        </label>
      </div>
    </label>
  );
}
