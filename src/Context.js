import React, {useState} from 'react'

const Context = React.createContext();

const ContextProvider = ({children}) => {
    const [inputTodo, setInputTodo] = useState("");
    const [todosSelected, setTodosSelected] = useState([]);
    const [todoList, setTodoList] = useState([])
   


    return(
        <Context.Provider value={{
        inputTodo, 
        setInputTodo, 
        todosSelected, 
        setTodosSelected, 
        todoList, 
        setTodoList,
    
    
    }}
        >
        {children}
        </Context.Provider>
    )
}
export { ContextProvider, Context };
