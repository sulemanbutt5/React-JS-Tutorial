import React,{Component} from "react"
class App extends Component
{    
    constructor()
    {
        super()
        this.state={
            isLoggedin: false
        }
        this.hC=this.hC.bind(this)
    }
    hC()
    {
        this.setState(pr=>{
            return{
                isLoggedin: !pr.isLoggedin
            }
        })
    }
    
    render()
    {
        let [btext,dtext] = this.state.isLoggedin?["LOG OUT","Logged in"]:["LOG IN","Logged out"]
        return(

            <div>
                <button onClick={this.hC}>{btext}</button>
                <h1>{dtext}</h1>
            </div> 
        )
    }
}

export default App