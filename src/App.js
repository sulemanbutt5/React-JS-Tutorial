import React, {Component} from "react"

class App extends Component
{
    constructor()
    {
        super()
        this.state={
            isLoggedin: false
        }
    }
    render(){    
        let dis
        if(this.state.isLoggedin)
            dis ="in"
        else
            dis ="out"
        return(
            <div>
                <h1>You are currently Logged {dis}</h1>
            </div> 
        )
    }
}

export default App