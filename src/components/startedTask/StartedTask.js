import React, { useContext } from "react";
import "./StartedTask.css";
import { Context } from "../../Context";

export default function StartedTask(props) {
  const { setTasksCompleted, setStartedTasks, DeleteTask } =
    useContext(Context);

  const { startedTask } = props;

  const CompletedTask = (task) => {
    // get all previous tasks, add passed in task to TaskCompleted array
    setTasksCompleted((prevTasks) => [...prevTasks, task]);

    //delete the task that passed in, from StartedTasks array
    DeleteTask(setStartedTasks, task.id);
  };

  return (
    <div className="startedTask_ container">
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="startedTask_ task-container"
      >
        <h3>{startedTask.title}</h3>
        <button
          className="startedTask_ completed-startedtask-button"
          onClick={() => CompletedTask(startedTask)}
        >
          Complete
        </button>
      </div>
    </div>
  );
}
