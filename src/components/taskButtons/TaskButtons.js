import React, { useContext } from "react";
import { Context } from "../../Context";

export default function TaskButtons(props) {
  const { task, setEditedTask, setIsEditInputShown } = props;

  const { allTasks, setAllTasks, setStartedTasks, startedTasks } =
    useContext(Context);

  //delete
  const deleteTask = (taskItems, id) => {
    taskItems((prevTask) => prevTask.filter((task) => task.id !== id));
  };

  //start
  const startTask = (task) => {
    setStartedTasks((prevTask) => [...prevTask, task]);

    deleteTask(setAllTasks, task.id);
  };

  //edit
  const editTask = () => {
    setIsEditInputShown((prevTask) => !prevTask);
  };

  return (
    <>
      <button className="task__task-btn" onClick={() => startTask(task)}>
        Start
      </button>
      <button className="task__task-btn" onClick={() => editTask()}>
        Edit
      </button>
      <button
        className="task__task-btn"
        onClick={() => deleteTask(setAllTasks, task.id)}
      >
        X
      </button>
    </>
  );
}
