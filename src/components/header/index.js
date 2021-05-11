import React from 'react'

import Logo from "../../assets/todoLogo.png"
import AddTodo from "../addTodo/addTodo"
import "./header.css"

export default function Header({todoList, setTodoList}){
return(
    <div className="header__container">
        <div className="header__logoContainer">
            <img className="header__logo" src={Logo} alt="Logo" />
        </div>
        <AddTodo todoList={todoList} setTodoList={setTodoList}/>
    </div>
)
}