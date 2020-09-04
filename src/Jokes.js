import React from "react"

function Jokes(props)
{
    return(
        <div className= "">
            <h3 style={{display: props.que?"block": "none" /* Or !props.que && "none" */}}>Question: {props.que}</h3>
            <h3 style={{color: !props.que && "purple"}}>Answer: {props.ans}</h3>
            <hr/>
        </div>
    )

}


export default Jokes