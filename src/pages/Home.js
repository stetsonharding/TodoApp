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
  };

  return (
    <>
      {/* tasks list */}
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

        {/* started tasks */}
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
