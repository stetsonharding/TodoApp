import React, { useState, useEffect } from "react";

export default function SelectTodo({ todo }) {
  const [checkboxChecked, setCheckboxChecked] = useState([]);

  // const handleInputChange = (e) => {
  //   const checked = e.target.checked;
  //   let value = e.target.value;

  //   if (checked) {
  //     setCheckboxChecked((prevChecked) => [...prevChecked, value]);
  //     console.log("checkBoxArrray:" + checkboxChecked);
  //   } else {
  //     console.log("skrt");
  //   }
  // };

  const handleInputChange = (e) => {
    const checked = e.target.checked;
    let value = e.target.value;

    if (checked) {
      setCheckboxChecked((prevChecked) => [...prevChecked, value]);
    } else {
      console.log("unchecked");
    }
  };

  useEffect(() => {
    console.log("checkBoxArrray:" + checkboxChecked);
  }, [checkboxChecked]);

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
