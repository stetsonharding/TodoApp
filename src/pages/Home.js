import React, { useContext } from "react";
import { Context } from "../Context";

//components
import TaskProgress from "../components/taskProgress/TaskProgress";
import Task from "../components/task/Task";
import StartedTask from "../components/startedTask/StartedTask";
import CompletedTask from "../components/completedTask/CompletedTask";

// custom hook
import { useMediaQuery } from "../hooks/mediaQuery";

export default function Home() {
  const { allTasks, startedTasks, tasksCompleted } = useContext(Context);
  const isRowBased = useMediaQuery("(min-width: 1250px)");

  //media query row/column for task progress
  const styles = {
    container: (isRowBased) => ({
      display: "flex",
      flexDirection: isRowBased ? "row" : "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "1em",
    }),
  };

  //text shown for when no tasks are entered.
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
        <div className="home__noTasksTitle" style={title}>
          <h1>You have 0 tasks created.</h1>
        </div>
      ) : null}

      {/* all tasks */}
      <div className="home__Container" style={styles.container(isRowBased)}>
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
