import React, { useContext } from "react";
import { Context } from "../../Context";

export default function EditTask(props) {
  const { task, setEditedTask, editedTask, setIsEditInputShown } = props;
  const { setAllTasks } = useContext(Context);

  const submitEdit = (e, id, newTitle) => {
    e.preventDefault();

    //check to see if task id in state matches the id getting passed in
    //change title if match is found, with new title passed in.
    setAllTasks((prevState) =>
      prevState.map((n) => {
        if (n.id === id) {
          return { ...n, title: newTitle };
        }
        return n;
      })
    );
    setIsEditInputShown(false);
  };

  return (
    <>
      <form onSubmit={(e) => submitEdit(e, task.id, editedTask)}>
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
        />
        <button>Ok</button>
      </form>
    </>
  );
}
