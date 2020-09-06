import React from "react"
import "./index.css"
import "./App.css"
import Nav from "./Nav"
import About from "./About"
import MG from "./MG"
import Todo from "./Todo"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
function App()
{
    return(
        <Router>
            <div className="App">
                <Nav/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/mg" component={MG}/>
                    <Route path="/todo" component={Todo}/>
                </Switch>
            </div>
        </Router>
    )
}

const Home = () =>
(
    <div>
        <h1>
            Home Page
        </h1>
    </div>
);

export default App