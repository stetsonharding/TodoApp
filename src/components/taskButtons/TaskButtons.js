import React, { useContext } from "react";
import { Context } from "../../Context";

import "./TaskButtons.css";

export default function TaskButtons(props) {
  const { task, setIsEditInputShown } = props;

  const { setAllTasks, setStartedTasks } = useContext(Context);

  //pass in useHook function and a task id.
  const deleteTask = (taskItems, id) => {
    //filter through state and check if task id does not match id passed in.
    //if test passes, filter that specifc task id out.
    taskItems((prevTask) => prevTask.filter((task) => task.id !== id));
  };

  const startTask = (task) => {
    //get all the previous tasks in startedTasks
    //add the new task passed in to StartedTasks array.
    setStartedTasks((prevTask) => [...prevTask, task]);

    //DeleteTask function is called to remove the task from "allTasks" array,
    //becuse that specific task is getting moved to the "startedTasks" array.
    //we dont want the same task in "allTask" and "startedTask" arrays
    deleteTask(setAllTasks, task.id);
  };

  //if edit button is clicked, show the edit input component.
  const editTask = () => {
    setIsEditInputShown((prevTask) => !prevTask);
  };

  return (
    <>
      <button className="task__task-btn start" onClick={() => startTask(task)}>
        Start
      </button>
      <button className="task__task-btn edit" onClick={() => editTask()}>
        Edit
      </button>
      <button
        className="task__task-btn delete"
        onClick={() => deleteTask(setAllTasks, task.id)}
      >
        X
      </button>
    </>
  );
}
