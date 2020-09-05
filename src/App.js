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
            age: "",
            gender: "",
            destination: "",
            diet: {
                isVegan: false,
                isVegetarian: false,
                isNonVegetarian: false
            }
        }
        this.hC=this.hC.bind(this)
    }
    hC(event)
    {
        var {name,value,type,checked}=event.target
        type === "checkbox" ? this.setState(pr=>{return{diet:{...pr.diet, [name]:checked}}}) : this.setState({[name]: value})
    }
    
    render()
    {
        return(
            <main>
                <form>
                    <div>
                    <h1>Travelling Form</h1>
                    <input 
                        value={this.state.firstName} 
                        name="firstName" 
                        placeholder="First Name" 
                        onChange={this.hC}
                    />
                    <br/>
                    <input 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.hC}/>
                    <br/>
                    
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={this.state.gender==="Male"}
                            onChange={this.hC}
                        /> Male
                    </label>
                    <br/>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={this.state.gender==="Female"}
                            onChange={this.hC}
                        /> Female
                    </label>
                    <br/>

                    <select
                    value={this.state.destination}
                    onChange={this.hC}
                    name="destination"

                    >
                    <option value="">Please Choose among these...</option>
                    <option value="germany">Germany</option>
                    <option value="paris">Paris</option>
                    <option value="norway">Norway</option>
                    <option value="istanbul">Istanbul</option>

                </select>
                <br/>
                <label>
                        <input
                            type="checkbox"
                            name="isVegan"
                            checked={this.state.isFriendly}
                            onChange={this.hC}
                        /> Vegan?
                    </label>
                <br/>
                <label>
                        <input
                            type="checkbox"
                            name="isVegetarian"
                            checked={this.state.isFriendly}
                            onChange={this.hC}
                        /> Vegetarian?
                    </label>
                <br/>
                <label>
                        <input
                            type="checkbox"
                            name="isNonVegetarian"
                            checked={this.state.isFriendly}
                            onChange={this.hC}
                        /> Non Vegetarian?
                    </label>
                <br/>
                </div>
                <br/>
                <button>Submit</button>
            </form>
            <hr/>
            <h2>Enter Information:</h2>
            <p>Your Name: {this.state.firstName} {this.state.lastName}</p>
            <p>Your Age: {this.state.age}</p>
            <p>Your Gender: {this.state.gender}</p>
            <p>Your Destination: {this.state.destination}</p>
            <p>Your Dietry Restriction: 
                <br/><br/>
                Vegan: {this.state.diet.isVegan?"Yes":"No"}
                <br/>
                Vegetarian: {this.state.diet.isVegetarian?"Yes":"No"}
                <br/>
                Non Vegetarian: {this.state.diet.isNonVegetarian?"Yes":"No"}
                </p>

        </main>

             

        )
    }
}

export default App