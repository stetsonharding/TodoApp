import React from 'react'

import Logo from "../../assets/todoLogo.png"

import "./header.css"


export default function Header(){
return(
    <div className="header container">
        <div className="header-logo">
            <img className="logo" src={Logo} alt="Logo" />
        </div>
    </div>
)
}