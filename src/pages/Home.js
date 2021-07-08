import React, { useContext } from "react";
import { Context } from "../Context";
import TaskProgress from "../components/taskProgress/TaskProgress";
import Task from "../components/task/Task";

export default function Home() {
  const { allTasks, startedTasks } = useContext(Context);

  const styles = {
    display: "flex",
  };

  return (
    <>
      <div className="home__Container" style={styles}>
        {allTasks.length > 0 || startedTasks.length > 0 ? (
          <TaskProgress title="Tasks to start" taskNumber={allTasks.length}>
            {allTasks.map((todo) => (
              <Task todo={todo} />
            ))}
          </TaskProgress>
        ) : null}

        {startedTasks.length > 0 ? (
          <TaskProgress
            title="Tasks in progress"
            taskNumber={startedTasks.length}
          >
            {startedTasks.map((item) => (
              <p>{item.title}</p>
            ))}
          </TaskProgress>
        ) : null}
      </div>
    </>
  );
}
