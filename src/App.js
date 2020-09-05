import React from "react"
import "./index.css"
class App extends React.Component
{    
    constructor()
    {
        super()
        this.state={
            Loading: null,
            character: {}
        }
    }
    componentDidMount()
    {
        this.setState({Loading:true})
        fetch("https://swapi.dev/api/people/4/").then(response=>response.json()).then(data=>{
            this.setState({
                Loading: false,
                character: data
            })
        })
    }
    render()
    {
        let text=this.state.Loading?"Loading...":this.state.character.name
        return(

            <div>
                <h1>{text}</h1>
            </div> 

        )
    }
}

export default App