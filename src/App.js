import React from "react"
import todosData from "./todosData"
import TodoItem from "./TodoItem"
import "./index.css"
function App()
{    
    const todoItems = todosData.map(item => <TodoItem key={item.id} item ={item}/>)
    return(
        <div className="todo-list">
            {todoItems}
        </div> 

    )
}

export default App