import React from "react"
function TodoItem(props)
{
    return(
        <div className="todo-item">
            <input className="cb" type="checkbox" checked={props.item.completed}/>
            <p>
                {props.item.text}
            </p>
        </div>
    )
}
export default TodoItem