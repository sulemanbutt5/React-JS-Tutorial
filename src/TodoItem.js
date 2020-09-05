import React from "react"
function TodoItem(props)
{
    let completedStyle={
        fontStyle: "strong",
        color: "red",
        textDecoration: "line-through"
    }
    return(
        <div className="todo-item">
            <input 
            className="cb" 
            type="checkbox" 
            checked={props.item.completed}
            onChange={()=> props.hC(props.item.id)}
            />
            <h4 style={props.item.completed? completedStyle:null}>{props.item.text}</h4>
        </div>
    )
}
export default TodoItem
