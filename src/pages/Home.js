import React, { useContext } from "react";
import { Context } from "../Context";
import TaskProgress from "../components/taskProgress/TaskProgress";
import Task from "../components/task/Task";
import StartedTask from "../components/startedTask/StartedTask";
import CompletedTask from "../components/completedTask/CompletedTask";

export default function Home() {
  const { allTasks, startedTasks, tasksCompleted } = useContext(Context);

  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "25px",
  };

  const title = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
  };

  return (
    <>
      {/* if all three task progress arrays are less than or equal to zero, display title */}
      {allTasks.length <= 0 &&
      startedTasks.length <= 0 &&
      tasksCompleted <= 0 ? (
        <div class="home__noTasksTitle" style={title}>
          <h1>You have 0 tasks created.</h1>
        </div>
      ) : null}

      {/* all tasks */}
      <div className="home__Container" style={styles}>
        {allTasks.length > 0 ||
        startedTasks.length > 0 ||
        tasksCompleted.length > 0 ? (
          <TaskProgress title="Tasks to start" taskNumber={allTasks.length}>
            {allTasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </TaskProgress>
        ) : null}

        {/* tasks in progress */}
        {startedTasks.length > 0 || tasksCompleted.length > 0 ? (
          <TaskProgress
            title="Tasks in progress"
            taskNumber={startedTasks.length}
          >
            {startedTasks.map((startedTask) => (
              <StartedTask key={startedTask.id} startedTask={startedTask} />
            ))}
          </TaskProgress>
        ) : null}

        {/* completed tasks */}
        {tasksCompleted.length > 0 ? (
          <TaskProgress
            title="Completed Tasks"
            taskNumber={tasksCompleted.length}
          >
            {tasksCompleted.map((task) => (
              <CompletedTask key={task.id} task={task} />
            ))}
          </TaskProgress>
        ) : null}
      </div>
    </>
  );
}
