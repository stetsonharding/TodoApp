import React, { useState } from 'react'
import Header from "./components/header"

import TodoList from "./components/todolist"
import "./app.css"

export default function App(){
    const [todoList, setTodoList] = useState([])
    return (
    <>
    <Header todoList={todoList} setTodoList={setTodoList} /> 
    <TodoList todoList={todoList} setTodoList={setTodoList} />
    </>
      )
    }
