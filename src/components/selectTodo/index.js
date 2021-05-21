import React, {useContext}from "react";
import { Context } from "../../Context"

export default function SelectTodo({todo}) {
 const {
   todosSelected, 
   setTodosSelected,
  } = useContext(Context)

  const handleInputChange = (e) => {
    const selected = e.target.checked;
    let value = e.target.value;

    if (selected) {
      setTodosSelected((prevSelected) => [...prevSelected, value])
    } else if (selected === false) {
      const array = [...todosSelected]
      const index = array.indexOf(value)
      array.splice(index, 1)
      setTodosSelected([...array])
    }
  };

  return (
    <label className="todo-list__label">
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          name="task"
          id="todoCheckbox"
          value={todo}
          onChange={handleInputChange}
        />
        <label className="form-check-label" htmlFor="todoCheckbox">
          {todo}
        </label>
      </div>
    </label>
  );
}
