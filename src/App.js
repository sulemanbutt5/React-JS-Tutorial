import React from "react"
import Jokes from "./Jokes"
function App()
{
    return(
        <div className="">
            <Jokes que="Why did David Hasselhoff change his name to “The Hoff?”" ans="It’s less hassle."/>
            <Jokes que="Why does Waldo wear stripes?" ans="Because he doesn’t want to be spotted."/>
            <Jokes que="" ans="A man enters a pun contest in his local newspaper. He sends in ten puns, hoping at least one of them would win, but unfortunately, no pun in ten did."/>
            <Jokes que="" ans="To be frank, I’d have to change my name."/>
            <Jokes que="Why did the chicken go to prison?" ans="Crimes"/>
        </div> 

    )
}

export default App