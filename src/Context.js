import React, { useState } from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [allTasks, setAllTasks] = useState([])
  const [startedTasks, setStartedTasks] = useState([])

 
  


  return <Context.Provider value={{allTasks, setAllTasks, setStartedTasks, startedTasks}}>
    {children}</Context.Provider>;
};
export { ContextProvider, Context };
