import React from "react"
import "./index.css"
class App extends React.Component
{    
    constructor()
    {
        super()
        this.state={
            firstName: "",
            lastName:"",
            isFriendly: true,
            gender: "",
            textArea: ""
        }
        this.hC=this.hC.bind(this)
    }
    hC(event)
    {
        var {name,value,type,checked}=event.target
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }
    
    render()
    {
        //const fullname=this.state.firstName + " " + this.state.lastName
        return(

            <div>
                <input 
                type="text" 
                value={this.state.firstName} 
                name="firstName" 
                placeholder="First Name" 
                onChange={this.hC}

                />
                <br/>
                <input 
                type="text" 
                value={this.state.lastName} 
                name="lastName" 
                placeholder="Last Name" 
                onChange={this.hC}/>
                <br/>
                <textarea name="textArea" value= {this.state.textArea} onChange={this.hC}/>
                <br/>
                <label>
                    <input
                        type="checkbox"
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.hC}
                    /> Is Friendly?
                </label>
                <br/>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={this.state.gender==="male"}
                        onChange={this.hC}
                    /> Male
                </label>
                <br/>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={this.state.gender==="female"}
                        onChange={this.hC}
                    /> Female
                </label>

                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>You are a {this.state.gender}</h2>
            </div> 

        )
    }
}

export default App