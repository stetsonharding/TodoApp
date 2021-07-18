import React, { useState } from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [allTasks, setAllTasks] = useState([]);
  const [startedTasks, setStartedTasks] = useState([]);
  const [tasksCompleted, setTasksCompleted] = useState([]);

  //delete Task
  const DeleteTask = (taskItems, id) => {
    taskItems((prevTask) => prevTask.filter((task) => task.id !== id));
  };

  console.log("completed");
  console.log(tasksCompleted);

  return (
    <Context.Provider
      value={{
        allTasks,
        setAllTasks,
        setStartedTasks,
        startedTasks,
        tasksCompleted,
        setTasksCompleted,
        DeleteTask,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export { ContextProvider, Context };
