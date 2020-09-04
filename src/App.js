import React from "react"
//import todosData from "./todosData"
//import TodoItem from "./TodoItem"
//import "./index.css"
class App extends React.Component
{    
    constructor()
    {
        super()
        this.state={
            count: 0
        }
        this.hC=this.hC.bind(this)
    }
    hC()
    {
        this.setState(prevState  => {
                return{
                    count: prevState.count + 1
                }
            }
            )
    }

    render()
    {
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.hC}>Click!</button>
            </div> 

        )
    }
}

export default App