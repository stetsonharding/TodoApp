import React, {useState}from 'react'
import Header from "./components/header"
import AddTodo from "./components/addTodo/addTodo"
import "./app.css"

export default function App(){
    const [inputListTodo, setInputListTodo] = useState([{todo: ""}])
    return(
        <>
        <container className="app-container">
            <Header />
            <AddTodo inputListTodo={inputListTodo} setInputListTodo={setInputListTodo} />
        
        </container>
        </>
    )
}

