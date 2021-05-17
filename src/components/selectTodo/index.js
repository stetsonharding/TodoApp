import React from "react";

export default function SelectTodo({ todo, checkboxChecked, setCheckboxChecked }) {
 

  const handleInputChange = (e) => {
    const checked = e.target.checked;
    let value = e.target.value;

    if (checked) {
      setCheckboxChecked((prevChecked) => [...prevChecked, value])
    } else if (checked === false) {
      const array = [...checkboxChecked]
      const index = array.indexOf(value)
      array.splice(index, 1)
      setCheckboxChecked([...array])
    }
  };

  return (
    <label className="todo-list__label">
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          name="task"
          id="inlineCheckboxh1"
          value={todo}
          onChange={handleInputChange}
        />
        <label className="form-check-label" htmlFor="inlineCheckboxh1">
          {todo}
        </label>
      </div>
    </label>
  );
}
