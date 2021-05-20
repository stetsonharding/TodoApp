import React, {useState} from 'react'

const Context = React.createContext();

const ContextProvider = ({children}) => {
    const [inputTodo, setInputTodo] = useState("");
    const [checkboxChecked, setCheckboxChecked] = useState([]);
    const [todoList, setTodoList] = useState([])


    return(
        <Context.Provider value={{
        inputTodo, 
        setInputTodo, 
        checkboxChecked, 
        setCheckboxChecked, 
        todoList, 
        setTodoList}}
        >
        {children}
        </Context.Provider>
    )
}
export { ContextProvider, Context };
