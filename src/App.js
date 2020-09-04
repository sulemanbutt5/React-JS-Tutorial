import React from "react"
import Conditional from "./Conditional"
class App extends React.Component
{    
    constructor()
    {
        super()
        this.state={
            isLoading: true
        }
    }
    componentDidMount()
    {
        setTimeout(()=>{
            this.setState= {
                isLoading: false
            }
        },1500)
    }
    
    render()
    {
        return(

            <div>
                {this.state.isLoading? 
                <h1>Loading...</h1>:
                <Conditional/>}
            </div> 
        )
    }
}

export default App