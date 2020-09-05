import React from "react"
import todosData from "./todosData"
import TodoItem from "./TodoItem"
import "./index.css"
class App extends React.Component
{    
    constructor()
    {
        super()
        this.state={
            todos: todosData
        }
        this.hC=this.hC.bind(this)
    }
    hC(id)
    {
        this.setState(pr=>{
            const upd=pr.todos.map(todo=>{
                if (todo.id===id)
                    todo.completed = !todo.completed
                return todo
            })
            return {
                todos:upd
            }
        })

    }
    render()
    {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item ={item} hC={this.hC}/>)
        return(
            <div className="todo-list">
                {todoItems}
            </div> 

        )
    }
}

export default App