import React from 'react' 
import TodoList from "../components/todolist"
import InProgress from "../components/inprogress"

export default function Home(){

    const containerStyle={
        display: "flex",
        justifyContent: "space-around",
        marginTop: "1em"
    }

    return(
        <>
        <div className="home__Container" style={containerStyle}>
        <TodoList  />
        <InProgress />
        </div> 
        </>
    )
}