import React from 'react'

import Logo from "../../assets/todoLogo.png"
import TaskInput from '../taskInput/TaskInput'
import "./header.css"


export default function Header(){
return(
    <div className="header__container">
        <div className="header__logoContainer">
            <img className="header__logo" src={Logo} alt="Logo" />
        </div>
        <TaskInput/>
    </div>
)
}