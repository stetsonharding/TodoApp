import React, { useContext } from "react";
import "./StartedTask.css";
import { Context } from "../../Context";
// import CompletedTask from "../completedTask/CompletedTask";

export default function StartedTask(props) {
  const {
    tasksCompleted,
    setTasksCompleted,
    startedTasks,
    setStartedTasks,
    DeleteTask,
  } = useContext(Context);

  const { startedTask } = props;

  const CompletedTask = (task) => {
    //loop through started tasks
    //filter out the task that != id
    //delete task thats passed in

    setTasksCompleted((prevTasks) => [...prevTasks, task]);

    // setCompletedTasks((prevStarted) =>
    //   prevStarted.filter((task) => task.id !== id)
    // );

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
